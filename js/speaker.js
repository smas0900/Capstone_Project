const projectsInfo = [
  {
    name: 'Yochia banker',
    imgCard: '/images/base/speaker_01.png',
    intro: 'berkman professor of enterpreneurial leagal studies at harvard Law School',
    description: 'Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    name: 'Kilnam Chon',
    imgCard: '/images/base/speaker_02.png',
    intro: 'Professor at Korea Advanced Institute of Science and Technology (KAIST)',
    description: 'Developed Asias first Internet protocol network SDN and led Korea first private line Internet connection.',
  },
  {
    name: 'SohYeong Noh',
    imgCard: '/images/base/speaker_03.png',
    intro: 'Director at Art Center Nabi',
    description: 'The author of Digital Art of Our Time. Opened "Art Center Nabi" in 2000.',
  },
  {
    name: 'Julia Reda',
    imgCard: '/images/base/speaker_04.png',
    intro: 'Head of Young Pirates of Europe',
    description: 'European integration and online youth participation in politics and democracy are marjor concerns.',
  },
  {
    name: 'Ryan Merkley',
    imgCard: '/images/base/speaker_06.png',
    intro: 'Former Mozilla Foundation COO',
    description: 'Led open source projects at thr Mozilla Foundation. He has been active in open movements such as open goverenment and open source.',
  },
  {
    name: 'Lila Tretikov',
    imgCard: '/images/base/speaker_05.png',
    intro: 'Former Mozilla Foundation COO',
    description: 'Led open source projects at thr Mozilla Foundation. He has been active in open movements such as open goverenment and open source.',
  },
];

const speaksection = document.getElementById('headspeaker');

const createElementAndAppendToParent = (newElement, className, id, parent, HTMLtext) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML = `${HTMLtext}`;
  parent.appendChild(element);
  return element;
};

const speakerheading = createElementAndAppendToParent('div', 'speakerheading', 'spe', speaksection, '');
const speakerheadingh = createElementAndAppendToParent('div', 'speakerheadingh', 'sp', speakerheading, '');
const actualheading = createElementAndAppendToParent('h3', 'act_heading', 'act_heading', speakerheadingh, 'Featured Speakers');
const speakersec = createElementAndAppendToParent('div', 'speakersec', 'speakersec', speaksection, '');
const speakerfordesk = createElementAndAppendToParent('div', 'speakerfordesk', 'speakerfordesk', speakersec, '');

const generateCards = (beginIndex, EndIndex) => {
  projectsInfo.slice(beginIndex, EndIndex).forEach((project) => {
    const speakersall = createElementAndAppendToParent('div', 'speakersall', 'speakersall', speakerfordesk, `<img class="speakerimge" src="${project.imgCard}" alt="speaker">`);
    const speakercontent = createElementAndAppendToParent('div', 'speakercontent', 'speakercontent', speakersall, '');
    const speakername = createElementAndAppendToParent('h2', 'speakername', 'speakername', speakercontent, `${project.name}`);
    const speakerintro = createElementAndAppendToParent('h5', 'speakerintro', 'speakerintro', speakercontent, `${project.intro}`);
    const speakerdescription = createElementAndAppendToParent('p', 'speakerdescription', 'speakerdescription', speakercontent, `${project.description}`);
  });
};
const mor = createElementAndAppendToParent('button', 'more_button', 'more_button', speakersec, 'More');

const screenSmall = window.matchMedia('(max-width:700px)');

if (screenSmall.matches) {
  generateCards(0, 3);

  const morcl = document.querySelector('.more_button');

  morcl.addEventListener('click', function () {
      generateCards(3, 6);

    mor.style.display = 'none';
  });
} else {
  generateCards(0, 6);
}
