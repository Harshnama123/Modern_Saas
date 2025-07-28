
function Footer() {
  return (
    <>
      {/* White divider line */}
      <div className="w-full h-[2px] bg-white/10 my-0" />
    <footer className="relative w-full pt-16 pb-8 px-4 overflow-hidden transition-colors duration-500 bg-[#f6faff] dark:bg-zinc-950 dark:text-zinc-300">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
          {/* Logo/Company Name */}
          <div className="flex items-center gap-2 select-none">
            <span className="text-2xl font-extrabold tracking-tight text-blue-900 dark:text-white">Avi Nutrition</span>
            <span className="w-3 h-3 rounded-full bg-blue-500 inline-block animate-pulse" />
          </div>
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-base font-medium mt-4 md:mt-0">
            <a href="#home" className="text-blue-800 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors focus:underline">Home</a>
            <a href="#features" className="text-blue-800 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors focus:underline">Features</a>
            <a href="#pricing" className="text-blue-800 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors focus:underline">Pricing</a>
            <a href="#testimonials" className="text-blue-800 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors focus:underline">Testimonials</a>
            <a href="#contact" className="text-blue-800 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors focus:underline">Contact</a>
          </nav>
        </div>
        <div className="max-w-5xl mx-auto mt-8 text-center text-sm text-blue-700 dark:text-zinc-500">
          © {new Date().getFullYear()} Avi Nutrition. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
