import { Poppins } from "next/font/google";
import NavBar from "../navBar/NavBar";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <header className={`${poppins.className} w-full border-b-[1px] border-black border-opacity-30`}>
      <div className="w-full flex-center bg-black py-3 relative">
        <p className="text-text text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="text-text font-bold underline cursor-pointer">
            ShopNow
          </span>
        </p>
        <select
          name="language"
          id="ilanguege"
          className="absolute right-8 bg-black text-text gap-4"
        >
          <option value="English">English</option>
          <option value="Português">Português</option>
        </select>
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
