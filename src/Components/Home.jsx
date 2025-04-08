import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import myPhoto from "../Assets/FAWWAZ.jpg";

const Home = () => {
  const scrollToDashboard = (e) => {
    e.preventDefault();
    const Dashboard = document.getElementById("dashboard");
    if (Dashboard) {
      Dashboard.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="py-14 bg-[url('https://i.pinimg.com/736x/88/cd/2f/88cd2f651957535ea2d5c25a674f19b6.jpg')] bg-cover bg-center h-screen flex items-center justify-center text-white px-16"
    >
      <div className="flex flex-col md:flex-row items-center gap-[100px]">

        {/* FOTO DAN PROFILE */}
        <div className="mt-12 flex flex-col items-center gap-4">

          {/* Foto + efek glow */}
          <motion.div
            className="relative w-[600px] h-40 md:w-60 md:h-60 rounded-full flex items-center justify-center"
            initial={{ boxShadow: "0 0 20px #ffffff44" }}
            animate={{
              boxShadow: [
                "0 0 80px #ffffff44",
                "0 0 40px #00ffff88",
                "0 0 20px #ffffff44",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {/* Foto */}
            <motion.div
              className="w-full h-full rounded-full overflow-hidden border-4 border-white z-10"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <img
                src={myPhoto}
                alt="Muhammad Fawwaz Perdana"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Glow belakang */}
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-30 z-0 animate-pulse"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </motion.div>

          {/* Teks Profile */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            My Profile
          </motion.div>

          {/* Ikon Sosial Media */}
          <motion.div
          className="flex gap-4 mt-7"
          initial={{ y: "100%", opacity: 0 }} // MUNCUL DARI BAWAH
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <a
              href="https://wa.me/62895705112267"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-500 p-2 rounded-full hover:bg-green-400 transition"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/bethoooven55"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-500 p-2 rounded-full hover:bg-pink-400 transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/Lucky Al - Fawz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-500 p-2 rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* TEKS UTAMA */}
        <motion.div
          className="text-left bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <h3 className="text-yellow-200 text-2xl">Hello World, I'm 👋</h3>
          <p className="text-4xl md:text-6xl text-yellow-200">
            <sub>Muhammad Fawwaz Perdana</sub>
          </p>

          <h3 className="mt-4">
            <ins>Full-Stack Engineer</ins>
          </h3>
          <p className="mt-4 text-yellow-200 text-lg">
            Welcome to My personal website
          </p>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full mt-6 hover:bg-yellow-400 transition">
            <a
              href="#dashboard"
              onClick={scrollToDashboard}
              rel="noopener noreferrer"
            >
              More about me!
            </a>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
