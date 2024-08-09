import React from "react";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/Typewriter-effect";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/Text-reveal-card";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const words = [
  {
    text: "Email",
    className: "text-purple",
  },
];

function Footer() {
  return (
    <footer className="pt-20 pb-10 w-full" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="backGroundGrid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading pb-20">
          It all starts with a <span className="text-purple">Conversation</span>
        </h1>
        <div className="flex items-center justify-center h-fit rounded-2xl w-full">
          <TextRevealCard
            text="Email"
            revealText="amgharmahdi1@gmail.com "
            className="text-purple text-xs"
          >
            <TextRevealCardTitle>Contact</TextRevealCardTitle>
            <TextRevealCardDescription>
              Hover over the card to reveal the hidden Email.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
        <a href="mailto:amgharmahdi1@gmail.com" className="mt-10">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex md:flex-row flex-col justify-between items-center gap-3">
        <p className="text-base sm:text-sm font-normal sm:font-light">
          CopyRight © 2024 ELMAHDI AMGHAR
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((social, index) => (
            <div
              key={index}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-200 bg-opacity-75 rounded-full bg-black-200 border border-black-300"
            >
              <img src={social.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
