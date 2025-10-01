import React from "react";

import FeaturedCourses from "../section/FeaturedCourses";
import TopTeachers from "../section/TopTeachers";
import Webinars from "../section/Webinars";
import Categories from "../section/Categories";
import TimeFilter from "../section/TimeFilter";
import Navbar from "../components/Layout/Navbar";
import HeroSection from "../section/HeroSection";
import AgeSelection from "../components/AgeSelection";
import NewLaunch from "../section/NewLaunch";

const BrowsePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navbar/>
        <HeroSection/>

        <AgeSelection/>
        <NewLaunch/>
      <FeaturedCourses />
      <TopTeachers />
      <Webinars />
      <Categories />
      <TimeFilter />
    </div>
  );
};

export default BrowsePage;
