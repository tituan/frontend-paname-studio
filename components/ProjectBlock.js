// import Link from 'next/link';
// import styles from '../styles/Project.module.scss';

// export default function ProjectBlock() {
//   return (
//     <div className={styles.projectContainer}>
//     {[1, 2].map((num) => (
//         <Link href={`/projects/project${num}`} key={num}>
//             <a
//             className={styles.projectCard}
//             style={{
//                 backgroundImage: `url(/img/projet-0${num}.png)`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//             >
//             {/* <span className={styles.projectTitle}>Projet {num}</span> */}
//             </a>
//         </Link>
//         ))}
//     </div>
//   );
// }

import Link from 'next/link';
import styles from '../styles/Project.module.scss';

const projects = [
  {
    title: 'Kiddiz',
    imageUrl: '/img/projet-01.png',
    link: '#',
  },
  {
    title: 'Capsol',
    imageUrl: '/img/projet-02.png',
    link: 'https://be-capsol.com',
  },
  // Tu peux ajouter autant d’objets que tu veux ici
];

export default function ProjectBlock() {
  return (
    <div className={styles.projectContainer}>
      {projects.map((project, index) => (
        <Link href={project.link} key={index}>
          <a
            className={styles.projectCard}
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            target='_blank'
          >
            {/* <span className={styles.projectTitle}>{project.title}</span> */}
          </a>
        </Link>
      ))}
    </div>
  );
}

