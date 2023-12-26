"use client";
import React from "react";
import { motion } from "framer-motion";
export default function SectionDivider() {
  return (
    <motion.div
      className=" w-100 flex justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="bg-gray-600 w-[75%] h-1 rounded-full px-4 mb-10 mt-5"></div>
    </motion.div>
  );
}
