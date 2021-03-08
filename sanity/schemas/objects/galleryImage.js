export default {
  name: "galleryImage",
  type: "image",
  title: "Image",
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subheading",
      type: "string",
      title: "Subheading",
    },
    {
      name: "richText",
      type: "contentBlock",
      title: "Rich Text",
    },
    {
      name: "copyShort",
      type: "string",
      title: "Copy Short",
    },
    {
      name: "hyperlinkCopy",
      type: "string",
      title: "Hyperlink Copy",
    },
    {
      name: "hyperlink",
      type: "string",
      title: "Hyperlink",
    },
  ],
};
