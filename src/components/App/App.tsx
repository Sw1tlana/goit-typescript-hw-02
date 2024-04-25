import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGalerry';
import Loader from '../Loader/Loader';
import ErrorMessage from "../ErrorMessage/ErrorMessage"; 
import ImageModal from '../ImageModal/ImageModal';
import css from './App.module.css';

import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { requestPhotosByQuery } from '../../services/api';
import { Photo } from './App.types';
  
function App() {
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null);

 const onSearchQuery = (query: string) => {
   setSearchQuery(query);
   setPage(1);
  };
  
  const perPage = 10;
  
  useEffect(() => {
    if (searchQuery === null) return;   
    async function fetchFotosByQuery() {
        try {
        setIsLoading(true);
        setIsError(false);
        const data = await requestPhotosByQuery({ query: searchQuery!, page: 1, perPage: perPage });
        setPhotos(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFotosByQuery();
  }, [searchQuery]);

    const loadMorePhotos = async () => {
    try {
      setIsLoading(true);
      const nextPage = page + 1; 
      const data = await requestPhotosByQuery({ query: searchQuery!, page: nextPage, perPage });
        
      setPhotos((prevPhotos: Photo[] | null) => {
            if (!prevPhotos) {
                return data;
            }
            return [...prevPhotos, ...data];
      });
      
      setPage(nextPage); 
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
 
  const openModalWithImage = (photo: Photo) => {
    setModalImageUrl(photo.urls.regular); 
  };

  const closeModal = () => {
    setModalImageUrl(null); 
  };

  return (
    <div className={css.container}>
    <SearchBar
        onSubmit={onSearchQuery} /> 
    <Toaster />     
    {photos &&
        <ImageGallery
        photos={photos} 
        onImageClick={openModalWithImage} />}     
    {isLoading && <Loader/>} 
    {isError && <ErrorMessage />}     
      {photos && photos.length > 0 &&
        <LoadMoreBtn
        onClick={loadMorePhotos} />} 
    {modalImageUrl &&
        <ImageModal
        imageUrl={modalImageUrl}
        closeModal={closeModal} />}
    </div>
  )
}

export default App;