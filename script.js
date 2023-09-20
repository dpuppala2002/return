document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const colorBox = document.getElementById("colorBox");
  const gameStatus = document.getElementById("gameStatus");

  // Flag to check if the game is still active
  let gameActive = true;
  
  // Initialize the score and time limit (adjust as needed)
  let score = 0;
  const scoreToWin = 5; // Change this to the desired score to win
  const timeLimitInSeconds = 20; // Change this to the desired time limit in seconds

  registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get user input values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;
      const difficulty = document.getElementById("difficulty").value;

      // Validate and store user data (you can replace this with your preferred storage method)
      if (name && email && mobile && difficulty) {
          // Assuming you want to store user data in a JavaScript object
          const userData = {
              name: name,
              email: email,
              mobile: mobile,
              difficulty: difficulty
          };

          console.log("User data:", userData);

          // Display the color box and change its color after a random delay
          colorBox.style.display = "block";

          // Generate a random time between 1000ms (1 second) and 2000ms (2 seconds)
          const randomDelay = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;

          setTimeout(() => {
              // Check if the game is still active
              if (gameActive) {
                  // Change the color of the box randomly
                  const randomColor = getRandomColor();
                  colorBox.style.backgroundColor = randomColor;

                  // Add a click event listener to the color box
                  colorBox.addEventListener("click", function () {
                      // Check if the game is still active
                      if (gameActive) {
                          if (randomColor === "green") {
                              // User clicked on the green box - increment the score
                              score++;
                              if (score >= scoreToWin) {
                                  // User wins the game
                                  gameStatus.innerText = "You Win!";
                                  gameActive = false;
                              }
                          } else {
                              // User clicked on the wrong color - Game Over
                              gameStatus.innerText = "Game Over!";
                              gameActive = false;
                          }
                      }
                  });

                  // Set a timeout for the time limit
                  setTimeout(() => {
                      // Check if the game is still active
                      if (gameActive) {
                          if (score < scoreToWin) {
                              // User didn't reach the required score - Game Over
                              gameStatus.innerText = "Game Over!";
                          }
                          gameActive = false;
                      }
                  }, timeLimitInSeconds * 1000); // Convert time limit to milliseconds
              }
          }, randomDelay);
      } else {
          alert("Please fill in all fields.");
      }
  });

  // Function to generate a random color (including green)
  function getRandomColor() {
      const colors = ["red", "blue", "green"]; // Add more colors if needed
      return colors[Math.floor(Math.random() * colors.length)];
  }
});
