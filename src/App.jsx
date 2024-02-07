import { Contact } from "./layouts/Contact";
import { Download } from "./layouts/Download";
import { Features } from "./layouts/Features";
import { Footer } from "./layouts/Footer";
import { FrequentlyAsked } from "./layouts/FrequentlyAsked";
import { Hero } from "./layouts/Hero";
import { Navbar } from "./layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-white ">
        <Hero />
        <Features />
        <Download />
        <FrequentlyAsked />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
