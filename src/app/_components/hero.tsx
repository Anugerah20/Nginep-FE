import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-screen relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/backgrounds/hero-bali.png"
          alt="Hero Image"
          fill
          className="w-full h-full object-center object-cover"
        />
        <div className="absolute bg-black opacity-50 inset-0"></div>
        <div className="flex flex-col justify-center items-center text-center h-full relative">
          <h1 className="text-7xl font-extrabold capitalize leading-tight mb-3">
            Experience a stay beyond comfort
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Enjoy exclusive deals crafted just for you today.
          </p>
          <div className="flex gap-5">
            <Link
              href="/room"
              className="bg-transparent border border-orange-500 hover:bg-orange-500 text-lg font-semi-bold text-white px-6 py-2 md:px-10 hover:scale-105 hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
