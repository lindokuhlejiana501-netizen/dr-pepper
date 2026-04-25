import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorGrid from './components/FlavorGrid';
import Perks from './components/Perks';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-cream selection:bg-brand-maroon selection:text-brand-cream">
      <Navbar />
      <Hero />
      <FlavorGrid />
      <Perks />
      <Footer />
    </main>
  );
}

