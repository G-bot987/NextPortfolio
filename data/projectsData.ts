import githubIMG from "../public/images/icons/business/octocat.png";
import TechBlogIMG from "../public/images/projects/screenshottechblog.png";
import fiveStarLocalIMG from "../public/images/projects/5starlocal.png";
import employeeManagerIMG from "../public/images/projects/employeemanager.png";
import inquisitiveIMG from "../public/images/projects/inquisitive.png";
import passwordGenIMG from "../public/images/projects/passwordgenerator.png";
import weatherDashIMG from "../public/images/projects/weatherdashboard.png";
import dndcharactermanager from "../public/images/projects/dndcharactermanager.png";

export const projectsData = {

  technologies: [{ key: 1, tec: 'react' }, { key: 2, tec: 'next' }, { key: 3, tec: 'mongodb' }, { key: 4, tec: 'javascript' }, { key: 5, tec: 'typescript' }, { key: 6, tec: 'redux' }, { key: 7, tec: 'node' }, { key: 8, tec: 'mysql' }, { key: 9, tec: 'tailwind' }, { key: 10, tec: 'express' }, { key: 11, tec: 'sequelize' }],

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
        alt: "weather dashboard img",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },
    {
      header: "Tech Blog",
      technologies: [4, 7, 11, 8],

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

