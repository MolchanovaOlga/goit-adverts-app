import DetailsModalForm from '../DetailsModalForm/DetailsModalForm';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import css from './ReviewsDetails.module.css';

const ReviewsDetails = ({ reviewsDetails }) => {
  return (
    <div className={css.container}>
      {reviewsDetails && reviewsDetails.length > 0 ? (
        <ul className={css.listReviews}>
          {reviewsDetails.map(item => {
            return (
              <li
                className={css.itemReviews}
                key={reviewsDetails.indexOf(item)}
              >
                <ReviewsItem reviewDetails={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={css.noCommentsContainer}>
          <p>There are no comments yet.</p>
        </div>
      )}
      <DetailsModalForm />
    </div>
  );
};

export default ReviewsDetails;
