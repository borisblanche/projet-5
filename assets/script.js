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

let precedent = document.getElementById("precedent");

precedent.addEventListener("click", function () {
  alert("tu vas a gauche");
});
let suivant = document.getElementById("suivant");

suivant.addEventListener("click", function () {
  alert("tu vas a droite");
});

let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero > slides.length - 1) numero = 0;
  if (numero < 0) numero = slides.length - 1;
  document.getElementById("slides").src =
    "assets/images/slideshow/" + slides[numero].image;
	document.getElementById("tagline").innerHTML = slides[numero].tagLine;
	updatedotclasses(numero);
}
setInterval("ChangeSlide(1)", 4000);


const dot1 = document.getElementById("dot0");
const dot2 = document.getElementById("dot1");
const dot3 = document.getElementById("dot2");
const dot4 = document.getElementById("dot3");

function updatedotclasses(numero) {
	
	const dots = [dot1, dot2, dot3, dot4];
	dots.forEach(dot => { dot.classList.remove("dot_selected"); });

	if (numero === 0) {
		dot1.classList.add("dot_selected");
	} else if (numero === 1) {
		dot2.classList.add("dot_selected");
	}
	else if (numero === 2) {
		dot3.classList.add("dot_selected");
	}
	else if (numero === 3) {
		dot4.classList.add("dot_selected");
	}
}

updatedotclasses(numero);
