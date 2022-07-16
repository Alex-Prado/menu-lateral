const domElemt = (Element) => {
  return document.querySelector(Element);
};
const domAll = (Element) => {
  return document.querySelectorAll(Element);
};
const domId = (Element) => {
  return document.getElementById(Element);
};

domAll(".sub-btn").forEach((elem) =>
  elem.addEventListener("click", () => {
    elem.classList.toggle("rotate");
  })
);
domAll(".bar").forEach((elem) =>
  elem.addEventListener("click", () => {
    domElemt(".side-bar").classList == "side-bar active" ? clear() : null;
    domElemt(".side-bar").classList.toggle("active");
  })
);

const clear = () => {
  domAll(".sub-btn").forEach((elem) => elem.classList.remove("rotate"));
};
