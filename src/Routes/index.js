import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from '../Pages/Landing/index';
import GalleryPage from "../Pages/Gallery";
import EducatorPage from "../Pages/Educators";
import EventPage from "../Pages/Event";
import AboutPage from "../Pages/About";
import SchoolAdminPage from "../Pages/SchoolAdmin";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/educators" element={<EducatorPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/schooladmin" element={<SchoolAdminPage />} />
    </Routes>
  );
}


export default RouteConfig