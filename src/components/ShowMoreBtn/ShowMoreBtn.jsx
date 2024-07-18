import css from "./ShowMoreBtn.module.css";

const ShowMoreBtn = ({ handleClick }) => {
  return (
    <button
      className={css.showMoreBtn}
      type="button"
      onClick={() => handleClick()}
    >
      Show More
    </button>
  );
};

export default ShowMoreBtn;
