import typescript from "../public/images/icons/competencies/Typescript.png"
import javascript from "../public/images/icons/competencies/javascript.png";
import node from "../public/images/icons/competencies/Node.png";
import react from "../public/images/icons/competencies/react.png";
import reactNative from "../public/images/icons/competencies/reactNative.png";
import angular from "../public/images/icons/competencies/angular.png"


export const carouselData = {

    slides: [

        {
            type: 'txt',
            mainHeader: "Georgia Hobson",
            subHeader: "A Portfolio",
            technologiesTxt: "Powered by NextJS, TypeScript and Tailwind ",
        },

        {
            type: 'txt',
            mainHeader: 'Experienced with ...'
        },
        {
            type: 'img',
            experience: '1 year',
            img: typescript,
            alt: 'typescript logo'
        },
        {
            type: 'img',
            experience: '2 years',
            img: javascript,
            alt: 'javascript logo'
        },
        {
            type: 'img',
            experience: '2 years',
            img: node,
            alt: 'nodo logo'
        },
        {
            type: 'img',
            experience: '3 months',
            img: angular,
            alt: 'angular logo'
        },
        {
            experience: '2 years',
            type: 'img',
            img: react,
            alt: 'react logo'
        },
        {
            type: 'img',
            experience: '6 months',
            img: reactNative,
            alt: 'react native logo'
        }

    ]


}