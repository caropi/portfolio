import React from "react";
const BlockContent = require("@sanity/block-content-to-react");

export default function PortableText({ blocks, serializers }) {
  return <BlockContent blocks={blocks} serializers={serializers} />;
}
