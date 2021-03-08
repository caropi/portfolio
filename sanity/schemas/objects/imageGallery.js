export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "galleryImage" }],
      options: {
        layout: "grid",
      },
    },
  ],
};
