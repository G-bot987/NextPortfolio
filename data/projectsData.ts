import githubIMG from "../public/images/icons/business/octocat.png";
import TechBlogIMG from "../public/images/projects/screenshottechblog.png";
import fiveStarLocalIMG from "../public/images/projects/5StarLocal.png";
import employeeManagerIMG from "../public/images/projects/employeemanager.png";
import inquisitiveIMG from "../public/images/projects/inquisitive.png";
import passwordGenIMG from "../public/images/projects/passwordgenerator.png";
import weatherDashIMG from "../public/images/projects/weatherdashboard.png";
const projectsData = [
  {
    header: "Tech Blog",
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
    description: "A group project with  similar functionality to TechBlog",
    links: {
      deployed: "https://vast-journey-10843.herokuapp.com/login",
      repo: "https://github.com/G-bot987/My-5-Star-Local",
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
    description:
      "The most complicated application that I have worked on, A full stack quiz application",
    links: {
      deployed: "https://uk-inquizitive.herokuapp.com/",
      repo: "https://github.com/G-bot987/inQuizitive",
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
];

export default projectsData;
