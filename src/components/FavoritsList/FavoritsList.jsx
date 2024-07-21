import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectAdvertsLoading } from '../../redux/selectors';
import Loader from '../Loader/Loader';
import { selectFavorites } from '../../redux/selectors';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import AdvertsList from '../AdvertsList/AdvertsList';
import css from './FavoritsList.module.css';

const FavoritsList = () => {
  const [perPage, setPerPage] = useState(4);
  const [listAdverts, setListAdverts] = useState([]);

  const favorites = useSelector(selectFavorites);
  const loader = useSelector(selectAdvertsLoading);

  useEffect(() => {
    setListAdverts(favorites.slice(0, perPage));
  }, [favorites, perPage]);

  const handleClick = () => {
    setPerPage(prev => prev + 4);
  };

  return (
    <div className={css.listAndLoadMoreContainer}>
      {loader && <Loader />}
      {!loader && <AdvertsList list={listAdverts} active={true} />}
      {!loader && listAdverts.length < favorites.length && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
    </div>
  );
};

export default FavoritsList;
