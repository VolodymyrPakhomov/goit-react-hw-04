import { useEffect } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root'); // Для доступности

function ImageModal({ isOpen, onClose, image }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!image) return null;

  const { urls, alt_description, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeBtn} onClick={onClose}>
        ✖
      </button>
      <img src={urls.regular} alt={alt_description} className={css.image} />
      <div className={css.info}>
        <p>
          <strong>Likes:</strong> {likes}
        </p>
      </div>
    </Modal>
  );
}

export default ImageModal;
