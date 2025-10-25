"use client";

import {
  FaBed,
  FaLocationArrow,
  FaCalendarCheck,
  FaStar,
  FaUtensils,
  FaLeaf,
} from "react-icons/fa";

export default function BenefitSections() {
  return (
    <section
      id="Benefits"
      className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-[1200px] mx-auto px-6 md:px-10 py-20 gap-10 md:gap-20 mt-[100px]"
    >
      <div className="text-center md:text-left md:w-1/3">
        <h2 className="font-bold text-3xl md:text-[38px] leading-tight text-gray-900 mb-4">
          We Might Good <br /> For Your Holiday
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          Discover comfort, convenience, and unforgettable experiences designed
          to make your stay truly special.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1">
        {[
          {
            icon: <FaBed size={28} className="text-orange-500" />,
            title: "Comfort-First Design",
            desc: "Enjoy the comfort of rooms with modern designs and complete facilities for the best stay experience.",
          },
          {
            icon: <FaLocationArrow size={28} className="text-orange-500" />,
            title: "Easy City Access",
            desc: "Strategically located in the city center, making it easy for guests to reach tourist attractions and public transportation.",
          },
          {
            icon: <FaCalendarCheck size={28} className="text-orange-500" />,
            title: "Flexible Booking",
            desc: "Book rooms easily and change your stay schedule without any annoying additional fees.",
          },
          {
            icon: <FaStar size={28} className="text-orange-500" />,
            title: "Top-Rated Hospitality",
            desc: "Professional service from our staff who are ready to assist 24 hours a day to meet every guest's needs.",
          },
          {
            icon: <FaUtensils size={28} className="text-orange-500" />,
            title: "Complimentary Breakfast",
            desc: "Enjoy a delicious complimentary breakfast every morning with a wide selection of local and international dishes.",
          },
          {
            icon: <FaLeaf size={28} className="text-orange-500" />,
            title: "Sustainable Stay",
            desc: "We are committed to sustainability through the use of environmentally friendly energy and the reduction of single-use plastics.",
          },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] rounded-2xl bg-white shadow-md">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-900 mb-1">
                {item.title}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
