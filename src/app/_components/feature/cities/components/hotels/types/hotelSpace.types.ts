export type hotelSpace = {
  id: number;
  title: string;
  price: number;
  slug: string;
  duration: string;
  address: string;
  about: string;
  location: string;
  rating: number;
  tags: string[];
  image: string;
  images: string[];
  features: string[];
  salesContacts: SalesContact[];
  isFullBooked: boolean;
};

export type SalesContact = {
  name: string;
  avatar: string;
  role: string;
};

export type Contact = {
  name: string;
  avatar: string;
  role: string;
};
