import { ChevronDown, CircleUser, Search, ShoppingCart, X } from "lucide-react";

const Header = () => {
  return (
    <>
      <header>
        <div className="bg-black text-white h-8 flex justify-center">
          <div className="flex items-center justify-center w-full max-w-5xl px-4">
            <div className="flex items-center space-x-3">
              <span>Sign up and get 20% off to your first order.</span>
              <a href="#" className="underline">
                Sign Up Now
              </a>
            </div>
            <X size={20} className="cursor-pointer absolute right-21" />
          </div>
        </div>

        <nav className="flex items-center justify-between px-20 py-4 bg-white shadow">
          <div className="flex items-center space-x-10">
            <h1 className="text-2xl font-bold">SHOP.CO</h1>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="flex items-center hover:underline">
                  Shop
                  <span className="ml-1">
                    <ChevronDown size={16} />
                  </span>
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  On Sale
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Brands
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-initial items-center px-4 py-1 rounded-full bg-gray-200 h-10 w-full max-w-md">
            <Search size={20} />
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search for Products..."
              className="ml-2 outline-none w-full"
            />
          </div>
          <ShoppingCart size={20} className="cursor-pointer" />
          <CircleUser size={20} className="cursor-pointer" />
        </nav>
      </header>
    </>
  );
};

export default Header;
