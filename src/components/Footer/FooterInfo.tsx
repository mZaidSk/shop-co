import { Facebook, Github, Instagram, Twitter } from "lucide-react";

const FooterInfo = () => {
  return (
    <>
      <div className="flex ml-10 p-10">
        {/* Social */}

        <div className="w-70 space-y-7">
          <h2 className="font-bold text-4xl">SHOP.CO</h2>
          <p>
            We have cloths that suits your style and which you're proud to wear,
            From Women to Men.
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
    </>
  );
};

export default FooterInfo