(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const menuToggle = $('#menuToggle'), navLinks = $('#navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  $$('#navLinks a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
  }));
  const themeToggle = $('#themeToggle'), themeIcon = $('#themeIcon');
  try { if (localStorage.getItem('portfolio-theme') === 'light') { document.body.classList.add('light-theme'); themeIcon.textContent = '☾'; themeToggle.setAttribute('aria-label', 'Switch to dark theme'); } } catch (_) {}
  themeToggle.addEventListener('click', () => {
    const light = document.body.classList.toggle('light-theme');
    themeIcon.textContent = light ? '☾' : '☼';
    themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    try { localStorage.setItem('portfolio-theme', light ? 'light' : 'dark'); } catch (_) {}
  });
  const roles = ['Python Developer','Aspiring Data Analyst','AI & Data Science Student','Machine Learning Enthusiast'];
  const roleTarget = $('#typedRole'); let roleIndex = 0, charIndex = roles[0].length, deleting = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    function typeRole() {
      const current = roles[roleIndex]; charIndex += deleting ? -1 : 1;
      roleTarget.textContent = current.slice(0, charIndex);
      let delay = deleting ? 42 : 78;
      if (!deleting && charIndex >= current.length) { deleting = true; delay = 1500; }
      else if (deleting && charIndex <= 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 360; }
      window.setTimeout(typeRole, delay);
    }
    window.setTimeout(typeRole, 1800);
  }
  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold:0.12,rootMargin:'0px 0px -30px 0px'});
    revealItems.forEach((el,index)=>{el.style.transitionDelay=`${Math.min(index%4,3)*55}ms`;observer.observe(el);});
  } else revealItems.forEach(el=>el.classList.add('visible'));
  const filterButtons = $$('.filter-btn'), projects = $$('.project-card');
  filterButtons.forEach(button=>button.addEventListener('click',()=>{
    filterButtons.forEach(item=>item.classList.toggle('active',item===button));
    const filter=button.dataset.filter;
    projects.forEach(project=>{const categories=(project.dataset.category||'').split(/\s+/);project.hidden=filter!=='all'&&!categories.includes(filter);});
  }));
  const contactForm=$('#contactForm'), formStatus=$('#formStatus');
  contactForm.addEventListener('submit',event=>{
    event.preventDefault();if(!contactForm.reportValidity())return;
    const data=new FormData(contactForm),name=String(data.get('name')||'').trim(),email=String(data.get('email')||'').trim(),subject=String(data.get('subject')||'').trim(),message=String(data.get('message')||'').trim();
    const body=`Hi Navnath,\n\n${message}\n\nRegards,\n${name}\n${email}`;
    formStatus.textContent='Opening your email app with this message prepared…';
    window.location.href=`mailto:matenavnath667@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(()=>{formStatus.textContent='If your email app did not open, email matenavnath667@gmail.com directly.';},1800);
  });
  const photo = $('#profilePhoto'), photoFallback = $('#photoFallback');
  if (photo && photoFallback) { const showFallback = () => { photo.style.display = 'none'; photoFallback.classList.add('show'); }; photo.addEventListener('error', showFallback, {once:true}); if (!photo.complete || photo.naturalWidth === 0) showFallback(); }
  $('#year').textContent=new Date().getFullYear();
})();