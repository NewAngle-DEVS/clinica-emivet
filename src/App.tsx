import { useLenis } from "./hooks/useLenis";
import { Preloader } from "./components/Preloader";
import { CustomCursor } from "./components/CustomCursor";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Experience } from "./components/Experience";
import { Campaigns } from "./components/Campaigns";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { HoursBanner } from "./components/HoursBanner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  useLenis();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Stats />
        <Experience />
        <Campaigns />
        <Gallery />
        <HoursBanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
