const projectsInfo = [
  {
    name: 'Yochia banker',
    imgCard: '/images/base/speaker_01.png',
    intro: "berkman professor of enterpreneurial leagal studies at harvard Law School",
    description: "Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: 'Kilnam Chon',
    imgCard: '/images/base/speaker_02.png',
    intro: "Professor at Korea Advanced Institute of Science and Technology (KAIST)",
    description: "Developed Asia's first Internet protocol network SDN and led Korea's first private line Internet connection.",
  },
  {
    name: 'SohYeong Noh',
    imgCard: '/images/base/speaker_03.png',
    intro: "Director at Art Center Nabi",
    description: 'The author of Digital Art of Our Time. Opened "Art Center Nabi" in 2000.',
  },
  {
    name: 'Julia Reda',
    imgCard: '/images/base/speaker_04.png',
    intro: "Head of Young Pirates of Europe",
    description: "European integration and online youth participation in politics and democracy are marjor concerns.",
  },
  {
    name: 'Ryan Merkley',
    imgCard: '/images/base/speaker_06.png',
    intro: "Former Mozilla Foundation COO",
    description: "Led open source projects at thr Mozilla Foundation. He has been active in open movements such as open goverenment and open source.",
  },
  {
    name: 'Lila Tretikov',
    imgCard: '/images/base/speaker_05.png',
    intro: "Former Mozilla Foundation COO",
    description: "Led open source projects at thr Mozilla Foundation. He has been active in open movements such as open goverenment and open source.",
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
};

const speaker_heading = createElementAndAppendToParent('div','speaker_heading','spe',speak_section,'');
const speaker_heading_h = createElementAndAppendToParent('div','speaker_heading_h','sp',speaker_heading,'');
const actual_heading = createElementAndAppendToParent('h3','act_heading','act_heading',speaker_heading_h,'Featured Speakers');
const speaker_sec = createElementAndAppendToParent('div','speaker_sec','speaker_sec',speak_section,'');
const speaker_for_desk = createElementAndAppendToParent('div','speaker_for_desk','speaker_for_desk',speaker_sec,'');


const generateCards = (beginIndex, EndIndex) => {
  projectsInfo.slice(beginIndex,EndIndex).forEach((project) => {
    const speakers_all = createElementAndAppendToParent('div','speakers_all','speakers_all',speaker_for_desk,`<img class="speakerimge" src="${project.imgCard}" alt="speaker">`);
    const speaker_content = createElementAndAppendToParent('div','speaker_content','speaker_content', speakers_all,'');
    const speaker_name = createElementAndAppendToParent('h2','speaker_name','speaker_name',speaker_content,`${project.name}`);
    const speaker_intro = createElementAndAppendToParent('h5','speaker_intro','speaker_intro',speaker_content,`${project.intro}`);
    const speaker_description = createElementAndAppendToParent('p','speaker_description','speaker_description',speaker_content,`${project.description}`);

  });
}
const mor = createElementAndAppendToParent('button','more_button','more_button',speaker_sec,'More');

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
