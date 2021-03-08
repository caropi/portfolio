import "./src/styles/global.css";

export const onClientEntry = async () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
