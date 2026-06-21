
import { motion } from "framer-motion";
import { BellRing } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-[#0B1220] text-white flex items-center justify-center py-8 sm:py-12">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated Glow Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-10 left-0 sm:left-10 w-60 h-60 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] bg-sky-500/20 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-0 sm:right-10 w-60 h-60 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] bg-purple-500/20 blur-[120px] rounded-full"
        />
      </div>

      {/* Floating Badge Left */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="hidden lg:block absolute left-16 xl:left-28 top-32"
      >
        <div className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10">
          🔔 Smart Reminders
        </div>
      </motion.div>

      {/* Floating Badge Right */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="hidden lg:block absolute right-16 xl:right-28 top-44"
      >
        <div className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10">
          ⚡ Productivity Boost
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl w-full px-4 sm:px-8 lg:px-12">

        {/* Animated Bell */}
        <div className="relative flex justify-center mb-8 sm:mb-12">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-sky-500/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-purple-500/20"
          />

          <motion.div
            animate={{
              y: [0, -12, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="relative bg-white/10 backdrop-blur-xl p-5 sm:p-7 rounded-full border border-white/10 shadow-2xl"
          >
            <BellRing className="text-sky-400 w-10 h-10 sm:w-14 sm:h-14" />
          </motion.div>

        </div>

        {/* Welcome Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight"
        >
          Welcome To
        </motion.h1>

        {/* Gradient Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-3 sm:mt-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent leading-tight"
        >
          Reminder Dashboard
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
          }}
          className="max-w-2xl mx-auto mt-5 sm:mt-8 text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2"
        >
          Stay organized, manage your reminders effortlessly
          and never miss important moments again.
        </motion.p>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
          }}
          className="mt-6 sm:mt-10 mx-auto w-full max-w-md sm:max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6"
        >
          <p className="text-zinc-300 text-sm sm:text-base">
            ✨ Smart Notifications • ⚡ Fast Tracking • 🔒 Secure Management
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
          }}
          className="mt-10"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 40px rgba(56,189,248,0.5)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => navigate("/remindars")}
            className="relative overflow-hidden px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg bg-gradient-to-r from-sky-500 to-purple-600"
          >
            <span className="relative z-10">
              Get Started →
            </span>

            <motion.div
              animate={{
                x: ["-100%", "250%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute inset-0 w-20 bg-white/30 skew-x-12"
            />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}

