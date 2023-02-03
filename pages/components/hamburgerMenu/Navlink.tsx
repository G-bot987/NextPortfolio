import React, { useState } from 'react'

export default function NavLink(Props: any) {
    const { link, handlePageChange, currentPage } = Props
    console.log('link')
    console.log(link)
    console.log('---')



    const [hover, setHover] = useState(false);


    const handleMouseOver = () => {
        setHover(!hover);
    };
    const handleMouseOut = () => {
        setHover(!hover);
    };
    return (
        <li className="pl-4  bg-black rounded-tl-lg rounded-bl-lg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <a
                href={`#${link}`}
                onClick={() => handlePageChange(`${link}`)}
                className={currentPage === `${link}` ? "nav-link active" : "nav-link"}
            >
                {link}
            </a>
        </li>)
}
