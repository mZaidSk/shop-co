import FooterNewsletter from "../Footer/FooterNewsletter";
import FooterInfo from "../Footer/FooterInfo";
import CopyRight from "../Footer/CopyRight";

const Footer = () => {
    return (
        <div>
            <FooterNewsletter />
            <FooterInfo />

            <hr />

            <CopyRight />
        </div>
    );
};

export default Footer;
