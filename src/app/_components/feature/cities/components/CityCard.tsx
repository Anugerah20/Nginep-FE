import Image from "next/image";
import { City } from "../types/city.type";
import Link from "next/link";

export default function CityCard({ city }: { city: City }) {
  return (
    <>
      <Link href={`/city/${city.slug}`} className="card">
        <div className="relative flex shrink-0 w-[230px] h-[300px] rounded-[20px] overflow-hidden">
          <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
            <h3 className="font-bold text-xl leading-[30px] text-white">
              {city.name}
            </h3>
            <p className="text-white">{city.hotelCount} Hotels</p>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500">
            <Image
              src={city.image}
              alt={city.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Link>
    </>
  );
}
