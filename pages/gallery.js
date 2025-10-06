// pages/gallery.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styles from "../styles/Gallery.module.scss";

// —— Données d’exemple (pointent vers /public/...) ——
const COLLECTIONS = [
  {
    id: "city13",
    title: "PARIS 13",
    subTitle:"Olympiades",
    description: "Un soir d’été, promenade au cœur des Olympiades, ensemble emblématique d’Italie 13 (1969-1977) imaginé par l’architecte Michel Holley. Passerelles, dalles et esplanades composent une micro-ville où se dressent les tours Sapporo, Mexico, Athènes, Helsinki, Cortina et Tokyo, auxquelles répondent Londres et Anvers, puis les barres Rome, Grenoble et Squaw Valley. Entre la galerie Mercure, le centre Oslo et les équipements de quartier, cette série capture les lignes, la lumière et la vie qui animent ce paysage moderniste.",
    year: 2025,
    cover: "/img/series/city13/city13-10-min.jpg",
    photos: [
      "/img/series/city13/city13-01-min.webp",
      "/img/series/city13/city13-02-min.webp",
      "/img/series/city13/city13-03-min.webp",
      "/img/series/city13/city13-04-min.webp",
      "/img/series/city13/city13-05-min.webp",
      "/img/series/city13/city13-06-min.webp",
      "/img/series/city13/city13-07-min.webp",
      "/img/series/city13/city13-09-min.jpg",
      "/img/series/city13/city13-10-min.jpg",
      "/img/series/city13/city13-11-min.jpg",
      // "/img/series/city13/city13-08-min.webp",
    ],
  },
  {
    id: "paysages",
    title: "Paysages",
    subTitle:"Olympiades",
    description: "Horizons, montagnes et grands espaces.",
    year: 2023,
    cover: "/img/parisjetaime24.png",
    photos: [
      "/img/parisjetaime10.jpg",
      "/img/parisjetaime23.webp",
      "/img/parisjetaime20.webp",
      "/img/parisjetaime11.jpg",
      "/img/parisjetaime13.png",
      "/img/parisjetaime22.webp",
      "/img/parisjetaime24.png",
    ],
  },
  {
    id: "noirblanc",
    title: "Noir & Blanc",
    subTitle:"Olympiades",
    description: "Contrastes intenses et minimalisme.",
    year: 2022,
    cover: "/img/parisjetaime13.png",
    photos: [
      "/img/parisjetaime10.jpg",
      "/img/parisjetaime23.webp",
      "/img/parisjetaime20.webp",
      "/img/parisjetaime11.jpg",
      "/img/parisjetaime13.png",
      "/img/parisjetaime22.webp",
      "/img/parisjetaime24.png",
    ],
  },
];

