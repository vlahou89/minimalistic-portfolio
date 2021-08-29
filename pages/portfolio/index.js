import Footer from "../../components/Footer";
import Nav from "../../components/Navbar/Nav";
import ProjectsList from "../../components/Portfolio/ProjectsList";

export default function portfolio() {
  return (
    <>
      <div className=" m-auto">
        <Nav />
        <section className="py-16 md:pb-20">
          <ProjectsList slug="manage">
            <>Manage</>
            <>
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </>
          </ProjectsList>
        </section>
        <section className="pb-16 md:pb-20">
          <ProjectsList slug="bookmark" reverse>
            <>Bookmark</>
            <>
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              features section.
            </>
          </ProjectsList>
        </section>
        <section className="pb-16 md:pb-20">
          <ProjectsList slug="insure">
            <>Insure</>
            <>
              This was a small project which mostly consisted of HTML and CSS. I
              built a fully-responsive landing page. The only JavaScript this
              project required was to enable the toggling of the mobile
              navigation.
            </>
          </ProjectsList>
        </section>
        <section className="pb-16 md:pb-20">
          <ProjectsList slug="fylo" reverse>
            <>Fylo</>
            <>
              This project was built in pure HTML and CSS. I had mobile and
              desktop designs to work to and built it so that it was
              fully-responsive. I took a mobile-first approach and used modern
              CSS like Flexbox and Grid for layout purposes.
            </>
          </ProjectsList>
        </section>
      </div>
      <Footer />
    </>
  );
}
