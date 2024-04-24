import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';
import { Photo } from '../App/App.types';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

interface ImageGalleryProps  {
  onImageClick: (photo: Photo) => void; 
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ onImageClick }) => {

  const photos = useSelector((state: RootState) => state.photos.photos);

  return (
    <div>
      <ul className={css.listPhotos}>{photos !== null && Array.isArray(photos) && photos.map((photo) => {
        return <li className={css.listItemPhoto} key={photo.id}  onClick={() => onImageClick(photo)}>
          <ImageCard photo={photo} onClick={onImageClick} />
        </li>
      })}</ul>
    </div>
  )
}

export default ImageGallery