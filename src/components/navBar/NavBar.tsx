"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="px-[135px] pt-[40px] pb-4 flex-center justify-between">
      <h1 className={`${inter.className}`}>EXCLUSIVE</h1>
      <ul className="flex gap-12 relative top-[1px]">
        <Link
          className={`${
            pathname === "/home" &&
            "border-b-[1px] border-black border-opacity-50"
          }`}
          href="/home"
        >
          Home
        </Link>

        <Link
          className={`${
            pathname === "/contact" &&
            "border-b-[1px] border-black border-opacity-50"
          }`}
          href="/contact"
        >
          Contact
        </Link>

        <Link
          className={`${
            pathname === "/about" &&
            "border-b-[1px] border-black border-opacity-50"
          }`}
          href="/about"
        >
          About
        </Link>

        <Link
          className={`${
            pathname === "/sign-up" &&
            "border-b-[1px] border-black border-opacity-50"
          }`}
          href="/sign-up"
        >
          Sign Up
        </Link>
      </ul>
      <div className="flex">
        <div className="text-xs relative">
          <input
            type="text"
            className=" bg-secondary py-[7px] pl-5 pr-11 rounded"
            placeholder="What are you looking for?"
          />
          <Image src={require("../../../assets/search.png")} alt="Icon of search" className="absolute right-3 top-1 opacity-50" />
        </div>

        <Image src={require("../../../assets/Wishlist.png")} alt="Icon of a wishlist" className="ml-6 cursor-pointer" />

        <Image src={require("../../../assets/Cart.png")} alt="Icon of a cart" className="ml-4 cursor-pointer" />

      </div>
    </nav>
  );
};

export default NavBar;
