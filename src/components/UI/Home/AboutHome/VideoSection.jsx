"use client";
import React from "react";
import { motion } from "framer-motion";

const VideoSection = ({ aboutData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,

        scale: 1,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: false }}
    >
      <div className="bg-[#B5B7FC] rounded-lg">
        <div className="relative left-3 bottom-3 w-full h-auto">
          <iframe
            className="w-full h-[400px] md:h-[500px] rounded-lg"
            src={aboutData?.video_url}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoSection;
