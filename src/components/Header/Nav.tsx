import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false); // mobile accordion
  const [isShopClick, setIsShopClick] = useState(false); // desktop click toggle

  const shopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        shopRef.current &&
        event.target instanceof Node &&
        !shopRef.current.contains(event.target)
      ) {
        setIsShopClick(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Hamburger menu (sm, md, lg) */}
          <button className="xl:hidden" onClick={() => setIsDrawerOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="px-0 lg:px-12 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight">
            SHOP.CO
          </div>

          {/* Desktop nav links (only xl+) */}
          <ul className="hidden xl:flex items-center lg:gap-6 text-lg lg:text-lg">
            {/* Shop with click dropdown */}
            <div className="relative" ref={shopRef}>
              <button
                className="flex items-center gap-1"
                onClick={() => setIsShopClick((prev) => !prev)}
              >
                <span>Shop</span>
                {isShopClick ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {isShopClick && (
                <div className="absolute top-full left-0 mt-2 bg-[#f0f0f0] shadow-lg rounded-md py-2 w-48 z-50">
                  <NavLink
                    to="/shop/men"
                    className="block px-4 py-1 w-20 hover:bg-gray-100"
                    onClick={() => setIsShopClick(false)}
                  >
                    Men
                  </NavLink>
                  <NavLink
                    to="/shop/women"
                    className="block px-4 py-1 w-20 hover:bg-gray-100"
                    onClick={() => setIsShopClick(false)}
                  >
                    Women
                  </NavLink>
                  <NavLink
                    to="/shop/kids"
                    className="block px-4 py-1 w-20 hover:bg-gray-100"
                    onClick={() => setIsShopClick(false)}
                  >
                    Kids
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/sale">On Sale</NavLink>
            <NavLink to="/new">New Arrivals</NavLink>
            <NavLink to="/brands">Brands</NavLink>
          </ul>
        </div>

        {/* Search bar (lg and bigger) */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none flex-grow text-sm"
          />
        </div>

        {/* Right section icons */}
        <div className="flex items-center gap-4">
          {/* Search icon (md and smaller) */}
          <button
            className="lg:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart */}
          <Link to={"/cartPage"}>
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </Link>

          {/* User */}
          <Link to={"/user"}>
            <User className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </nav>

      {/* Mobile search bar dropdown (md and smaller) */}
      {isSearchOpen && (
        <div className="lg:hidden px-4 py-2 bg-gray-100">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md outline-none text-sm"
          />
        </div>
      )}

      {/* Drawer (sm, md, lg) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#f0f0f0] shadow-lg transform transition-transform duration-300 z-50 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } xl:hidden`}
      >
        {/* Drawer header */}
        <div className="flex justify-between items-center px-4 py-2 border-b bg-black text-white">
          <div className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            SHOP.CO
          </div>
          <button onClick={() => setIsDrawerOpen(false)}>
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col gap-8 p-4 text-2xl font-medium">
          {/* Shop with accordion */}
          <button
            className="flex justify-between items-center w-full"
            onClick={() => setIsShopOpen(!isShopOpen)}
          >
            <span>Shop</span>
            {isShopOpen ? (
              <ChevronUp className="w-6 h-6 mr-4" />
            ) : (
              <ChevronDown className="w-6 h-6 mr-4" />
            )}
          </button>
          {isShopOpen && (
            <>
              <div className="ml-4 flex flex-col gap-2 text-md text-gray-700">
                <NavLink to="/shop/men" onClick={() => setIsDrawerOpen(false)}>
                  Men
                </NavLink>
                <NavLink
                  to="/shop/women"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Women
                </NavLink>
                <NavLink to="/shop/kids" onClick={() => setIsDrawerOpen(false)}>
                  Kids
                </NavLink>
              </div>
              <div>
                <button className="text-3xl text-gray-200">
                  Log out
                </button>
              </div>
            </>
          )}

          <NavLink to="/sale" onClick={() => setIsDrawerOpen(false)}>
            On Sale
          </NavLink>
          <NavLink to="/new" onClick={() => setIsDrawerOpen(false)}>
            New Arrivals
          </NavLink>
          <NavLink to="/brands" onClick={() => setIsDrawerOpen(false)}>
            Brands
          </NavLink>
        </nav>
      </div>

      {/* Transparent overlay for drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-transparent xl:hidden z-40"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
}
