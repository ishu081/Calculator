function clearDisplay()
{
    document.getElementById("display").value="";
}

function appendValue(value){
    document.getElementById("display").value +=value;

}
function calculateResult()
{
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
function square() {
    const display = document.getElementById("display");
    display.value += "**2"; 
  }

  document.addEventListener("keydown", function (event) {
    const key = event.key;
    const display = document.getElementById("display");
  
    // Numbers and basic operators
    if (!isNaN(key) || "+-*/.".includes(key)) {
      display.value += key;
    }
  
    // Enter or = → Evaluate
    if (key === "Enter" || key === "=") {
      calculateResult();
    }
  
    // Backspace → delete last character
    if (key === "Backspace") {
      display.value = display.value.slice(0, -1);
    }
  
    // Escape → clear
    if (key === "Escape") {
      clearDisplay();
    }
  
    // s or S → square the current number
    if (key === "s" || key === "S") {
      square();
    }
  });
  
