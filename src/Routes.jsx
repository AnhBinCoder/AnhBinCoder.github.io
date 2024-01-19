import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const CityListing = React.lazy(() => import("pages/CityListing"));
const CityTour = React.lazy(() => import("pages/CityTour"));
const SMTHome = React.lazy(() => import("pages/SMTHome"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/smthome" element={<SMTHome />} /> 
          <Route path="/citytour" element={<CityTour />} />
          <Route path="/citylisting" element={<CityListing />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
