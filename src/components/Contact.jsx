import React from "react";
import { motion } from "framer-motion";
import {
    FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple"> Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-gray-200 focus:outline-none focus:border-purple"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-gray-200 focus:outline-none focus:border-purple"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-gray-200 focus:outline-none focus:border-purple"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400 mb-6">Gazipur, Board Bazar</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400 mb-6">a.a.ibnyousuf@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400 mb-6">+880 1521715737</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className=" w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:text-white hover:bg-purple transition duration-300 text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className=" w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:text-white hover:bg-purple transition duration-300 text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className=" w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:text-white hover:bg-purple transition duration-300 text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className=" w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:text-white hover:bg-purple transition duration-300 text-2xl"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
