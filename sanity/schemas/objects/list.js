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
      name: "picture",
      type: "picture",
      title: "Image",
    },
    {
      name: "listItems",
      type: "array",
      title: "List Items",
      of: [{ name: "listItem", type: "string", title: "List Item" }],
    },
  ],
};
