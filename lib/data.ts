import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import SORMS from "@/public/SORMS.png";
import GastosKoDashboard from "@/public/GastosKo-Dashboard.png";

export const links = [
 /* {
    name:"Logo",
    hash:"#home",
  },*/
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company:"Scan Marine, Inc.",
    title: "IT Intern",
    location: "Manila",
    description:
      "Completed 486 hours of Supervised Industrial Training",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - July 2023",
  },
 
] as const;

export const schoolData = [
  {
    school: "Technological University of the Philippines",
    degree:"Bachelor of Science in",
    course:
      "Information System",
    award:"Cum Laude",
    awards:[
      {
        title: "President lister",
        year:"2022-2023",
        yearLevel:"4th Year",
        semester:"Second Term"
      
       },
       {
        title: "Dean lister",
        year:"2022-2023",
        yearLevel:"4th Year",
        semester:"First Term"
      
       },
       {
        title: "President lister",
        year:"2021-2022",
        yearLevel:"3rd Year",
        semester:"Second Term"
      
       },
       {
        title: "Dean lister",
        year:"2021-2022",
        yearLevel:"3rd Year",
        semester:"First Term"
      
       },
       {
        title: "Dean lister",
        year:"2020-2021",
        yearLevel:"2nd Year",
        semester:"First Term"
      
       },
       {
        title: "Dean lister",
        year:"2019-2020",
        yearLevel:"1st Year",
        semester:"Second Term"
       },
    ]as const,
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    school: "Santa Isabel College of Manila",
    degree: "STEM",
    award: "",
    awards:[],
    course:
      "Computer Programming",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2019",
  },
 
] as const;

export const projectsData = [
  {
    title: "SORMS",
    description:
      "Student Offenses Record Management System A web Application that tracks, generate, and manage student offenses.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Twilio", "Chart.js"],
    imageUrl: SORMS,
    url:"https://student-offense.vercel.app/"
  },

  {
    title: "Gastosko",
    description:
      "A web application for users to track their expenses daily",
    tags: ["MongoDB", "Express", "React", "Node.js", "Google Auth", "Chart.js"],
    imageUrl: GastosKoDashboard,
    url:"http://gastosko.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;

