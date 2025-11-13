import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';




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
          <div className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-[#ffeddb] to-[#ffac7c] border border-[#f37328]/20 shadow-cyan-900">
            <span className="text-sm text-gray-900 uppercase tracking-wider">Platform Features
              <span className="absolute bottom-0 left-0 h-full -ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-full opacity-100 object-stretch"
          viewBox="0 0 487 487"
        >
          <path
            fillOpacity=".1"
            fillRule="nonzero"
            fill="#FFF"
            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
          ></path>
        </svg>
      </span>
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-black max-w-3xl mx-auto font-normal">
            Everything You Need to{' '}
            <span className="text-[#f37328]">Trade Smart</span>
          </h2>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto">
            Professional-grade tools and enterprise security, designed for traders of all levels.
          </p>
        </motion.div>



        <div className='flex justify-center items-center w-full'>
        {/* Orange-400 gradient on top */}
        {/* Full width image */}
        <img src="src/assets/dashboard.png" alt="img" className='w-[900px] h-[600px]' />
      </div>

        
      </div>
    </section>
  );
}
