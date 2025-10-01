import React from "react";
import TeacherCard from "../components/TeacherCard";
import SectionHeader from "../components/SectionHeader";
import { teachers } from "../data/teachers";

const TopTeachers: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <SectionHeader
        title="Learn from Top Teachers"
        subtitle="Expert instructors who make learning fun and engaging for every child"
      />
      <div className="flex flex-wrap gap-2 justify-center">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} {...teacher} />
        ))}
      </div>
    </section>
  );
};

export default TopTeachers;
