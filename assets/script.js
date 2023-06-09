const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},


];

	
// let precedent = document.getElementById("precedent");

// precedent.addEventListener("click", function () {
//   alert("tu vas a gauche");
// });
// let suivant = document.getElementById("suivant");

// suivant.addEventListener("click", function () {
//   alert("tu vas a droite");
// });


let numero = 0;

function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > slides.length -1)
		numero = 0;
	if (numero < 0)
		numero = slides.length - 1;
	document.getElementById("slides").src = "assets/images/slideshow/" + slides[numero].image ;
	document.getElementById("tagline").innerHTML =  slides[numero].tagLine;
	
};



document.querySelector(".dot").innerHTML = ' '



