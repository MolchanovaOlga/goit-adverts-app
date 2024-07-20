import css from './DetailsList.module.css';
import sprite from '../../assets/sprite.svg';

const DetailsList = ({ camperDetails }) => {
  const { adults, transmission, engine, details } = camperDetails;
  const {
    beds,
    airConditioner,
    kitchen,
    CD,
    radio,
    TV,
    bathroom,
    freezer,
    gas,
    hob,
    microwave,
    shower,
    toilet,
    water,
  } = details;

  return (
    <ul className={css.detailsList}>
      <li className={adults > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg width="20" height="20">
          <use href={`${sprite}#icon-Users`}></use>
        </svg>
        <p className={css.detailsText}>{adults} adults</p>
      </li>
      <li className={transmission ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Transmission`}></use>
        </svg>
        <p className={css.detailsText}>{transmission}</p>
      </li>
      <li className={engine ? css.detailsItem : css.disableDetailsItem}>
        <svg width="20" height="20">
          <use href={`${sprite}#icon-Engine`}></use>
        </svg>
        <p className={css.detailsText}>{engine}</p>
      </li>
      <li className={gas ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Gas`}></use>
        </svg>
        <p className={css.detailsText}>Gas {parseFloat(gas)} kg</p>
      </li>
      <li className={kitchen > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Kitchen`}></use>
        </svg>
        <p className={css.detailsText}>Kitchen</p>
      </li>
      <li className={freezer > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Freezer`}></use>
        </svg>
        <p className={css.detailsText}>Freezer</p>
      </li>
      <li className={microwave > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Microwave`}></use>
        </svg>
        <p className={css.detailsText}>Microwave</p>
      </li>
      <li className={beds > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Bed`}></use>
        </svg>
        <p className={css.detailsText}>{beds} beds</p>
      </li>
      <li
        className={
          airConditioner > 0 ? css.detailsItem : css.disableDetailsItem
        }
      >
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-AirConditioner`}></use>
        </svg>
        <p className={css.detailsText}>{airConditioner} air conditioner</p>
      </li>
      <li className={CD > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-CD`}></use>
        </svg>
        <p className={css.detailsText}>CD</p>
      </li>
      <li className={radio > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Radio`}></use>
        </svg>
        <p className={css.detailsText}>Radio</p>
      </li>
      <li className={TV > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-TV`}></use>
        </svg>
        <p className={css.detailsText}>Radio</p>
      </li>
      <li className={hob > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Hob`}></use>
        </svg>
        <p className={css.detailsText}>{hob} hob</p>
      </li>
      <li className={water > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Water`}></use>
        </svg>
        <p className={css.detailsText}>Water</p>
      </li>
      <li className={shower > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Shower`}></use>
        </svg>
        <p className={css.detailsText}>Shower</p>
      </li>
      <li className={toilet > 0 ? css.detailsItem : css.disableDetailsItem}>
        <svg className={css.detailIcon} width="20" height="20">
          <use href={`${sprite}#icon-Toilet`}></use>
        </svg>
        <p className={css.detailsText}>Toilet</p>
      </li>
    </ul>
  );
};

export default DetailsList;
