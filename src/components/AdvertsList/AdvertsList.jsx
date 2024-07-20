import AdvertItem from '../AdvertItem/AdvertItem';
import css from './AdvertsList.module.css';

const AdvertsList = ({ list }) => {
  return (
    <div className={css.listContainer}>
      {list && list.length > 0 ? (
        <ul className={css.list}>
          {list.map(item => {
            return (
              <li className={css.item} key={item._id}>
                <AdvertItem camperDetails={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.text}>There are no adverts in app yet.</p>
      )}
    </div>
  );
};

export default AdvertsList;
