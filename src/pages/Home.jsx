import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/smthome">SMTHome</Link>
        </li>
        <li>
          <Link to="/citytour">CityTour</Link>
        </li>
        <li>
          <Link to="/citylisting">CityListing</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
