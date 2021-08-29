import Head from "next/head";
import Footer from "../Footer";
import Nav from "../Navbar/Nav";
import NextPrevProject from "./NextPrevProject";
import ProjectBackground from "./ProjectBackground";
import ProjectHero from "./ProjectHero";
import ProjectTags from "./ProjectTags";
import ContactSection from "../HomePageSections/ContactSection";

function ProjectPreview({
  projectName,
  heroAlt,
  summary_heading,
  summary_text,
  background_text,
  static_preview_1_alt,
  static_preview_2_alt,
  next_project,
  previous_project,
}) {
  return (
    <>
      <div className="w-80 m-auto">
        <Head>
          <noscript>
            <link rel="stylesheet" href="noscript.css" />
          </noscript>
        </Head>
        <Nav />
        <div className="mt-16  ">
          <ProjectHero projectName={projectName} alt={heroAlt} />
        </div>

        <div className="mt-15 lg:mt-32 lg:flex">
          <section className="lg:w-1/3">
            <ProjectTags heading={summary_heading} text={summary_text} />
          </section>
          <section className="mt-12 md:mt-10 lg:mt-0 lg:w-2/3 lg:ml-32">
            <ProjectBackground
              projectName={projectName}
              text={background_text}
              static_preview_1_alt={static_preview_1_alt}
              static_preview_2_alt={static_preview_2_alt}
            />
          </section>
        </div>
        <nav className="pt-16 md:pt-20 lg:pt-16 ">
          <NextPrevProject
            next_project={next_project}
            previous_project={previous_project}
          />
        </nav>
        <section>
          <ContactSection />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ProjectPreview;
