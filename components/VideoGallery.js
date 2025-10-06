import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/VideoGallery.module.scss';

const videoList = [
  // {
  //   id: 4,
  //   src: '/videos/dji-athenes.mp4',
  //   poster: '/img/poster-athenes.png',
  //   title: 'Acropolis',
  //   description: 'Survol de l’Acropole au coucher du soleil.',
  //   city: 'Athènes',
  //   year: '2025',
  // },
  {
    id: 3,
    src: '/videos/dji-villeneuve.mp4',
    poster: '/img/poster-villeneuve.png',
    title: 'Flamants Roses',
    description: 'Survol au-dessus des flamants roses.',
    city: 'Maguelone',
    year: '2025',
  },
  {
    id: 2,
    src: '/videos/dji-paris.mp4',
    poster: '/img/poster-paris.png',
    title: 'Couleurs Paris',
    description: 'Vol au-dessus de la Seine, La Défense en lumière.',
    city: 'Paris',
    year: '2025',
  },
  {
    id: 1,
    src: '/videos/dji-meze.mp4',
    poster: '/img/poster-meze.png',
    title: 'Étang de Thau',
    description: 'Reflets de fin de journée.',
    city: 'Mèze',
    year: '2025',
  },
  // {
  //   id: 5,
  //   src: '/videos/dji-detroit-2.mp4',
  //   poster: '/img/poster-detroit-2.png',
  //   title: 'Night Ride',
  //   description: 'Survol nocturne des lumières de Détroit.',
  //   city: 'Détroit',
  //   year: '2025',
  // },
  // {
  //   id: 6,
  //   src: '/videos/dji-toronto.mp4',
  //   poster: '/img/poster-toronto.png',
  //   title: 'Higher Toronto',
  //   description: 'Vue aérienne sur la skyline de Toronto.',
  //   city: 'Toronto',
  //   year: '2025',
  // },
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);
  const videoRefs = useRef({});
  const modalVideoRef = useRef(null); // ref pour la vidéo de la modal

  const isDesktop = () => window.innerWidth > 1024;

  const handlePlay = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].play();
    }
  };

  const handlePause = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
    }
  };

  const openModal = (video) => {
    setModalVideo(video);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  // Fonction de fermeture avec pause
  const handleOverlayClick = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    closeModal();
  };

  return (
    <div className={styles.galleryVideo}>
    <div className={styles.galleryContent}>
      <h2 className={styles.galleryLogo}>
        <Image
          src="/img/video-studio-logo-trans.png"
          alt="Video Studio — logo"
          width={140}
          height={140}
          priority
          className={styles.logoImg}
        />
      </h2>
    </div>
      <div className={styles.galleryContainer}>
        {videoList.map((video) => (
          <div
            key={video.id}
            className={styles.videoCard}
            onClick={() => openModal(video)}
            onMouseEnter={() => isDesktop() && handlePlay(video.id)}
            onMouseLeave={() => isDesktop() && handlePause(video.id)}
          >
            <video
              ref={(el) => (videoRefs.current[video.id] = el)}
              src={video.src}
              poster={video.poster}
              muted
              loop
              playsInline
              className={styles.video}
            />
            <div className={styles.overlay}></div>
            <div className={styles.infoOverlay}>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <span>{video.city} - {video.year}</span>
            </div>
          </div>
        ))}
      </div>

      {modalVideo && (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleOverlayClick}>×</button>
            <video
              ref={modalVideoRef}
              src={modalVideo.src}
              autoPlay
              controls
              className={styles.modalVideo}
            />
            <div className={styles.modalInfo}>
              <h3>{modalVideo.title}</h3>
              <p>{modalVideo.description}</p>
              <span>{modalVideo.city} - {modalVideo.year}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}