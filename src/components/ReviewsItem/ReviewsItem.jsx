import Star from '../Star/Star';
import css from './ReviewsItem.module.css';
import sprite from '../../assets/sprite.svg';

const ReviewsItem = ({ reviewDetails }) => {
  const { reviewer_name, comment, reviewer_rating } = reviewDetails;

  const firstLetter = reviewer_name[0];

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} select={i <= reviewer_rating} />);
  }

  return (
    <>
      <div className={css.titleContainer}>
        <div className={css.avatarContainer}>
          <p className={css.avatarText}>{firstLetter}</p>
        </div>
        <div className={css.ratingContainer}>
          <h4 className={css.title}>{reviewer_name}</h4>
          <ul className={css.starsList}>{stars}</ul>
        </div>
      </div>
      <p>{comment}</p>
    </>
  );
};

export default ReviewsItem;
