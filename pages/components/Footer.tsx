import React from "react";
import styles from "../../styles/Home.module.css";
import { FooterInterface } from "../../interface/footer.interface";
import Image from "next/image";
export default function Footer(props: FooterInterface) {
  console.log("props");
  console.log(props);
  console.log("---");
  return (
    <div
      className={`border-solid border-b-1 border-sky-500 border-white min-w-min m-auto mr-0 my-12 bg-transparent ${styles.neonLineFooter}`}
    >
      <ul>
        <li>{props.socials}</li>
        <li>
          <a href={props.link}>
            <Image src={props.image} alt="adfsasdf" />
          </a>
        </li>
        <li>
          <a href={props.gitlink}>
            <Image src={props.gitimage} alt="adfsasdf" />
          </a>
        </li>
      </ul>
    </div>
  );
}
