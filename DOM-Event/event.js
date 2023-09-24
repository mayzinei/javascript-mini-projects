// const myFunction = () => console.log("it's working!");

/*//idကိုခေါ်သုံးပြီးရေး//
const myFunction = () => console.log("the next one is working!");
const myButton = document.getElementById("myButton");
// myButton.onclick = myFunction; //callback function သုံးပြီးrun//

// myButton.addEventListener("click", myFunction); //addEventListenerသုံးပြီးrun//

//callback function သုံးပြီးrunရင် function 2ခု run လို့မရ//
const myFunction2 = () => console.log("the another one is working!");
// myButton.onclick = myFunction;
// myButton.onclick = myFunction2; //myFunction2ရဲ့resultကိုပဲပြပေး//

myButton.addEventListener("click", myFunction);
myButton.addEventListener("click", myFunction2); //2ခုလုံးresultပြ//

//ဒါကြောင့် myButton.addEventListener("click", myFunction);နည်းကိုပဲသုံးမယ်//
// =============================================================================*/

//adding css style to button//
// ============================
// const myButton = document.getElementById("myButton");
// const myFunction = () => {
// 	myButton.style.border = "5px solid green";
// };
// myButton.addEventListener("click", myFunction);

//adding image and change image//
// ================================
const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("image")[0]; //Html collection
const myFunction = () => {
	image.src =
		"https://images.unsplash.com/photo-1506878206813-92402b8ded23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
};
myButton.addEventListener("click", myFunction);
