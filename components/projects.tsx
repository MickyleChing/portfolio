"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 sm:mt-8 mt-10 mb-[10rem]">
      <div className="md:pt-[5rem] pt-[5rem]">
        <SectionHeading>My projects</SectionHeading>
      </div>
      <div className="flex justify-center flex-wrap space-x-4 ">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
