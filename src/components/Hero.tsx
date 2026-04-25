import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-brand-cream">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[800px] h-[800px] bg-brand-maroon/5 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl lg:text-9xl font-display font-extrabold leading-[0.85] tracking-tighter text-brand-maroon uppercase mb-8">
              The <br /> One You <br /> <span className="text-stroke text-brand-maroon">Crave</span>
            </h1>
            <p className="text-lg text-brand-dark/70 max-w-md mb-10 leading-relaxed">
              23 flavors. One legendary taste. Since 1885, we've been crafting the unique blend that defies description.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand-maroon text-brand-cream px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 active:scale-95 transition-transform">
                Shop Now
              </button>
              <button className="border-2 border-brand-maroon text-brand-maroon px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-brand-maroon hover:text-brand-cream transition-all">
                Find a Store
              </button>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center relative">
          {/* Mock Can representation using CSS */}
          <motion.div
            initial={{ y: 100, opacity: 0, rotate: -15 }}
            animate={{ y: 0, opacity: 1, rotate: -10 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="w-64 h-[450px] bg-brand-maroon rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center justify-between py-12 p-4 border-4 border-white/10"
          >
            <div className="w-full h-32 bg-white/5 absolute top-0 skew-y-12" />
            <div className="text-4xl font-display font-black text-brand-cream tracking-tighter drop-shadow-lg z-10">
              DR <br /> PEPPER
            </div>
            <div className="text-[10px] font-bold text-brand-cream/40 uppercase tracking-[0.3em] rotate-90 absolute right-4 top-1/2 -translate-y-1/2">
              Original 23 Flavors
            </div>
            <div className="w-full text-center">
              <div className="text-xs font-bold text-brand-cream mb-1">SINCE 1885</div>
              <div className="text-[8px] opacity-60 text-brand-cream px-4">THE UNIQUE BLEND OF 23 SIGNATURE FLAVORS</div>
            </div>
            {/* Fizz particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [-20, -100], 
                  opacity: [0, 1, 0],
                  x: [0, (i % 2 === 0 ? 20 : -20)]
                }}
                transition={{ 
                  duration: 2 + i, 
                  repeat: Infinity, 
                  delay: i * 0.5 
                }}
                className="absolute w-1 h-1 bg-brand-cream/30 rounded-full"
                style={{ left: `${20 + (i * 12)}%`, bottom: '20%' }}
              />
            ))}
          </motion.div>
          
          {/* Splash background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] aspect-square bg-brand-maroon/10 rounded-full blur-2xl" />
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ArrowDown className="text-brand-maroon opacity-30" />
      </motion.div>
    </section>
  );
}
