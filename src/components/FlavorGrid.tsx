import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const FLAVORS = [
  { id: 1, name: 'Original', color: 'bg-brand-maroon', text: 'text-brand-cream', desc: 'The classic 23 flavor blend.' },
  { id: 2, name: 'Cherry', color: 'bg-[#8B0000]', text: 'text-brand-cream', desc: 'A smooth kick of cherry goodness.' },
  { id: 3, name: 'Cream Soda', color: 'bg-[#D2B48C]', text: 'text-brand-maroon', desc: 'Surprisingly smooth vanilla notes.' },
  { id: 4, name: 'Zero Sugar', color: 'bg-zinc-900', text: 'text-brand-cream', desc: 'Authentic taste, zero calories.' },
  { id: 5, name: 'Diet', color: 'bg-zinc-200', text: 'text-brand-maroon', desc: 'Light and crisp refreshment.' },
  { id: 6, name: 'Strawberries & Cream', color: 'bg-[#FFB7C5]', text: 'text-brand-maroon', desc: 'A sweet seasonal delight.' },
];

export default function FlavorGrid() {
  return (
    <section id="flavors" className="py-32 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-maroon/40 mb-4 block">Our Varieties</span>
            <h2 className="text-6xl font-display font-extrabold tracking-tighter text-brand-maroon uppercase">
              Pick Your <br /> <span className="text-stroke text-brand-maroon">Poison</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-brand-dark/60 leading-relaxed">
            Every sip is a unique journey. Explore our wide range of bold, refreshing flavors crafted for those who crave more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLAVORS.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative h-[500px] ${flavor.color} rounded-3xl overflow-hidden cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              
              <div className="absolute top-8 left-8">
                <h3 className={`text-4xl font-display font-black uppercase tracking-tighter ${flavor.text}`}>
                  {flavor.name}
                </h3>
                <p className={`text-xs opacity-70 mt-2 max-w-[150px] ${flavor.text}`}>
                  {flavor.desc}
                </p>
              </div>

              <div className="absolute bottom-8 right-8">
                <motion.div
                  whileHover={{ rotate: 90 }}
                  className={`w-12 h-12 rounded-full border ${flavor.text.replace('text-', 'border-')} flex items-center justify-center`}
                >
                  <Plus className={`${flavor.text}`} size={20} />
                </motion.div>
              </div>

              {/* Graphical element representing the can/flavor */}
              <motion.div 
                className={`absolute -bottom-10 -left-10 w-48 h-80 ${flavor.color} border-4 border-white/20 rounded-t-[60px] opacity-20 transform -rotate-12 translate-y-20 group-hover:translate-y-10 transition-transform duration-700`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
