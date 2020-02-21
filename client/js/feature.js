var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureFrm = document.getElementById("featureFrm");
var featureLoadingDiv = document.getElementById("featureLoadingDiv");

featureSubmitBtn.addEventListener("click", async function() {
  // Make the loader div visible
  featureLoadingDiv.classList.remove("human-removed");
  // Hide the form from the user
  featureFrm.classList.add("human-removed");
  await onfeaturesubmit();
  featureFrm.reset();
  featureLoadingDiv.classList.add("human-removed");
  featureFrm.classList.remove("human-removed");
  await onfeatureload();

});

async function onfeatureload() {
  var response = await fetch("http://localhost:3000/features");
  var result = await response.json();

  var feature1 = result[0]; // accesses tbe third element in the array
  var feature2 = result[1];
  var feature3 = result[2];

/*document.getElementById("feature1").innerHTML =
    feature1.body + "<span class='badge badge-success'>" + feature1.author + ", " + feature1.time + "</span>";
*/

var featurelist = document.getElementById("feature-list");

featurelist.innerHTML = "";

for( var i=0; i < result.length; i++) {
  var lielement = document.createElement("li");
  lielement.innerHTML = result[i].body + "<span class='badge badge-success'>" + result[i].author + ", " + result[i].time + "</span>";
  lielement.className = "list-group-item";
  featurelist.appendChild(lielement);
  }
}

async function onfeaturesubmit(){
  var response = await fetch("http://localhost:3000/features" ,
  {
    method : "post",
    headers : {
      "content-type" : "application/json"
    },
    body : JSON.stringify({
      name : document.getElementById("suggested-name").value ,
      feature : document.getElementById("suggested-feature").value
    })
  });
}
 

onfeatureload();

