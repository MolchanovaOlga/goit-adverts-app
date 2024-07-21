import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { selectAdvertsLoading } from '../../redux/selectors';
import Loader from '../Loader/Loader';
import { selectAdvertsItems } from '../../redux/selectors';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import AdvertsList from '../AdvertsList/AdvertsList';

import css from './AllAdverts.module.css';
import { getAdverts } from '../../redux/operations';

const AllAdverts = () => {
  const dispatch = useDispatch();

  const adverts = useSelector(selectAdvertsItems);
  const loader = useSelector(selectAdvertsLoading);

  const [perPage, setPerPage] = useState(4);
  const [listAdverts, setListAdverts] = useState([]);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  useEffect(() => {
    setListAdverts(adverts.slice(0, perPage));
  }, [adverts, perPage]);

  const handleClick = () => {
    setPerPage(prev => prev + 4);
  };

  return (
    <div className={css.listAndLoadMoreContainer}>
      {loader && <Loader />}
      {!loader && <AdvertsList list={listAdverts} active={false} />}
      {!loader &&
        listAdverts &&
        adverts &&
        listAdverts.length < adverts.length && (
          <LoadMoreBtn handleClick={handleClick} />
        )}
    </div>
  );
};

export default AllAdverts;
