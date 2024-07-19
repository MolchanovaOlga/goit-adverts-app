import css from './Star.module.css';
import sprite from '../../assets/sprite.svg';

const Star = ({ select }) => {
  return (
    <svg
      className={select ? css.selectStarIcon : css.starIcon}
      width="16"
      height="16"
    >
      <use href={`${sprite}#icon-Star`}></use>
    </svg>
  );
};

export default Star;
