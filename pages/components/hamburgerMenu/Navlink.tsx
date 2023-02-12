import React, { useState } from 'react'
import Link from "next/link";
import styles from "../../../styles/Home.module.css";



export default function NavLink(Props: any) {
    const { link, handlePageChange, currentPage, index } = Props
    const [hover, setHover] = useState(false);


    const handleMouseOver = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };

    return (
        <li className={`px-2  bg-black rounded-full ${styles.rainbowglow}  ${hover ? `` : ``}`}
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
