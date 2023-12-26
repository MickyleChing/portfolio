"use client";

import { experiencesData, schoolData } from "@/lib/data";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionDivider from "./section-divider";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  return (
    <section ref={ref} id="experience" className="scroll-mt-16">
      <div className="flex items-center justify-center z-[999]">
        <SectionHeading>Experience</SectionHeading>
      </div>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2 rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-bold">{item.company}</h3>
              <h3 className="italic dark:text-white/75">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!font-normal !mt-1 text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>

      <VerticalTimeline lineColor="">
        {schoolData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2 rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-bold dark:text-white/75">{item.school}</h3>
              <h3 className="italic dark:text-white/75">
                {item.degree} {item.course}
              </h3>
              {item.awards && item.awards.length > 0 && (
                <div>
                  <p className="font-normal !mt-0">Awards:</p>
                  <p className="italic !mt-0">{item.award}</p>
                  <table className="table-auto sm:text-[.9rem] text-xs !font-normal !mt-1 text-gray-700 dark:text-white/75">
                    <thead>
                      <tr>
                        <th>Year Level</th>
                        <th>Semester</th>
                        <th>Award</th>
                        <th>Year</th>
                      </tr>
                    </thead>

                    {Array.isArray(item.awards) &&
                      item.awards.map((award, awardData) => (
                        <React.Fragment key={awardData}>
                          <tbody>
                            <tr>
                              <td className="px-6">{award.yearLevel}</td>
                              <td className="px-3">{award.semester}</td>
                              <td className="px-3">{award.title}</td>
                              <td className="px-3">{award.year}</td>
                            </tr>
                          </tbody>
                        </React.Fragment>
                      ))}
                  </table>
                </div>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      <SectionDivider />
    </section>
  );
}
