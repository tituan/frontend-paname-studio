"use client";
import styles from "../styles/ColorPicker.module.scss";

export default function ColorPicker({ onColorChange }) {
  // Ici tu choisis les couleurs disponibles
  const colors = [
    "#C0D8D8",  // ton bleu pastel existant
    "#F9E6E6",   // corail pâle
    
    // "#F2C6C2",  // rose poudré
    // "#D3C0F2",  // lavande pastel
    "#F2E2C0",  // jaune sable doux
    "#BFD8C0",  // vert sauge pastel
    
    
  ];

  return (
    <div className={styles.colorPickerWrapper}>
      {colors.map((color) => (
        <div
          key={color}
          className={styles.colorSquare}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
}
