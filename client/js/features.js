var featureLoading = document.getElementById("featureLoading");
var featureSubmitBtn = document.getElementById("featureSubmitBtn");

featureSubmitBtn.addEventListener("click",function(){
    featureLoading.classList.remove("human-hidden");
    featureForm.classList.add("human-hidden");
});

