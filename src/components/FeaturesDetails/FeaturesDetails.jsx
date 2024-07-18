import DetailsModalForm from "../DetailsModalForm/DetailsModalForm";
import css from "./FeaturesDetails.module.css";
import sprite from "../../assets/sprite.svg";

const FeaturesDetails = () => {
  return (
    <div className={css.container}>
      <div>
        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-Users`}></use>
            </svg>
            <p>2 adults</p>
          </li>
          <li className={css.detailsItem}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Transmission`}></use>
            </svg>
            <p>Automatic</p>
          </li>
          <li className={css.detailsItem}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-AC`}></use>
            </svg>
            <p>AC</p>
          </li>
          <li className={css.detailsItem}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-Engine`}></use>
            </svg>
            <p>Petrol</p>
          </li>
          <li className={css.detailsItem}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Kitchen`}></use>
            </svg>
            <p>Kitchen</p>
          </li>
          <li className={css.detailsItem}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Bed`}></use>
            </svg>
            <p>2 beds</p>
          </li>
          <li className={css.detailsItem}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-AirConditioner`}></use>
            </svg>
            <p>1 air conditioner</p>
          </li>
          <li className={css.detailsItem}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-CD`}></use>
            </svg>
            <p>CD</p>
          </li>
          <li className={css.detailsItem}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Radio`}></use>
            </svg>
            <p>Radio</p>
          </li>
          <li className={css.detailsItem}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Hob`}></use>
            </svg>
            <p>2 hob</p>
          </li>
        </ul>
        <h3 className={css.title}>Vehicle details</h3>
        <table className={css.table}>
          <tr className={css.row}>
            <td>Form</td>
            <td>Panel truck</td>
          </tr>
          <tr className={css.row}>
            <td>Length</td>
            <td>5.4 m</td>
          </tr>
          <tr className={css.row}>
            <td>Width</td>
            <td>2.01 m</td>
          </tr>
          <tr className={css.row}>
            <td>Height</td>
            <td>2.05 m</td>
          </tr>
          <tr className={css.row}>
            <td>Tank</td>
            <td>132 I</td>
          </tr>
          <tr className={css.row}>
            <td>Consumption</td>
            <td>12.4l/100km</td>
          </tr>
        </table>
      </div>
      <DetailsModalForm />
    </div>
  );
};

export default FeaturesDetails;
