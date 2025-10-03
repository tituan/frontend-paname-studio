// pages/gallery.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styles from "../styles/Gallery.module.scss";

// —— Données d’exemple (pointent vers /public/img/collections/...) ——
const COLLECTIONS = [
  {
    id: "portraits",
    title: "Portraits",
    description: "Regards, expressions et personnalités.",
    cover: "/img/parisjetaime4.png",
    photos: [
      "/img/parisjetaime4.png",
      "/img/parisjetaime2.png",
      "/img/parisjetaime6.png",
      "/img/parisjetaime5.png",
      "/img/parisjetaime7.png",
      "/img/parisjetaime8.png",
      "/img/parisjetaime1.png",
      
    ],
  },
  {
    id: "paysages",
    title: "Paysages",
    description: "Horizons, montagnes et grands espaces.",
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
//   {
//     id: "noirblanc",
//     title: "Noir & Blanc",
//     description: "Contrastes intenses et minimalisme.",
//     cover: "/img/parisjetaime11.png",
//     photos: [
//       "/img/collections/noirblanc/b1.jpg",
//       "/img/collections/noirblanc/b2.jpg",
//       "/img/collections/noirblanc/b3.jpg",
//       "/img/collections/noirblanc/b4.jpg",
//       "/img/collections/noirblanc/b5.jpg",
//       "/img/collections/noirblanc/b6.jpg",
//     ],
//   },
];

export default function GalleryPage() {
  const [activeId, setActiveId] = useState(COLLECTIONS[0].id);
  const active = useMemo(() => COLLECTIONS.find(c => c.id === activeId), [activeId]);

  // { collectionId, index, src }
  const [selected, setSelected] = useState(null);

  // scroll lock quand modale ouverte
  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [selected]);

  // clavier (Esc / ← / →)
  useEffect(() => {
    if (!selected) return;
    const coll = COLLECTIONS.find(c => c.id === selected.collectionId);
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") {
        setSelected(s => {
          const nextIndex = (s.index + 1) % coll.photos.length;
          return { ...s, index: nextIndex, src: coll.photos[nextIndex] };
        });
      }
      if (e.key === "ArrowLeft") {
        setSelected(s => {
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
        <meta name="description" content="Galerie photo avec transitions Framer Motion (shared layout)" />
      </Head>

      <div className={styles.wrap}>
        <header className={styles.header}>
            {/* <Link href="/" className={styles.back} aria-label="Retour à l’accueil">← Accueil</Link> */}

            {/* H1 = élément sémantique principal. 
                Le texte est en "sr-only" pour les lecteurs d’écran,
                l’image du logo est décorative (alt vide + aria-hidden). */}
            <h1 className={styles.siteTitle}>
                <span className={styles.srOnly}>Galerie — Paname Studio</span>
                <Image
                src="/img/image-studio-logo.png"   // <-- ton fichier logo
                alt="Paname Studio images Collection"                         // <-- décoratif (pas de doublon vocal)
                aria-hidden="true"
                width={90}                    // <-- adapte
                height={90}                    // <-- adapte
                priority
                />
            </h1>
        </header>
        <p className={styles.sub}>
            Découvrez mes collections de photos. Chaque section rassemble des images autour d’un même regard pour parcourir simplement mes instants uniques.
        </p>

        

        {/* Carte + grille */}
        <section className={styles.card}>
          <div className={styles.coverCol}>
            <img src={active.cover} alt={`Couverture ${active.title}`} className={styles.coverImg} />
            <div className={styles.coverOverlay}>
              <span className={styles.badge}>Collection</span>
              <h2 className={styles.coverTitle}>{active.title}</h2>
            </div>
          </div>

          <LayoutGroup id="gallery">
            <div className={styles.detailCol}>
              <p className={styles.desc}>{active.description}</p>

              <div className={styles.grid}>
                {active.photos.map((src, i) => {
                  const layoutId = `${active.id}-${i}`;
                  return (
                    <motion.button
                      key={src}
                      layoutId={layoutId}
                      onClick={() => setSelected({ collectionId: active.id, index: i, src })}
                      className={styles.thumb}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.img
                        src={src}
                        alt={`${active.title} ${i + 1}`}
                        layoutId={`img-${layoutId}`}
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
        {/* Onglets */}
        <nav className={styles.tabs} aria-label="Collections">
          {COLLECTIONS.map(c => (
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
      </div>
    </>
  );
}

function Modal({ selected, setSelected }) {
  const coll = COLLECTIONS.find(c => c.id === selected.collectionId);
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

      <button aria-label="Fermer" onClick={() => setSelected(null)} className={`${styles.ctrl} ${styles.close}`}>✕</button>
      <button aria-label="Précédente" onClick={() => go(-1)} className={`${styles.ctrl} ${styles.prev}`}>‹</button>
      <button aria-label="Suivante" onClick={() => go(1)} className={`${styles.ctrl} ${styles.next}`}>›</button>

      <div className={styles.counter}>{selected.index + 1} / {coll.photos.length}</div>
    </motion.div>
  );
}
