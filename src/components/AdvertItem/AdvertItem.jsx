import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import DetailsModal from '../DetailsModal/DetailsModal';
import GalleryItem from '../GalleryItem/GalleryItem';
import { selectFavorites } from '../../redux/selectors';
import { addAdvent, deleteAdvent } from '../../redux/slice.js';
import scrollController from '../../services/noScroll';
import css from './AdvertItem.module.css';
import sprite from '../../assets/sprite.svg';
import defaultImage from '../../assets/Toyota_Hilux_illustration.png';

const defaultImg = `${defaultImage}`;

const AdvertItem = ({ camperDetails, active }) => {
  const dispatch = useDispatch();

  const {
    _id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
  } = camperDetails;

  const { beds, airConditioner, kitchen } = details;
  const favorites = useSelector(selectFavorites);

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(favorites.some(item => item._id === _id));
  }, [favorites, _id]);

  function openModal() {
    setIsOpen(true);
    scrollController.disabledScroll();
  }

  function closeModal() {
    setIsOpen(false);
    scrollController.enabledScroll();
  }

  function handleClick() {
    if (isActive) {
      dispatch(deleteAdvent(_id));
      setIsActive(false);
    } else {
      dispatch(addAdvent(camperDetails));
      setIsActive(true);
    }
  }

  return (
    <>
      {isOpen && (
        <DetailsModal
          onCloseModal={closeModal}
          isOpen={isOpen}
          camperDetails={camperDetails}
        />
      )}
      <div className={css.container}>
        <GalleryItem
          imgLink={gallery && gallery.length > 0 ? gallery[0] : defaultImg}
          imgName={name}
        />
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <h2 className={css.title}>{name}</h2>
            <div className={css.priceContainer}>
              <p>€{price.toFixed(2)}</p>
              <button
                className={css.heartBtn}
                type="button"
                onClick={handleClick}
              >
                <svg
                  className={isActive ? css.favoritHeatIcon : css.heartBtnIcon}
                  width="24"
                  height="24"
                >
                  <use href={`${sprite}#icon-Heart`}></use>
                </svg>
              </button>
            </div>
          </div>
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
          <p className={css.description}>{description}</p>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-Users`}></use>
              </svg>
              <p className={css.detailsText}>{adults} adults</p>
            </li>
            <li className={css.detailsItem}>
              <svg className={css.detailIcon} width="20" height="20">
                <use href={`${sprite}#icon-Transmission`}></use>
              </svg>
              <p className={css.detailsText}>{transmission}</p>
            </li>
            <li className={css.detailsItem}>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-Engine`}></use>
              </svg>
              <p className={css.detailsText}>{engine}</p>
            </li>
            <li
              className={kitchen > 0 ? css.detailsItem : css.disableDetailsItem}
            >
              <svg className={css.detailIcon} width="20" height="20">
                <use href={`${sprite}#icon-Kitchen`}></use>
              </svg>
              <p className={css.detailsText}>Kitchen</p>
            </li>
            <li className={css.detailsItem}>
              <svg className={css.detailIcon} width="20" height="20">
                <use href={`${sprite}#icon-Bed`}></use>
              </svg>
              <p className={css.detailsText}>{beds} beds</p>
            </li>
            <li
              className={
                airConditioner > 0 ? css.detailsItem : css.disableDetailsItem
              }
            >
              <svg width="20" height="20">
                <use href={`${sprite}#icon-AC`}></use>
              </svg>
              <p className={css.detailsText}>AC</p>
            </li>
          </ul>
          <ShowMoreBtn openModal={openModal} />
        </div>
      </div>
    </>
  );
};

export default AdvertItem;
