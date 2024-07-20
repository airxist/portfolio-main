import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          React out to me today and let&apos;s discuss how i can help you achieve
          your goals.
        </p>
        <a href="mailto:josemariaofurum@gmail.com">
          <MagicButton title="Let's get in touch" />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col  justify-between items-center">
        <p className="md:text-base text-sm font-light md:font-normal">
          Copywright 2024 Airxist
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 rounded-lg">
              <Image src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
