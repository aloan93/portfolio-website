import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Andrew</h1>
        <p className={styles.description}>
          I'm a junior full-stack developer and Northcoders graduate experienced
          in React, NodeJS, Python and C#. Reach out if you'd like to learn
          more!
        </p>
        <a href="mailto:a.loan93@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}
