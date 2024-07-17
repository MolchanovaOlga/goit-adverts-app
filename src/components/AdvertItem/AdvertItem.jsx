import css from "./AdvertItem.module.css";

const AdvertItem = () => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}></div>
      <div className={css.contentContainer}>
        <div className={css.titleContainer}>
          <h2 className={css.title}>Mavericks</h2>
          <div className={css.priceContainer}>
            <p>€8000.00</p>
            <button>icon</button>
          </div>
        </div>
        <div className={css.revLocContainer}>
          <p className={css.reviewsText}>4.4(2 Reviews)</p>
          <p>Kyiv, Ukraine</p>
        </div>
        <p className={css.description}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads.{" "}
        </p>
        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <p>2 adults</p>
          </li>
          <li className={css.detailsItem}>
            <p>Automatic</p>
          </li>
          <li className={css.detailsItem}>
            <p>Petrol</p>
          </li>
          <li className={css.detailsItem}>
            <p>Kitchen</p>
          </li>
          <li className={css.detailsItem}>
            <p>2 beds</p>
          </li>
          <li className={css.detailsItem}>
            <p>AC</p>
          </li>
        </ul>
        <button type="button" className={css.showMoreBtn}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default AdvertItem;
