export function getImgUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

export const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};
