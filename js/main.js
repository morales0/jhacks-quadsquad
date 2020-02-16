/* Main front-end script */

/* Globals */
let feelBtn = document.getElementById("feel-btn");
let entryForm = document.getElementById("entryForm");
let feelingCircles = document.querySelector("#feeling-circles");

let feelings = ["lonely", "anxious", "stressed", "peaceful", "happy", "annoyed"];
let sizes = [45, 48, 32, 22, 68, 50];
let colors = [
   "rgba(127, 183, 190, .8)",
   "rgba(245, 251, 239, .8)",
   "rgba(199, 223, 197, .8)",
   "rgba(226, 250, 219, .8)",
   "rgba(213, 201, 223, .8)",
   "rgba(128, 145, 196, .8)"
];

/**
 * When user clicks on how do you feel, it will bring up the form
 */
function openform(){
   feelBtn.style.display = "none";
   entryForm.classList.toggle("hidden");  
}

/**
 * Submit form and redirect to new page
 */

function submitEntry(){
   resizeCircles();
   entryForm.classList.toggle("hidden");
   feelingCircles.classList.toggle("hidden");
}

/**
 * Calculate sizes
 */

function resizeCircles(){
   let i = 0;
   for (let i = 0; i < 6; i++) {
      let currCircle = document.querySelector("#" + feelings[i] + "-circle");
      currCircle.style.width = sizes[i]/2.5 + "rem";
      currCircle.style.height = sizes[i]/2.5 + "rem";
      currCircle.style.backgroundColor = colors[i];
   }
}
