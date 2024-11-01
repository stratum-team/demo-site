let currentTheme = 'light';

const toggleTheme = () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme();
  try {
    localStorage.setItem('theme', currentTheme);
  } catch {}
}

const applyTheme = () => {
  console.log('apply theme', currentTheme);
  document.documentElement.setAttribute('data-theme', currentTheme);
}

try {
  if (localStorage.getItem('theme') === 'dark') {
    currentTheme = 'dark';
  }
} catch {}
applyTheme();

const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', toggleTheme, false);
