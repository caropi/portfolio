import React from "react";

import SEO from "@common/SEO";
export default function Layout(props) {
  return (
    <div>
      <SEO
        title={props.seoModule.titleTag}
        description={props.seoModule.metaDescription}
        canonical={props.seoModule.canonicalLink}
      />
      {props.children}
      <footer>
        Copyright ©{new Date().getFullYear()} Caroline Pisano. Made with 🍜
        &amp; 🐈
      </footer>
    </div>
  );
}
