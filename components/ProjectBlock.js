import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Project.module.scss';

const projects = [
  {
    title: 'Kiddiz',
    description: 'Application mobile de revente de jouets et articles de puériculture',
    imageUrl: '/img/projet-01.webp',
    link: '#',
    objectPosition: 'center 40%',
  },
  {
    title: 'Capsol',
    description: 'Bureau d’étude en photovoltaïque',
    imageUrl: '/img/projet-02.webp',
    link: 'https://be-capsol.com',
    objectPosition: 'center 30%',
  },
];

export default function ProjectBlock() {
  return (
    <div className={styles.projectContainer}>
      {projects.map((project, index) => (
        <Link href={project.link} key={index} passHref>
          <a
            className={styles.projectCard}
            aria-label={`Projet ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.projectImageWrapper}>
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={500}
                className={styles.projectImage}
                style={{ objectPosition: project.objectPosition || 'center 50%' }}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}


