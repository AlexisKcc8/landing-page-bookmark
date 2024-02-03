import { ContactUs } from "./layouts/ContactUs.JSX";
import { Download } from "./layouts/Download";
import { Features } from "./layouts/Features";
import { Footer } from "./layouts/Footer";
import { FrequentlyAsked } from "./layouts/FrequentlyAsked";
import { Hero } from "./layouts/Hero";
import { Navbar } from "./layouts/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-white ">
        <Hero />
        <Features />
        <Download />
        <FrequentlyAsked />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

export default App;
