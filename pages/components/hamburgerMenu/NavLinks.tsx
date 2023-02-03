import React from "react";
import styles from "../../../styles/Home.module.css";
import NavLink from "./Navlink";

function NavTabs(Props: any) {
  const { handlePageChange, currentPage, NavbarData } = Props

  return (
    <ul className={`inline-flex text-base p-8 italic self-end ${styles.neonText}`}>
      {
        NavbarData?.map((link: any, index: number) => (
          <NavLink {...{ link, index, handlePageChange, currentPage }} key={`${index}`} />
        ))

      }
    </ul>
  );
}

export default NavTabs;