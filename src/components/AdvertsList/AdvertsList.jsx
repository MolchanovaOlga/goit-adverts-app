import { selectAdvertsLoading } from '../../redux/selectors';
import Loader from '../Loader/Loader';
import AdvertItem from '../AdvertItem/AdvertItem';
import css from './AdvertsList.module.css';

const AdvertsList = ({ list, active }) => {
  return (
    <div className={css.listContainer}>
      {list && list.length > 0 ? (
        <ul className={css.list}>
          {list.map(item => {
            return (
              <li className={css.item} key={item._id}>
                <AdvertItem camperDetails={item} active={active} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.text}>There are no adverts yet.</p>
      )}
    </div>
  );
};

export default AdvertsList;
