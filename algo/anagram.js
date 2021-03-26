function anagrams(strA, strB) {
  return clinfiyStr(strA) === clinfiyStr(strB);
}

function clinfiyStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
