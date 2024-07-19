import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AdvertItem from '../AdvertItem/AdvertItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { selectAdvertsItems } from '../../redux/selectors';
import css from './AdvertsList.module.css';
import { getAdverts } from '../../redux/operations';

const AdvertsList = () => {
  const dispatch = useDispatch();

  const [perPage, setPerPage] = useState(4);
  const [listAdvents, setListAdvents] = useState([]);
  // const [loadMore, setLoadMore] = useState(false);

  const adverts = useSelector(selectAdvertsItems);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  useEffect(() => {
    setListAdvents(adverts.slice(0, perPage));
  }, [adverts, perPage]);

  const handleClick = () => {
    setPerPage(prev => prev + 4);
  };

  return (
    <div className={css.listAndLoadMoreContainer}>
      <div className={css.listContainer}>
        {listAdvents && listAdvents.length > 0 ? (
          <ul className={css.list}>
            {listAdvents.map(item => {
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
      {listAdvents.length < adverts.length && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
    </div>
  );
};

export default AdvertsList;
