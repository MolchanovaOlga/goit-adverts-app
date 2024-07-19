// import { useSelector } from 'react-redux';

import AdvertItem from '../AdvertItem/AdvertItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
// import { selectAdvertsItems } from '../../redux/selectors';
import css from './AdvertsList.module.css';

import { useDispatch } from 'react-redux';
import { getAdverts } from '../../redux/operations';
import { useEffect } from 'react';

const AdvertsList = () => {
  // const adverts = useSelector(selectAdvertsItems);
  // console.log(adverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <div className={css.listContainer}>
      <ul className={css.list}>
        <li className={css.item}>
          <AdvertItem />
        </li>
      </ul>
      <LoadMoreBtn />
    </div>
  );
};

export default AdvertsList;
