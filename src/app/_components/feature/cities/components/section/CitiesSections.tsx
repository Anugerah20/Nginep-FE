"use client";

import CityCard from "../CityCard";
import { cities } from "../../data/cities.mock";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CitiesSection() {
  return (
    <>
      <section
        id="Cities"
        className="flex flex-wrap flex-col gap-[30px] mt-[100px]"
      >
        <div className="w-11/12 max-w-[1150px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-center sm:text-left">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-[38px] leading-tight text-gray-900 mb-4">
            You Can Choose <br className="hidden sm:block" />
            Our Favorite Hotels
          </h2>
          <a
            href="#"
            className="inline-block rounded-full py-3 px-6 bg-orange-500 text-white font-semibold text-sm sm:text-base hover:bg-orange-600 transition-all"
          >
            Explore All City
          </a>
        </div>
        <Swiper
          spaceBetween={30}
          slidesOffsetAfter={30}
          slidesOffsetBefore={30}
          slidesPerView="auto"
          className="swiper w-full"
        >
          <div className="swiper-wrapper">
            {cities.map((city) => (
              <SwiperSlide
                key={city.id}
                className="swiper-slide !w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]"
              >
                <CityCard city={city} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </>
  );
}
