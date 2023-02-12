import React from "react";
import styles from "../../../styles/Home.module.css";
import NavLink from "./Navlink";

interface NavlinksInterface {
  NavbarData: String[],
}

function NavTabs(Props: any) {

  const { handlePageChange, currentPage, NavbarData } = Props

  return (
    <ul className={`inline-flex text-base p-4 italic self-end justify-between min-w-[90%]`}>
      {
        NavbarData?.map((link: any, index: number) => (
          <NavLink {...{ link, index, handlePageChange, currentPage }} key={`${index}`} />
        ))

      }
    </ul>
  );
}

export default NavTabs;