import React from "react";

export default function Header({ raw }) {
  return (
    <header>
      <h1>{raw.heading}</h1>
      <p>{raw.tagline}</p>
    </header>
  );
}
