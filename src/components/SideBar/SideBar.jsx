import css from './SideBar.module.css';
import sprite from '../../assets/sprite.svg';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';
import VehicleType from '../VehicleType/VehicleType';

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
        <div className={css.vehicleContainer}>
          <div className={css.vehicleItem}>
            <h3 className={css.title}>Vehicle equipment</h3>
            <VehicleEquipment />
          </div>
          <div className={css.vehicleItem}>
            <h3 className={css.title}>Vehicle type</h3>
            <VehicleType />
          </div>
        </div>
        <button className={css.searchBtn} type="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SideBar;
