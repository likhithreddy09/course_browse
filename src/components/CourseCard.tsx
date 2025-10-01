import React from "react";
import teacherImage from "../../public/assets/image_3.jpg";
import { IndianRupee } from "lucide-react";

export type CourseCardProps = {
  id?: number;
  title: string;
  tags?: string[];
  category?: string;
  rating: number;
  learners: number;
  teacher: string;
  time: string;
 duration: string | number;
  price: string | number;
  isSellingFast?: boolean;
  image: string;
};

const IconStar = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 .587l3.668 7.431L23.6 9.75l-5.8 5.657L19.335 24 12 19.897 4.665 24l1.535-8.593L.4 9.75l7.932-1.732L12 .587z" />
  </svg>
);

const IconUsers = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-8 0c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zM8 13c-2.667 0-8 1.333-8 4v3h13.333C10.333 19.333 9 17 8 13zm8 0c-.667 0-1.333.033-2 .1 1.333.967 3.333 2.9 3.333 6.9H24v-3c0-2.667-5.333-4-8-4z" />
  </svg>
);

const IconClock = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);


const CourseCard: React.FC<CourseCardProps> = ({
  title,
  tags = [],
  rating,
  learners,
  teacher,
  time,
  duration,
  price,
  isSellingFast = false,
  image,
  
}) => {
  return (
    <article className="relative w-[300px] bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex-shrink-0">
      {isSellingFast && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md">
            Selling Fast
          </span>
        </div>
      )}

      <div className="w-auto h-[200px] p-3 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full rounded-2xl h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((t, i) => {
            const colors = [
              "bg-[#EFF2FF] text-[#000000]",
              "bg-[#FFEFF0] text-[#000000]",
              "bg-[#FFFEDF] text-[#000000]",
            ];

            const colorClass = colors[i % colors.length];

            return (
              <span
                key={i}
                className={`text-[11px] px-2 py-0.5 rounded-md inline-block ${colorClass}`}
              >
                {t}
              </span>
            );
          })}
        </div>

        <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2 min-h-[48px]">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img
              src={teacherImage}
              alt={teacher}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-sm text-gray-600">
            By: <span className="font-medium text-gray-800">{teacher}</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-600 pt-2">
          <div className="flex items-center gap-1.5">
            <IconUsers />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IconClock />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IndianRupee size={12} />
            <span>{price}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-500">
                <IconStar />
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {rating.toFixed(1)}
              </span>
            </div>
            <div className="text-xs text-gray-500">{learners}+ learners</div>
          </div>

          <button
            aria-label="add to cart"
            className="p-2.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition"
            title="Add to cart"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
