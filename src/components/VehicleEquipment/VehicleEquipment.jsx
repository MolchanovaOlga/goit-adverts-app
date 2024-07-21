import css from './VehicleEquipment.module.css';
import sprite from '../../assets/sprite.svg';

const VehicleEquipment = () => {
  return (
    <ul className={css.detailsList}>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="transmission" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Transmission`}></use>
            </svg>
            <span className={css.checkboxText}>Automatic</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="engine" />
          <div className={css.inputContainer}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-Engine`}></use>
            </svg>
            <span className={css.checkboxText}>Petrol</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="gas" />
          <div className={css.inputContainer}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-Gas`}></use>
            </svg>
            <span className={css.checkboxText}>Gas</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="kitchen" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Kitchen`}></use>
            </svg>
            <span className={css.checkboxText}>Kitchen</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="freezer" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Freezer`}></use>
            </svg>
            <span className={css.checkboxText}>Freezer</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="microwave" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Microwave`}></use>
            </svg>
            <span className={css.checkboxText}>Microwave</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="beds" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Bed`}></use>
            </svg>
            <span className={css.checkboxText}>Bed</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="airConditioner" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-AirConditioner`}></use>
            </svg>
            <span className={css.checkboxText}>AC</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="CD" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-CD`}></use>
            </svg>
            <span className={css.checkboxText}>CD</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="radio" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Radio`}></use>
            </svg>
            <span className={css.checkboxText}>Radio</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="TV" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-TV`}></use>
            </svg>
            <span className={css.checkboxText}>TV</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="hob" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Hob`}></use>
            </svg>
            <span className={css.checkboxText}>Hob</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="water" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Water`}></use>
            </svg>
            <span className={css.checkboxText}>Water</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="shower" />
          <div className={css.inputContainer}>
            <svg className={css.detailIcon} width="20" height="20">
              <use href={`${sprite}#icon-Shower`}></use>
            </svg>
            <span className={css.checkboxText}>Shower</span>
          </div>
        </label>
      </li>
      <li className={css.detailsItem}>
        <label className={css.label}>
          <input className={css.input} type="checkbox" name="toilet" />
          <div className={css.inputContainer}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-Toilet`}></use>
            </svg>
            <span className={css.checkboxText}>Toilet</span>
          </div>
        </label>
      </li>
    </ul>
  );
};

export default VehicleEquipment;
