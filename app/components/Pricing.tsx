const plans = [
  {
    title: "Free",
    price: "$0/mo",
    features: [
      "Basic AI nutrition advice",
      "Limited meal planning",
      "Community support",
    ],
    highlighted: false,
  },
  {
    title: "Pro",
    price: "$9/mo",
    features: [
      "Personalized insights",
      "Advanced meal planning",
      "Progress tracking",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    title: "Premium",
    price: "$19/mo",
    features: [
      "All Pro features",
      "1-on-1 nutrition coaching",
      "Custom meal plans",
      "Early access to new features",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden transition-colors duration-500 bg-[#f6faff] dark:bg-zinc-950 dark:text-white">
      {/* Decorative divider */}
      <div className="absolute left-1/2 top-0 w-[120vw] h-16 -translate-x-1/2 bg-gradient-to-r from-blue-500/10 via-blue-400/20 to-blue-500/10 blur-lg rounded-b-3xl -z-10" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 relative z-10 px-2 sm:px-0">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="flex flex-col items-center text-center rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl transition-all duration-300 bg-white/95 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/30 group w-full min-w-0"
          >
            <h3 className="text-2xl font-extrabold text-blue-900 dark:text-white mb-2 tracking-tight drop-shadow">{plan.title}</h3>
            <div className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-4 drop-shadow-lg">{plan.price}</div>
            <ul className="text-blue-700 dark:text-zinc-300 text-base mb-6 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center justify-center gap-2">
                  <span className="text-blue-500 dark:text-blue-400">•</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className="w-full py-3 px-6 rounded-lg font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-xl text-lg animate-glow"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
      <style>{`
        .animate-glow {
          box-shadow: 0 0 24px 2px #3b82f6cc, 0 2px 8px 0 #0003;
        }
      `}</style>
    </section>
  );
}
