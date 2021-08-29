import Link from "next/link";

function NextPrevProject({ next_project, previous_project }) {
  const next_url = `/portfolio/${next_project.toLowerCase()}`;
  const previous_url = `/portfolio/${previous_project.toLowerCase()}`;
  return (
    <div className="flex">
      <Link href={previous_url}>
        <a className="flex flex-col items-start w-1/2 py-6 border-t border-b border-r border-opacity-25 outline-none  border-p3">
          <div className="hover:animate-bounce flex flex-col items-start md:flex-row md:items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
              <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8" />
            </svg>

            <div className="mt-4 space-y-2 md:mt-0 md:ml-8">
              <p className="font-serif text-3xl leading-none tracking-tight hover:text-p1 text-p3">
                {previous_project}
              </p>

              <p className="leading-none text-gray-400 hover:text-p1">
                Previous Project
              </p>
            </div>
          </div>
        </a>
      </Link>

      <Link href={next_url}>
        <a className="flex flex-col items-end w-1/2 py-6 border-t border-b border-opacity-25 outline-none lg:py-8 justfy-center border-p3">
          <div className=" hover:animate-bounce flex flex-col items-end md:flex-row-reverse md:items-center">
            <svg
              className="    "
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
            >
              <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" />
            </svg>

            <div className="mt-4 space-y-2 md:mt-0 md:mr-8">
              <p className="font-serif text-3xl leading-none tracking-tight hover:text-p1 text-p3">
                {next_project}
              </p>
              <p className="leading-none text-right text-gray-400">
                Next Project
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default NextPrevProject;
