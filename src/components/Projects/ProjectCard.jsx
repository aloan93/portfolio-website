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
        {project.demo ? (
          <a href={project.demo} className={styles.link}>
            Demo
          </a>
        ) : null}
        {project.frontend ? (
          <a href={project.frontend} className={styles.link}>
            FE Repo
          </a>
        ) : null}
        {project.backend ? (
          <a href={project.backend} className={styles.link}>
            BE Repo
          </a>
        ) : null}
      </div>
    </div>
  );
}
