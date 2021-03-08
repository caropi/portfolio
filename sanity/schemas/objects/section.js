export default {
  name: "section",
  type: "object",
  title: "Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "picture",
      type: "picture",
      title: "Image",
    },
    {
      name: "richText",
      type: "contentBlock",
      title: "Rich Text",
    },
    {
      name: "list",
      type: "array",
      title: "List",
      of: [{ type: "list" }],
    },
  ],
};
