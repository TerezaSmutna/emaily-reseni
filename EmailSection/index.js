import { Email } from '../Email/index.js';

export const EmailSection = (props) => {
  const { heading, emails = [], folder } = props;

  const element = document.createElement('section');
  element.classList.add('inbox');
  element.innerHTML = `
  <h2>${heading}</h2>
  <div class="emails" id=${folder}></div>
`;

  if (emails.length === 0) {
    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(EmailSection({
          heading: heading,
          folder: folder,
          emails: data
        }))
      })
  }
  else {

  const emailsElement = element.querySelector('.emails');
  emailsElement.append(...emails.emails.map((item) => Email(item)));
  }
  return element;
}
