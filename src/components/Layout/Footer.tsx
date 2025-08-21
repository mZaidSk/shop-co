import FooterNewsletter from "../Footer/FooterNewsletter";
import FooterInfo from "../Footer/FooterInfo";
import CopyRight from "../Footer/CopyRight";

const Footer = () => {
  return (
    <>
      <FooterNewsletter />
      <FooterInfo />

      <hr className="ml-20 mr-15" />

      <CopyRight />
    </>
  );
};

export default Footer;
