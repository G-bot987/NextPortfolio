import React from "react";
import styles from "../../styles/Home.module.css";
import { FooterInterface } from "../../interface/footer.interface";
import Image from "next/image";
import Link from "next/link";

export default function Footer(props: FooterInterface) {
  return (
    <div className={`flex flex-row justify-end py-5`}>
      <ul
        className={`border-solid border-b-1 border-sky-500 border-white bg-transparent inline-flex flex justify-evenly flex-wrap w-60 justify-self-end ${styles.neonLineFooter}`}
      >
        <li>{props.socials}</li>
        <li>
          <a href={props.git?.link}>
            <Image
              src={props.git?.image}
              alt={props.git?.alt}
              width={35}
              height={35}
            />
          </a>
        </li>
        <li>
          <a href={props.linkedin?.link}>
            <Image
              src={props.linkedin?.image}
              alt={props.linkedin?.alt}
              width={35}
              height={35}
            />
          </a>
        </li>
        <li>
          <Link href={props.cv?.cvlink || "undefined"}>
            <Image
              src={props.cv?.pdficon}
              alt={props.cv?.alt}
              width={35}
              height={35}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
