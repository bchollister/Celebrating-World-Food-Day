
document.addEventListener('DOMContentLoaded',()=>{
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topbar a.chip').forEach(a=>{
    const href=a.getAttribute('href'); if(href && href.split('/').pop()===path) a.classList.add('active');
  });
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
});
