import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {project.host ? (
          <a
            href={project.host}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer">
            Host
          </a>
        ) : null}
        {project.demo ? (
          <a
            href={project.demo}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
        ) : null}
        {project.frontend ? (
          <a
            href={project.frontend}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer">
            FE Repo
          </a>
        ) : null}
        {project.backend ? (
          <a
            href={project.backend}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer">
            BE Repo
          </a>
        ) : null}
      </div>
    </div>
  );
}
