import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from '../Pages/Landing/index';
import GalleryPage from "../Pages/Gallery";
import EducatorPage from "../Pages/Educators";
const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/educators" element={<EducatorPage />} />
    </Routes>
  );
}


export default RouteConfig