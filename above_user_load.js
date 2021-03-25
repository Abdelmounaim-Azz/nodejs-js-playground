const loadStyleSheet = (src) => {
  if (document.createStyleSheet) {
    document.createStyleSheet(src);
  } else {
    const stylesheet = document.createElement("link");
    stylesheet.href = src;
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(stylesheet);
  }
};
window.onload = function () {
  loadStyleSheet("./STYLE_UNDERNEATH_SCROLL.css");
};
// SCRIPT TO PRIORITIZE THE STYLE THAT USER SEES AND THEN LOADS THE REST ON SCROLL.
