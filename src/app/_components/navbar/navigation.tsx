import React from "react";
import Link from "next/link";
import Navlink from "@/app/_components/navbar/navLink";

export default function Navigation() {
  return (
    <React.Fragment>
      <div className="w-full bg-white shadow-sm z-20 fixed top-0">
        <div className="flex flex-wrap justify-between items-center p-4 max-w-screen-xl mx-auto">
          <Link href="/" className="text-3xl text-orange-600 font-bold">
            🏨Nginep.
          </Link>
          <Navlink />
        </div>
      </div>
    </React.Fragment>
  );
}
