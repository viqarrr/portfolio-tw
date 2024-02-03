// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
}

//Hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
} )

//Klik di luar hamburger
window.addEventListener('click', function(e) {
  if (e.target !== hamburger && e.target !== navMenu ) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
})

// Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function(e) {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// AOS
const skills = document.querySelectorAll('.skill');
skills.forEach((skill, i) => {
  skill.dataset.aos = 'fade-down';
  skill.dataset.aosDelay = i * 100;
  skill.dataset.aosDuration = 1000;
})

const contacts = document.querySelectorAll('.contact');
contacts.forEach((contact, i) => {
  contact.dataset.aos = 'fade-down';
  contact.dataset.aosDuration = 1000;
  contact.dataset.aosDelay = i * 100;
})

const nav = document.querySelectorAll('.nav');
nav.forEach((li, i) => {
  li.dataset.aos = 'fade-down';
  li.dataset.aosDuration = 1000;
  li.dataset.aosDelay = i * 100;
})

AOS.init({
  duration: 1500,
});