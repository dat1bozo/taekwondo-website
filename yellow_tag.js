function main() {
    const total_randint = Math.floor(Math.random() * 26) + 1;
    const questNum = document.getElementById("quest" + String(total_randint)).textContent;
    const questDisplay = document.getElementById("question_display");
    const ansNum = document.getElementById("ans" + String(total_randint)).textContent;
    let card = 0

    function card_appears() {
      document.addEventListener("keydown", function (event) {
        if (event.code === "Enter") {
          questDisplay.innerHTML = questNum;
          questDisplay.style.visibility = "visible";
          card = "front";
        }
      });
    }
    
  
    questDisplay.onclick = function() {
        questDisplay.innerHTML = ansNum;
        card = "back";
      }

      if (card === "back") {card_appears()};

    };

    
  
  main();