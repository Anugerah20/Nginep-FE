import Navigation from "@/app/_components/navbar/navigation";
import Footer from "@/app/_components/footer";
import { notFound } from "next/navigation";
import { hotelSpaces } from "@/app/_components/feature/cities/components/hotels/data/hotelSpaces.mock";
import HotelFeatures from "@/app/_components/feature/cities/components/hotels/components/HotelFeatures";
import { FaMapMarkerAlt, FaStar, FaCheckCircle } from "react-icons/fa";
import SalesContactCard from "@/app/_components/feature/cities/components/hotels/components/SalesContactCard";
import HotelHeader from "@/app/_components/feature/cities/components/hotels/components/HotelHeader";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hotel = hotelSpaces.find((item) => item.slug === slug);

  if (!hotel) {
    return {
      title: "Hotel not found | Nginep",
      description: "The requested hotel could not be found.",
    };
  }

  return {
    title: `${hotel.title} | ${hotel.location} | Nginep`,
    description: `Nikmati pengalaman menginap di ${hotel.title} berlokasi di ${hotel.location}`,
  };
}

export default async function DetailHotel({ params }: Props) {
  const { slug } = await params;
  const hotel = hotelSpaces.find((item) => item.slug === slug);

  if (!hotel) return notFound();

  return (
    <>
      <Navigation />
      <HotelHeader image={hotel.image} images={hotel.images} />

      <section
        id="Details"
        className="relative flex flex-col lg:flex-row max-w-[1130px] mx-auto gap-8 md:gap-[30px] px-5 md:px-0 mb-20 z-10"
      >
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-5 md:p-[30px] gap-5 md:gap-[30px] bg-white">
          {hotel.tags.map((tag, i) => (
            <p
              key={i}
              className="w-fit rounded-full px-4 py-1 bg-orange-500 font-bold text-sm text-white"
            >
              {tag}
            </p>
          ))}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h1 className="font-extrabold text-2xl md:text-[32px] leading-snug md:leading-[44px]">
                {hotel.title}
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <FaMapMarkerAlt className="text-orange-500 text-lg" />
                <p className="font-semibold text-gray-700">{hotel.location}</p>
              </div>
            </div>
            <div className="flex flex-col sm:items-end">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="font-semibold text-sm sm:text-base text-gray-700">
                {hotel.rating}/5 (19,384)
              </p>
            </div>
          </div>

          <p className="leading-[28px] text-gray-700 text-sm md:text-base">
            {hotel.about}
          </p>

          <hr className="border-[#F6F5FD]" />

          <h2 className="font-bold text-lg">You Get What You Need Most</h2>
          <HotelFeatures features={hotel.features} />

          <hr className="border-[#F6F5FD]" />

          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg">Address</h2>
            <p className="text-gray-700 text-sm md:text-base">
              {hotel.address}
            </p>
          </div>
          <div className="overflow-hidden w-full h-[250px] sm:h-[300px] md:h-[280px] rounded-md">
            <iframe
              className="h-full w-full border-0"
              frameBorder={0}
              src={`https://www.google.com/maps/embed/v1/place?q=${hotel.title},+Bali&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              allowFullScreen
            />
          </div>
        </div>
        <div className="w-full lg:w-[392px] flex flex-col shrink-0 gap-6 md:gap-[30px]">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-5 md:p-[30px] gap-5 md:gap-[30px] bg-white">
            {hotel.isFullBooked ? (
              <p className="text-xl font-bold">
                Sorry. This hotel is{" "}
                <span className="text-red-500">fully booked</span>
              </p>
            ) : (
              <>
                <p className="font-extrabold text-2xl md:text-[32px] text-orange-500">
                  Rp. {hotel.price.toLocaleString("id")}
                </p>
                <p className="font-semibold text-gray-700 mt-1">
                  For {hotel.duration} days hotels
                </p>
              </>
            )}

            <hr className="border-[#F6F5FD]" />

            <div className="flex flex-col gap-4">
              {[
                "Lokasi dekat dengan pantai dan pusat perbelanjaan",
                "Sudah mendapatkan sarapan gratis setiap pagi",
                "Kami memberikan pelayanan ramah dan profesional 24 jam",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-orange-500 text-lg mt-[2px]" />
                  <p className="font-semibold text-gray-800 text-sm md:text-base leading-[26px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-[#F6F5FD]" />

            <a
              href="#"
              className={`flex items-center justify-center w-full rounded-full py-4 font-bold text-white text-center transition ${
                hotel.isFullBooked
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              Book This Hotel
            </a>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-5 md:p-[30px] gap-5 bg-white">
            <h2 className="font-bold text-lg md:text-xl">Contact Our Sales</h2>
            <div className="flex flex-col gap-5 md:gap-[30px]">
              {hotel.salesContacts.map((contact, index) => (
                <SalesContactCard key={index} contact={contact} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
