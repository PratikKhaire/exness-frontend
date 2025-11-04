import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MarketTicker } from './MarketTicker';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-15 pb-20">
      {/* Decorative dashed lines - vertical */}
      <div className="absolute left-[7%] top-0 bottom-0 w-[1px]">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1 100">
          <line x1="0.5" y1="0" x2="0.5" y2="100" stroke="black" strokeWidth="1" strokeDasharray="1 8" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="absolute right-[7%] top-0 bottom-0 w-[1px]">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1 100">
          <line x1="0.5" y1="0" x2="0.5" y2="100" stroke="black" strokeWidth="1" strokeDasharray="1 8" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      {/* Decorative dashed lines - horizontal */}
      <div className="absolute left-0 right-0 top-12 h-[1px]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
          <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="black" strokeWidth="1" strokeDasharray="1 8" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[1px]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
          <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="black" strokeWidth="1" strokeDasharray="1 8" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 ">
        <div className="text-center space-y-4">
          {/* Top CTA bar - without Sign In button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/20 text-xl mt-3"
          >
            <span className="text-black/70 capitalize font-koho text-xl ">To start trading with us</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black capitalize font-serif font-normal mx-auto leading-none   text-center -tracking-[3px]
"
            style={{
              fontSize: 'clamp(64px, 7vw, 128px)',
              maxWidth: '765px'
            }}
          >
            trade like pro
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black  capitalize font-serif font-normal mx-auto leading-none  pt-1"
            style={{
              fontSize: 'clamp(32px, 35px, 64px)',
              maxWidth: '950px'
            }}
          >
            Boost Profits Instantly With Smart trading system
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-[rgba(54,54,54,0.81)] capitalize max-w-2xl mx-auto leading-relaxed font-koho pt-2"
          >
            Make confident trades with cutting-edge AI technology.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <button className="relative px-8 py-3 bg-gradient-to-b from-[#ffeddb] via-[#ffac7c] to-[#f37328] rounded-[14px] border-2 border-[#ff5d00] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group overflow-hidden transition-all hover:scale-105">
              <div className="absolute inset-0 shadow-[0px_4px_0.4px_0px_inset_rgba(251,186,117,0.77)] rounded-[14px]" />
              <span className="relative text-white capitalize inline-flex items-center gap-2 group-hover:gap-3 transition-all font-koho font-bold">
                Start
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Market Ticker integrated into Hero */}
      <div className="absolute bottom-10 left-0 right-0">
        <MarketTicker />
      </div>
    </section>
  );
}
