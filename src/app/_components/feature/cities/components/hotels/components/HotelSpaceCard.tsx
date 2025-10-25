import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaShieldAlt,
} from "react-icons/fa";
import { hotelSpace } from "../types/hotelSpace.types";

export default function HotelSpaceCard({ hotel }: { hotel: hotelSpace }) {
  return (
    <>
      <Link href={`/hotel/${hotel.slug}`} className="card">
        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
          <div className="thumbnail-container relative w-full h-[200px]">
            {hotel.tags.map((tag) => (
              <p
                key={tag}
                className="absolute top-5 right-5 w-fit rounded-full p-[6px_16px] bg-orange-500 font-bold text-sm leading-[21px] text-[#F7F7FD]"
              >
                {tag}
              </p>
            ))}
            <Image
              src="/assets/images/thumbnails/thumbnails-1.jpg"
              alt={hotel.title}
              width={400}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
            <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
              {hotel.title}
            </h3>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl leading-[30px]">
                Rp {hotel.price.toLocaleString("id")}
              </p>
              <div className="flex items-center justify-end gap-[6px]">
                <p className="font-semibold">{hotel.duration}</p>
                <FaClock size={20} className="text-orange-500" />
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-end gap-[6px]">
                <FaMapMarkerAlt size={20} className="text-orange-500" />
                <p className="font-semibold">{hotel.location}</p>
              </div>
              <div className="flex items-center justify-end gap-[6px]">
                <p className="font-semibold">{hotel.rating}</p>
                <FaStar size={20} className="text-yellow-400" />
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-end gap-[6px]">
                <FaWifi size={20} className="text-orange-500" />
                <p className="font-semibold">Free Wifi</p>
              </div>
              <div className="flex items-center justify-end gap-[6px]">
                <FaShieldAlt size={20} className="text-orange-500" />
                <p className="font-semibold">Privacy 100%</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
