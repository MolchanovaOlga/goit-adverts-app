import css from './GalleryItem.module.css';

const GalleryItem = ({ imgLink, imgName }) => {
  return (
    <div className={css.imgContainer}>
      <img className={css.img} src={imgLink} alt={`${imgName} image`} />
    </div>
  );
};

export default GalleryItem;
