import portait from "../public/images/personal/portrait.jpg";
import javascript from "../public/images/icons/competencies/javascript.png";
import node from "../public/images/icons/competencies/Node.png";
import react from "../public/images/icons/competencies/React.png";
import reactNative from "../public/images/icons/competencies/reactNative.png";

export const homeData = {
  carouselSlides: [
    { img: javascript },
    { img: node },
    { img: react },
    { img: reactNative }
  ],

  synopsisProperties: [
    {
      portrait: { IMG: portait, alt: "a portrait of me" },
      header: "Bio",
      txt: " Experienced Full stack web developer. competent with; NextJS, React, React.Native for IOS and Android, TypeScript, JavaScript, Node.JS, MySQL, MongoDB, Docker, IORedis, Redux, Gitbash, Sublime Merge and Deis. My current role has allowed me to develop exceptional diagnostical skills coupled with my strong core programming princples; front end , back end and mobile development roles are well within my comfrot zone. My role as a support developer has given me experiene fixing bugs of varying complexity using technologies such as Insomnia, Redux Devtools and Android Studio.",
      hobbiesHeader: "Outside of Work",
      hobbiesTxt:
        "I like to keep active and run between 20-30km a week, train brazilian jiu jitsu a couple of times a week, play board games such as Dungeons & Dragons, learning Vegan and Vegatarian recipies and write high fantasy fiction.",
    },

    {
      header: "Strengths",
      txt: "Deciphering code bases and diagnositical skills",
    },
    {
      header: "Goals",
      txt: "Enhance my understanding of; TDD, IoRedis and Redux. Intergrate more API's into React/Next projects. implement a useReducer hook in my DnD project. Improve this portfolio.",
    },
    { header: "Based In", txt: "Birmingham" },
    {
      header: "Currently Seeking",
      txt: " I'm currently looking for a fulltime role, contracting opportunities starting at 35,000 PA & Freelance opportunities. In terms of long term development I'm looking for Penetration testing learning/development, insight into digital Marketing stratagies/ Further education to supplement my Marketing degree.",
    },
  ],
};
