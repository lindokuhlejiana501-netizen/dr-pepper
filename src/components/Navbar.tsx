import { motion } from 'motion/react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference invert">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-8"
      >
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Menu size={24} />
        </button>
        <div className="hidden md:flex gap-6 uppercase text-xs font-bold tracking-widest">
          <a href="#flavors" className="hover:opacity-60 transition-opacity">Flavors</a>
          <a href="#perks" className="hover:opacity-60 transition-opacity">Perks</a>
          <a href="#story" className="hover:opacity-60 transition-opacity">Our Story</a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-display font-extrabold tracking-tighter"
      >
        DR PEPPER
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-6"
      >
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Search size={22} />
        </button>
        <button className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
          <ShoppingBag size={22} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </motion.div>
    </nav>
  );
}
