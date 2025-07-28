export default function CTA() {
  return (
    <section className="relative w-full min-h-[400px] py-24 px-4 flex items-start justify-center overflow-hidden transition-colors duration-500 bg-[#f6faff] dark:bg-zinc-950 dark:text-white">
      <div className="absolute left-1/2 top-0 w-[120vw] h-16 -translate-x-1/2 bg-gradient-to-r from-blue-500/10 via-blue-400/20 to-blue-500/10 blur-lg rounded-b-3xl -z-10" />
      <div className="mx-auto max-w-xl w-full bg-white/95 dark:bg-zinc-900 rounded-2xl shadow-xl dark:shadow-2xl flex flex-col items-center text-center px-4 sm:px-8 py-10 sm:py-14 gap-6 sm:gap-8 relative z-10 mt-8 mb-8 border border-blue-100 dark:border-zinc-800" style={{boxShadow:'0 8px 40px 0 #0002, 0 0 0 1px #e0e7ef'}}>
        <h2 className="text-3xl sm:text-4xl font-extrabold drop-shadow-lg tracking-tight text-blue-900 dark:text-white">Ready to Eat Smarter with <span className="text-blue-700 dark:text-blue-400">Avi</span>?</h2>
        <p className="text-blue-700 dark:text-zinc-300 text-lg mb-2 max-w-md">Join hundreds getting personalized nutrition guidance today.</p>
        <a
          href="#get-started"
          className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold rounded-xl shadow-xl transition-all duration-200 ring-2 ring-blue-500/30 hover:ring-blue-400/60 focus:outline-none focus:ring-4 focus:ring-blue-400/80 text-lg animate-glow"
        >
          Get Started
        </a>
      </div>
      <style>{`
        .animate-glow {
          box-shadow: 0 0 32px 4px #3b82f6cc, 0 2px 8px 0 #0003;
        }
      `}</style>
    </section>
  );
}
