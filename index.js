import { EmailSection } from './EmailSection/index.js';

  const nadpis = document.createElement('h1');
  nadpis.classList.add('h1');
  nadpis.innerHTML = 'Příchozí pošta';
  document.querySelector('#app').append(nadpis);

  document.querySelector('#app').append(
    EmailSection({ heading: 'Nepřečtené', folder: 'unread',  }),
    EmailSection({ heading: 'Přečtené', folder: 'read', }),
  );

