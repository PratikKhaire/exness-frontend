import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export function SocialProof() {
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

  const logos = [
    { name: 'Forbes', width: 'w-24' },
    { name: 'Bloomberg', width: 'w-32' },
    { name: 'TechCrunch', width: 'w-28' },
    { name: 'WSJ', width: 'w-20' },
    { name: 'Reuters', width: 'w-28' },
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      role: 'Professional Trader',
      content: 'TradePro has completely transformed my trading experience. The execution speed is unmatched, and the analytics tools are incredibly powerful.',
      rating: 5,
      avatar: 'SC',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Crypto Investor',
      content: 'Finally, a platform that combines institutional-grade security with an intuitive interface. The 24/7 support team is exceptional.',
      rating: 5,
      avatar: 'MR',
    },
    {
      name: 'Emily Thompson',
      role: 'Day Trader',
      content: 'The real-time data and advanced charting have given me a serious edge. Best trading platform I\'ve used in my 10-year career.',
      rating: 5,
      avatar: 'ET',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#fafafa] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* As Seen On Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-black/40 uppercase tracking-widest text-sm mb-8">
            As Seen On
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${logo.width} h-8 flex items-center justify-center`}
              >
                <div className="text-black/30 hover:text-black/60 transition-colors duration-300 tracking-tight">
                  {logo.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { value: '1M+', label: 'Active Traders' },
            { value: '$2B+', label: 'Daily Trading Volume' },
            { value: '4.9/5', label: 'User Rating' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-white border border-black/10"
            >
              <div className="text-4xl md:text-5xl text-black mb-2 bg-gradient-to-r from-[#f37328] to-[#ffac7c] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-black/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#ffeddb] to-[#ffac7c] border border-[#f37328]/20">
              <span className="text-sm text-[#f37328] uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-black font-serif">
              Trusted by Traders Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white border border-black/10 hover:border-[#f37328]/30 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-[#f37328]" />
                </div>

                <div className="relative space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f37328] text-[#f37328]" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-black/70 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f37328] to-[#ffac7c] flex items-center justify-center text-white text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-black text-sm">{testimonial.name}</div>
                      <div className="text-black/50 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
