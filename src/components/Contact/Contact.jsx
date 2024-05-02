import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:a.loan93@gamil.com">a.loan93@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/andrew-loan/"
            target="_blank"
            rel="noopener noreferrer">
            linkedin.com/andrew-loan
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/aloan93"
            target="_blank"
            rel="noopener noreferrer">
            github.com/aloan93
          </a>
        </li>
      </ul>
    </footer>
  );
}
