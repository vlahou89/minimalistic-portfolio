import React from "react";

function ProjectHero({ heroAlt, projectName }) {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={`../images/detail/desktop/image-${projectName}-hero@2x.jpg`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`../images/detail/tablet/image-${projectName}-hero@2x.jpg`}
        />
        <source
          media="(min-width: 600px)"
          srcSet={`../images/detail/tablet/image-${projectName}-hero.jpg`}
        />
        <source />
        <img
          src={`../images/detail/mobile/image-${projectName}-hero@2x.jpg`}
          alt={heroAlt}
        />
      </picture>
    </div>
  );
}

export default ProjectHero;
