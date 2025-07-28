const testimonials = [
  {
    quote:
      "Avi has completely changed the way I approach nutrition. It's like having a personal coach!",
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The meal plans are so easy to follow and actually fit my lifestyle. Highly recommend!",
    name: "Priya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "I love the insights and tracking. Avi makes healthy eating effortless.",
    name: "Chris Lee",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden transition-colors duration-500 bg-[#f6faff] dark:bg-zinc-950 dark:text-white">
      {/* Decorative divider */}
      <div className="absolute left-1/2 top-0 w-[120vw] h-16 -translate-x-1/2 bg-gradient-to-r from-blue-500/10 via-blue-400/20 to-blue-500/10 blur-lg rounded-b-3xl -z-10" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 relative z-10 px-2 sm:px-0">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center bg-white/95 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 rounded-2xl p-10 shadow-xl dark:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/30 text-center group"
          >
            <div className="w-20 h-20 rounded-full mb-5 border-4 border-blue-500/30 group-hover:border-blue-500/60 transition-all overflow-hidden shadow-lg">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-blue-700 dark:text-zinc-200 text-lg italic mb-4 leading-relaxed transition-colors">“{t.quote}”</p>
            <div className="text-blue-800 dark:text-blue-400 font-bold text-base tracking-wide">{t.name}</div>
          </div>
        ))}
      {/* End testimonials grid */}
      </div>
    </section>
  );
}
