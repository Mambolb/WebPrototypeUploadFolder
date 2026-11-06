/* CodeExport_ProtV6.rtf: PageIRLGlitchHuntingV3 / V3Hover.
 * 10 Figma frames, 5 images per row at 220 px and 20 px gutters.
 * A0007 appears twice as separate photo frames in this Figma export.
 */
(() => {
  'use strict';
  const photos = [
    ['A0001','irl-01.png',293],
    ['A0002','irl-02.png',293],
    ['A0003','irl-03.png',169],
    ['A0004','irl-04.png',220],
    ['A0005','irl-05.png',293],
    ['A0006','irl-06.jpg',293],
    ['A0007','irl-07.png',165],
    ['A0007','irl-08.png',293],
    ['A0008','irl-extra-02.png',293],
    ['A0009','irl-09.png',165]
  ];
  const gallery=document.getElementById('irl-gallery');
  const catalogue=document.getElementById('irl-catalogue');
  const canvas=document.getElementById('irl-canvas');
  const viewport=document.getElementById('irl-viewport');
  const cards=[];
  let selected=null;
  for (const [id, src, height] of photos) {
    const card=document.createElement('button'); card.type='button';card.className='irl-photo';
    card.dataset.photoId=id;
    card.setAttribute('aria-label','Select photo '+id);
    const img=document.createElement('img'); img.src='../assets/'+src;
    img.alt='IRL glitch hunting '+id;img.width=220;img.height=height;
    img.style.width='220px';img.style.height=height+'px'; img.loading='lazy';img.decoding='async';
    const label=document.createElement('span'); label.className='irl-caption';label.textContent=id;
    card.append(img,label);gallery.append(card);cards.push(card);
    card.addEventListener('pointerenter',()=>select(id));
    card.addEventListener('focus',()=>select(id));
    card.addEventListener('click',()=>select(id===selected&&matchMedia('(pointer:coarse)').matches?null:id));
  }
  // Kept as hidden data link for the previous table interaction. No catalogue
  // grid is rendered because V6's exported PhotoLayout contains none.
  if(catalogue) catalogue.hidden=true;
  function select(id) {
    selected=id;
    cards.forEach(c=>{
      const active=id!==null&&c.dataset.photoId===id;
      c.classList.toggle('selected',active);c.setAttribute('aria-pressed',String(active));
    });
  }
  gallery.addEventListener('pointerleave',()=>select(null));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape') {
      select(null);
      if(document.activeElement instanceof HTMLElement && document.activeElement.matches('.irl-photo')) document.activeElement.blur();
    }
  });
  function resize(){
    if(innerWidth<=760){canvas.style.transform='none';viewport.style.width='100%';viewport.style.height='auto';return;}
    const s=(document.documentElement.clientWidth||innerWidth)/1440;
    canvas.style.transform=`scale(${s})`;
    viewport.style.width=(1440*s)+'px';
    viewport.style.height=Math.ceil(1239*s)+'px';
  }
  addEventListener('resize',resize,{passive:true});resize();select(null);
})();
