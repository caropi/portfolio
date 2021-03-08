import React from "react";
import Header from "@common/Header";

export default function PageBuilder({ type, pageBuilder, _rawPageBuilder }) {
  // Load the right component, based on the _type from Sanity
  const Components = {
    hero: Header,
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
