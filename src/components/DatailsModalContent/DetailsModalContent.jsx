import DetailsModalNavigation from '../DetailsModalNavigation/DetailsModalNavigation';
import css from './DetailsModalContent.module.css';
import sprite from '../../assets/sprite.svg';

import GalleryItem from '../GalleryItem/GalleryItem';

const DetailsModalContent = ({ camperDetails }) => {
  const { gallery, name, price, rating, reviews, location, description } =
    camperDetails;

  return (
    <div className={css.container}>
      <h2 className={css.title}>{name}</h2>
      <div className={css.revLocContainer}>
        <div className={css.reviewsContainer}>
          <svg className={css.starIcon} width="16" height="16">
            <use href={`${sprite}#icon-Star`}></use>
          </svg>
          <p className={css.reviewsText}>
            {rating} ({reviews.length} Reviews)
          </p>
        </div>
        <div className={css.reviewsContainer}>
          <svg className={css.mapPinIcon} width="16" height="16">
            <use href={`${sprite}#icon-map-pin`}></use>
          </svg>
          <p>{location}</p>
        </div>
      </div>
      <p className={css.priceText}>
        €{price.toFixed(2).toString().replace('.', ',')}
      </p>
      {gallery && gallery.length > 0 ? (
        <ul className={css.imgList}>
          {gallery.map(item => {
            return (
              <li className={css.item} key={gallery.indexOf(item)}>
                <GalleryItem imgLink={item} imgName={name} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={css.noImgContainer}>
          <p>There are no images yet.</p>
        </div>
      )}
      <p className={css.description}>{description}</p>
      <DetailsModalNavigation camperDetails={camperDetails} />
    </div>
  );
};

export default DetailsModalContent;
