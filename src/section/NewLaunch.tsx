import React from "react";
import CourseCard from "../components/CourseCard";
import SectionHeader from "../components/SectionHeader";
import { courses } from "../data/courses";

const NewLaunch: React.FC = () => {
  return (
<section className="py-12 px-6 bg-gradient-to-r from-[#F2F5FF] to-[#EDE6FF#F]">
          <SectionHeader
        title="New Launches"
        subtitle="Our most loved courses that kids absolutely adore!"
        emoji="⭐"
      />

      {/* Scrollable row */}
      <div className="overflow-x-auto px-2 mt-6">
        <div className="flex gap-6 w-max">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewLaunch;
