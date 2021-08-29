import ContactForm from "../components/ContactForm/ContactForm";
import Nav from "../components/Navbar/Nav";
import SocialMedia from "../components/SocialMedia";
import { motion } from "framer-motion";

function contact() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <Nav />
      <motion.div
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }}
      >
        <div className="hidden w-full my-6  border-b opacity-25 md:block border-p3" />
        <section className="lg:flex lg:flex-row ">
          <div className="lg:w-40 ">
            <h1 className=" pt-10 font-serif font-bold leading-none tracking-tight text-p3 text-40 xl:text-50 xl:tracking-normal">
              Get In Touch
            </h1>
          </div>
          <div className="lg:w-60 ">
            <p className="leading-7 pt-7 xl:text-xl text-p3">
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
              <div className="text-p3 py-8">
                <SocialMedia />
              </div>
            </p>
          </div>

          <hr />
        </section>
        <div className="hidden w-full my-6  border-b opacity-25 md:block border-p3" />

        <section>
          <ContactForm />
        </section>
      </motion.div>
    </>
  );
}

export default contact;
