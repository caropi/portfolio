export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline",
    },
    {
      name: "picture",
      type: "picture",
      title: "Image",
    },
    {
      name: "backgroundImage",
      type: "picture",
      title: "Background Image",
    },
    // {
    //   name: "bgImage",
    //   type: "image",
    //   title: "Background Image",
    //   fields: [
    //     {
    //       name: "alt",
    //       type: "string",
    //       title: "Alternative text",
    //     },
    //   ],
    // },
  ],
};
