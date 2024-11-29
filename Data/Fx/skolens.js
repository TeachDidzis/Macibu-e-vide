window.onload=function(){
    document.getElementById("bloks").style.display = "none"
    document.getElementById("bloks2").style.display = "none"
}

// Atgādnes
document.getElementById("atgadnes").addEventListener("click", function(){
    document.getElementById("bloks").style.display = "block"
})
const clickableElements2 = document.querySelectorAll('.atgadeInfo');
 clickableElements2.forEach(element => {
     element.addEventListener('click', function (event) {
        document.getElementById("izvadeAtgadne").innerHTML = ""
        event.preventDefault()
        const saturs = document.createElement("object")
        saturs.data = element.getAttribute("href")
        saturs.width = "100%"
        saturs.height = "100%"
        document.getElementById("izvadeAtgadne").appendChild(saturs)
     });
 });

 // Programmēšanas vide
 document.getElementById("vide").addEventListener("click", function(){
    document.getElementById("bloks").style.display = "none"
    document.getElementById("bloks2").style.display = "block"
})