import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Headphones, 
  Wallet, 
  Globe,
  Lock,
  Clock
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function Features() {
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

  const features: Feature[] = [
    {
      icon: Zap,
      title: 'Lightning-Fast Execution',
      description: 'Execute trades in microseconds with our cutting-edge infrastructure and direct market access.',
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Military-grade encryption, cold storage, and 2FA protect your assets 24/7.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Advanced charting tools, technical indicators, and AI-powered insights at your fingertips.',
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Our dedicated team of trading experts is always available to assist you.',
    },
    {
      icon: Wallet,
      title: 'Multi-Asset Wallet',
      description: 'Store, manage, and trade multiple cryptocurrencies and assets in one secure place.',
    },
    {
      icon: Globe,
      title: 'Global Liquidity',
      description: 'Access deep liquidity pools and trade across multiple exchanges simultaneously.',
    },
    {
      icon: Lock,
      title: 'Regulatory Compliance',
      description: 'Fully licensed and compliant with international financial regulations.',
    },
    {
      icon: Clock,
      title: 'Instant Deposits',
      description: 'Fund your account instantly with multiple payment methods and zero fees.',
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#fafafa] overflow-hidden"
    >

      <div className="absolute left-0 right-0 top-0 h-[1px]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
          <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="black" strokeWidth="1" strokeDasharray="1 8" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="absolute left-0 right-0 bottom-10 h-[1px]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
          <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="black" strokeWidth="1" strokeDasharray="1 8" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#ffeddb] to-[#ffac7c] border border-[#f37328]/20">
            <span className="text-sm text-[#f37328] uppercase tracking-wider">Platform Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-black max-w-3xl mx-auto font-serif">
            Everything You Need to{' '}
            <span className="text-[#f37328]">Trade Smart</span>
          </h2>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto">
            Professional-grade tools and enterprise security, designed for traders of all levels.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-2xl bg-white border border-black/10 hover:border-[#f37328]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffeddb] to-[#ffac7c] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-[#f37328]" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-black">
                      {feature.title}
                    </h3>
                    <p className="text-black/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
