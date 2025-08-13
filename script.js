
(function(){
  const key='htf-theme', root=document.documentElement;
  const stored=localStorage.getItem(key);
  if(stored){ root.setAttribute('data-theme',stored); }
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    root.setAttribute('data-theme','dark');
  }
  window.toggleTheme=function(){
    const next = root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme',next); localStorage.setItem(key,next);
  };
})();

document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  const printBtn=document.getElementById('printBtn');
  if(printBtn){ printBtn.addEventListener('click',e=>{e.preventDefault(); window.print();}); }
  // Highlight active nav
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topbar a.chip').forEach(a=>{
    const href=a.getAttribute('href');
    if(href && href.split('/').pop()===path) a.classList.add('active');
  });
});
