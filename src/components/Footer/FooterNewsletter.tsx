import { Mail } from "lucide-react";
import { useState } from "react";

const FooterNewsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter an email address");
      return;
    }

    setLoading(true);

    // Simulate success
    setTimeout(() => {
      alert(`Subscribed successfully with ${email}`);
      setEmail(""); // Clear input
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-black text-white md:m-16 m-2 p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
      
      {/* Left side - Heading */}
      <p className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center lg:text-left leading-tight">
        STAY UPTO DATE ABOUT <br className="hidden lg:block" /> OUR LATEST OFFERS
      </p>

      {/* Right side - Email & Button */}
      <div className="flex flex-col items-center gap-4 w-full max-w-md lg:items-start">
        
        {/* Email Input */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-70">
          <Mail size={20} className="text-black mr-2" />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
            className="flex-1 bg-transparent outline-none text-black placeholder-gray-500"
          />
        </div>

        {/* Subscribe Button */}
        <button
          onClick={handleSubscribe}
          type="button"
          disabled={loading}
          className={`bg-white text-black font-medium rounded-full px-6 py-2 w-70 hover:bg-gray-200 transition lg:w-70 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Subscribing..." : "Subscribe to Newsletter"}
        </button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
