import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Nav from "./components/Nav";
// import Services from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        {/* <Services /> */}
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
