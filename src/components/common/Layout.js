import React from "react";

import SEO from "@common/SEO";
import "@styles/styles.scss";

export default function Layout(props) {
  return (
    <div>
      <SEO
        title={"Caroline Pisano | Front-End Developer"}
        description={
          "Caroline Pisano is a front-end developer based in Toronto, Canada."
        }
        canonical={"http://www.carolinepisano.com"}
      />
      {props.children}
      <footer className="bg-blue my-6 container">
        <p className="h6 text-black">
          Copyright ©{new Date().getFullYear()} Caroline Pisano. Made with 🍜
          &amp; 🐈
        </p>
      </footer>
    </div>
  );
}
