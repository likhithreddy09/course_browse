import React from "react";
import image1 from "../../public/assets/image_3.jpg"

type TeacherCardProps = {
  name: string;
  title: string;
  experience: string;
  students: string;
  specialty: string;
  avatar: string;
};

const TeacherCard: React.FC<TeacherCardProps> = ({ 
  name, 
  title, 
  experience,
  students,
  specialty, 
}) => {
  return (
    <div className="p-6 w-[240px] text-center flex-shrink-0">
      <div className="relative">
        <div className="rounded-2xl w-full bg-white pb-4 border-2 border-gray-100 pt-12">
          <h3 className="text-[16px] font-medium text-gray-900 mb-1">{name}</h3>
          <p className="text-xs text-gray-600 mb-1">{title} {experience}</p>
          <p className="text-xs text-gray-500 mb-3">{students}</p>
          <span className="text-xs  px-3 py-1 rounded-full bg-[#EFEFEF] text-black ">
            {specialty}
          </span>
        </div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
          <img
            src={image1}
            alt={name}
            className="w-full h-full rounded-full object-cover border-2 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
