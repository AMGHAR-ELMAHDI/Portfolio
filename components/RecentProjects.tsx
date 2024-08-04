import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

function RecentProjects() {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple"> Recent projects </span>
        </h1>
        <div className=" flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className=" lg:min-h-[32.5rem] border border-red-200 h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={project.title} href={project.link} className="space-y-3">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg" />
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {project.title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {project.des}
                </p>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
