import css from './HomeContent.module.css';
import carGif from '../../assets/car.gif';

const HomeContent = () => {
  return (
    <div className={css.container}>
      <div className={css.backgroundContainer}>
        <p className={css.quot}>
          “To Travel is to Live.” – Hans Christian Andersen
        </p>
        <div className={css.textContainer}>
          <img src={carGif} alt="Car on the road" width="100" height="100" />
          <div>
            <h1 className={css.title}>Best Cars for Car Camping</h1>
            <div className={css.mainTextContainer}>
              <p className={css.mainText}>
                Our company specializes in the provision of campervan rental
                services for travel and recreation. We offer a wide range of
                modern and reliable campers that provide maximum comfort and
                convenience during travels.
              </p>
            </div>
            <p className={css.text}>
              Try it and your life will be filled with adventures.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className={css.textContainerPhoneSize}>
        <h1 className={css.title}>Best Cars for Car Camping</h1>
        <div className={css.mainTextContainer}>
          <p className={css.mainText}>
            Our company specializes in the provision of campervan rental
            services for travel and recreation. We offer a wide range of modern
            and reliable campers that provide maximum comfort and convenience
            during travels.
          </p>
        </div>
        <p className={css.text}>
          Try it and your life will be filled with adventures.{' '}
        </p>
      </div>
    </div>
  );
};

export default HomeContent;
