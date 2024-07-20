import gif from '../../assets/arrow down.gif';
import css from './FavoritesTitle.module.css';

const FavoritesTitle = () => {
  return (
    <div className={css.titleContainer}>
      <h2 className={css.title}>Your favorite adverts are here</h2>
      <div className={css.gifContainer}>
        <img className={css.gif} src={gif} alt="Arrow down" />
      </div>
    </div>
  );
};

export default FavoritesTitle;
