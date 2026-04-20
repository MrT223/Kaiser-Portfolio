import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightStreaks from './components/LightStreaks';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <>
      {/* Background effects */}
      <LightStreaks />
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
