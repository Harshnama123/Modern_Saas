"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden transition-colors duration-500 bg-[#f6faff] dark:bg-zinc-950">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 w-[600px] h-[400px] bg-blue-600 opacity-30 blur-3xl rounded-full animate-pulse -translate-x-1/2" />
        <div className="absolute right-1/4 top-1/4 w-[300px] h-[300px] bg-purple-500 opacity-20 blur-2xl rounded-full animate-blob" />
        <div className="absolute left-1/4 bottom-0 w-[300px] h-[300px] bg-cyan-400 opacity-20 blur-2xl rounded-full animate-blob animation-delay-2000" />
      </div>
      <div className="flex flex-col items-center text-center max-w-2xl w-full gap-8 transition-colors duration-500 bg-white/95 dark:bg-zinc-900 dark:text-white shadow-2xl dark:shadow-none rounded-2xl p-10 border border-blue-100 dark:border-zinc-800">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-2 drop-shadow-lg tracking-tight text-blue-900 dark:text-white"
        >
          Meet <span className="text-blue-500">Avi</span>, Your AI Nutrition Copilot
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-2xl text-blue-700 dark:text-zinc-300 mb-6 max-w-xl mx-auto"
        >
          Helping you eat <span className="text-blue-400 font-semibold">better</span>, <span className="text-blue-400 font-semibold">smarter</span>, and <span className="text-blue-400 font-semibold">healthier</span> — effortlessly.
        </motion.p>
        <motion.a
          href="#get-started"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold rounded-xl shadow-xl transition-all duration-200 ring-2 ring-blue-400/30 hover:ring-blue-400/60 focus:outline-none focus:ring-4 focus:ring-blue-400/80 text-lg mt-2 animate-glow"
        >
          Get Started
        </motion.a>
      </div>
      {/* Custom animation keyframes for blobs */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: scale(1) translateY(0); }
          33% { transform: scale(1.1, 0.9) translateY(-20px); }
          66% { transform: scale(0.9, 1.1) translateY(20px); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-glow {
          box-shadow: 0 0 32px 4px #3b82f6cc, 0 2px 8px 0 #0003;
        }
      `}</style>
    </section>
  );
}
