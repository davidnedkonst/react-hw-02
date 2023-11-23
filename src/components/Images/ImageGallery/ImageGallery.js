import ImageGalleryItem from "../ImageGalleryItem";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
    return (
        <div className={css.ImageGallery} >{
            images.map(item =>
                <ImageGalleryItem
                    key={item.id}
                    item={item}
                    onImageClick={onImageClick}
                />
            )
        }</div>
    );
};