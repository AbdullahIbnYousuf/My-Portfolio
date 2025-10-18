import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* heading */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">
            About
            <span className="text-purple"> Me</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            I am a passionate Full Stack Developer with experience in building
            modern web applications. My skills include React, Node.js, and more.
          </p>
        </div>
        {/* image + text section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image */}
          <div className="mx-auto md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
              alt="Profile"
            />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Who Am I?</h3>
              <p className="text-gray-300 mb-6">
                I am a Full Stack Developer with a passion for creating dynamic
                web applications. My expertise lies in both front-end and
                back-end development, allowing me to build complete solutions.
              </p>
              <p className="text-gray-300 mb-6">
                I am constantly learning and adapting to new technologies to
                improve my skills and deliver the best results for my clients.
              </p>
              {/* cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 p-6 rounded-2xl hover:-translate-y-2 cursor-pointer transition-transform duration-300"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{data.title}</h4>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
