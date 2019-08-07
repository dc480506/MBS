const slider=document.querySelector(".image-slider");
const images=document.querySelectorAll(".slider-content");
const width=images[0].clientWidth;
const next=document.getElementById("next");
const back=document.getElementById("back");
var counter=0;
const no_of_images=images.length;
console.log(no_of_images);
console.log(slider);
back.style.display="none";
next.addEventListener("click",function(){
	counter++;
    back.style.display="flex";
    slider.style.transition="transform 0.5s ease-in-out";
    slider.style.transform="translateX("+(-width*counter)+"px)";
    document.getElementById("back").style.display="flex";
    if(counter>=images.length-3){
    	next.style.display="none";
    }
    console.log("Next click "+counter);
});

back.addEventListener("click",function(){
	counter--;
	next.style.display="flex";
    slider.style.transition="transform 0.5s ease-in-out";
    slider.style.transform="translateX("+(-width*counter)+"px)";
    if(counter<=0) {
        back.style.display="none"; 
	}
	console.log("Back click "+ counter);
});