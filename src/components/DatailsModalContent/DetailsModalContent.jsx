import DetailsModalNavigation from "../DetailsModalNavigation/DetailsModalNavigation";
import css from "./DetailsModalContent.module.css";
import sprite from "../../assets/sprite.svg";

import ReviewsDetails from "../ReviewsDetails/ReviewsDetails";

const DetailsModalContent = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Mavericks</h2>
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
      <p className={css.priceText}>€8000.00</p>
      <ul className={css.imgList}>
        <li>
          <div className={css.imgContainer}></div>
        </li>
        <li>
          <div className={css.imgContainer}></div>
        </li>
        <li>
          <div className={css.imgContainer}></div>
        </li>
      </ul>
      <p className={css.description}>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads. This no-frills yet reliable panel truck
        offers the essentials for a comfortable journey, making it the perfect
        companion for those who value simplicity and functionality.
      </p>
      <DetailsModalNavigation />
      <ReviewsDetails />
    </div>
  );
};

export default DetailsModalContent;
