import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Wallet, TrendingUp, ArrowRight } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

export function HowItWorks() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps: Step[] = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Create Your Account',
      description: 'Sign up in minutes with just your email. No hidden fees, no complicated forms.',
    },
    {
      number: '02',
      icon: Wallet,
      title: 'Fund Your Wallet',
      description: 'Deposit funds instantly using bank transfer, credit card, or cryptocurrency.',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Start Trading',
      description: 'Access thousands of markets and start trading with advanced tools and real-time data.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#ffeddb] to-[#ffac7c] border border-[#f37328]/20">
            <span className="text-sm text-[#f37328] uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-black max-w-3xl mx-auto font-serif">
            Start Trading in{' '}
            <span className="text-[#f37328]">3 Simple Steps</span>
          </h2>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto">
            Get started with TradePro in less than 5 minutes. It's fast, secure, and incredibly easy.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connection lines - desktop only */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step card */}
                <div className="relative p-8 rounded-2xl bg-white border border-black/10 hover:border-[#f37328]/30 hover:shadow-lg transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-[#f37328] to-[#ffac7c] text-white text-sm">
                    {step.number}
                  </div>

                  <div className="space-y-6 pt-4">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ffeddb] to-[#ffac7c] border border-[#f37328]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#f37328]" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl text-black">
                        {step.title}
                      </h3>
                      <p className="text-black/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow indicator - not on last item */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-[#f37328]" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-black/60 mb-4">Ready to get started?</p>
          <button className="relative px-8 py-3 bg-gradient-to-b from-[#ffeddb] via-[#ffac7c] to-[#f37328] rounded-[14px] border-2 border-[#ff5d00] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group overflow-hidden">
            <div className="absolute inset-0 shadow-[0px_4px_0.4px_0px_inset_rgba(251,186,117,0.77)]" />
            <span className="relative text-white capitalize inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Create Your Free Account
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
