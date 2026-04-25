import { motion } from 'motion/react';
import { Gift, Star, Zap } from 'lucide-react';

export default function Perks() {
  return (
    <section id="perks" className="py-32 bg-brand-maroon text-brand-cream overflow-hidden relative">
      {/* Decorative large text bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-black text-[30vw] whitespace-nowrap leading-none select-none pointer-events-none uppercase">
        REWARDS REWARDS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-8xl font-display font-extrabold tracking-tighter uppercase mb-8"
          >
            Pepper <span className="text-brand-gold">Perks</span>
          </motion.h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">
            Get more out of every sip. Join the inner circle to unlock exclusive rewards, limited edition merch, and unique experiences.
          </p>
          <button className="bg-brand-gold text-brand-maroon px-12 py-6 rounded-full font-bold text-lg tracking-widest uppercase hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-black/20">
            Join the Circle
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Star size={40} />, title: 'Exclusive Access', desc: 'Be the first to taste new experimental flavors before they hit stores.' },
            { icon: <Gift size={40} />, title: 'Member Merch', desc: 'Unlock limited edition Dr Pepper collectibles and apparel.' },
            { icon: <Zap size={40} />, title: 'Bonus Points', desc: 'Scan your receipt and earn points with every purchase at any retailer.' },
          ].map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-brand-gold mb-6">{perk.icon}</div>
              <h3 className="text-2xl font-display font-bold uppercase mb-4 tracking-tighter">{perk.title}</h3>
              <p className="text-brand-cream/60 leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
