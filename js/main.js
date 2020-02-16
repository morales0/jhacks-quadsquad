/* Main front-end script */

/* Globals */
let info = document.querySelector("#info");
let feelBtn = document.getElementById("feel-btn");
let entryForm = document.getElementById("entryForm");
let feelingCircles = document.querySelector("#feeling-circles");

/* Hard coded values. Will receive from server ideally */
let feelings = ["lonely", "anxious", "stressed", "peaceful", "happy", "annoyed"];
let sizes = [45, 48, 32, 22, 68, 50];
let colors = [
   "rgba(255, 192, 203, .8)",
   "rgba(255, 243, 245, .8)",
   "rgba(255, 255, 224, .8)",
   "rgba(226, 250, 219, .8)",
   "rgba(240, 224, 255, .8)",
   "rgba(224, 240, 255, .8)"
];

/**
 * When user clicks on how do you feel, it will bring up the form
 */
function openform(){
   feelBtn.classList.toggle("hidden");
   entryForm.classList.toggle("hidden");
   info.classList.toggle("hidden");
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

/**
 * Listening to home page button
 */

document.getElementById("name").addEventListener("click", () => {
   if (!entryForm.classList.contains("hidden")){
      entryForm.classList.toggle("hidden");
   }
   if (feelBtn.classList.contains("hidden")){
      feelBtn.classList.remove("hidden");
   }
   if (info.classList.contains("hidden")){
      info.classList.remove("hidden");
   }
   if (!feelingCircles.classList.contains("hidden")){
      feelingCircles.classList.toggle("hidden");
   }
});
