import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-cream py-24 border-t border-brand-maroon/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-display font-black tracking-tighter text-brand-maroon mb-8">DR PEPPER</div>
            <p className="text-brand-dark/50 text-sm leading-relaxed mb-8">
              Defying expectations and descriptions since 1885. The original blend of 23 flavors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-maroon text-brand-cream flex items-center justify-center hover:scale-110 transition-transform"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-maroon text-brand-cream flex items-center justify-center hover:scale-110 transition-transform"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-maroon text-brand-cream flex items-center justify-center hover:scale-110 transition-transform"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-maroon text-brand-cream flex items-center justify-center hover:scale-110 transition-transform"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-brand-maroon/40">Shop</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Buy Online</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Merchandise</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-brand-maroon/40">Company</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Our History</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-brand-maroon/40">Legal</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Cookie Settings</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-brand-maroon/5 text-[10px] font-bold uppercase tracking-widest text-brand-maroon/40 gap-4 text-center">
          <div>© 2026 DR PEPPER/SEVEN UP, INC. ALL RIGHTS RESERVED.</div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#">Security Info</a>
            <a href="#">Sitemap</a>
            <a href="#">CA Privacy Rights</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
