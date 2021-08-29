import Head from "next/head";
import Footer from "../components/Footer";
import AboutSection from "../components/HomePageSections/AboutSection";
import ContactSection from "../components/HomePageSections/ContactSection";
import HeroSection from "../components/HomePageSections/HeroSection";
import Nav from "../components/Navbar/Nav";
import { motion } from "framer-motion";

function Home() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div className="relative">
      <Head>
        <title>Minimalistic Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }}
        className="h-auto"
      >
        <section>
          <HeroSection />
        </section>
        <section>
          <AboutSection />
        </section>
        <section className="pt-32 pb-24 md:py-24 xl:py-40">
          <ContactSection />
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}

export default Home;
