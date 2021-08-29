import React from "react";

function ProjectBackground({
  text,
  projectName,
  static_preview_1_alt,
  static_preview_2_alt,
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl tracking-tight text-p3">
        Project Background
      </h2>
      <p className="leading-loose mt-7 text-p3">{text}</p>

      <h2 className="mt-10 font-serif text-3xl tracking-tight text-p3">
        Static Previews
      </h2>
      {/* STATIC PREVIEW 1 */}
      <div className="mt-10 lg:mt-7">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`../images/detail/desktop/image-${projectName}-preview-1@2x.jpg`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`../images/detail/tablet/image-${projectName}-preview-1@2x.jpg`}
          />
          <source
            media="(min-width: 600px)"
            srcSet={`../images/detail/tablet/image-${projectName}-preview-1.jpg`}
          />
          <img
            src={`../images/detail/mobile/image-${projectName}-preview-1@2x.jpg`}
            alt={static_preview_2_alt}
            loading="lazy"
          />
        </picture>
        {/* <img
          src={`../images/detail/mobile/image-${projectName}-preview-1@2x.jpg`}
          alt=""
        /> */}
      </div>
      <div className="mt-8">
        {/* STATIC PREVIEW 2 */}
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`../images/detail/desktop/image-${projectName}-preview-2@2x.jpg`}
          />

          <source
            media="(min-width: 768px)"
            srcSet={`../images/detail/tablet/image-${projectName}-preview-2@2x.jpg`}
          />
          <source
            media="(min-width: 600px)"
            srcSet={`../images/detail/tablet/image-${projectName}-preview-2.jpg`}
          />
          <img
            src={`../images/detail/mobile/image-${projectName}-preview-2@2x.jpg`}
            alt={static_preview_1_alt}
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}

export default ProjectBackground;
