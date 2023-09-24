//DOM CRUD
// c = create , r = read , u = update , d = delete } html elements

// create //
const h1Element = document.createElement("h1");
const textNode = document.createTextNode("Hello Yangon");
h1Element.appendChild(textNode);
const tagName = document.getElementsByTagName("body");
// console.log(tagName);// return 1 html Collection
const body = tagName[0]; // body is in index no.0
body.appendChild(h1Element);

// read //
const readH1Element = document.getElementsByTagName("h1")[0]; //first h1 element
console.log(readH1Element.textContent);

// update //
readH1Element.textContent = "Hello Mandalay";
console.log(readH1Element.textContent);

// remove //
readH1Element.remove();
