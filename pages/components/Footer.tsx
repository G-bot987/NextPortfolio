import React from "react";
import styles from "../../styles/Home.module.css";
import { FooterInterface } from "../../interface/footer.interface";
import Image from "next/image";
import Link from "next/link";

export default function Footer(props: FooterInterface) {
  return (
    <div
      className={`border-solid border-b-1 border-sky-500 border-white min-w-min m-auto mr-0 my-12 bg-transparent ${styles.neonLineFooter}`}
    >
      <ul>
        <li>{props.socials}</li>
        <li>
          <a href={props.git?.link}>
            <Image src={props.git?.image} alt="adfsasdf" />
          </a>
        </li>
        <li>
          <a href={props.linkedin?.link}>
            <Image src={props.linkedin?.image} alt="adfsasdf" />
          </a>
        </li>
        <li>
          <Link href={"images/CV/CV.pdf"}>
            <Image src={props.cv?.pdficon} alt="adfsasdf" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
