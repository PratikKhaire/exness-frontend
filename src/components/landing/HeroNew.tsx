import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-16">
      {/* Decorative dashed lines - horizontal */}
      <div className="absolute left-0 right-0 top-20 h-[1px]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
          <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="black" strokeWidth="1" strokeDasharray="1 8" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="absolute left-0 right-0 bottom-20 h-[1px]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
          <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="black" strokeWidth="1" strokeDasharray="1 8" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Top CTA bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white border border-black"
          >
            <button className="relative px-6 py-2 bg-gradient-to-b from-[#ffeddb] via-[#ffac7c] to-[#f37328] rounded-[14px] border-2 border-[#ff5d00] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="absolute inset-0 shadow-[0px_4px_0.4px_0px_inset_rgba(251,186,117,0.77)] rounded-[14px]" />
              <span className="relative text-white capitalize font-koho font-bold">Sign In</span>
            </button>
            <span className="text-black capitalize font-koho">To start trading with us</span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black capitalize font-serif max-w-5xl mx-auto leading-tight tracking-tight">
              Trade Like Pro
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black capitalize font-serif max-w-4xl mx-auto leading-tight"
          >
            Boost Profits Instantly With Smart AI
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-[rgba(54,54,54,0.81)] capitalize max-w-3xl mx-auto leading-relaxed font-koho"
          >
            Make confident trades with cutting-edge AI technology.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <button className="relative px-8 py-3 bg-black rounded-[14px] border-2 border-[#ff5d00] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group overflow-hidden transition-all hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-[#ffeddb] via-[#ffac7c] to-[#f37328] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[14px]" />
              <div className="absolute inset-0 shadow-[0px_4px_0.4px_0px_inset_rgba(251,186,117,0.77)] rounded-[14px]" />
              <span className="relative text-white capitalize inline-flex items-center gap-2 group-hover:gap-3 transition-all font-koho font-bold">
                Start
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
