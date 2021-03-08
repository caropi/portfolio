import React from "react";

import SEO from "@common/SEO";

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
      <footer className="bg-blue">
        <div className="container-lg text-center">
          <p>
            Copyright ©{new Date().getFullYear()} Caroline Pisano. Made with 🍜
            &amp; 🐈
          </p>
        </div>
      </footer>
    </div>
  );
}
