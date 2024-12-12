window.onload=function(){
    document.getElementById("bloks").style.display = "none"
    document.getElementById("bloks2").style.display = "none"
}

// Atgādnes
document.getElementById("atgadnes").addEventListener("click", function(){
    document.getElementById("bloks").style.display = "block"
    document.getElementById("bloks2").style.display = "none"
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
const textarea = document.getElementById("kodaVieta");

textarea.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault(); // Prevent default tab behavior
        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Insert tab character at the cursor position
        this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);

        // Move the cursor after the inserted tab
        this.selectionStart = this.selectionEnd = start + 1;
    }
});

document.getElementById("lejupielade").addEventListener("click", function(){
    let datnesNosaukums = document.getElementById("nosaukums").value
    let fails = document.createElement("a")
    fails.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(document.getElementById("kodaVieta").value))
    fails.setAttribute("download", datnesNosaukums)
    fails.style.display = "none"
    document.body.appendChild(fails)
    fails.click()
    document.body.removeChild(fails)
})

document.getElementById("palaist").addEventListener("click", function(){
    document.getElementById("prieksskatijums").innerHTML = document.getElementById("kodaVieta").value
})