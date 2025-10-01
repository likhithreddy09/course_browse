import  { useState } from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="h-[70vh] md:h-[70vh] lg:h-[70vh] bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <div className="relative h-full bg-gradient-to-r from-[#330B5C] via-purple-800 to-[#423374] overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 md:w-64 md:h-64 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 md:w-96 md:h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative h-full px-6 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            {/* Left Image */}
            <div className="lg:col-span-3 hidden md:flex flex-col justify-end items-center lg:items-start h-full">
              <div className="relative mt-20  w-full flex justify-center items-end">
                <img
                  src="/assets/image_1.png"
                  alt="Student with magnifying glass"
                  className="max-h-full w-auto object-contain rounded-2xl"
                />
                <div className="absolute -top-10 -right-16 bg-purple-800/90 backdrop-blur-md rounded-full px-4 py-5 border-2 border-[#6F6F6F] shadow-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">500+</div>
                    <div className="text-sm text-purple-200">Courses</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="lg:col-span-6 text-center space-y-8 z-10">
              <h1
                className="text-[32px] md:text-[42px] font-bold text-white leading-snug"
                style={{ fontFamily: '"Comic Neue", cursive' }}
              >
                Learn a New Skill
                <br/>
                      <p   className="text-[28px] md:text-[42px] font-bold text-[#F2FA5C] leading-loose">   Everyday, Anytime, and Anywhere.</p>
              </h1>
              {/* <p
                className="text-[28px] md:text-[42px] font-bold text-[#F2FA5C] leading-loose"
                style={{ fontFamily: '"Comic Neue", cursive' }}
              >
                Everyday, Anytime, and Anywhere.
              </p> */}

              <div className="max-w-3xl mx-auto">
                <div className="relative flex items-center bg-white rounded-full shadow-2xl">
                  <Search className="absolute left-5 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What do you want to learn today?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-32 py-4 md:py-5 text-gray-700 text-base md:text-lg rounded-full focus:outline-none focus:ring-4 focus:ring-purple-300"
                  />
                  <button className="absolute right-2 px-6 md:px-10 py-2 md:py-3 bg-gradient-to-r from-[#57029C] to-[#F700AC] text-white text-sm md:text-[16px] font-medium font-sans rounded-full hover:from-[#45027A] hover:to-[#D5009E] transition-all duration-300 shadow-lg">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-3 hidden md:flex flex-col justify-end items-center lg:items-end h-full">
              <div className="relative w-full flex justify-center items-end">
                <img
                  src="/assets/image_2.png"
                  alt="Student with book"
                  className="max-h-full w-auto object-contain rounded-2xl"
                />
                <div className="absolute -top-24  bg-purple-800/90 backdrop-blur-md rounded-2xl  p-3 shadow-lg border-2 border-[#6F6F6F] flex items-center gap-3">
                  <img src="/assets/section.gif" className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />
                  <div>
                    <div className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
                      10k+
                    </div>
                    <div className="text-xs md:text-sm text-purple-200 whitespace-nowrap">
                      Happy kids
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
