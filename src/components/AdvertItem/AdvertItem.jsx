import { useState } from 'react';

import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import DetailsModal from '../DetailsModal/DetailsModal';
import css from './AdvertItem.module.css';
import sprite from '../../assets/sprite.svg';

const AdvertItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      {isOpen && <DetailsModal onCloseModal={closeModal} isOpen={isOpen} />}
      <div className={css.container}>
        <div className={css.imgContainer}></div>
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <h2 className={css.title}>Mavericks</h2>
            <div className={css.priceContainer}>
              <p>€8000.00</p>
              <button className={css.heartBtn}>
                <svg className={css.heartBtnIcon} width="24" height="24">
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
              <p className={css.reviewsText}>4.4 (2 Reviews)</p>
            </div>
            <div className={css.reviewsContainer}>
              <svg className={css.mapPinIcon} width="16" height="16">
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <p>Kyiv, Ukraine</p>
            </div>
          </div>
          <p className={css.description}>
            Embrace simplicity and freedom with the Mavericks panel truck, an
            ideal choice for solo travelers or couples seeking a compact and
            efficient way to explore the open roads.{' '}
          </p>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-Users`}></use>
              </svg>
              <p>2 adults</p>
            </li>
            <li className={css.detailsItem}>
              <svg className={css.detailIcon} width="20" height="20">
                <use href={`${sprite}#icon-Transmission`}></use>
              </svg>
              <p>Automatic</p>
            </li>
            <li className={css.detailsItem}>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-Engine`}></use>
              </svg>
              <p>Petrol</p>
            </li>
            <li className={css.detailsItem}>
              <svg className={css.detailIcon} width="20" height="20">
                <use href={`${sprite}#icon-Kitchen`}></use>
              </svg>
              <p>Kitchen</p>
            </li>
            <li className={css.detailsItem}>
              <svg className={css.detailIcon} width="20" height="20">
                <use href={`${sprite}#icon-Bed`}></use>
              </svg>
              <p>2 beds</p>
            </li>
            <li className={css.detailsItem}>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-AC`}></use>
              </svg>
              <p>AC</p>
            </li>
          </ul>
          <ShowMoreBtn openModal={openModal} />
        </div>
      </div>
    </>
  );
};

export default AdvertItem;
