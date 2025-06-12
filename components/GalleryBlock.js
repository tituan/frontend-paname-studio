'use client';

import React from 'react';
import styles from '../styles/GalleryBlock.module.scss';

const images = [
  {
    title: 'Image 1',
    url: '/img/sea-01.webp',
    link: '/page-1',
  },
  {
    title: 'Image 2',
    url: '/img/sea-02.webp',
    link: '/page-2',
  },
  {
    title: 'Image 3',
    url: '/img/sea-03.webp',
    link: '/page-3',
  },
  {
    title: 'Image 4',
    url: '/img/sea-01.webp',
    link: '/page-4',
  },
  {
    title: 'Image 5',
    url: '/img/sea-02.webp',
    link: '/page-5',
  },
  {
    title: 'Image 6',
    url: '/img/sea-02.webp',
    link: '/page-6',
  },
];

export default function ImageGrid() {
  return (
    <section className={styles.imageGrid}>
      {images.map((img, index) => (
        <a
          key={index}
          href={img.link}
          className={styles.imageCard}
          title={img.title}
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${img.url})` }}
          />
        </a>
      ))}
    </section>
  );
}
