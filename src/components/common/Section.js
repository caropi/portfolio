import React from "react";
import PortableText from "@common/PortableText";

export default function Section(props) {
  console.log(props);
  return (
    <section className="bg-green text-beige">
      <div className="container py-6">
        <h2>{props.block.heading}</h2>
        <PortableText blocks={props.raw.richText} />
      </div>
    </section>
  );
}
