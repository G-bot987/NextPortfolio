import React from "react";
import { NavlinksInterface } from "../../../interface/navbar.interface";
import styles from "../../../styles/Home.module.css";
import NavLink from "./Navlink";

function NavTabs(Props: NavlinksInterface) {
  const { handlePageChange, currentPage, NavbarData } = Props;

  return (
    <ul
      className={`inline-flex text-base p-4 uppercase font-bold self-end justify-between min-w-[90%] font-tektur`}
    >
      {NavbarData?.map((link: any, index: number) => (
        <NavLink
          {...{ link, index, handlePageChange, currentPage }}
          key={`${index}`}
        />
      ))}
    </ul>
  );
}

export default NavTabs;