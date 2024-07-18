import css from "./ReviewsItem.module.css";
import sprite from "../../assets/sprite.svg";

const ReviewsItem = () => {
  return (
    <>
      <div className={css.titleContainer}>
        <div className={css.avatarContainer}>
          <p className={css.avatarText}>A</p>
        </div>
        <div className={css.ratingContainer}>
          <h4 className={css.title}>Alice</h4>
          <div className={css.starsContainer}>
            <svg className={css.starIcon} width="16" height="16">
              <use href={`${sprite}#icon-Star`}></use>
            </svg>
            <svg className={css.starIcon} width="16" height="16">
              <use href={`${sprite}#icon-Star`}></use>
            </svg>
            <svg className={css.starIcon} width="16" height="16">
              <use href={`${sprite}#icon-Star`}></use>
            </svg>
            <svg className={css.starIcon} width="16" height="16">
              <use href={`${sprite}#icon-Star`}></use>
            </svg>
            <svg className={css.starIcon} width="16" height="16">
              <use href={`${sprite}#icon-Star`}></use>
            </svg>
          </div>
        </div>
      </div>
      <p>
        The Mavericks panel truck was a perfect choice for my solo road trip.
        Compact, easy to drive, and had all the essentials. The kitchen
        facilities were sufficient, and the overall experience was fantastic.
      </p>
    </>
  );
};

export default ReviewsItem;
