import { Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import FeaturesDetails from "../FeaturesDetails/FeaturesDetails";
import ReviewsDetails from "../ReviewsDetails/ReviewsDetails";
import css from "./DetailsModalNavigation.module.css";

const DetailsModalNavigation = () => {
  return (
    <div className={css.navContainer}>
      <div className={css.linkContainer}>
        <NavLink className={css.link} to={"features"}>
          Features
        </NavLink>
        <NavLink className={css.link} to={"reviews"}>
          Reviews
        </NavLink>
      </div>
      <div className={css.routesContainer}>
        <Suspense>
          <Routes>
            <Route path="features" element={<FeaturesDetails />} />
            <Route path="reviews" element={<ReviewsDetails />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default DetailsModalNavigation;
