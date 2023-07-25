import githubIMG from "../public/images/icons/business/octocat.png";
import TechBlogIMG from "../public/images/projects/screenshottechblog.png";
import fiveStarLocalIMG from "../public/images/projects/5starlocal.png";
import employeeManagerIMG from "../public/images/projects/employeemanager.png";
import inquisitiveIMG from "../public/images/projects/inquisitive.png";
import passwordGenIMG from "../public/images/projects/passwordgenerator.png";
import weatherDashIMG from "../public/images/projects/weatherdashboard.png";
import portfolio from "../public/images/projects/portfolio.png";
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
      summary: "Using a Dungeons and Dragons 5E character card as a template, this application offers a intuitive interface for player character creation.",
      description: "In development since late November 22, if you check out the README, you will see the plan regarding future development. This project stems from my passion for tabletop games and the challenges of running games during the Covid pandemic. Based on my personal experience with platforms like Roll20 and other digital tabletops, I found the user interface and overall design to be generic. The platform Ive been developing takes a more tailored approach to character creation, incorporating languages from my homebrew world, for example. I undertook this project to push myself out of my comfort zone and tackle complex state management issues, UX considerations, database design, and gain more exposure to backend/API development. I specifically chose Next.js instead of React to gain more experience with Next.js and leverage its optimization benefits over React, such as the use of getServerSideProps. MongoDB was selected partly because of its guaranteed free tier and also due to its seamless integration with Next.js. TypeScript offers superior bug prevention compared to JavaScript, and its interface functionality aligns well with a prop-based framework, as well as providing reassurance when dealing with APIs.",
      links: {
        deployed: "https://next-dn-d-character-manager.vercel.app/",
        repo: "https://github.com/G-bot987/NextDnDCharacterManager",
        notes: 'under construction, please see the readme for sprint details and updates',
        deployedTxt: 'deployment',
        repoTxt: 'Git repo!'
      },
      imgs: {
        live: dndcharactermanager,
        alt: "dnd character manager image",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },

    {
      header: "Portfolio",
      showCase: true,
      technologies: [2, 5, 9, 27, 21, 28, 20, 30],
      summary: "A space to flesh out the detail on my CV, show more of personality and showcase my projects, Your already here take a look around!",
      description: "A professional portfolio showcasing my career, skills, and projects. It serves as a digital CV, providing detailed information to potential employers and recruiters. The portfolio includes an overview, background information, my interests outside of work, technologies I am proficient in, ongoing projects, and my current career goals.",
      links: {
        deployed: "https://portfolio-g-bot987.vercel.app/#Projects",
        repo: "https://github.com/G-bot987/NextPortfolio",
        deployedTxt: 'deployment',
        repoTxt: 'Git repo!'
      },
      imgs: {
        live: portfolio,
        alt: "dnd character manager image",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },

    {
      
      header: "Pokedex",
      showCase: false,
      technologies: [12, 14, 16, 17, 18, 19, 8, 28, 12, 14, 23, 20],
      summary:
        "This project marks my first foray into Laravel and PHP development. It served as a technical test for my current role. Despite having no prior experience with PHP, I dedicated one week to complete this project, showcasing my aptitude and eagerness to explore new areas of development. I am pleased with the result achieved within such a short timeframe!",
        description: "This application showcases various functionalities, including authentication, route guarding, API usage (specifically for creating and reading data), database storage, and data filtering. Upon accessing the application, users are directed to a login page. After creating a user account, they can log in and access a Pokedex containing comprehensive Pokemon data. Users have the ability to view specific Pokemon and search for Pokemon based on their types. In future iterations, the application will include more advanced filtering options and additional features such as favoriting Pokemon and adding private notes to specific Pokemon.",

        links: {
        deployed: "http://alluring-kings-canyon-06696-e97f27ca535a.herokuapp.com",
        repo: "https://github.com/G-bot987/Pokedex",
        deployedTxt: 'deployment',
        repoTxt: 'Git repo!'
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
      summary:
        "A demonstration of my front end work using a Figma Design as reference, built using the BEM Methodoly and to AA accessibility standards",
        description: "This project highlights my proficiency in translating high-quality designs into pixel-perfect representations. It is designed with a mobile-first approach, showcasing my meticulous attention to detail. I have incorporated subtle yet effective elements such as animations and hover effects to enhance the user experience. While this project primarily focuses on front-end development, I have also utilized TypeScript and prop passing to render data in a manner that demonstrates the successful integration of a headless CMS through API requests. This showcases not only the visual aspect but also the behavior of a front-end application after receiving data from the CMS.",
        links: {
        deployed: "https://adaptable-three.vercel.app/",
        repo: "https://github.com/G-bot987/adaptable",
        deployedTxt: 'deployment',
        repoTxt: 'Git repo!'
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
      summary:"Two Scripts one for reading data from a Shopify store and another for mutating the stores data",
      description: "This project demonstrates the process of compiling and executing TypeScript in the command line, utilizing interaction with a Shopify store through a GraphQL API. The first script focuses on performing basic mathematical calculations, such as determining sales per item and calculating the total sale value. These calculations provide valuable data for store owners or users engaged in basic marketing operations. The second script takes the compiled data from the first script and utilizes a GraphQL mutation to send the data back to the Shopify store, thereby updating the store's data. This ensures that the store remains up to date and displays relevant marketing information for enhanced user experience and ease of use. By working on this project, I aimed to showcase my proficiency in leveraging TypeScript, interacting with external APIs, and manipulating data to provide actionable insights. It highlights my ability to integrate with third-party platforms and deliver practical solutions that benefit businesses and store owners.",
        links: {
        deployed: "https://drive.google.com/file/d/15txAIc4Z2BPdBKAf3sJxDxTj62HhlTK2/view",
        repo: "https://github.com/G-bot987/cake",
        deployedTxt: 'Demo Video',
        repoTxt: 'Git repo!'
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
      summary: "completed whilst studying for my certificate at Birmingham University. At the time this full stack application daunted me and pushed me to my limits, its crazy how far I've come. Sometimes I just look at this code to see my progress.",
      description: "This application demonstrates the usage of JWT for login functionality, route guarding, and API integration for CRUD operations. It allows users to log in, create posts, comment on posts from other users, as well as edit and delete their own posts or comments. At the time of development, my focus was primarily on getting the functionality working, so I didn't pay as much attention to the user experience (UX). If you're looking for a front-end showcase, I recommend checking out this portfolio or my Autism Society tech test, which are great starting points.",
      links: {
        deployed: "https://dry-eyrie-85153.herokuapp.com/",
        repo: "https://github.com/G-bot987/TechBlog",
        deployedTxt: 'deployment',
        repoTxt: 'Git repo!'
      },
      imgs: {
        live: TechBlogIMG,
        alt: "techblog img",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },
    {
      header: "5 Star Local Group Project",
      technologies: [4, 31, 14,23, 19, 8],
      showCase: false,
      summary: "A group project from my time at Birmingham University a colaborative take on my Tech Blog project",
      description: "my 2nd stage group assignment piece from Birmingham. A full stack application that allows users to log in create and review restraunts. One of earlier projects illustrates colaboration on git conflict resolution and peer review.",
      links: {
        repo: "https://github.com/G-bot987/My-5-Star-Local",
        deployedTxt: 'No app',
        repoTxt: 'Git repo!',
        
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
      summary: "Commandline application for employee management",
      description: "This Node application enables users to efficiently manage and create employee accounts while providing access to department and salary information. Developed during my time at Birmingham University, this project serves as a showcase for the unique skills and experience that may not be evident in my other projects. The application allows users to perform various actions, such as creating and managing employee accounts, as well as gaining insights into departmental structures and salary details. It demonstrates my proficiency in building robust back-end systems and showcases the practical application of my skills within a real-world scenario.  By developing this project, I aimed to further enhance my capabilities and highlight my ability to tackle complex tasks. It serves as a testament to my dedication, problem-solving skills, and commitment to delivering high-quality software solutions.",
      links: {
        deployed:
          "https://drive.google.com/file/d/16ZVj7zfFe_IYRHH2Utjb4Rl4dU076VWi/view",
        repo: "https://github.com/G-bot987/employee-manager-29.08.21",
        deployedTxt: 'Demo Video',
        repoTxt: 'Git repo!'
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
      summary:"The most complicated application that I have worked on, A full stack quiz application",
      description: "This collaborative project, developed during my final stage at Birmingham, showcases various key features. It implements route guarding, JWT interaction, and login functionality using React's state management, resulting in an intuitive user experience. The application retrieves quiz data from an API based on the user's selected parameters. Once a user has chosen a quiz, it is stored in a database for future access and associated with that specific user. Other users can then log in and participate in the quiz. The primary objective of this project was to address the social isolation experienced during the Covid pandemic. The platform offers an interactive alternative to traditional pub quizzes, providing a digital activity for groups of friends to enjoy together. By working on this project, I aimed to create a solution that fosters connection and engagement among people, enabling them to have enjoyable experiences despite physical distancing measures. It highlights my ability to design and develop applications that cater to specific user needs and promote social interaction. ",
      links: {
        repo: "https://github.com/G-bot987/inQuizitive",
        deployedTxt: 'No app',
        repoTxt: 'Git repo!',
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
      summary: "A javascript password generator, that works to user criteria. Developed whilst I was at Birmingham University",
      description: "This project demonstrates the utilization of JavaScript to interact with user input and generate secure passwords based on various parameters. The application allows users to customize their password generation by selecting options such as special characters, letters, capitalization, and more. By leveraging JavaScript, the application dynamically generates passwords that meet the specified criteria, ensuring a high level of security. Users have control over the complexity of their passwords, tailoring them to their individual preferences and security needs. This project highlights the versatility and power of JavaScript in providing a seamless and interactive user experience. It showcases the ability to handle user input, process it, and generate outputs that adhere to specific requirements. By offering this password generation functionality, the application contributes to promoting strong password practices and enhancing overall online security.",
      links: {
        deployed: "https://g-bot987.github.io/20.06.21-password-generator/",
        repo: "https://github.com/G-bot987/20.06.21",
        deployedTxt: 'deployment',
        repoTxt: 'Git repo!'
      },
      imgs: {
        live: passwordGenIMG,
        alt: "Pword Generator IMG",
        git: githubIMG,
        gitAlt: "git icon",
      },
    },
    {
      header: "Weather dashboard",
      technologies: [4, 7,14,28],
      showCase: false,
      summary:"Shows you weather conditions for a selected location, using api calls.",
      description: "This project demonstrates the interaction between a JavaScript application and an API to retrieve and render weather data. By utilizing form data, the application allows users to input their desired location or search criteria to obtain relevant weather information. Through API integration, the application sends the user's input to the weather data API, retrieving the corresponding weather data. The retrieved data is then dynamically rendered in the application, providing the user with up-to-date and accurate weather information. This project showcases the seamless interaction between JavaScript and APIs, illustrating how form data can be utilized to interact with external data sources. By leveraging this functionality, the application empowers users to access and visualize weather data specific to their preferences or desired locations. The project serves as an example of how JavaScript applications can leverage APIs to enhance user experiences by providing real-time and personalized information. It highlights the versatility of JavaScript in handling user input, processing data, and presenting it in a meaningful way.",
      links: {
        deployed: "https://g-bot987.github.io/weatherdashboard/",
        repo: "https://github.com/G-bot987/weatherdashboard",
        deployedTxt: 'deployment',
        repoTxt: 'Git repo!'
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

