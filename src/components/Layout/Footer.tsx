import FooterNewsletter from "../Footer/FooterNewsletter";
import FooterInfo from "../Footer/FooterInfo";
import CopyRight from "../Footer/CopyRight";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-200 shadow-2xl m-5 rounded-2xl">
        <FooterNewsletter />

        <FooterInfo />

        <hr className="ml-20 mr-15" />

        <CopyRight />
      </div>
    </>
  );
};

export default Footer;
