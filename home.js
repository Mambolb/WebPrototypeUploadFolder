/* All visual decisions are inherited from the supplied Figma frames.
   Data-driven merged cells, each represents a maximal contiguous equal-valued group.
   Crucial fix: pointer position identifies the actual ROW even when hovering a merged
   cell that spans several rows. An earlier version used the group's first row instead. */
(() => {
const projects=window.SITE_PROJECTS.slice();
const archive=document.querySelector('#archive');
const canvas=document.querySelector('#home-canvas');
const viewport=document.querySelector('#home-viewport');
const picture=document.querySelector('#preview-image');
const fields=['name','category','medium','context','year'];
const labels={name:'INDEX',category:'CATEGORY',medium:'MEDIUM',context:'CONTEXT',year:'YEAR'};
const css=getComputedStyle(canvas);
const ROW=parseFloat(css.getPropertyValue('--row-height'))||28;
const HEADER=parseFloat(css.getPropertyValue('--header-height'))||28;
let ordered=projects.slice(), sortKey=null, ascending=true, activeId=null, activeRow=-1;
const collator=new Intl.Collator('en',{numeric:true,sensitivity:'base'});
function make(tag,cls,text){let node=document.createElement(tag);node.className=cls;if(text!==undefined)node.textContent=text;return node;}
function groupRuns(field){
  const runs=[];for(let i=0;i<ordered.length;i++){
    const value=String(ordered[i][field]??'');
    const last=runs[runs.length-1];
    if(last && last.value===value && last.end===i-1)last.end=i;
    else runs.push({value,start:i,end:i});
  }return runs;
}
function positionCell(node,from,to){node.style.top=(HEADER+from*ROW)+'px';node.style.height=((to-from+1)*ROW)+'px';node.dataset.start=from;node.dataset.end=to;}
function render(){
  const columns=fields.map(field=>{
    const col=make('div','column');col.dataset.field=field;
    const title=make('button','cell is-header');title.type='button';title.style.top='0px';title.style.height=HEADER+'px';
    title.append(document.createTextNode(labels[field]));
    const arrow=make('span','sort-arrow',field===sortKey ? (ascending?'↑':'↓') : '↓');
    arrow.setAttribute('aria-hidden','true');title.append(arrow);
    title.setAttribute('aria-label','Sort by '+field);
    title.setAttribute('aria-pressed',String(field===sortKey));
    title.addEventListener('click',()=>sortBy(field));col.append(title);
    if(field==='name'){
      ordered.forEach((p,i)=>{
        const node=make('div','cell row-name',p.name);positionCell(node,i,i);node.dataset.projectId=p.id;col.append(node);
      });
    }else{
      groupRuns(field).forEach(g=>{const node=make('div','cell merged',g.value);positionCell(node,g.start,g.end);col.append(node);});
    }return col;
  });
  archive.replaceChildren(...columns);
  archive.style.minHeight=Math.max(968,HEADER+ROW*ordered.length)+'px';
  canvas.style.minHeight=Math.max(1024,56+HEADER+ROW*ordered.length)+'px';
  resize();paint();
}
function paint(){
  for(const n of archive.querySelectorAll('.selected'))n.classList.remove('selected');
  const pos=ordered.findIndex(x=>x.id===activeId);
  if(pos<0){canvas.classList.remove('has-hover','is-light-hover');canvas.removeAttribute('data-preview');picture.removeAttribute('src');return;}
  const p=ordered[pos];
  canvas.dataset.preview=p.id;
  if(p.preview){picture.src=p.preview;picture.style.display='block';}
  else {picture.removeAttribute('src');picture.style.display='none';}
  canvas.classList.add('has-hover');
  canvas.classList.toggle('is-light-hover',p.id==='digital-garden');
  for(const field of fields){
    const col=archive.querySelector('.column[data-field="'+field+'"]');
    for(const cell of col.querySelectorAll('.cell:not(.is-header)')){
      const from=Number(cell.dataset.start),to=Number(cell.dataset.end);
      if(from<=pos && pos<=to){cell.classList.add('selected');break;}
    }
  }
}
function selectByIndex(i){
 if(i<0||i>=ordered.length){clear();return;}
 const id=ordered[i].id;if(activeId===id && activeRow===i)return;
 activeRow=i;activeId=id;paint();
}
function clear(){if(activeId===null)return;activeId=null;activeRow=-1;paint();}
function sortBy(key){
 clear();
 if(key==='name') {sortKey=null;ordered=projects.slice();ascending=true;}
 else{
   ascending=key===sortKey?!ascending:true;sortKey=key;
   ordered=projects.slice().sort((a,b)=>{
      const A=String(a[key]??''), B=String(b[key]??'');
      const cmp=collator.compare(A,B);return cmp?(ascending?cmp:-cmp):projects.indexOf(a)-projects.indexOf(b);
   });
 }
 render();
}
function indexFromEvent(e){
 const rect=archive.getBoundingClientRect();
 const scale=rect.width/1440;
 const y=(e.clientY-rect.top)/scale;
 if(y<HEADER)return -1;
 return Math.floor((y-HEADER)/ROW);
}
archive.addEventListener('pointermove',e=>selectByIndex(indexFromEvent(e)));
archive.addEventListener('pointerleave',clear);
window.addEventListener('blur',clear);
document.addEventListener('visibilitychange',()=>{ if(document.hidden) clear(); });
archive.addEventListener('click',e=>{
 if(e.target.closest('.is-header'))return;
 const i=indexFromEvent(e);const p=ordered[i];if(p?.href)location.assign(p.href);
});
archive.addEventListener('keydown',e=>{
 if(e.target.closest('.is-header'))return;
 if(e.key==='ArrowDown'||e.key==='ArrowUp'){
    e.preventDefault();selectByIndex(Math.min(ordered.length-1,Math.max(0,activeRow+(e.key==='ArrowDown'?1:-1))));
 }else if(e.key==='Enter'&&activeRow>=0){const p=ordered[activeRow];if(p?.href)location.assign(p.href);}
 else if(e.key==='Escape'){clear(); if(document.activeElement === archive) archive.blur();}
});
archive.addEventListener('focusout',e=>{if(!archive.contains(e.relatedTarget))clear();});
// Esc clears the hover regardless of which child currently has keyboard focus.
document.addEventListener('keydown', e => {if(e.key==='Escape'){clear();if(document.activeElement === archive)archive.blur();}});
function resize(){
  // The Figma 1440px-wide index is a proportional layout, not a 1440px max-width.
  // Scale it to the full available browser width, including external displays.
  const availableWidth = document.documentElement.clientWidth || window.innerWidth;
  const s = availableWidth / 1440;
  canvas.style.transform = 'scale(' + s + ')';
  viewport.style.width = availableWidth + 'px';
  viewport.style.height = Math.ceil(Math.max(1024, 56 + HEADER + ROW * ordered.length) * s) + 'px';
}
addEventListener('resize',resize,{passive:true});resize();render();
})();
