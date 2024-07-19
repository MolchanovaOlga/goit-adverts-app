import { useSelector } from 'react-redux';

import AdvertItem from '../AdvertItem/AdvertItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { selectAdvertsItems } from '../../redux/selectors';
import css from './AdvertsList.module.css';

import { useDispatch } from 'react-redux';
import { getAdverts } from '../../redux/operations';
import { useEffect } from 'react';

const AdvertsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  const adverts = useSelector(selectAdvertsItems);

  return (
    <div className={css.listContainer}>
      {adverts && adverts.length > 0 ? (
        <ul className={css.list}>
          {adverts.map(item => {
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
