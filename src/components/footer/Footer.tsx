import { Inter, Poppins } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <footer
      className={`w-full flex-center flex-col bg-black mt-36 ${poppins.className}`}
    >
      <div className="w-full pt-20 pb-14 px-20 grid grid-cols-5 gap-14 text-text">
        <div>
          <h1 className={`text-2xl mb-6 ${inter.className}`}>Exclusive</h1>

          <p className="text-xl font-medium mb-6">Subscribe</p>

          <p>Get 10% off your first order</p>

          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-3 pl-4 pr-12 bg-transparent rounded border-[1.5px] border-text placeholder:opacity-40 max-w-[217px]"
            />

            <Image
              src={require("../../../assets/icon-send.png")}
              alt="icon of send"
              className="absolute right-0 top-3 cursor-pointer"
            />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-medium mb-6">Support</h1>

          <div className="flex flex-col gap-4">
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>

            <p>exclusive@gmail.com</p>

            <p>+88015-88888-9999</p>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-medium mb-6">Account</h1>

          <div className="flex flex-col gap-4">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-medium mb-6">Quick Link</h1>

          <div className="flex flex-col gap-4">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-medium mb-6">Download App</h1>

          <p className="text-xs opacity-70 mb-2">Save $3 with App New User Only</p>

          <div className="grid grid-cols-2 grid-rows-2 gap-2 mb-6">
            <Image src={require("../../../assets/Qr-Code.png")} alt="QR Code of App" className="row-span-2" />
            <Image src={require("../../../assets/download-playstore.png")} alt="Download in Play Store" className="bg-cover cursor-pointer" />
            <Image src={require("../../../assets/download-appstore.png")} alt="Download in App Store" className="bg-cover cursor-pointer" />
          </div>

          <div className="flex-center gap-6">
            <Image src={require("../../../assets/Icon-Facebook.png")} alt="Icon of Facebook" className="cursor-pointer" />
            <Image src={require("../../../assets/Icon-Twitter.png")} alt="Icon of Twitter" className="cursor-pointer" />
            <Image src={require("../../../assets/icon-instagram.png")} alt="Icon of Instagram" className="cursor-pointer" />
            <Image src={require("../../../assets/Icon-Linkedin.png")} alt="Icon of Linkedin" className="cursor-pointer" />
          </div>
        </div>
      </div>

      <p className="w-full pt-4 text-center text-white border-white border-t-[1px] opacity-50 pb-3">
        © Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
