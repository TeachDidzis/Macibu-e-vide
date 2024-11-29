 const clickableElements = document.querySelectorAll('.instrukcija');
 clickableElements.forEach(element => {
     element.addEventListener('click', function (event) {
        document.getElementById("laba").innerHTML = ""
        event.preventDefault()
        const saturs = document.createElement("object")
        saturs.data = element.getAttribute("href")
        saturs.width = "100%"
        saturs.height = "100%"
        document.getElementById("laba").appendChild(saturs)
     });
 });