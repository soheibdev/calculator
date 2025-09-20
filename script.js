let expr = "5 + 3 *99"; 
let result = eval(expr);   // ⚠️ be careful: eval can be unsafe if input is from user
console.log(result); 


function addNumber(num) {
  document.getElementById("input").value += num;
}

function dote() {
     document.getElementById("input").value += "."
      
}
function opiration(string) {
     document.getElementById("input").value += string;
}
function clearinput() {
    document.getElementById("input").value = "";
}

function resultat() {
      let input = document.getElementById("input").value
      
       try {
        let resultat = eval(input)
        document.getElementById("input").value = resultat

       } catch (error) {
          document.getElementById("input").value = "Error";
       }
      
}