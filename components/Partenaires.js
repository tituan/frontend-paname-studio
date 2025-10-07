// components/PartnersSection.jsx
import Image from "next/image";
import styles from "../styles/Partenaires.module.scss";

export default function PartnersSection() {
  return (
    <section className={styles.partners} aria-labelledby="partners-title">
      <div className={styles.container}>
        <h2 id="partners-title" className={styles.title}>
          Nos <span>PARTENAIRES</span>
        </h2>

        <p className={styles.subtitle}>
         Nos partenaires en création digitale et solutions web
        </p>

        <div className={styles.logos} role="list" aria-label="Logos de partenaires Paname Studio">
          <div role="listitem" className={styles.logoItem}>
            <Image
              src="/img/logo-clichy-urban-home-black.png"
              alt="Partenaire Clichy Urban Home - logement AirBnB"
              width={180}
              height={60}
              priority
            />
          </div>
          <div role="listitem" className={styles.logoItem}>
            <Image
              src="/img/capsol-black.png"
              alt="Partenaire Capsol bureau d'études photovoltaïques Montpellier"
              width={180}
              height={60}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
