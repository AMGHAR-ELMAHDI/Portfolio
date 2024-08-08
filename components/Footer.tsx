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

const words = [
  {
    text: "Email",
    className: "text-purple",
  },
];

function Footer() {
  return (
    <footer className="pt-20 pb-10 w-full border border-red-500" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="backGroundGrid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading">
          It all starts with a conversation.{" "}
          <span className="text-purple">Contact</span>
        </h1>
      </div>
      
      <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
        <TextRevealCard
          text="Email"
          revealText="amgharmahdi1@gmail.com"
        >
          <TextRevealCardTitle>
            Hover over the card to reveal the hidden Email.
          </TextRevealCardTitle>
        </TextRevealCard>
      </div>
    </footer>
  );
}

export default Footer;
