// import { useEffect, useState } from 'react';
// import styles from '../styles/Home.module.scss';
// import Image from 'next/image';
// import HeaderVideo from './HeaderVideo';
// import GalleryBlock from './GalleryBlock';
// import ProjectBlock from './ProjectBlock';
// import Footer from './Footer';


// function Home() {
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const sections = document.querySelectorAll('section');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     sections.forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const handleNavClick = (e, id) => {
//     e.preventDefault();
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className={styles.pageContainer}>
//       <div className={styles.mapWrapper}>
//         <nav className={styles.sidebar}>
//           {['<>', 'projets', 'images', '</>'].map((id) => (
//             <a
//               key={id}
//               href={`#${id}`}
//               onClick={(e) => handleNavClick(e, id)}
//               className={
//                 activeSection === id ? styles.activeLink : styles.link
//               }
//             >
//               {id.charAt(0).toUpperCase() + id.slice(1)}
//             </a>
//           ))}
//         </nav>

//         <div className={styles.scrollContainer}>
//           {/* Section 1 : vidéo + texte */}
//           <section id="<>" className={styles.fullscreenSection}>
//             <div className={styles.mainContainer}>
//               <div className={styles.contentOverlay}>
//                 <h1 className={styles.title}>
//                   <Image
//                     src="/img/paname-studio-logo-01.png"
//                     alt="Paname Studio - création digitale - Paris"
//                     width={921}
//                     height={468}
//                     className={styles.panameStudioLogo}
//                   />
//                 </h1>
//                 <h2 className={styles.subTitle}>Création digitale</h2>
//               </div>
//               <HeaderVideo />
//             </div>
//           </section>

//           <section id="projets" className={styles.fullscreenSection}>
//             <ProjectBlock />
//           </section>

//           <section id="images" className={styles.fullscreenSection}>
//             <GalleryBlock />
//           </section>

//           <section id="</>" className={styles.fullscreenSection}>
//             <Footer />
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import HeaderVideo from './HeaderVideo';
import GalleryBlock from './GalleryBlock';
import ProjectBlock from './ProjectBlock';
import Footer from './Footer';

function Home() {
  const [activeSection, setActiveSection] = useState('');
  const fadeRefs = useRef([]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fadeRefs.current.forEach((ref) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.classList.add(styles.fadeInVisible);
            observer.unobserve(ref);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
    });
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.mapWrapper}>
        <nav className={styles.sidebar}>
          {['<>', 'projets', 'images', '</>'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={
                activeSection === id ? styles.activeLink : styles.link
              }
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <div className={styles.scrollContainer}>
          {/* Section 1 : vidéo + texte */}
          <section id="<>" className={styles.fullscreenSection}>
            <div className={styles.mainContainer}>
              <div className={styles.contentOverlay}>
                <h1 className={styles.title}>
                  <Image
                    src="/img/paname-studio-logo-01.png"
                    alt="Paname Studio - création digitale - Paris"
                    width={921}
                    height={468}
                    className={styles.panameStudioLogo}
                  />
                </h1>
                <h2 className={styles.subTitle}>Création digitale</h2>
              </div>
              <HeaderVideo />
            </div>
          </section>

          <section
            id="projets"
            className={`${styles.fullscreenSection} ${styles.fadeInSection}`}
            ref={(el) => (fadeRefs.current[0] = el)}
          >
            <ProjectBlock />
          </section>

          <section
            id="images"
            className={`${styles.fullscreenSection} ${styles.fadeInSection}`}
            ref={(el) => (fadeRefs.current[1] = el)}
          >
            <GalleryBlock />
          </section>

          <section
            id="</>"
            className={`${styles.fullscreenSection} ${styles.fadeInSection}`}
            ref={(el) => (fadeRefs.current[2] = el)}
          >
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
