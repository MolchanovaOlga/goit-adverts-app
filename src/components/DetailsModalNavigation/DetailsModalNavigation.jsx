import { useState } from 'react';

import { Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import FeaturesDetails from '../FeaturesDetails/FeaturesDetails';
import ReviewsDetails from '../ReviewsDetails/ReviewsDetails';
import css from './DetailsModalNavigation.module.css';

const DetailsModalNavigation = ({ camperDetails }) => {
  const [isActive, setIsActive] = useState('features');

  const handleLinkClick = component => {
    setIsActive(component);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.navContainer}>
          <button
            type="button"
            className={
              isActive === 'features' ? css.navigateActive : css.navigate
            }
            onClick={() => handleLinkClick('features')}
          >
            Feautures
          </button>
          <button
            type="button"
            className={
              isActive === 'reviews' ? css.navigateActive : css.navigate
            }
            onClick={() => handleLinkClick('reviews')}
          >
            Reviews
          </button>
        </div>
        {isActive === 'features' && (
          <FeaturesDetails camperDetails={camperDetails} />
        )}
        {isActive === 'reviews' && (
          <ReviewsDetails reviewsDetails={camperDetails.reviews} />
        )}
      </div>
      {/* <div className={css.linkContainer}>
        <NavLink className={css.link} to={'features'}>
          Features
        </NavLink>
        <NavLink className={css.link} to={'reviews'}>
          Reviews
        </NavLink>
      </div>
      <div className={css.routesContainer}>
        <Suspense>
          <Routes>
            <Route
              path="features"
              element={<FeaturesDetails camperDetails={camperDetails} />}
            />
            <Route
              path="reviews"
              element={
                <ReviewsDetails reviewsDetails={camperDetails.reviews} />
              }
            />
          </Routes>
        </Suspense>
      </div> */}
    </>
  );
};

export default DetailsModalNavigation;
