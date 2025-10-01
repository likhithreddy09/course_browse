import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import SectionHeader from "../components/SectionHeader";
import { timeslots } from "../data/timeslots";
import { courses } from "../data/courses";

// Define your categories

const TimeFilter: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  // Filter courses only by selected time
  const filteredCourses = courses.filter((course) => {
    const timeMatch = selectedSlot ? course.time === selectedSlot : true;
    return timeMatch;
  });

  return (
    <section className="py-12 px-6 bg-[#F8FFFE]">
      <SectionHeader
        title="Filter Courses"
        subtitle="Choose the perfect course and time for your child's schedule"
      />

      {/* Timeslot Filter */}
      <div className="flex w-full flex-wrap gap-4 justify-center mb-8">
        {timeslots.map((slot) => (
          <button
            key={slot.id}
            onClick={() => setSelectedSlot(slot.name)}
            className={`flex cursor-pointer items-center gap-3 sm:gap-4  px-6 py-2 sm:px-6 sm:py-2 rounded-xl text-base sm:text-lg transition text-left ${
              selectedSlot === slot.name
                ? "bg-indigo-500 text-white border border-indigo-500"
                : "hover:bg-indigo-100 bg-white text-gray-700 border border-gray-200"
            }`}
          >
            <img
              src={slot.icon}
              alt={slot.name}
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-normal">{slot.name}</span>
              <span className=" text-xs sm:text-sm">
                {slot.time}
              </span>
            </div>
          </button>
        ))}

        {/* Clear Time Filter */}
        {selectedSlot && (
          <button
            onClick={() => setSelectedSlot("")}
            className="px-4 py-2 border rounded-lg text-sm text-red-500 hover:bg-red-50"
          >
            Clear Time
          </button>
        )}
      </div>

      {/* Courses */}
  <div className="flex overflow-x-auto gap-4 sm:gap-6 mb-8 px-2 sm:px-0">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">
            No courses available for this selection.
          </p>
        )}
      </div>
    </section>
  );
};

export default TimeFilter;
