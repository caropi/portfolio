import React from "react";
import BackgroundImage from "gatsby-background-image";

export default function Header({ block }) {
  return (
    <BackgroundImage
      Tag="header"
      className="header vh-100 d-flex align-items-center justify-content-center"
      fluid={block.backgroundImage.asset.fluid}
    >
      <div className="header__hero container">
        <h1 className="font-sans header__hero-text col-md-5">
          {block.heading}
        </h1>
        <p className="bg-yellow-light col-md-5 p-3 ">{block.tagline}</p>
      </div>
    </BackgroundImage>
  );
}
