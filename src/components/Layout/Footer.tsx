import { Facebook, Github, Instagram, MailCheck, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Footer Email Part */}
      <div className="parent-container">
        <div className="offer-container bg-black text-white m-15 p-10 rounded-4xl flex items-center">
          <p className="font-bold text-4xl w-110">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="email space-y-4 m-auto">
            <div className="flex items-center bg-white rounded-full h-10 px-4 w-full">
              <MailCheck size={20} className="text-black mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent outline-none text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-white h-10 rounded-full text-black flex justify-center p-6 items-center w-70 cursor-pointer"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Footer's middle part */}

        <div className="flex ml-10 p-10">
          {/* Social */}

          <div className="w-70 space-y-7">
            <h2 className="font-bold text-4xl">SHOP.CO</h2>
            <p>
              We have cloths that suits your style and which you're proud to
              wear, From Women to Men.
            </p>
            <div className="flex space-x-3">
              <Twitter size={20} />
              <Facebook size={20} />
              <Instagram size={20} />
              <Github size={20} />
            </div>
          </div>

          {/* Company */}

          <div className="w-55 space-y-7 ml-10">
            <h3 className="text-2xl">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Works</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
            </ul>
          </div>

          <div className="w-55 space-y-7">
            <h3 className="text-2xl">HELP</h3>
            <ul className="space-y-3">
              <li>
                <a href="">Cutomer Support</a>
              </li>
              <li>
                <a href="">Delivery Details</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="w-55 space-y-7">
            <h3 className="text-2xl">FAQ</h3>
            <ul className="space-y-3">
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Manage Deliveries</a>
              </li>
              <li>
                <a href="">Orders</a>
              </li>
              <li>
                <a href="">Payments</a>
              </li>
            </ul>
          </div>

          <div className="w-55 space-y-7">
            <h3 className="text-2xl">RESOUTCES</h3>
            <ul className="space-y-3">
              <li>
                <a href="">Free eBook</a>
              </li>
              <li>
                <a href="">Development Tutorial</a>
              </li>
              <li>
                <a href="">How to - Blog</a>
              </li>
              <li>
                <a href="">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Copyright */}

        <div className="">
          <div className="copyright">Shop.co&copy;2000-2023, All Rights Reserved</div>
          <div className="">{/* img */}</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
