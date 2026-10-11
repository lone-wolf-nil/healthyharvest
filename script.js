const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const interest = String(data.get('interest') || 'General enquiry');
  const message = String(data.get('message') || '').trim();
  // Replace this placeholder with the business inbox before launch.
  const businessEmail = 'YOUR_EMAIL@example.com';
  const subject = encodeURIComponent(`Healthy Harvest enquiry — ${interest}`);
  const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`);
  const status = document.getElementById('form-status');
  if (businessEmail.includes('YOUR_EMAIL')) {
    status.textContent = 'Your details are validated. To enable sending, replace YOUR_EMAIL@example.com in script.js with your business email, or connect a form service.';
    status.classList.add('form-warning');
    return;
  }
  status.textContent = 'Opening your email app to send this enquiry.';
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
