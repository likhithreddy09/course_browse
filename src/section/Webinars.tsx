
import React from "react";
import CourseCard from "../components/CourseCard";
import SectionHeader from "../components/SectionHeader";
import { courses } from "../data/courses";

const Webinars: React.FC = () => {
  return (
    <section className="relative py-12 px-6 bg-[#F8F8FF]">
      <img
        src="/assets/section/right_side.png" 
        alt="Top Right"
        className="absolute top-4 right-4 w-16 h-16"
      />

      <div className="flex items-center justify-center gap-4">
        <img
          src="/assets/section/arrow_left.svg" 
          alt="Left Arrow"
          className="w-24 h-4 cursor-pointer"
        />

        <SectionHeader title="Webinar starting within 24 hrs" emoji="" />

        <img
          src="/assets/section/arrow_left.png" 
          alt="Right Arrow"
          className="w-24 h-4 cursor-pointer"
        />
      </div>

      <div className="flex mt-10 flex-wrap gap-6 justify-center">
        {courses.slice(0, 4).map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
};

export default Webinars;
