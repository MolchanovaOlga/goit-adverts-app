import css from './ReviewsItem.module.css';
import sprite from '../../assets/sprite.svg';

const ReviewsItem = ({ reviewDetails }) => {
  const { reviewer_name, comment, reviewer_rating } = reviewDetails;

  return (
    <>
      <div className={css.titleContainer}>
        <div className={css.avatarContainer}>
          <p className={css.avatarText}>A</p>
        </div>
        <div className={css.ratingContainer}>
          <h4 className={css.title}>{reviewer_name}</h4>
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
      <p>{comment}</p>
    </>
  );
};

export default ReviewsItem;
