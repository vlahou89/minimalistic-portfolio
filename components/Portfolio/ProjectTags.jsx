import Button from "../Buttons/Button";

function ProjectTags({ heading, text }) {
  return (
    <div>
      <hr className="m-0 opacity-25 text-p3" />
      <div className="flex-col w-full py-6 contentWrapper sm:py-8 lg:py-12 sm:mt-0 md:flex md:flex-row md:space-x-3">
        <div className="flex flex-col md:w-1/2 lg:w-full">
          <h2 className="font-serif font-bold leading-none text-40">
            {heading}
          </h2>
          <div className="mt-6 md:hidden lg:block md:mt-4">
            <p className="leading-loose text-p3">{text}</p>
          </div>
          <div className="mt-6 md:mt-4">
            <p className="text-xs font-bold text-p1">
              Interaction Design / Front End Development <br /> HTML / CSS / JS
            </p>
          </div>
          <div className="mt-6 md:mt-4">
            <Button destination="#">visit website</Button>
          </div>
        </div>
        <div className="hidden mt-6 md:block lg:hidden md:w-1/2 lg:w-full md:mt-0">
          <p className="leading-loose text-p3">{text}</p>
        </div>
      </div>
      <hr className="m-0 opacity-25 text-p3" />
    </div>
  );
}

export default ProjectTags;
