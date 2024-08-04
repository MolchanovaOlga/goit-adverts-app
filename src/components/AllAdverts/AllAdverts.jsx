import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import Loader from '../Loader/Loader';
import {
  selectAdvertsItems,
  selectAdvertsLoading,
  selectLoadMore,
  selectPage,
} from '../../redux/selectors';
import { setPage } from '../../redux/slice.js';
import { getAdverts } from '../../redux/operations';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import AdvertsList from '../AdvertsList/AdvertsList';

import css from './AllAdverts.module.css';

const AllAdverts = () => {
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);
  const perPage = 4;

  const adverts = useSelector(selectAdvertsItems);
  const page = useSelector(selectPage);
  const loadMore = useSelector(selectLoadMore);
  const loader = useSelector(selectAdvertsLoading);

  // const prevPage = useRef(page);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    dispatch(getAdverts({ page, perPage }));
  }, [dispatch, page]);

  const handleClick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className={css.listAndLoadMoreContainer}>
      {loader && <Loader />}
      {!loader && <AdvertsList list={adverts} active={false} />}
      {!loader && adverts.length !== 0 && loadMore && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
    </div>
  );
};

export default AllAdverts;
