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
      name: "class",
      type: "string",
      title: "Class",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
        {
          name: "class",
          type: "string",
          title: "Class",
        },
      ],
    },
    {
      name: "list",
      type: "array",
      title: "List",
      of: [{ type: "list" }],
    },
  ],
};
