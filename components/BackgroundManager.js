"use client";
import { motion } from "framer-motion";
import styles from "../styles/Background.module.scss";

export default function BackgroundManager({ color }) {
  return (
    <motion.div
      className={styles.backgroundWrapper}
      style={{
        background: `linear-gradient(to top, #ffffff 0%, #ffffff 20%, ${color} 100%)`,
      }}
    >
      <div className={styles.conicGradient} />
    </motion.div>
  );
}