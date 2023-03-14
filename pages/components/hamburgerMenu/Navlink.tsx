import React, { useState } from 'react'
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { NavLinkInterface } from '../../../interface/navbar.interface';




export default function NavLink(Props: NavLinkInterface) {

    const { link, handlePageChange, currentPage, index } = Props
    const [hover, setHover] = useState(false);


    const handleMouseOver = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };

    return (
        <li className={`px-2  bg-black rounded-none text-2xl uppercase max-w-fit text-black z-[1] ${styles.rainbowglow} ${index === 0 ? `rounded-tl-lg rounded-bl-lg` : ``} ${index === 4 ? `rounded-tr-lg rounded-br-lg` : ``} ${hover ? `` : ``}`}
        >

            {link !== 'CV' && <a
                href={`#${link}`}
                onClick={() => handlePageChange(`${link}`)}
                className={currentPage === `${link}` ? "nav-link active" : "nav-link"}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}

            >
                {link}
            </a>}
            {link === 'CV' &&
                <Link href={"images/CV/CV.pdf"} legacyBehavior>
                    <a
                        href="#Cv"
                        onClick={() => handlePageChange("Cv")}
                        className={currentPage === "CV" ? "nav-link active" : "nav-link"}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        CV
                    </a>

                </Link>
            }
        </li>)
}
