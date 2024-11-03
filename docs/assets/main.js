let currentTheme = 'light';

const toggleTheme = () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme();
  try {
    localStorage.setItem('theme', currentTheme);
  } catch {}
}

const applyTheme = () => {
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

// window.stratum_global = { listeners: [ (e) => console.log(e) ]};

import('/demo-site/assets/stratum.js').then(({ stratumService, TagKey }) => {
  const pageId = document.body.getAttribute('data-stratum-page-id');
  const key = pageId ? TagKey.VIEW_POST : TagKey.VIEW_LISTING;
  stratumService.publish(key, { replacements: { pageId } });
});
