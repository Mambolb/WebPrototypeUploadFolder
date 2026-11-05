/* Catalogue interaction, generated from Figma Stable/Hover comparison.
   Stable: all cells black. Hover: selected image+caption and matching catalogue row white.
   Photo 2 (A0002) is the visual reference from V6Hover, but the same rule works for all nine photos.
 */
(() => {
  const files = [
    ['A0001','irl-01.png',204,272,'960 × 1280'],
    ['A0002','irl-02.png',205,273,'960 × 1280'],
    ['A0003','irl-03.png',220,165,'1280 × 960'],
    ['A0004','irl-04.png',205,155,'1160 × 1160'],
    ['A0005','irl-05.png',220,293,'960 × 1280'],
    ['A0006','irl-06.jpg',220,293,'960 × 1280'],
    ['A0007','irl-07.png',220,165,'1280 × 960'],
    ['A0008','irl-08.png',220,293,'960 × 1280'],
    ['A0009','irl-09.png',220,165,'1280 × 960']
  ];
  const gallery = document.querySelector('#irl-gallery');
  const catalogue = document.querySelector('#irl-catalogue');
  const canvas = document.querySelector('#irl-canvas');
  const viewport = document.querySelector('#irl-viewport');
  let selected = null;
  const buttons = [];
  function setActive(index) {
    selected = index;
    for (const [i, nodes] of buttons.entries()) {
      const on = i === index;
      for (const n of nodes) {
        n.classList.toggle('selected',on);
        n.setAttribute('aria-pressed',String(on));
      }
    }
  }
  function linked(node, i) {
    node.addEventListener('pointerenter', () => setActive(i));
    node.addEventListener('focus', () => setActive(i));
    node.addEventListener('click', () => setActive(selected === i && matchMedia('(pointer:coarse)').matches ? null : i));
  }
  files.forEach(([id,src,w,h,resolution],i) => {
    const card=document.createElement('button');card.className='irl-photo';card.type='button';
    const img=document.createElement('img');img.src='../assets/'+src;img.alt='IRL glitch hunting photo '+id;
    img.style.width=w+'px';img.style.height=h+'px';img.loading='lazy';img.decoding='async';
    const label=document.createElement('figcaption');label.textContent=id;
    card.append(img,label);gallery.append(card);
    const row=document.createElement('button');row.className='irl-catalogue-row';row.type='button';
    const index=document.createElement('span');index.className='index';index.textContent=id;
    const meta=document.createElement('span');meta.className='resolution';meta.textContent=resolution;
    row.append(index,meta);catalogue.append(row);
    linked(card,i);linked(row,i);buttons.push([card,row]);
  });
  const reset=e=>{ if (!e.relatedTarget || (!gallery.contains(e.relatedTarget)&&!catalogue.contains(e.relatedTarget))) setActive(null); };
  gallery.addEventListener('pointerleave', reset);catalogue.addEventListener('pointerleave', reset);
  document.addEventListener('keydown',e=>{if(e.key==='Escape') {setActive(null);if(e.target===document.body) location.href='../index.html';}});
  function resize(){
    if(innerWidth<=760){canvas.style.transform='none';viewport.style.width='100%';viewport.style.height='auto';return;}
    const s=(document.documentElement.clientWidth || innerWidth)/1440;
    canvas.style.transform=`scale(${s})`;viewport.style.width=(1440*s)+'px';viewport.style.height=Math.ceil(1239*s)+'px';
  }
  addEventListener('resize',resize,{passive:true});resize();setActive(null);
})();
