import githubIMG from "../public/images/icons/business/octocat.png";
import TechBlogIMG from "../public/images/projects/screenshottechblog.png";
import fiveStarLocalIMG from "../public/images/projects/5starlocal.png";
import employeeManagerIMG from "../public/images/projects/employeemanager.png";
import inquisitiveIMG from "../public/images/projects/inquisitive.png";
import passwordGenIMG from "../public/images/projects/passwordgenerator.png";
import weatherDashIMG from "../public/images/projects/weatherdashboard.png";
import dndcharactermanager from "../public/images/projects/dndcharactermanager.png";
import adaptable from "../public/images/projects/adaptable.png";
import cake from "../public/images/projects/cake.png";
import pokedex from "../public/images/projects/pokedex.png"


export const projectsData = {

  projectSearch:{ txt: 'Project search options', params: ['Technology', 'Recent Projects', 'Project Types']},


  technologies: [{ key: 1, option: 'react' }, { key: 2, option: 'next' }, { key: 3, option: 'mongodb' }, { key: 4, option: 'javascript' }, { key: 5, option: 'typescript' }, { key: 6, option: 'redux' }, { key: 7, option: 'node' }, { key: 8, option: 'mysql' }, { key: 9, option: 'tailwind' }, { key: 10, option: 'express' }, { key: 11, option: 'sequelize' }, 
   { key: 13, option: 'SCSS' },  { key: 15, option: 'GraphQL' }, {key:16, option: 'PHP'}, {key:17, option: 'Laravel'}, {key:18, option: 'heroku'}, {key:19, option: 'bootstrap'}, { key: 26, option: 'Shopify' }, {key:30, option: 'vercel'}],

  recentProject: [{key: 20, option: 'Yes'}],

  projectType:[{ key: 21, option: 'Front End' }, { key: 22, option: 'Back End' }, { key: 23, option: 'Full Stack' }, { key: 24, option: 'UX' }, { key: 25, option: 'Built from Figma Design' }, { key: 14, option: 'API' }, { key: 12, option: 'Tec Test' }, { key: 27, option: 'Passion Project' }, { key: 28, option: 'Hosted' }, { key: 29, option: 'Demo Video' }, {key: 31 , option:'colaborative project'}, {key: 32, option: 'BEM'}],

  projects: [
    {
      
      header: "DnD Character Manager",
      showCase: true,
      technologies: [2, 3, 5, 6, 9, 27, 23, 14, 28, 20, 30],
      description:
        "Using a Dungeons and Dragons 5E character card as a template, this application offers a intuitive interface for player character creation. This project is currently in production but will be integrated with a backend for storing and managing user data.",
      links: {
        deployed: "https://next-dn-d-character-manager.vercel.app/",
        repo: "https://github.com/G-bot987/NextDnDCharacterManager",
        notes: 'under construction, please see the readme for sprint details and updates'
      },
      imgs: {
        live: dndcharactermanager,
        alt: "dnd character manager image",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },

    {
      
      header: "Pokedex",
      showCase: false,
      technologies: [12, 14, 16, 17, 18, 19, 8, 28, 12, 14, 23, 20],
      description:
        "My first Laravel application with a MySQL database for storing user and pokemon data. This application demonstrates; Authentication, route guarding, API usuage specifically create and read, database storage and data filtering. This project directs users to a login page after creating a user they can then log in a view a Pokedex with all pokemon data. Users can then view specific Pokemon and search for Pokemon based on type. Future iterations will have a more sophisticated filter functionality as well as the ability to favourite pokemon and add private notes to specific Pokemon",
      links: {
        deployed: "http://alluring-kings-canyon-06696-e97f27ca535a.herokuapp.com",
        repo: "https://github.com/G-bot987/Pokedex",
      },
      imgs: {
        live: pokedex,
        alt: "PokeDex",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },

    {
      
      header: "Autism Society, Front End Tec Test Showcase",
      showCase: true,
      technologies: [2, 5, 12, 13, 30, 20, 21, 24, 25, 28, 32],
      description:
        "A demonstration of my front end work taken from a Figma using SCSS, the BEM Methodoly and built to AA accessibility standards",
      links: {
        deployed: "https://adaptable-three.vercel.app/",
        repo: "https://github.com/G-bot987/adaptable",
        notes: 'under construction, please see the readme for sprint details and updates'
      },
      imgs: {
        live: adaptable,
        alt: "Autism Service image",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },


    {
      
      header: "Shopify Tec Test, A GraphQL API Showcase",
      showCase: true,
      technologies: [5, 7,12, 14, 15, 20, 22,29, 26],
      description:
        "Two Scripts one for reading data from a Shopify store and another for mutating the stores data",
      links: {
        deployed: "https://drive.google.com/file/d/15txAIc4Z2BPdBKAf3sJxDxTj62HhlTK2/view",
        repo: "https://github.com/G-bot987/cake",
        notes: 'under construction, please see the readme for sprint details and updates'
      },
      imgs: {
        live: cake,
        alt: "node script execution",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },


    {
      header: "Tech Blog",
      technologies: [4, 7, 11, 8, 18, 28, 23],
      showCase: false,
      description:
        "A difficult and time consuming project, with both a working front and backend and login logic using, sequlizes, handlebars, cookies and api calls",
      links: {
        deployed: "https://dry-eyrie-85153.herokuapp.com/",
        repo: "https://github.com/G-bot987/TechBlog",
      },
      imgs: {
        live: TechBlogIMG,
        alt: "techblog img",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },
    {
      header: "5StarLocal Group Project",
      technologies: [4, 31, 14,23],
      showCase: false,
      description: "A group project with  similar functionality to TechBlog",
      links: {
        deployed: "https://vast-journey-10843.herokuapp.com/login",
        repo: "https://github.com/G-bot987/My-5-Star-Local",
        notes: 'deployment closed, was hosted on heroku while free hosting offered. Redeployment pending!'
      },
      imgs: {
        live: fiveStarLocalIMG,
        alt: "5 star local img",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },
    {
      header: "Employee Manager",
      technologies: [4, 7, 29, 22],
      showCase: false,
      description:
        "A backend commandline application with employee management application",
      links: {
        deployed:
          "https://drive.google.com/file/d/16ZVj7zfFe_IYRHH2Utjb4Rl4dU076VWi/view",
        repo: "https://github.com/G-bot987/employee-manager-29.08.21",
      },
      imgs: {
        live: employeeManagerIMG,
        alt: "employee manager img",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },
    {
      header: "Inquistive Group Project",
      technologies: [1, 4, 9, 3,31,14,23],
      showCase: false,
      description:
        "The most complicated application that I have worked on, A full stack quiz application",
      links: {
        deployed: "https://uk-inquizitive.herokuapp.com/",
        repo: "https://github.com/G-bot987/inQuizitive",
        notes: 'deployment closed, was hosted on heroku while free hosting offered. Redeployment pending!'
      },
      imgs: {
        live: inquisitiveIMG,
        alt: "Inquistive img",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },
    {
      header: "Password Generator",
      technologies: [4, 7,28],
      showCase: false,
      description: "A javascript password generator, that works to user criteria",
      links: {
        deployed: "https://g-bot987.github.io/20.06.21-password-generator/",

        repo: "https://github.com/G-bot987/20.06.21",
      },
      imgs: {
        live: passwordGenIMG,
        alt: "Pword Generator IMG",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },
    {
      header: "Weatherdashboard",
      technologies: [4, 7,14,28],
      showCase: false,
      description:
        "Shows you weather conditions for a selected location, using api calls",
      links: {
        deployed: "https://g-bot987.github.io/weatherdashboard/",
        repo: "https://github.com/G-bot987/weatherdashboard",
      },
      imgs: {
        live: weatherDashIMG,
        alt: "weather dashboard img",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },
  ]
}

