import css from "./ShowMoreBtn.module.css";

const ShowMoreBtn = ({ openModal }) => {
  return (
    <button className={css.showMoreBtn} type="button" onClick={openModal}>
      Show More
    </button>
  );
};

export default ShowMoreBtn;
