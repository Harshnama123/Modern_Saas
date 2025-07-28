"use client";
import { Brain, HeartPulse, Salad } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Personalized Insights",
    description: "Get AI-driven nutrition advice tailored to your unique needs and goals.",
  },
  {
    icon: HeartPulse,
    title: "Health Tracking",
    description: "Monitor your progress and stay motivated with easy-to-understand analytics.",
  },
  {
    icon: Salad,
    title: "Smart Meal Planning",
    description: "Effortlessly plan meals and discover recipes that fit your lifestyle.",
  },
];

function Features() {
  return (
    <motion.section
      className="relative w-full py-20 px-4 overflow-hidden transition-colors duration-500 bg-[#f6faff] dark:bg-zinc-950 dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      {/* Decorative divider */}
      <div className="absolute left-1/2 top-0 w-[120vw] h-16 -translate-x-1/2 bg-gradient-to-r from-blue-500/10 via-blue-400/20 to-blue-500/10 blur-lg rounded-b-3xl -z-10" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 relative z-10 px-2 sm:px-0">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            className="flex flex-col items-center text-center bg-white/95 dark:bg-zinc-900 rounded-2xl p-10 shadow-xl dark:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/30 group border border-blue-100 dark:border-zinc-800"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-5 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors border border-blue-200 dark:border-blue-900">
              <feature.icon className="w-10 h-10 text-blue-500 drop-shadow-md" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-2 tracking-tight drop-shadow">{feature.title}</h3>
            <p className="text-blue-700 dark:text-zinc-300 text-base leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Features;
