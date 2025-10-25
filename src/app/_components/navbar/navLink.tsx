"use client";

import { useState } from "react";
import clsx from "clsx";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function Navlink() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="inline-flex items-center justify-center text-sm rounded-md text-gray-500 hover:bg-gray-100 p-2 md:hidden"
      >
        {!openMenu ? (
          <IoMenu className="size-8 cursor-pointer" />
        ) : (
          <IoClose className="size-8 cursor-pointer" />
        )}
      </button>
      <div
        className={clsx("w-full md:w-auto md:block", {
          hidden: !openMenu,
        })}
      >
        <ul className="flex flex-col text-sm uppercase p-4 font-semibold rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link
              href="/"
              className="block mx-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block mx-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block mx-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Room
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block mx-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
