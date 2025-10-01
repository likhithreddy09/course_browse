import React from 'react';

interface AgeGroup {
  min: number;
  max: number;
  color: string;
}

const AgeSelection: React.FC = () => {
  const ageGroups: AgeGroup[] = [
    { min: 1, max: 2, color: 'bg-yellow-50 border-yellow-300 text-yellow-700' },
    { min: 2, max: 3, color: 'bg-orange-50 border-orange-300 text-orange-700' },
    { min: 3, max: 4, color: 'bg-amber-50 border-amber-300 text-amber-700' },
    { min: 4, max: 5, color: 'bg-yellow-50 border-yellow-400 text-yellow-700' },
    { min: 5, max: 6, color: 'bg-lime-50 border-lime-300 text-lime-700' },
    { min: 6, max: 7, color: 'bg-green-50 border-green-300 text-green-700' },
    { min: 7, max: 8, color: 'bg-emerald-50 border-emerald-300 text-emerald-700' },
    { min: 8, max: 9, color: 'bg-teal-50 border-teal-300 text-teal-700' },
    { min: 9, max: 10, color: 'bg-cyan-50 border-cyan-300 text-cyan-700' },
    { min: 10, max: 11, color: 'bg-sky-50 border-sky-300 text-sky-700' },
    { min: 11, max: 12, color: 'bg-blue-50 border-blue-300 text-blue-700' },
    { min: 12, max: 13, color: 'bg-indigo-50 border-indigo-300 text-indigo-700' },
    { min: 13, max: 14, color: 'bg-violet-50 border-violet-300 text-violet-700' },
    { min: 14, max: 15, color: 'bg-purple-50 border-purple-300 text-purple-700' },
    { min: 15, max: 16, color: 'bg-fuchsia-50 border-fuchsia-300 text-fuchsia-700' },
    { min: 16, max: 17, color: 'bg-pink-50 border-pink-300 text-pink-700' },
    { min: 17, max: 18, color: 'bg-rose-50 border-rose-300 text-rose-700' },
    { min: 18, max: 19, color: 'bg-red-50 border-red-300 text-red-700' },
    { min: 19, max: 20, color: 'bg-orange-50 border-orange-400 text-orange-700' },
  ];

  const handleAgeClick = (min: number, max: number) => {
    console.log(`Selected age group: ${min}-${max}`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center text-gray-900 font-medium mb-2">
          How Old Are You? 🎯
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Pick your age and find the perfect courses just for you!
        </p>

        {/* Horizontal scroll container */}
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide px-2">
          {ageGroups.map((age, index) => (
            <button
              key={index}
              onClick={() => handleAgeClick(age.min, age.max)}
              className={`${age.color} border-2 rounded-xl p-4 min-w-[80px] flex-shrink-0 text-center cursor-pointer shadow-sm hover:shadow-md active:scale-95`}
            >
              <div className="text-sm font-bold">{age.min}-{age.max}</div>
              <div className="text-xs font-medium mt-1">Years</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeSelection;
