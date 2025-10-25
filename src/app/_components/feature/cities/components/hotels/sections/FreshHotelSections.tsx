import HotelSpaceCard from "../components/HotelSpaceCard";
import { hotelSpaces } from "../data/hotelSpaces.mock";

export default function FreshHotelSections() {
  return (
    <>
      <section
        id="Fresh-Space"
        className="flex flex-col gap-[30px] w-full px-4 sm:px-6 md:px-10 lg:px-0 max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
      >
        <h2 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[48px] text-center">
          Choose your favorite room
          <br />
          and enjoy the atmosphere.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] sm-gap[10px]">
          {hotelSpaces.map((hotel) => (
            <HotelSpaceCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
    </>
  );
}
