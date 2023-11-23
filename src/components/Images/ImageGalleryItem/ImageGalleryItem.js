import css from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ item, onImageClick }) {
    return (
        <div className={css.ImageGalleryItem}>
            <img
                className={css.ImageGalleryItemImage}
                src={item.webformatURL}
                alt={item.tags}
                onClick={
                    () => { onImageClick(item) }
                }
            />
        </div>
    );
};