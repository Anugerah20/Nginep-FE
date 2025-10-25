import Image from "next/image";
import { FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { Contact } from "../types/hotelSpace.types";

export default function SalesContactCard({ contact }: { contact: Contact }) {
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <Image
              src={contact.avatar}
              alt="photo"
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-bold">{contact.name}</p>
            <p className="text-sm leading-[21px]">{contact.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#">
            <FaPhoneAlt size={25} className="text-orange-500 " />
          </a>
          <a href="#">
            <FaCommentDots size={25} className="text-orange-500" />
          </a>
        </div>
      </div>
    </>
  );
}
