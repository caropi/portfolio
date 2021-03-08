import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, description, canonical }) {
  return (
    <Helmet>
      {/* PAGE TITLE */}
      <title>{title}</title>
      {/* META DESCRIPTION */}
      <meta name="description" content={description} />
      {/* CANONICAL TAG */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}
