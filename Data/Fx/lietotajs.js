document.getElementById("pierakstities").addEventListener("click", function(event){
        event.preventDefault();
    
    if(us.value == "Skolotajs" && pw.value == "123"){
        window.open("../../Data/Pages/skolotajs.html", "_self")
        console.log(1)
    }
    else{
        us.value = ""
        pw.value = ""
        document.getElementById("kluda").innerHTML = "Nav pareizs lietotājvārds vai parole!"
        console.log("Kļūda")
   }
})
