import visaPng from "../../assets/images/footer-img/visa.png";
import mastercardPng from "../../assets/images/footer-img/mastercard.png";
import paypalJpg from "../../assets/images/footer-img/paypal.jpg";
import applepayPng from "../../assets/images/footer-img/applepay.png";
import googlepayPng from "../../assets/images/footer-img/googlepay.png";
const CopyRight = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-center py-5">
                <div className="text-black text-sm">
                    Shop.co&copy;2000-2023, All Rights Reserved
                </div>
                <div className="flex space-x-4 items-center">
                    <div className="bg-white p-2 rounded shadow">
                        <img
                            src={visaPng}
                            alt="Visa"
                            className="w-8 h-5 object-contain"
                        />
                    </div>
                    <div className="bg-white p-2 rounded shadow">
                        <img
                            src={mastercardPng}
                            alt="Mastercard"
                            className="w-8 h-5 object-contain"
                        />
                    </div>
                    <div className="bg-white p-2 rounded shadow">
                        <img
                            src={paypalJpg}
                            alt="PayPal"
                            className="w-8 h-5 object-contain"
                        />
                    </div>
                    <div className="bg-white p-2 rounded shadow">
                        <img
                            src={applepayPng}
                            alt="Apple Pay"
                            className="w-8 h-5 object-contain"
                        />
                    </div>
                    <div className="bg-white p-2 rounded shadow">
                        <img
                            src={googlepayPng}
                            alt="Google Pay"
                            className="w-8 h-5 object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CopyRight;
