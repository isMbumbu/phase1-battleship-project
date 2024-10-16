# phase1-battleship-project
//js
// script.js
/*document.addEventListener("DOMContentLoaded", () => {
    const playerGrid = document.getElementById("player-grid");
    const opponentGrid = document.getElementById("opponent-grid");
  
    // Function to create a 10x10 grid
    function createGrid(gridElement, isOpponent = false) {
      for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div");
        cell.dataset.id = i;
        // Randomly place ships on player's grid (for demonstration)
        if (!isOpponent && Math.random() > 0.85) {
          cell.classList.add("ship");
        }
        // Add click event on opponent's grid cells
        if (isOpponent) {
          cell.addEventListener("click", handleGuess);
        }
        gridElement.appendChild(cell);
      }
    }
    // Function to handle guesses on the opponent's grid
    function handleGuess(e) {
      const cell = e.target;
      if (cell.classList.contains("hit") || cell.classList.contains("miss")) {
        return; // Already clicked
      }
  
      // Simulating whether it's a hit or miss
      const isHit = Math.random() > 0.7;
  
      if (isHit) {
        cell.classList.add("hit");
        alert("Hit!");
      } else {
        cell.classList.add("miss");
        alert("Miss!");
      }
    }
    // Create player and opponent grids
    createGrid(playerGrid);
    createGrid(opponentGrid, true);
  });*/


  document.addEventListener("DOMContentLoaded", () => {
    const playerGrid = document.getElementById("player-grid");
    const opponentGrid = document.getElementById("opponent-grid");
  
    // Sizes of ships: Carrier (5), Battleship (4), Cruiser (3), Submarine (3), Destroyer (2)
    const shipSizes = [5, 4, 3, 3, 2];
  
    // Function to create a 10x10 grid
    function createGrid(gridElement, isOpponent = false) {
      for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div");
        cell.dataset.id = i;
        gridElement.appendChild(cell);
      }
      if (!isOpponent) {
        placeShips(gridElement); // Place ships on the player's grid
      } else {
        addGuessingEvent(gridElement); // Add click event to opponent's grid
      }
    }
  
    // Function to place ships on the player's grid
    function placeShips(gridElement) {
      const gridCells = Array.from(gridElement.children); // Get all grid cells
  
      shipSizes.forEach((shipSize) => {
        let placed = false;
        while (!placed) {
          const isHorizontal = Math.random() > 0.5; // Randomize horizontal/vertical placement
          const startCell = Math.floor(Math.random() * 100); // Random starting cell
          const shipCells = [];
  
          if (isHorizontal) {
            const rowStart = Math.floor(startCell / 10) * 10; // Ensure ships don't wrap to the next row
            for (let i = 0; i < shipSize; i++) {
              const cellIndex = startCell + i;
              if (cellIndex >= rowStart + 10 || gridCells[cellIndex]?.classList.contains("ship")) {
                break; // If ship exceeds the row or overlaps, restart placement
              }
              shipCells.push(cellIndex);
            }
          } else {
            for (let i = 0; i < shipSize; i++) {
              const cellIndex = startCell + i * 10;
              if (cellIndex >= 100 || gridCells[cellIndex]?.classList.contains("ship")) {
                break; // If ship exceeds the grid or overlaps, restart placement
              }
              shipCells.push(cellIndex);
            }
          }
  
          if (shipCells.length === shipSize) {
            shipCells.forEach((index) => {
              gridCells[index].classList.add("ship");
            });
            placed = true; // Ship placed successfully
          }
        }
      });
    }
  
    // Function to add click events to the opponent's grid
    function addGuessingEvent(gridElement) {
      const gridCells = Array.from(gridElement.children);
      gridCells.forEach((cell) => {
        cell.addEventListener("click", handleGuess);
      });
    }
  
    // Function to handle guesses on the opponent's grid
    function handleGuess(e) {
      const cell = e.target;
      if (cell.classList.contains("hit") || cell.classList.contains("miss")) {
        return; // Already clicked
      }
  
      // Simulating whether it's a hit or miss
      const isHit = Math.random() > 0.7;
  
      if (isHit) {
        cell.classList.add("hit");
        alert("Hit!");
      } else {
        cell.classList.add("miss");
        alert("Miss!");
      }
    }
  
    // Create player and opponent grids
    createGrid(playerGrid);
    createGrid(opponentGrid, true);
  });
  




  //htmlm

  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Battleship Game Tutorial</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Battleship Game Tutorial</h1>
    <p>In the Battleship game, each player secretly places ships of varying lengths on their grid. The game proceeds as each player takes turns "shooting" at the opponent's grid by calling a location. The defender will respond with "Hit!" or "Miss!". The objective is to sink all enemy ships.</p>

    <h2>Game Rules</h2>
    <ul>
      <li>Each player has a 10x10 grid.</li>
      <li>Ships are of different lengths: Destroyer (2 squares), Submarine (3 squares), Cruiser (3 squares), Battleship (4 squares), Carrier (5 squares).</li>
      <li>Players take turns guessing locations on the opponent's grid.</li>
      <li>The game ends when all of one player's ships have been sunk.</li>
    </ul>

    <h2>Visual Setup</h2>
    <div class="grids">
      <div class="grid player-grid" id="player-grid">
        <h3>Your Grid</h3>
      </div>
      <div class="grid opponent-grid" id="opponent-grid">
        <h3>Opponent's Grid</h3>
      </div>
    </div>

    <h2>Instructions</h2>
    <p>Click on the opponent's grid to guess a location. If you hit a ship, it will be marked as "Hit!" and the location will turn red. If you miss, the location will turn blue. The same applies when the opponent guesses on your grid.</p>
  </div>
  
  <script src="script.js"></script>
</body>
</html>



// css

/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #333;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    background-color: blanchedalmond;
  }
  
  ul {
    text-align: left;
  }
  .names {
    border-bottom: 100px;
  }
  
  .grids {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(10, 30px);
    gap: 2px;
  }
  
  .grid h3 {
    grid-column: span 10;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .grid div {
    width: 30px;
    height: 30px;
    background-color: #87ceeb;
    border: 1px solid #555;
    cursor: pointer;
  }
  
  .grid div.ship {
    background-color: gray;
  }
  
  .grid div.hit {
    background-color: red;
  }
  
  .grid div.miss {
    background-color: blue;
  }
  
