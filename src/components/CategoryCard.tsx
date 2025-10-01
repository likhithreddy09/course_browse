import React from "react";
import { motion } from "framer-motion";

type CategoryCardProps = {
  icon: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, name, isSelected, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        backgroundColor: isSelected ? undefined : "#f97316", 
        color: isSelected ? undefined : "#ffffff",
      }}
      transition={{ duration: 0.3 }}
      className={`
        relative flex items-center mt-10 rounded-3xl p-6 w-[200px] h-[90px] cursor-pointer
        ${isSelected
          ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl scale-105'
          : 'bg-white border border-gray-200 text-gray-800'
        }
      `}
    >
      <div className="z-10 flex-1">
        <p className={`text-[16px] font-normal whitespace-pre-line ${isSelected ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </p>
      </div>

      <div
        className="absolute right-[-20px] top-1/4 transform -translate-y-1/2 w-28 h-24 transition-transform duration-300"
      >
        <motion.img
          src={icon}
          alt={name}
          className="w-full h-20 object-contain drop-shadow-2xl"
          whileHover={{ scale: 1.1, rotateY: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
          }}
        />
      </div>
    </motion.div>
  );
};

export default CategoryCard;
