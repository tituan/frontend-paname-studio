import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/VideoGallery.module.scss';

const videoList = [
  {
    id: 4,
    src: '/videos/dji-athenes.mp4',
    poster: '/img/poster-athenes.png',
    title: 'Acropolis',
    description: 'Survol de l’Acropole au coucher du soleil.',
    city: 'Athènes',
    year: '2025',
  },
  {
    id: 3,
    src: '/videos/dji-villeneuve.mp4',
    poster: '/img/poster-villeneuve.png',
    title: 'Flamants Roses',
    description: 'Vol au-dessus des flamants roses à Maguelone.',
    city: 'Villeneuve-lès-Maguelone',
    year: '2024',
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
  {
    id: 5,
    src: '/videos/dji-detroit-2.mp4',
    poster: '/img/poster-detroit-2.png',
    title: 'Night Ride',
    description: 'Survol nocturne des lumières de Détroit.',
    city: 'Détroit',
    year: '2025',
  },
  {
    id: 6,
    src: '/videos/dji-toronto.mp4',
    poster: '/img/poster-toronto.png',
    title: 'Higher Toronto',
    description: 'Vue aérienne sur la skyline de Toronto.',
    city: 'Toronto',
    year: '2025',
  },
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [maxItems, setMaxItems] = useState(4);
  const videoRefs = useRef({});

  useEffect(() => {
    const updateItems = () => {
      setMaxItems(window.innerWidth > 1024 ? 6 : 4);
    };

    updateItems(); // Appel initial
    window.addEventListener('resize', updateItems);

    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const isDesktop = () => window.innerWidth > 1024;

  const handlePlay = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].play();
    }
    setActiveVideo(id);
  };

  const handlePause = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
    }
    setActiveVideo(null);
  };

  const handleClick = (id) => {
    if (!isDesktop()) {
      if (activeVideo === id) {
        handlePause(id);
      } else {
        handlePlay(id);
      }
    }
  };

  return (
    <div className={styles.galleryContainer}>
      {videoList.slice(0, maxItems).map((video) => {
        const isActive = activeVideo === video.id;
        return (
          <div
            key={video.id}
            className={styles.videoCard}
            onClick={() => handleClick(video.id)}
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
            {!isActive && <div className={styles.overlay}></div>}
            {isActive && (
              <div className={styles.infoOverlay}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <span>{video.city} - {video.year}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
