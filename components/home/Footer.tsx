
import { socialMediaLinks } from "@/constants";
import Link from "next/link";
import { createElement } from "react";


const Footer = () => {
  return (
    <div className="text-gray-900 flex flex-col items-center mt-5 mb-2">
        <div className="flex">
            {
                socialMediaLinks.map(({icon, link}, index) => {
                    return <Link href={link} key={index} className="text-2xl mr-4 mb-2 hover:text-gray-900/75 delay-100" target="_blank">
                        {createElement(icon)}
                    </Link>
                })
            }
        </div>

        <div className="flex justify-between mb-2">
            <span className="mr-4 ml-4">Conditions of Use</span>
            <span className="mr-4">Privacy & Policy</span>
            <span className="mr-4">Press Room</span>
        </div>

        <Link href='https://github.com/emmaGH1' className="text-gray-500" target="_blank">
           ©️ 2023 MovieBox By Maduakor Emmanuel
        </Link>

    </div>
  );
};

export default Footer;