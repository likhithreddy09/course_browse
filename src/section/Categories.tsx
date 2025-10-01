import React, { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import CourseCard from "../components/CourseCard";
import SectionHeader from "../components/SectionHeader";
import { categories } from "../data/categories";
import { courses } from "../data/courses";

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="py-12 px-6 bg-gray-50">
      <SectionHeader
        title="Popular Categories"
        subtitle="Pick what you love most! These categories have everything you need to learn something awesome"
      />

      <div className="flex flex-wrap gap-6 justify-center mb-8">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            icon={cat.icon}
            name={cat.name}
            isSelected={selectedCategory === cat.name}
            onClick={() => setSelectedCategory(cat.name)}
          />
        ))}
      </div>

      {/* Filtered Courses */}
      <div className="flex overflow-x-auto gap-4 sm:gap-6 mb-8 px-2 sm:px-0">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">
            No courses available for this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Categories;
