import DetailsModalForm from "../DetailsModalForm/DetailsModalForm";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import css from "./ReviewsDetails.module.css";

const ReviewsDetails = () => {
  return (
    <div className={css.container}>
      <ul className={css.listReviews}>
        <li className={css.itemReviews}>
          <ReviewsItem />
        </li>
      </ul>
      <DetailsModalForm />
    </div>
  );
};

export default ReviewsDetails;
