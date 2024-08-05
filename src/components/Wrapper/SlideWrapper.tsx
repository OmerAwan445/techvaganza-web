// components/SlideWrapper.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

type SlideWrapperProps = {
  children: React.ReactNode;
};

const SlideWrapper = ({ children }: SlideWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      style={{ flex: "1 1 100%", boxSizing: "border-box" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideWrapper;
