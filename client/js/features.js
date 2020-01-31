var featureLoading = document.getElementById("featureLoading");
var featureSubmitBtn = document.getElementById("featureSubmitBtn");

featureSubmitBtn.addEventListener("click",function(){
    featureLoading.classList.remove("human-hidden");
    featureForm.classList.add("human-hidden");
});

async function onfeatureload(){
var response = await fetch("http://localhost:3138/api/features");
var result   = await response.json();
var feature1 = result[0]; 
var feature2 = result[1];
var feature3 = result[2];     // accessing the first object into the result array


console.log(feature1);
console.log(feature2);
console.log(feature3);
}

onfeatureload();
