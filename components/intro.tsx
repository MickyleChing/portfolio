"use client";

import React from "react";
import Image from "next/image";
import myPhoto from "@/public/Picture.png";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionDivider from "./section-divider";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="p-10 scroll-mt-28">
      <div className="flex flex-col-reverse sm:flex-row justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="sm:text-[2.4rem] flex-wrap   text-2xl font-bold text-center  ">
              Hi, I am Caryl Mickyle Ching!
            </h1>
            <h2 className="sm:text-[1.5rem] text-xl text-center sm:p-5">
              Aspiring Software Engineer
            </h2>
          </motion.div>
          <motion.div
            className="flex flex-wrap sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <a
              className="bg-gray-600 border-gray-950 text-gray-50 rounded-full px-7 py-3 flex items-center gap-2 focus:scale-110 hover:scale-110 hover:bg-[#add8e6] hover:text-[#1e90ff] active:scale-105 transition cursor-pointer text-sm dark:bg-white/10 dark:text-white/60"
              href="#about"
            >
              About Me
            </a>
            <a
              className="bg-gray-600 border-gray-950 text-gray-50 rounded-full px-7 py-3 flex items-center gap-2  hover:scale-110 hover:text-[#1e90ff] hover:bg-[#add8e6] transition cursor-pointer text-sm dark:bg-white/10 dark:text-white/60"
              href="/CHING-CARYL MICKYLE_CV.pdf"
              download
            >
              Download CV
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition hover:text-[#1e90ff] " />
            </a>
            <a
              className="bg-gray-600 border-gray-950 text-gray-50 rounded-full p-4 flex items-center gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:bg-[#add8e6] active:scale-105 transition cursor-pointer hover:text-[#1e90ff] dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/mickyleching29/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="bg-gray-600 border-gray-950 text-gray-50 rounded-full p-4 flex items-center gap-2 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:bg-[#add8e6] active:scale-105 transition cursor-pointer hover:text-[#1e90ff] dark:bg-white/10 dark:text-white/60"
              href="https://github.com/MickyleChing"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src={myPhoto}
            priority
            height={550}
            alt="Me, myself and I."
            className="sm:h-auto sm:w-auto h-[400px] w-[188px] pr-2"
          />
        </motion.div>
      </div>
      <SectionDivider />
    </section>
  );
}
