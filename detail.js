/* PORTFOLIO / V2 — viewport-aware, Figma-grounded dedicated pages.
 * - Exactly preserves the Figma geometry at 1440 × 1024.
 * - Hero sizes follow viewport HEIGHT (dvh) on other screens.
 * - Photo/video pixels are uniformly scaled (never nonuniformly stretched).
 * - Text and documentation follow in normal document flow, not one giant canvas.
 * - No new navigation, colors, images or textual content are introduced.
 */
(() => {
  'use strict';
  const slug = document.body.dataset.project;
  const scene = window.PORTFOLIO_SCENES?.[slug];
  const rules = window.PORTFOLIO_PRESENTATION?.[slug];
  const viewport = document.getElementById('project-viewport');
  if (!scene || !rules || !viewport) {
    document.body.textContent = 'Project definition not found';
    return;
  }
  const REF_WIDTH = 1440;
  const heroSource = scene.media.find(m => m.y === 0);
  if (!heroSource) {
    document.body.textContent = 'Project hero definition not found';
    return;
  }
  document.title = scene.title.split('\n')[0];
  const el = (tag, className) => {
    const node = document.createElement(tag);
    node.className = className;
    return node;
  };
  const position = (node, data) => {
    for (const [key, value] of Object.entries(data)) node.style[key] = value;
    return node;
  };
  const fixedPx = n => `${n}px`;

  // Create a complete Figma media frame; its inner artwork keeps the EXACT
  // source coordinates and cover/crop already established in scenes.js.
  function createMedia(m, localY = m.y) {
    const frame = position(el('div','project-media'), {
      left: fixedPx(m.x), top: fixedPx(localY),
      width: fixedPx(m.w), height: fixedPx(m.h),
      background: m.background || '#000'
    });
    const isVideo = m.kind === 'video';
    const item = el(isVideo ? 'video' : 'img','project-image');
    if (isVideo) {
      item.src = m.src;
      if (m.poster) item.poster = m.poster;
      item.muted = true;
      item.loop = true;
      item.autoplay = true;
      if (m.initialTime) { item.addEventListener('loadedmetadata',()=>{ try { item.currentTime=m.initialTime; } catch (_) {} }, {once:true}); }
      item.playsInline = true;
      item.preload = 'metadata';
      item.setAttribute('aria-label','Video from ' + slug + ' project; click to toggle sound');
      item.addEventListener('click', () => {
        item.muted = !item.muted;
        if (item.paused) item.play().catch(() => {});
      });
      item.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault(); item.click();
        }
      });
      item.tabIndex = 0;
    } else {
      item.src = m.src;
      item.alt = 'Documentation of ' + slug;
      item.loading = m.y >= 1500 ? 'lazy' : 'eager';
    }
    position(item, {
      left: fixedPx(m.ix || 0), top: fixedPx(m.iy || 0),
      width: fixedPx(m.iw), height: fixedPx(m.ih)
    });
    frame.append(item);
    return frame;
  }

  const hero = el('section','project-hero');
  hero.setAttribute('aria-label','Project cover');
  hero.style.height = `${rules.heroVh}dvh`;
  if (rules.heroBackground) hero.style.backgroundColor=rules.heroBackground;
  const heroArt = el('div','project-hero-art');
  heroArt.style.height = fixedPx(rules.baseHeroHeight);
  heroArt.append(createMedia(heroSource));
  hero.append(heroArt);
  viewport.append(hero);

  let gap = null;
  if (rules.gapVh > 0) {
    gap = el('div','project-hero-gap');
    gap.style.height = `${rules.gapVh}dvh`;
    viewport.append(gap);
  }

  const extraMedia = scene.media.filter(m => m !== heroSource);
  const galleryOriginY = extraMedia.length
    ? Math.min(...extraMedia.map(m => m.y))
    : scene.height;

  let textSection = null, heading = null, description = null;
  const textBase = scene.text;
  if (textBase) {
    textSection = el('section','project-text-region');
    textSection.setAttribute('aria-label','Project description');
    heading = el('h1','project-heading');
    heading.textContent = scene.title;
    description = el('p','project-description');
    // Preserve original copy/line breaks but make embedded HTTPS URLs actionable.
    const bodyCopy = scene.description || '';
    const urlPattern = /https?:\/\/[^\s<>\"']+/g;
    let cursor = 0;
    for (const match of bodyCopy.matchAll(urlPattern)) {
      const start = match.index;
      description.append(document.createTextNode(bodyCopy.slice(cursor, start)));
      const clean = match[0].replace(/[.,;!?]+$/, '');
      const anchor = document.createElement('a');
      anchor.href = clean;
      anchor.textContent = clean;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      description.append(anchor);
      if (clean.length !== match[0].length) description.append(document.createTextNode(match[0].slice(clean.length)));
      cursor = start + match[0].length;
    }
    description.append(document.createTextNode(bodyCopy.slice(cursor)));
    textSection.append(heading,description);
    viewport.append(textSection);
  }

  let gallery = null, galleryArt = null;
  if (extraMedia.length) {
    gallery = el('section','project-gallery');
    gallery.setAttribute('aria-label','Project documentation');
    galleryArt = el('div','project-gallery-art');
    galleryArt.style.height = fixedPx(scene.height - galleryOriginY);
    for (const media of extraMedia) {
      galleryArt.append(createMedia(media,media.y - galleryOriginY));
    }
    gallery.append(galleryArt);
    viewport.append(gallery);
  }

  function resize() {
    const width = viewport.clientWidth || document.documentElement.clientWidth || innerWidth;
    const k = width / REF_WIDTH;
    const heroHeight = hero.getBoundingClientRect().height;
    const coverScale = rules.fitMode === 'contain'
      ? Math.min(k, heroHeight / rules.baseHeroHeight)
      : Math.max(k, heroHeight / rules.baseHeroHeight);
    // Uniform scale preserves the image's aspect ratio. Overflow is clipped,
    // centered on the original Figma frame rather than resizing the media twice.
    heroArt.style.left = fixedPx((width - REF_WIDTH * coverScale) / 2);
    heroArt.style.top = fixedPx((heroHeight - rules.baseHeroHeight * coverScale) * (rules.focusY ?? 0.5));
    heroArt.style.transform = `scale(${coverScale})`;

    if (textSection) {
      if (width <= 760) {
        // Mobile safety layout: not claimed as a Figma mobile design.
        heading.style.cssText = '';
        description.style.cssText = '';
        textSection.style.height = 'auto';
      } else {
        const t = textBase;
        const place = (node,x,y,w,h) => position(node, {
          left: fixedPx(x*k), top: fixedPx(y*k),
          width: fixedPx(w*k), minHeight: fixedPx(h*k)
        });
        place(heading,t.headingX,t.headingY,t.headingW,t.headingH);
        place(description,t.descriptionX,t.descriptionY,t.descriptionW,t.descriptionH);
        // The black trailing space of short Figma pages is preserved.
        const baseRegionHeight = galleryOriginY - t.y;
        const lowerExtent = Math.max(
          t.headingY*k + heading.scrollHeight,
          t.descriptionY*k + description.scrollHeight
        );
        textSection.style.height = fixedPx(Math.max(baseRegionHeight*k,lowerExtent+32*k));
      }
    }
    if (gallery && galleryArt) {
      galleryArt.style.transform = `scale(${k})`;
      gallery.style.height = fixedPx((scene.height - galleryOriginY)*k);
    }
  }
  addEventListener('resize', resize, {passive:true});
  addEventListener('orientationchange', resize, {passive:true});
  document.fonts?.ready?.then(resize).catch(() => {});
  resize();

  addEventListener('keydown', event => {
    if (event.key === 'Escape' && event.target.tagName !== 'VIDEO') {
      location.assign('../index.html');
    }
  });
})();
