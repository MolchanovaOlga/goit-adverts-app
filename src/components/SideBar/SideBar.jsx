import css from './SideBar.module.css';
import sprite from '../../assets/sprite.svg';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';

const SideBar = () => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <label className={css.label}>
          <span className={css.formText}>Location</span>
          <svg className={css.locationIcon} width="18" height="20">
            <use href={`${sprite}#icon-map-pin`}></use>
          </svg>
          <input
            className={css.input}
            name="location"
            type="text"
            placeholder="Kyiv, Ukraine"
          />
        </label>
        <h2 className={css.filtersTitle}>Filters</h2>
        <h3 className={css.title}>Vehicle equipment</h3>
        <VehicleEquipment />
      </form>
    </div>
  );
};

export default SideBar;
