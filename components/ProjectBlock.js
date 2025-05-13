import Link from 'next/link';
import styles from '../styles/Project.module.scss';

const projects = [
  {
    title: 'Kiddiz',
    imageUrl: '/img/projet-01.webp',
    link: '#',
  },
  {
    title: 'Capsol',
    imageUrl: '/img/projet-02.webp',
    link: 'https://be-capsol.com',
  },
];

export default function ProjectBlock() {
  return (
    <div className={styles.projectContainer}>
      {projects.map((project, index) => (
        <Link href={project.link} key={index} passHref>
          <a
            className={styles.projectCard}
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-label={`Projet ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <span className={styles.projectTitle}>{project.title}</span> */}
          </a>
        </Link>
      ))}
    </div>
  );
}


