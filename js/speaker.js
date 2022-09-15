const projectsInfo = [
  {
    name: 'Yochia banker',
    imgCard: '/images/base/speaker_01.png',
    intro: "berkman professor of enterpreneurial leagal studies at harvard Law School",
    description: "Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: 'Yochia banker',
    imgCard: '/images/base/speaker_01.png',
    intro: "berkman professor of enterpreneurial leagal studies at harvard Law School",
    description: "Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: 'Yochia banker',
    imgCard: '/images/base/speaker_01.png',
    intro: "berkman professor of enterpreneurial leagal studies at harvard Law School",
    description: "Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: 'Yochia banker',
    imgCard: '/images/base/speaker_01.png',
    intro: "berkman professor of enterpreneurial leagal studies at harvard Law School",
    description: "Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: 'Yochia banker',
    imgCard: '/images/base/speaker_01.png',
    intro: "berkman professor of enterpreneurial leagal studies at harvard Law School",
    description: "Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: 'Yochia banker',
    imgCard: '/images/base/speaker_01.png',
    intro: "berkman professor of enterpreneurial leagal studies at harvard Law School",
    description: "Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
];

const speak_section = document.getElementById('headspeaker');

const createElementAndAppendToParent = (newElement, className, id, parent,HTMLtext) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML =  `${HTMLtext}`;
  parent.appendChild(element);
  return element;
}

const speaker_heading = createElementAndAppendToParent('div','speaker_heading','spe',speak_section,'');
const speaker_heading_h = createElementAndAppendToParent('div','speaker_heading_h','sp',speaker_heading,'');
const actual_heading = createElementAndAppendToParent('h3','act_heading','act_heading',speaker_heading_h,'Featured Speakers');

const generateCards = (beginIndex, EndIndex) => {
  projectsInfo.slice(beginIndex,EndIndex).forEach((project) => {
    const speaker_sec = createElementAndAppendToParent('div','speaker_sec','speaker_sec',speak_section,'');
    const speaker_for_desk = createElementAndAppendToParent('div','speaker_for_desk','speaker_for_desk',speaker_sec,'');
    const speakers_all = createElementAndAppendToParent('div','speakers_all','speakers_all',speaker_for_desk,`<img class="speakerimge" src="${project.imgCard}" alt="speaker">`);
    const speaker_content = createElementAndAppendToParent('div','speaker_content','speaker_content', speakers_all,'');
    const speaker_name = createElementAndAppendToParent('h2','speaker_name','speaker_name',speaker_content,`${project.name}`);
    const speaker_intro = createElementAndAppendToParent('h5','speaker_intro','speaker_intro',speaker_content,`${project.intro}`);
    const speaker_description = createElementAndAppendToParent('p','speaker_description','speaker_description',speaker_content,`${project.description}`);
    const mor = createElementAndAppendToParent('button','more_button','more_button',speaker_sec,'More');

  });
}

const screenSmall = window.matchMedia("(max-width:700px)");

if (screenSmall.matches){
  generateCards(0,3);

const morcl = document.querySelector('.more_button');

morcl.addEventListener('click' , function(){
  generateCards(3,6);

  mor.style.display = 'none';
})

}else{
  generateCards(0,6);
}
