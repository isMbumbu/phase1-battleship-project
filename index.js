
document.addEventListener("DOMContentLoaded", () => {
    // Variable declaration and creation of main divs
    const boards = document.getElementById('grids');
    boards.style.display = 'flex';
    boards.style.justifyContent = 'space-around'; // Space between the grids
    boards.style.padding = '20px'; // Add some padding around the boards

    const playerGrid = document.createElement('div');
    playerGrid.id = 'player-grid';
    playerGrid.classList.add('grid'); // Add a class for styling
    boards.appendChild(playerGrid);

    const opponentGrid = document.createElement('div');
    opponentGrid.id = 'opponent-grid';
    opponentGrid.classList.add('grid'); // Add a class for styling
    boards.appendChild(opponentGrid);

    const letters = "ABCDEFGHIJ";

    // Function for creation of boards with headers
    function createBoard(gridPosition) {
        let headerRow = document.createElement('div');
        headerRow.style.display = 'flex';

        let cornerCell = document.createElement('div');
        cornerCell.style.width = '40px';
        cornerCell.style.height = '40px';
        headerRow.appendChild(cornerCell);

        for (let c = 0; c < 10; c++) {
            let headerCell = document.createElement('div');
            headerCell.innerText = letters[c];
            headerCell.style.border = '1px solid black';
            headerCell.style.height = '40px';
            headerCell.style.width = '40px';
            headerCell.style.display = 'flex';
            headerCell.style.alignItems = 'center';
            headerCell.style.justifyContent = 'center';
            headerCell.style.backgroundColor='#ADD8E6';
            headerRow.appendChild(headerCell);
        }

        gridPosition.appendChild(headerRow); // Append header row to the grid

        // Create numbered rows
        for (let r = 1; r < 11; r++) {
            let row = document.createElement('div');
            row.style.display = 'flex';

            let rowHeader = document.createElement('div');
            rowHeader.innerText = r;
            rowHeader.style.border = '1px solid black';
            rowHeader.style.height = '40px';
            rowHeader.style.width = '40px';
            rowHeader.style.display = 'flex';
            rowHeader.style.alignItems = 'center';
            rowHeader.style.justifyContent = 'center';
            rowHeader.style.backgroundColor='#ADD8E6';
            row.appendChild(rowHeader);

            for (let c = 1; c < 11; c++) {
                let column = document.createElement('div');
                column.id = letters[c - 1] + r; // Adjust index to match letters
                column.style.border = '1px solid black';
                column.style.height = '40px';
                column.style.width = '40px';
                column.style.display = 'flex'; 
                column.style.alignItems = 'center'; 
                column.style.justifyContent = 'center'; 
                row.appendChild(column);
            }

            gridPosition.appendChild(row); // Append the row to the grid
        }
    }

    // Function to place ships on the player's board
    function placeShips(gridElement, showships = false) {
        const gridCells = Array.from(gridElement.querySelectorAll('div'));
        const shipPositions = [
            [26, 27],       // Destroyer
            [53, 54, 55],   // Submarine
            [80, 92, 104],  // Cruiser
            [111, 112, 113, 114], // Battleship
            [86, 87, 88, 89, 90]  // Carrier
        ];

        shipPositions.forEach((shipCells) => {
            shipCells.forEach((index) => {
                const cell = gridCells[index];
                cell.classList.add("ship");
                
                if (showships) {
                    // If showShips is true, make the ships visible
                    cell.style.backgroundColor = "gray"; // Ship color
                    cell.style.border = "0.1px solid black"; // Border for visibility
                }
            });
        });
    }

    createBoard(playerGrid);
    createBoard(opponentGrid);
    // Place ships on player's grid (visible)
    placeShips(playerGrid, true);

    // Place ships on opponent's grid (hidden)
    placeShips(opponentGrid, false); // Hide ships on opponent's grid


    function handleGuess(event) {
        const cell = event.target;
        if (cell.classList.contains('ship')) {
            cell.style.backgroundColor = 'red'; // Indicate a hit
            displayMessage('Hit!', cell);
        } else {
            cell.style.backgroundColor = 'blue'; // Indicate a miss
            displayMessage('Miss!', cell);
        }
    }

    function addGuessingEvent(gridElement) {
        const gridCells = Array.from(gridElement.querySelectorAll('div'));
        gridCells.forEach((cell) => {
            cell.addEventListener("click", handleGuess);
        });
    }
    function displayMessage(message, cell) {
        const messageDiv = document.createElement('div');
        messageDiv.innerText = message;
        messageDiv.style.position = 'absolute';
        messageDiv.style.top = `${cell.offsetTop}px`;
        messageDiv.style.left = `${cell.offsetLeft}px`;
        messageDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        messageDiv.style.padding = '5px';
        messageDiv.style.border = '1px solid black';
        messageDiv.style.zIndex = '1000'; // Make sure it's on top

        opponentGrid.appendChild(messageDiv);

        setTimeout(() => {
            opponentGrid.removeChild(messageDiv);
        }, 1000); // Message displayed for 1 second
    }

    addGuessingEvent(opponentGrid); // Apply guessing event to opponent's grid
});











