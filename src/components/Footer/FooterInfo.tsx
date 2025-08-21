import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

const FooterInfo = () => {
    return (
        <footer className="bg-gray-100 p-10 sm:p-8">
            <div className="mx-auto">
                {/* Top section */}
                <div className="flex flex-col lg:flex-row lg:ml-0 md:ml-35 lg:justify-between lg:items-start gap-10">
                    {/* Logo & social */}
                    <div className="space-y-6 text-center lg:text-center max-w-sm">
                        <h2 className="font-bold text-4xl">SHOP.CO</h2>
                        <p className="text-gray-600">
                            We have clothes that suits your style and which
                            you're proud to wear. From women to men.
                        </p>
                        <div className="flex justify-center lg:justify-center space-x-3">
                            <Twitter size={20} className="cursor-pointer" />
                            <Facebook size={20} className="cursor-pointer" />
                            <Instagram size={20} className="cursor-pointer" />
                            <Github size={20} className="cursor-pointer" />
                        </div>
                    </div>

                    {/* Menu sections */}
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                        <div>
                            <h3 className="font-semibold text-lg mb-4">
                                COMPANY
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/features">Features</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/works">Works</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/career">Career</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">HELP</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    <NavLink to="/support">
                                        Customer Support
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/delivery">
                                        Delivery Details
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/terms">
                                        Terms & Conditions
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/privacy">
                                        Privacy Policy
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">FAQ</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    <NavLink to="/account">Account</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manage-deliveries">
                                        Manage Deliveries
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/orders">Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/payment">Payment</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">
                                RESOURCES
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    <NavLink to="/ebook">Free eBook</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tutorial">
                                        Development Tutorial
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog">How to - Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/youtube">
                                        Youtube Playlist
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterInfo;
