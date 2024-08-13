"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/Text-reveal-card";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { LinkPreview } from "./ui/Link-preview";

function Footer() {
  return (
    <footer className="lg:pt-20 pb-10 w-full" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading pb-20">
          It all starts with a <span className="text-purple">Conversation</span>
        </h1>
        <div className="flex items-center justify-center h-fit rounded-2xl w-full">
          <TextRevealCard
            text="Email"
            revealText="amgharmahdi1@gmail.com "
            className="text-purple text-xs bg-slate-900/[0.8] border-none"
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
              onClick={() => (window.location.href = social.link)}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-200 bg-opacity-75 rounded-full bg-black-200 border border-black-300"
            >
              <LinkPreview url={social.link}>
                <img src={social.img} width={20} height={20} />
              </LinkPreview>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
