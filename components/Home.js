import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import HeaderVideo from './HeaderVideo';
import GalleryBlock from './GalleryBlock';
import Footer from './Footer';
import VideoGallery from './VideoGallery';
import { motion } from 'framer-motion';
import BackgroundManager from '../components/BackgroundManager';
import ColorPicker from '../components/ColorPicker';
import GalleryGrid from '../components/GalleryGrid';

function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [bgColor, setBgColor] = useState('#C0D8D8'); // couleur initiale

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
      { threshold: 0.05 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
      {/* <BackgroundManager color={bgColor} /> */}
      {/* <ColorPicker onColorChange={setBgColor} /> */}

      <div className={styles.mapWrapper}>
        <nav className={styles.sidebar}>
          {['<>', 'img', 'vid', '</>'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={activeSection === id ? styles.activeLink : styles.link}
            >
              {id}
            </a>
          ))}
        </nav>

        <div className={styles.scrollContainer}>

          {/* HEADER FULLSCREEN NORMAL */}
          <section id="<>" className={styles.fullscreenSection}>
            <div className={styles.mainContainer}>
              <div className={styles.contentOverlay}>
                <h1 className={styles.title}>
                  <Image
                    src="/img/logo-paname.svg"
                    alt="Paname Studio"
                    width={921}
                    height={468}
                    priority
                    className={styles.panameStudioLogo}
                  />
                </h1>
                <h2 className={styles.subTitle}>Création digitale</h2>
              </div>
              <HeaderVideo />
            </div>
          </section>

          <motion.section
            id="img"
            className={styles.normalSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <GalleryBlock />
          </motion.section>

          <motion.section
            id="vid"
            className={styles.normalSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <VideoGallery />
          </motion.section>

          {/* <motion.section
            id="amour"
            className={styles.normalSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <GalleryGrid />
          </motion.section> */}

          <motion.section
            id="</>"
            className={`${styles.normalSection} ${styles.sectionFooter}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Footer />
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Home;
