import React from "react";

const ResponsiveImageProcessor = ({ images, alt = "lawyer" }) => {
  return (
    <picture>
      <source srcSet={images["400"]} media="(max-width: 640px)" />
      <source
        srcSet={images["800"]}
        media="(min-width: 641px) and (max-width:900px)"
      />
      <source srcSet={images["1200"]} media="(min-width: 901px)" />
      <img
        src={images["800"] || images["400"] || images["1200"] || ""}
        alt={`photo of ${alt || "lawyer"}}`}
        loading="lazy"
        className="w-full h-full  object-center"
      />
    </picture>
  );
};

export default ResponsiveImageProcessor;
