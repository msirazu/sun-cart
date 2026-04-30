import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaPhone, FaX } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const FooterMain = () => {
    const date = new Date();
    return (
        <div className="bg-footer text-white p-5">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="space-y-2">
                <h4 className="font-bold">Contact Us</h4>
                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-1 text-sm"><FaPhone className="text-sm"/>123-456-789</p>
                    <p className="flex items-center gap-1 text-sm"><MdEmail className="text-sm"/>info@test.com</p>
                </div>
            </div>

            <div className="space-y-2">
                <h4 className="font-bold">Social Links</h4>
                <div className="flex items-center gap-2 text-sm">
                    <FaFacebook />
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaX/>
                </div>
            </div>

            <div>
                <h4 className="font-bold">Quick Links</h4>
                <ul className="text-sm">
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </section>
        <hr className="border-gray-700 my-5"/>
        <section>
            <p className="text-center text-[12px]">Copyright {date.getFullYear()} - <span className="font-bold">SunCart</span>. All Rights Reserved</p>
        </section>
        </div>
    );
};

export default FooterMain;