import githubIMG from "../public/images/icons/business/octocat.png";
import TechBlogIMG from "../public/images/projects/screenshottechblog.png";
import fiveStarLocalIMG from "../public/images/projects/5starlocal.png";
import employeeManagerIMG from "../public/images/projects/employeemanager.png";
import inquisitiveIMG from "../public/images/projects/inquisitive.png";
import passwordGenIMG from "../public/images/projects/passwordgenerator.png";
import weatherDashIMG from "../public/images/projects/weatherdashboard.png";
import dndcharactermanager from "../public/images/projects/dndcharactermanager.png";
import adaptable from "../public/images/projects/adaptable.png";
import cake from "../public/images/projects/cake.png"


export const projectsData = {

  technologies: [{ key: 1, tec: 'react' }, { key: 2, tec: 'next' }, { key: 3, tec: 'mongodb' }, { key: 4, tec: 'javascript' }, { key: 5, tec: 'typescript' }, { key: 6, tec: 'redux' }, { key: 7, tec: 'node' }, { key: 8, tec: 'mysql' }, { key: 9, tec: 'tailwind' }, { key: 10, tec: 'express' }, { key: 11, tec: 'sequelize' }, { key: 12, tec: 'Tec Test' }, { key: 13, tec: 'SCSS' }, { key: 14, tec: 'API' }, { key: 15, tec: 'GraphQL' }],

  projects: [
    {
      
      header: "DnD Character Manager",
      showCase: true,
      technologies: [2, 3, 5, 6, 9],
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
      
      header: "Autism Society, Front End Tec Test Showcase",
      showCase: true,
      technologies: [2, 5, 12, 13],
      description:
        "A demonstration of my front end work taken from a figma using BEM methodology and SCSS",
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
      technologies: [5, 7,12, 14, 15],
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
      technologies: [4, 7, 11, 8],
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
      technologies: [4],
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
      technologies: [4, 7],
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
      technologies: [1, 4, 9, 3],
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
      technologies: [4, 7],
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
      technologies: [4, 7],
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

