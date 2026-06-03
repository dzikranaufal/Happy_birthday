// Bottom Nav active state
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(function(item) {
  item.addEventListener('click', function() {
    navItems.forEach(function(el) { el.classList.remove('active'); });
    this.classList.add('active');
  });
});

const headerSticky = document.getElementById('headerSticky');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    headerSticky.classList.add('scrolled');
  } else {
    headerSticky.classList.remove('scrolled');
  }
});

const toast = document.getElementById('toast');
const menuServices = document.querySelectorAll('.menu-service');

function showToast(message) {
  toast.textContent = message;

  toast.classList.add('show');

  clearTimeout(window.toastTimeout);

  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

menuServices.forEach(service => {
  service.addEventListener('click', () => {

    const label = service.dataset.label;
    const isLink = service.dataset.link;

    if (isLink === 'true') {
      window.location.href = 'goride.html';
      return;
    }

    showToast(`${label}`);
  });
});