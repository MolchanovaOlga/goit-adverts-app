import DetailsModalForm from '../DetailsModalForm/DetailsModalForm';
import css from './FeaturesDetails.module.css';
import sprite from '../../assets/sprite.svg';

const FeaturesDetails = ({ camperDetails }) => {
  const { form, length, width, height, tank, consumption } = camperDetails;

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
          <tbody className={css.tbody}>
            <tr className={css.row}>
              <td>Form</td>
              <td className={css.td}>{form}</td>
            </tr>
            <tr className={css.row}>
              <td>Length</td>
              <td>{parseFloat(length)} m</td>
            </tr>
            <tr className={css.row}>
              <td>Width</td>
              <td>{parseFloat(width)} m</td>
            </tr>
            <tr className={css.row}>
              <td>Height</td>
              <td>{parseFloat(height)} m</td>
            </tr>
            <tr className={css.row}>
              <td>Tank</td>
              <td>{parseFloat(tank)} l</td>
            </tr>
            <tr className={css.row}>
              <td>Consumption</td>
              <td>{consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <DetailsModalForm />
    </div>
  );
};

export default FeaturesDetails;
