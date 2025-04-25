import logo from "../assets/logo4.png";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3 backdrop-blur-lg bg-white/1 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="logo"
            className="w-28 h-16 object-cover rounded-md hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Socials + Resume */}
        <div className="flex items-center justify-center gap-3 text-lg">
          {/* Social Buttons */}
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/sachin.karki.3344",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/Sachin455",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/sachinkarki_19/",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/sachin-karki-772369159/",
            },
          ].map(({ icon, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md bg-white/30 hover:bg-white/40 shadow-sm text-neutral-700 hover:text-blue-600 transition"
            >
              {icon}
            </motion.a>
          ))}

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1EG0vFlrI5G7PvSHlAmsybF1E_ls09yvn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/30 hover:bg-white/40 text-sm text-neutral-800 font-medium shadow-sm transition"
          >
            <FaFileAlt className="text-blue-500" />
            Resume
          </motion.a>
        </div>
      </div>
    </nav>
  );
};
