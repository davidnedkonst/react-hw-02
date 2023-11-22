import ImageGalleryItem from "../ImageGalleryItem";
import css from "./ImageGallery.module.css";

export default function ImageGallery ({ images }) {
    return (
        <ul className={css.ImageGallery} >
            {images.hits.map(
                item => <li key={item.id}><ImageGalleryItem item={item} /></li>
            )}
        </ul>
    );
};