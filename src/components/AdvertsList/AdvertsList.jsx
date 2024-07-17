import AdvertItem from "../AdvertItem/AdvertItem";
import css from "./AdvertsList.module.css";

const AdvertsList = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <AdvertItem />
      </li>
    </ul>
  );
};

export default AdvertsList;
