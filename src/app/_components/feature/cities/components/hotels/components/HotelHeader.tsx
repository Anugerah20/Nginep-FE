"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HotelHeader({
  image,
  images,
}: {
  image: string;
  images: string[];
}) {
  return (
    <>
      <section id="Gallery" className="mb-10 md:-mb-[50px]">
        <div className="swiper w-full">
          <Swiper
            className="swiper-wrapper"
            slidesPerView="auto"
            spaceBetween={10}
            slidesOffsetAfter={10}
            slidesOffsetBefore={10}
          >
            <SwiperSlide className="swiper-slide !w-fit">
              <div className="w-full md:w-[700px] h-[250px] sm:h-[350px] md:h-[550px] overflow-hidden rounded-md">
                <Image
                  src={image}
                  alt="thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            {images.map((img, index) => (
              <SwiperSlide key={index} className="swiper-slide !w-fit">
                <div className="w-full md:w-[700px] h-[250px] sm:h-[350px] md:h-[550px] overflow-hidden rounded-md">
                  <Image
                    src={img}
                    alt="thumbnail"
                    width={700}
                    height={550}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
