import { useState } from 'react';
import { Modal, Button } from 'antd';
import styles from '../styles/Footer.module.scss';

export default function ModalMentions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Button
        type="link"
        onClick={showModal}
        className={styles.mentionsButton}
      >
        Mentions légales
      </Button>

      <Modal
        title="Mentions légales"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        <p><strong>Paname Studio</strong> – Studio créatif digital - Paris, France</p>
        <p><strong>Hébergement :</strong> Vercel Inc</p>
        <h3><strong>Propriété intellectuelle</strong></h3>
        <p>Tous les contenus présents sur ce site sont la propriété exclusive de Paname Studio.</p>
        <p>Toute reproduction sans autorisation est interdite.</p>
        <h3><strong>Responsabilité</strong></h3>
        <p>Paname Studio décline toute responsabilité liée à l’utilisation des informations diffusées sur ce site.</p>
      </Modal>
    </>
  );
}
