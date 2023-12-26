"use client";
import React from "react";
import Image from "next/image";
import myPhoto from "@/public/Pic.png";
import SectionDivider from "./section-divider";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section>
      <motion.div
        ref={ref}
        className="flex flex-col-reverse lg:flex-row justify-evenly items-center p-5 gap-2 scroll-mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <div className="flex flex-col leading-8">
          <h2 className="text-3xl font-medium capitalize mb-8 ml-8">
            About Me
          </h2>
          <p className="text-left sm:text-xl text-[1rem]] pl-10 font-light">
            My journey with computer-related programs began in Junior High
            School, where I started creating simple web pages using{" "}
            <span className="font-medium">HTML</span> and{" "}
            <span className="font-medium">CSS</span>, setting the foundation for
            my passion that has guided me through my college years.
          </p>
          <p className="sm:text-xl text-[1rem]] text-left pl-10 mt-10 font-light">
            During my academic journey, I, along with my teammates, developed a{" "}
            <a
              href="https://student-offense.vercel.app/"
              className="italic font-medium no-underline"
              target="_blank"
            >
              Student Offense Record Management System
            </a>
            —a web application designed to track, manage, and generate reports.
            We implemented the system using the{" "}
            <span className="font-medium">MERN</span> stack. That led me to
            creating my first personal project,{" "}
            <a
              href="http://gastosko.vercel.app/"
              className="italic font-medium no-underline"
              target="_blank"
            >
              GastosKo
            </a>
            , another web application aimed at helping users track their
            expenses. This project was developed using the{" "}
            <span className="font-medium">MERN</span> stack as well.
          </p>
        </div>
        <Image
          src={myPhoto}
          height={550}
          priority
          alt="Me, myself and I."
          className="sm:h-auto sm:w-auto h-[500px] w-[383px] pr-2"
        />
      </motion.div>
      <SectionDivider />
    </section>
  );
}
