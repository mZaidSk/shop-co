import Navbar from "../Header/Nav";
import ShowBanner from "../Header/ShowBanner";

const Header = () => {
  return (
    <header className="w-full">
      <ShowBanner/>
      <Navbar />
    </header>
  );
};

export default Header;
