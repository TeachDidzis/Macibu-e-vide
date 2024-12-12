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
    document.getElementById("bloks2").style.display = "flex"
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
    if (document.getElementById("kodaVieta").value.includes("console")) {
        document.getElementById("konsole").innerHTML = " Hey";
        (function () {
                // Target console output div
                const consoleOutput = document.getElementById("konsole");
            
                // Helper function to append messages to the output
                function appendMessage(message, type) {
                    const messageElement = document.createElement("div");
                    messageElement.className = type;
                    messageElement.textContent = message;
                    consoleOutput.innerHTML = messageElement;
                    consoleOutput.scrollTop = consoleOutput.scrollHeight; // Auto-scroll
                }
            
                // Override console methods
                const originalLog = console.log;
                const originalWarn = console.warn;
                const originalError = console.error;
            
                console.log = function (...args) {
                    originalLog.apply(console, args);
                    args.forEach(arg => appendMessage(arg, "log"));
                };
            
                console.warn = function (...args) {
                    originalWarn.apply(console, args);
                    args.forEach(arg => appendMessage(arg, "warn"));
                };
            
                console.error = function (...args) {
                    originalError.apply(console, args);
                    args.forEach(arg => appendMessage(arg, "error"));
                };
            
                // Add functionality to "Run Code" button
                document.getElementById("palaist").addEventListener("click", function(){
            
                
                    const jsCode = document.getElementById("kodaVieta").value;
                    consoleOutput.innerHTML = " "; // Clear previous output
                    try {
                        new Function(jsCode)(); // Execute the user's JavaScript code
                    } catch (error) {
                        console.error(error); // Log any errors to the console
                    }
                })
            })();
    }
    
})

// Konsoles izvade blokā
// (function () {
//     // Target console output div
//     const consoleOutput = document.getElementById("konsole");

//     // Helper function to append messages to the output
//     function appendMessage(message, type) {
//         const messageElement = document.createElement("div");
//         messageElement.className = type;
//         messageElement.textContent = message;
//         consoleOutput.innerHTML = messageElement;
//         consoleOutput.scrollTop = consoleOutput.scrollHeight; // Auto-scroll
//     }

//     // Override console methods
//     const originalLog = console.log;
//     const originalWarn = console.warn;
//     const originalError = console.error;

//     console.log = function (...args) {
//         originalLog.apply(console, args);
//         args.forEach(arg => appendMessage(arg, "log"));
//     };

//     console.warn = function (...args) {
//         originalWarn.apply(console, args);
//         args.forEach(arg => appendMessage(arg, "warn"));
//     };

//     console.error = function (...args) {
//         originalError.apply(console, args);
//         args.forEach(arg => appendMessage(arg, "error"));
//     };

//     // Add functionality to "Run Code" button
//     document.getElementById("palaist").addEventListener("click", function(){

    
//         const jsCode = document.getElementById("kodaVieta").value;
//         consoleOutput.innerHTML = " "; // Clear previous output
//         try {
//             new Function(jsCode)(); // Execute the user's JavaScript code
//         } catch (error) {
//             console.error(error); // Log any errors to the console
//         }
//     })
// })();
// })

