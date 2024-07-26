import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32  md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10  left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.009] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-3xl lg:maxw-[60vw] flex flex-col items-center justify-center">
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            elmahdi amghar
          </h2> */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="From Visual Concepts to Functional Code"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm  md:text-lg lg:text-xl">
            Hi there! I'm Elmahdi Amghar, a software engineer and a self-taught
            Mobile/Front-end Developer based in Morocco. I'm passionate about
            creating beautiful and functional interfaces. I'm also a student at
            1337 which is part of 42 network and UM6P.I'm always looking for new
            opportunities to learn and grow. Feel free to reach out to me if you
            have any questions or just want to chat. I'd love to hear from you!
          </p>
          <a href="#projects">
            <MagicButton title="Projects" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
