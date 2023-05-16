var carouselImages = document.querySelectorAll(".carousel-img");
var textoElement = document.getElementById("texto");

var texts = [
    "El Autodromo Enzo e Dino Ferrari es un autódromo de 4,9 km situado en Imola, región de Emilia-Romaña, Italia, unos 30 km al sureste de la ciudad de Bolonia. Es uno de los principales de su país, habiendo albergado carreras de numerosos campeonatos mundiales y europeos de automovilismo de velocidad y motociclismo de velocidad además de italianos. El circuito llevaba originalmente el nombre de Autodromo di Castellaccio.1​ Luego se llamó Autodromo Dino Ferrari en honor a Dino Ferrari, hijo de Enzo Ferrari que falleció en 1956 a los 24 años. Cuando Enzo murió en 1988, el nombre pasó a ser el actual.​",
    "El Circuito de Barcelona-Cataluña (en catalán y oficialmente, Circuit de Barcelona-Catalunya), también conocido como Circuito de Montmeló o Circuito de Barcelona, es un autódromo situado en las poblaciones de Montmeló (sectores 1 y 2) y Granollers (sector 3), en la provincia de Barcelona, comunidad autónoma de Cataluña, España. Inaugurado en el año 1991, tiene un aforo de 131.000 espectadores, y acoge diversas competiciones entre las que destacan el Gran Premio de España de Fórmula 1 y el Gran Premio de Cataluña de Motociclismo del Campeonato Mundial de Motociclismo. También es uno de los circuitos más utilizados para los ensayos de los diferentes equipos europeos durante el receso de invierno.",
    "El Circuito de Mónaco (en francés: Circuit de Monaco), también conocido como Circuito de Montecarlo, es un circuito urbano de carreras ubicado entre los distritos de Montecarlo y La Condamine (siendo este el lugar donde se localiza el punto de llegada y salida del mismo), dentro del Principado de Mónaco. Fue inaugurado en 1920 por Antony Noghès, y alberga anualmente el Gran Premio de Mónaco de Fórmula 1 y el E-prix de Mónaco de Fórmula E. Debido a su especial configuración con curvas cerradas y rectas cortas, lo que prima en él es la habilidad de los pilotos frente a la potencia de los motores.",
    "El Circuito Gilles Villeneuve (oficialmente Circuit Gilles-Villeneuve en francés), también llamado Circuito de Montreal, es un circuito urbano de carreras localizado en la Île Notre-Dame, una isla artificial situada en el río San Lorenzo y que es parte del Parque Jean-Drapeau de la ciudad de Montreal, provincia de Quebec, Canadá. El circuito originalmente tenía la denominación Circuit Île Notre-Dame. Su nombre actual debe al piloto canadiense Gilles Villeneuve, nacido en Quebec y vencedor del Gran Premio de Canadá de 1978, luego de fallecer durante las pruebas de calificación del Gran Premio de Bélgica de 1982."
];

var currentIndex = 0;

function showImage(index) {
    for (var i = 0; i < carouselImages.length; i++) {
    carouselImages[i].style.display = "none";
}
    carouselImages[index].style.display = "block";
}

function showText(index) {
    textoElement.textContent = texts[index];
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
}
    showImage(currentIndex);
    showText(currentIndex);
}

function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
    currentIndex = carouselImages.length - 1;
}
    showImage(currentIndex);
    showText(currentIndex);
}

document.getElementById("nextButton").addEventListener("click", nextImage);
document.getElementById("prevButton").addEventListener("click", previousImage);

showImage(currentIndex);
showText(currentIndex);