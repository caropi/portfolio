// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// import page components
import home from "./documents/home";

// import objects components
import seo from "./objects/seo";
import callToAction from "./objects/callToAction";
import hero from "./objects/hero";
import copyShort from "./objects/copyShort";
import imageGallery from "./objects/imageGallery";
import textWithIllustrations from "./objects/textWithIllustrations";
import list from "./objects/list";
import section from "./objects/section";
// import colorList from "./objects/colorList";
import portableText from "./objects/portableText";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // page
    home,
    // objects
    seo,
    hero,
    list,
    callToAction,
    copyShort,
    section,
    // colorList,
    portableText,
    imageGallery,
    textWithIllustrations,
    {
      title: "Color List",
      description: "Pick a color",
      name: "colors",
      type: "colorlist", // required
      options: {
        list: [
          { title: "Yellow", value: "rgba(245, 199, 1, 0.5)" },
          { title: "Pink", value: { r: 246, g: 206, b: 219 } },
          { title: "Red", value: "#f16d70" },
          { title: "Teal", value: "#88c6db" },
          { title: "Purple", value: "#aca0cc" },
          { title: "Green", value: "#bdcdcb" },
          { title: "White", value: "white" },
        ],
      },
    },
  ]),
});
