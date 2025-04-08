import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";

const Blog = () => {
  return (
    <div className="py-[70px] px-12 bg-slate-500 min-h-screen">
      {/* Section Skill */}
      <motion.div
        className="mt-9 bg-black/40 w-full h-auto backdrop-blur-md p-6 rounded-xl shadow-lg"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 40, damping: 12, duration: 1.2 }}
      >
        <h3 className="text-yellow-200 text-xl font-semibold mb-6">More Infomation ________</h3>
        <div className="flex flex-wrap gap-6 items-start">
          {[
            { icon: <FaHtml5 className="text-orange-500 text-4xl" />, label: "HTML5" },
            { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, label: "CSS3" },
            { icon: <FaJsSquare className="text-yellow-300 text-4xl" />, label: "JavaScript" },
            { icon: <FaReact className="text-cyan-400 text-4xl animate-spin-slow" />, label: "React" },
            { icon: <FaNodeJs className="text-green-500 text-4xl" />, label: "Node.js" },
            { icon: <SiVite className="text-purple-400 text-4xl" />, label: "Vite" },
            { icon: <SiTailwindcss className="text-sky-400 text-4xl" />, label: "Tailwind CSS" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 border-4 border-yellow-300 rounded-md px-4 py-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6, ease: "easeOut" }}
            >
              {skill.icon}
              <span className="text-white text-md font-medium">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
