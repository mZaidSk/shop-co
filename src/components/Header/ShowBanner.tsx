import { X } from "lucide-react";
import { useState } from "react";

const ShowBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div className="bg-black text-white text-xl sm:text-sm md:text-lg px-3 py-1 flex justify-between items-center sm:w-full">
          <span className="text-center text-xl sm:text-sm md:text-lg w-full">
            Sign up and get 20% off to your first order.
            <a href="/signup" className="underline font-medium">
              Sign Up Now
            </a>
          </span>
          <X
            size={24}
            className="cursor-pointer"
            onClick={() => setShowBanner(false)}
          />
        </div>
      )}
    </>
  );
};

export default ShowBanner;
