import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); // Необхідно для доступності

function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  const { urls, alt_description, user, likes, description } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeBtn} onClick={onClose}>
        ✖
      </button>
      <img src={urls.regular} alt={alt_description} className={styles.image} />
      <div className={styles.info}>
        <p>
          <strong>Description:</strong> {description || 'N/A'}
        </p>
        <p>
          <strong>Author:</strong> {user.name}
        </p>
        <p>
          <strong>Likes:</strong> {likes}
        </p>
      </div>
    </Modal>
  );
}

export default ImageModal;
