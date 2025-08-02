import { MailCheck } from "lucide-react";

const FooterNewsletter = () => {
  return (
    <>
      <div className="offer-container bg-black text-white m-15 p-10 rounded-2xl flex items-center">
        <p className="font-bold text-4xl w-110">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="email space-y-4 m-auto">
          <div className="flex items-center bg-white rounded-full h-10 px-4 w-full">
            <MailCheck size="{20}" className="text-black mr-2" />
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
    </>
  );
};

export default FooterNewsletter;