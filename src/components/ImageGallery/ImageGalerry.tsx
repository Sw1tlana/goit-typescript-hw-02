import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';
import { Photo } from '../App/App.types';

interface GalleryList {
  photos: Photo[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<GalleryList> = ({ photos, onImageClick }) => {
  return (
    <div>
      <ul className={css.listPhotos}>{photos !== null && Array.isArray(photos) && photos.map((photo) => {
        return <li className={css.listItemPhoto} key={photo.id}  onClick={() => onImageClick(photo.imageUrl)}>
          <ImageCard photo={photo} onClick={onImageClick} />
        </li>
      })}</ul>
    </div>
  )
}

export default ImageGallery