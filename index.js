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

    // To help formulate ids for cells
    const letters = "ABCDEFGHIJ";

    // Function for creation of boards with headers
    function createBoard(gridPosition) {
        // Create header row
        let headerRow = document.createElement('div');
        headerRow.style.display = 'flex';

        // Empty corner cell
        let cornerCell = document.createElement('div');
        cornerCell.style.width = '40px';
        cornerCell.style.height = '40px';
        headerRow.appendChild(cornerCell);

        // Add letter headers
        for (let c = 0; c < 10; c++) {
            let headerCell = document.createElement('div');
            headerCell.innerText = letters[c];
            headerCell.style.border = '1px solid black';
            headerCell.style.height = '40px';
            headerCell.style.width = '40px';
            headerCell.style.display = 'flex';
            headerCell.style.alignItems = 'center';
            headerCell.style.justifyContent = 'center';
            headerCell.style.backgroundColor='green';
            headerRow.appendChild(headerCell);
        }

        gridPosition.appendChild(headerRow); // Append header row to the grid

        // Create numbered rows
        for (let r = 1; r < 11; r++) {
            let row = document.createElement('div');
            row.style.display = 'flex';

            // Row header (number)
            let rowHeader = document.createElement('div');
            rowHeader.innerText = r;
            rowHeader.style.border = '1px solid black';
            rowHeader.style.height = '40px';
            rowHeader.style.width = '40px';
            rowHeader.style.display = 'flex';
            rowHeader.style.alignItems = 'center';
            rowHeader.style.justifyContent = 'center';
            rowHeader.style.backgroundColor='green';
            row.appendChild(rowHeader);

            for (let c = 1; c < 11; c++) {
                let column = document.createElement('div');
                column.id = letters[c - 1] + r; // Adjust index to match letters
                column.style.border = '1px solid black';
                column.style.height = '40px'; // Increased size for better visibility
                column.style.width = '40px'; // Increased size for better visibility
                column.style.display = 'flex'; // Flex for potential alignment
                column.style.alignItems = 'center'; // Center items vertically
                column.style.justifyContent = 'center'; // Center items horizontally
                row.appendChild(column);
            }

            gridPosition.appendChild(row); // Append the row to the grid
        }
    }
      //placing sheeps on hard coded location

    //to get all grid cells

    function placeShips(gridElement){
        const gridCells = Array.from(gridElement.children);
        
        // hard coding the ship positions on specific cells
        
      const shipPositions = [
        //destroyer cordinates
        [61, 62],
        //submarine and cruiser
        [10, 20, 30],
        [15, 16, 17],
        //battleship four squares
        [50, 60, 70, 80,],
        //carrier
        [, 1, 2, 3, 4, 5,],
  
      ];
      //placing ships based on hard coded positions
  
      shipPositions.forEach((shipCells) =>{
        shipCells.forEach((index) => {
          gridCells[index].classList.add("ship");
        });
      })
  
      }

    createBoard(playerGrid);
    createBoard(opponentGrid);
});

