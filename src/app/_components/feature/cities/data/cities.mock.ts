import { City } from "../types/city.type";
import { hotelSpaces } from "../components/hotels/data/hotelSpaces.mock";

const cityNames = [
  "Denpasar",
  "Badung",
  "Gianyar",
  "Tabanan",
  "Bangli",
  "Karangasem",
  "Buleleng",
  "Jembrana",
  "Klungkung",
];

export const cities: City[] = cityNames.map((name, n) => {
  const hotelCount = hotelSpaces.filter(
    (hotel) => hotel.location === name
  ).length;

  return {
    id: n + 1,
    name,
    hotelCount: hotelCount,
    image: `/assets/images/thumbnails/thumbnails-${(n % 3) + 1}.png`,
    slug: name.toLowerCase().replace(/ /g, "-"),
  };
});
