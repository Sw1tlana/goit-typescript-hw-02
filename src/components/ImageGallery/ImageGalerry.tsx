import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Photo } from '../App/App.types';

interface ImageGalleryProps {
  photos: Photo[];
  onImageClick: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, onImageClick }) => {
  return (
    <div>
      <ul className={css.listPhotos}>
        {photos.map((photo) => (
          <li key={photo.id} onClick={() => onImageClick(photo)}>
            <ImageCard photo={photo} onClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;