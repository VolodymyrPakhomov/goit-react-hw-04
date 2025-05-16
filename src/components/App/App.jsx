import { useState } from 'react';
import './App.css';
import Searchbar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { fetchImages } from '../../image-api';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1);
    setImages([]);

    toast('Good picture request', { icon: '👏' });
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImage() {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await fetchImages(query, currentPage);
        setImages((prevImage) => {
          return [...prevImage, ...data.results];
        });
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
        toast.error('This is an error!');
      } finally {
        setIsLoading(false);
      }
    }
    getImage();
  }, [query, currentPage]);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const hasImages = images.length > 0;
  const isLastPage = currentPage === totalPages - 1;

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {hasImages && !isLoading && !isLastPage && (
        <LoadMoreBtn onClick={incrementPage} />
      )}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}

      <Toaster position="top-right" />
    </div>
  );
}
export default App;
