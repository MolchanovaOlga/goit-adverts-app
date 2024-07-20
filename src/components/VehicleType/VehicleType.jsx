import css from './VehicleType.module.css';
import sprite from '../../assets/sprite.svg';

const VehicleType = () => {
  return (
    <ul className={css.detailsList}>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="radio" name="form" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-OneCar`}></use>
            </svg>
            <span className={css.radioText}>Van</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="radio" name="form" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-FullyCar`}></use>
            </svg>
            <span className={css.radioText}>Fully Integrated</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="radio" name="form" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Alcove`}></use>
            </svg>
            <span className={css.radioText}>Alcove</span>
          </div>
        </label>
      </li>
    </ul>
  );
};

export default VehicleType;
