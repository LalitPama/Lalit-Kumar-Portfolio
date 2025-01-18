import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText py-8">
      <div className="container mx-auto text-center">
        {/* Footer Heading */}
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
          {/* Email */}
          <a
            href="mailto:lalitpama68@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <FaEnvelope className="text-xl" />
            lalitpama68@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+918437876380"
            className="flex items-center gap-2 hover:underline"
          >
            <FaPhone className="text-xl" />
            +91 8437876380
          </a>

          {/* Location */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xl" />
            VPO Daroli (Upper), Nangal, Ropar, Punjab, India
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {/* GitHub */}
          <a
            href="https://github.com/LalitPama"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500 transition-all"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lalit-kumar2213"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500 transition-all"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Lalit Kumar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
