const darkToggle = document.getElementById('toggle-dark');
const lightToggle = document.getElementById('toggle-light');

darkToggle.addEventListener('click', () => {
  document.body.classList.add('dark');
  darkToggle.style.display = "none";
  lightToggle.style.display = "flex";
});

lightToggle.addEventListener('click', () => {
  document.body.classList.remove('dark');
  lightToggle.style.display = "none";
  darkToggle.style.display = "flex";
});

