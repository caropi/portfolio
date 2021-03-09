import React from "react";
import Header from "@common/Header";
import Section from "@common/Section";
export default function PageBuilder({ type, pageBuilder, _rawPageBuilder }) {
  // Load the right component, based on the _type from Sanity
  const Components = {
    hero: Header,
    section: Section,
  };
  return pageBuilder.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block: block,
        type,
        raw: _rawPageBuilder[index],
      });
    } else {
      return null;
    }
  });
}
