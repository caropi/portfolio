import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "@fontsource/merriweather";

export const onClientEntry = async () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
