import AdvertItem from "../AdvertItem/AdvertItem";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./AdvertsList.module.css";

const AdvertsList = () => {
  return (
    <div className={css.listContainer}>
      <ul className={css.list}>
        <li className={css.item}>
          <AdvertItem />
        </li>
      </ul>
      <LoadMoreBtn />
    </div>
  );
};

export default AdvertsList;
