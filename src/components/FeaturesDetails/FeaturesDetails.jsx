import DetailsModalForm from '../DetailsModalForm/DetailsModalForm';
import DetailsList from '../DetailsList/DetailsList';
import css from './FeaturesDetails.module.css';

const FeaturesDetails = ({ camperDetails }) => {
  const { form, length, width, height, tank, consumption } = camperDetails;

  return (
    <div className={css.container}>
      <div>
        <DetailsList camperDetails={camperDetails} />
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