export default function GalleryPage() {
  const [activeId, setActiveId] = useState(COLLECTIONS[0].id);
  const active = useMemo(
    () => COLLECTIONS.find((c) => c.id === activeId),
    [activeId]
  );

  // { collectionId, index, src }
  const [selected, setSelected] = useState(null);

  // scroll lock quand modale ouverte
  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selected]);

  // clavier (Esc / ← / →)
  useEffect(() => {
    if (!selected) return;
    const coll = COLLECTIONS.find((c) => c.id === selected.collectionId);
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") {
        setSelected((s) => {
          const nextIndex = (s.index + 1) % coll.photos.length;
          return { ...s, index: nextIndex, src: coll.photos[nextIndex] };
        });
      }
      if (e.key === "ArrowLeft") {
        setSelected((s) => {
          const nextIndex = (s.index - 1 + coll.photos.length) % coll.photos.length;
          return { ...s, index: nextIndex, src: coll.photos[nextIndex] };
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
      <Head>
        <title>Galerie — Paname Studio</title>
        <meta
          name="description"
          content="Galerie photo Paname Studio : séries thématiques (portraits, paysages, noir & blanc). Navigation immersive avec ouverture plein écran."
        />
      </Head>

      <div className={styles.wrap}>
        <header className={styles.header}>
          {/* <Link href="/" className={styles.back} aria-label="Retour à l’accueil">← Accueil</Link> */}

          {/* H1 principal : texte sr-only + logo décoratif */}
          <h1 className={styles.siteTitle}>
            <span className={styles.srOnly}>Galerie — Paname Studio</span>
            <Image
              src="/img/image-studio-logo.png"
              alt="Paname Studio images Collection"
              aria-hidden="true"
              width={90}
              height={90}
              priority
            />
          </h1>
        </header>

        <p className={styles.sub}>
          Découvrez mes collections de photos. Chaque section rassemble des images autour d’un
          même regard pour parcourir simplement mes instants uniques.
        </p>

        <nav className={styles.tabs} aria-label="Collections">
          {COLLECTIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`${styles.tab} ${activeId === c.id ? styles.tabActive : ""}`}
              aria-pressed={activeId === c.id}
            >
              {c.title}
            </button>
          ))}
        </nav>

        {/* Carte + grille */}
        <section className={styles.card}>
          <div className={styles.coverCol}>
            <img
              src={active.cover}
              alt={`Couverture ${active.title}`}
              className={styles.coverImg}
              loading="eager"
            />
            <div className={styles.coverOverlay}>
              <span className={styles.badge}>Série</span>
              <h2 className={styles.coverTitle}>{active.title}</h2>
            </div>
          </div>

          <LayoutGroup id="gallery">
            <div className={styles.detailCol}>
              {/* Description retirée d'ici pour l'afficher sous la carte */}

              <div className={styles.grid}>
                {active.photos.map((src, i) => {
                  const layoutId = `${active.id}-${i}`;
                  return (
                    <motion.button
                      key={src}
                      layoutId={layoutId}
                      onClick={() =>
                        setSelected({ collectionId: active.id, index: i, src })
                      }
                      className={styles.thumb}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.img
                        src={src}
                        alt={`${active.title} ${i + 1}`}
                        layoutId={`img-${layoutId}`}
                        loading={i < 6 ? "eager" : "lazy"}
                      />
                    </motion.button>
                  );
                })}
              </div>

              <div className={styles.meta}>
                {active.photos.length} photos · {active.title}
              </div>
            </div>

            {/* Modale avec shared layout pour TOUTES les collections */}
            <AnimatePresence>
              {selected && (
                <>
                  <motion.div
                    key="backdrop"
                    className={styles.backdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelected(null)}
                  />
                  <Modal selected={selected} setSelected={setSelected} />
                </>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </section>

        {/* ———————————— Titre + Description sous la carte (section styles.card) ———————————— */}
        <section className={styles.seriesFooter}>
          <h2 className={styles.seriesFooterTitle}>
            {active.subTitle}
            {active.year ? ` — ${active.year}` : ""}
          </h2>
          <p className={styles.seriesFooterDesc}>{active.description}</p>
        </section>
        {/* /Onglets */}
      </div>
    </>
  );
}

function Modal({ selected, setSelected }) {
  const coll = COLLECTIONS.find((c) => c.id === selected.collectionId);
  const layoutId = `${selected.collectionId}-${selected.index}`;

  const go = (dir) => {
    const len = coll.photos.length;
    const nextIndex = (selected.index + dir + len) % len;
    setSelected({ ...selected, index: nextIndex, src: coll.photos[nextIndex] });
  };

  return (
    <motion.div key="modal" layoutId={layoutId} className={styles.modal}>
      <motion.div layout className={styles.modalFrame}>
        <motion.img
          src={selected.src}
          alt="Photo"
          layoutId={`img-${layoutId}`}
          className={styles.modalImg}
        />
      </motion.div>

      <button
        aria-label="Fermer"
        onClick={() => setSelected(null)}
        className={`${styles.ctrl} ${styles.close}`}
      >
        ✕
      </button>
      <button
        aria-label="Précédente"
        onClick={() => go(-1)}
        className={`${styles.ctrl} ${styles.prev}`}
      >
        ‹
      </button>
      <button
        aria-label="Suivante"
        onClick={() => go(1)}
        className={`${styles.ctrl} ${styles.next}`}
      >
        ›
      </button>

      <div className={styles.counter}>
        {selected.index + 1} / {coll.photos.length}
      </div>
    </motion.div>
  );
}
