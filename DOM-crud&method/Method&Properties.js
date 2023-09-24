// Useful DOM Methods and Properties //
// ========================================

// const bodyElement = document.getElementsByTagName("body")[0];
// // console.log(bodyElement);

// const parentDiv = document.getElementsByClassName("parent")[0];
// console.log(parentDiv);
// parentDiv.innerHTML = ""; //(property)

// const divWithId = document.getElementById("myId");
// console.log(divWithId);

//=================================================

// appendChild() and append( , )//
// ---------------------------------
{
	/* <div class="parent">
	<p class="child">Child 1</p>
	<p class="child">Child 2</p>
</div>; */
}
// const bodyElement = document.getElementsByTagName("body")[0];
// const parentDiv = document.createElement("div");

// const childOne = document.createElement("p");
// // const childOneText = document.createTextNode("Child 1");
// // childOne.appendChild(childOneText);
// childOne.append("Child 1");

// const childTwo = document.createElement("p");
// childTwo.append("Child 2");

// parentDiv.append(childOne, childTwo);
// bodyElement.appendChild(parentDiv);

//================================================

//add and remove classes or css styles//
// ------------------------------------

const bodyElement = document.getElementsByTagName("body")[0];
const parentDiv = document.createElement("div");
parentDiv.classList.add("parent", "test");
parentDiv.classList.remove("test");

const childOne = document.createElement("p");
childOne.classList.add("child");
childOne.append("Child 1");

const childTwo = document.createElement("p");
childTwo.classList.add("child");
childTwo.append("Child 2");

parentDiv.append(childOne, childTwo);
bodyElement.appendChild(parentDiv);

//css styleဘာတွေပေးထားလဲဆိုတာဖတ်//
//--------------------------------
const styleTestDiv = document.getElementsByClassName("styleTest")[0];
console.log(getComputedStyle(styleTestDiv).width);
console.log(getComputedStyle(styleTestDiv).height);
console.log(getComputedStyle(styleTestDiv).backgroundColor);

// console.log(styleTestDiv.style.backgroundColor);// css inline styleနဲ့ပေးထားမှ ဒီလိုဖမ်းလို့ရ//
