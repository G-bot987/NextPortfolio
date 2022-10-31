import React from "react";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}>
      <h1>Home Page</h1>
      {/* <img src={Georgia} className="Georgia" alt="its me" /> */}

      <h2>Bio</h2>
      <p>
        Experienced Full stack web developer. competent with; NextJS,
        TypeScript, React.js, ReactNative for IOS and Android, Node.js,
        JavaScript, MySQL and MongoDB, Git. My current role has allowed me to
        develop exceptional diagnostical skills coupled with my strong core
        programming principles; front end, back end and mobile development roles
        are well within my comfort zone. My role as a Support developer has
        given me experience fixing bugs of varying complexity using technologies
        such as Insomnia, Redux Devtools and Android Studio.
      </p>
      <h2>strengths</h2>
      <p>this is strenghts txt</p>

      <h2>goals</h2>
      <p>i am goals text</p>

      <h2>based in:</h2>
      <p>based in text</p>

      <h2>currently seeking </h2>
      <p>currently seeking text</p>
    </div>
  );
}
