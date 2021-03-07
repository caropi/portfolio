export default {
  name: "list",
  type: "object",
  title: "List",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "description",
          type: "string",
          title: "Description",
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
        {
          name: "hyperlink",
          type: "string",
          title: "Hyperlink",
        },
      ],
    },
    {
      name: "listItems",
      type: "array",
      title: "List Items",
      of: [{ name: "listItem", type: "string", title: "List Item" }],
    },
  ],
};
