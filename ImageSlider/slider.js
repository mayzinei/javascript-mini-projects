/**
1. create image array
2. counter
3. get images in array using counter
 **/

const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("img")[0]; //Html collection
const originalImgSrc = image.src;
const imageArray = [
	"https://images.unsplash.com/photo-1528502668750-88ba58015b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1608365151231-7dbed3034787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGdpcmx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1554694288-88babf9c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJhYnklMjBnaXJsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJhYnklMjBnaXJsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1440288736878-766bd5839edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJhYnklMjBnaXJsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

let counter = 0;
const myFunction = () => {
	if (counter === 5) {
		image.src = originalImgSrc;
		counter = 0;
		return; // important!
	}
	const imageLink = imageArray[counter];
	image.src = imageLink;
	counter += 1;
	console.log("counter value is :", counter);
};
myButton.addEventListener("click", myFunction);
