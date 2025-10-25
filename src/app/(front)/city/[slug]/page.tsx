import Navigation from "@/app/_components/navbar/navigation";
import Hero from "@/app/_components/hero";
import Footer from "@/app/_components/footer";
import { notFound } from "next/navigation";
import { cities } from "@/app/_components/feature/cities/data/cities.mock";
import { hotelSpaces } from "@/app/_components/feature/cities/components/hotels/data/hotelSpaces.mock";
import HotelSpaceCard from "@/app/_components/feature/cities/components/hotels/components/HotelSpaceCard";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return {
      title: "City Not Found | Nginep",
      description: "Halaman kota yang kamu cari tidak ditemukan.",
    };
  }

  return {
    title: `${city.name} Hotels | Nginep`,
    description: `Temukan berbagai pilihan hotel di ${city.name} dengan fasilitas terbaik.`,
  };
}

export default async function City({ params }: Props) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) return notFound();

  const cityHotel = hotelSpaces.filter((space) => space.location === city.name);

  return (
    <>
      <Navigation />
      <Hero />
      <section
        id="Fresh-Space"
        className="flex flex-col gap-[30px] w-full px-4 sm:px-6 md:px-10 lg:px-0 max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
      >
        <h1 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[48px] text-center">
          Hotel di {city.name}
        </h1>

        {cityHotel.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {cityHotel.map((hotel) => (
              <HotelSpaceCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">
            Belum ada hotel tersedia di {city.name}.
          </p>
        )}
      </section>
      <Footer />
    </>
  );
}
