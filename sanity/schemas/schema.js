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
import portableText from "./objects/portableText";
import picture from "./objects/picture";
import galleryImage from "./objects/galleryImage";
import contentBlock from "./objects/contentBlock";

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
    picture,
    contentBlock,
    galleryImage,
    portableText,
    imageGallery,
    textWithIllustrations,
  ]),
});
