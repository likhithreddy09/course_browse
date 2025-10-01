import React from "react";
import CourseCard from "../components/CourseCard";
import SectionHeader from "../components/SectionHeader";
import { courses } from "../data/courses";

const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <SectionHeader
        title="Featured Courses"
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

export default FeaturedCourses;
