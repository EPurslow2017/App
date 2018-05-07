function rolledPlayer4P() {
   var playerRoll = Math.ceil(Math.random()*4);
    
   if (playerRoll == 1) {
      document.getElementById('4pColour').src = "blue.png";
   }
   else if (playerRoll == 2) {
      document.getElementById('4pColour').src = "yellow.png";
   }
   else if (playerRoll == 3) {
      document.getElementById('4pColour').src = "red.png";
   }
   else if (playerRoll == 4) {
      document.getElementById('4pColour').src = "green.png";
   };
};
function rolledDrink4P() {
   var drinkRoll = Math.ceil(Math.random()*15);
   document.getElementById('4pDrink').innerHTML = drinkRoll; 
};


function rolledPlayer5P() {
   var playerRoll = Math.ceil(Math.random()*5);
    
   if (playerRoll == 1) {
      document.getElementById('5pColour').src = "blue.png";
   }
   else if (playerRoll == 2) {
      document.getElementById('5pColour').src = "yellow.png";
   }
   else if (playerRoll == 3) {
      document.getElementById('5pColour').src = "red.png";
   }
   else if (playerRoll == 4) {
      document.getElementById('5pColour').src = "green.png";
   }
   else if (playerRoll == 5) {
      document.getElementById('5pColour').src = "purple.png";
   };
};
function rolledDrink5P() {
   var drinkRoll = Math.ceil(Math.random()*15);
   document.getElementById('5pDrink').innerHTML = drinkRoll; 
};


function rolledPlayer6P() {
   var playerRoll = Math.ceil(Math.random()*6);
    
   if (playerRoll == 1) {
      document.getElementById('6pColour').src = "blue.png";
   }
   else if (playerRoll == 2) {
      document.getElementById('6pColour').src = "yellow.png";
   }
   else if (playerRoll == 3) {
      document.getElementById('6pColour').src = "red.png";
   }
   else if (playerRoll == 4) {
      document.getElementById('6pColour').src = "green.png";
   }
   else if (playerRoll == 5) {
      document.getElementById('6pColour').src = "purple.png";
   }
   else if (playerRoll == 6) {
      document.getElementById('6pColour').src = "pink.png";
   };
};
function rolledDrink6P() {
   var drinkRoll = Math.ceil(Math.random()*15);
   document.getElementById('6pDrink').innerHTML = drinkRoll; 
};




