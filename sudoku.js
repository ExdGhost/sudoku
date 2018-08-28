
// function to print the board on the console
const  printBoard = (board) => {
    let string = ""
    string = string + "*********************\n";
    for (let x = 0; x < 9; x++) {
        if (x === 3 || x === 6) {
            string = string + "*********************\n";
        }
        for  (let y = 0; y < 9; y++) {
            if (y === 3 || y === 6)
                string = string + "* ";
            string = string + (board[x][y]).toString() + " ";
        }
        string = string + "\n";
    }
    string = string + "*********************\n";
    return string
};

//  function to check if the board is full or not
//  returns true if it is full and false if it isn't
//  it works on the fact that if it finds at least one 
//  zero in the board it returns false

const isFull = (board) => {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (board[x][y] === 0)
                return false;
        }
    }
    return true;
}
    
//  function to find all of the possible numbers
//  which can be put at the specified location by
//  checking the horizontal and vertical and the 
//  three by three square in which the numbers are kept

const possibleEntries = (board, i, j) => {
    
   let possibilityArray = {}
    
    for (let x = 1; x< 10; x++){
         possibilityArray[x] = 0;
    }

    for (let y = 0; y< 9; y++) {    
        if (board[i][y] !== 0) 
            possibilityArray[board[i][y]] = 1;
    }
     
    for (let x = 0; x< 9; x++) {
        if (board[x][j] !== 0) 
            possibilityArray[board[x][j]] = 1;
    }
            
   let k = 0;
   let l = 0;

    if (i >= 0 && i <= 2)
        k = 0;
    else if (i >= 3 && i <= 5)
         k = 3;
    else 
        k = 6;

    if (j >= 0 && j <= 2)
        l = 0;
    else if(j >= 3 && j <= 5)
        l = 3;
    else
        l = 6;

    for (let x = k; x < k + 3; x++) {
        for (let y =l; y< l + 3; y++) {
            if (board[x][y] !== 0)
                possibilityArray[board[x][y]] = 1;
        }
    }          
    
    for (let x=1; x< 10; x++) {
        if (possibilityArray[x] === 0)
            possibilityArray[x] = x;
        else
            possibilityArray[x] = 0;
    }
    
    return possibilityArray;
}

// recursive function which solved the board and prints it. 
const sudokuSolver = (board) => {
    
   let i = 0;
   let j = 0;
    
    // if board is full, there is no need to solve it any further
    if (isFull(board)) {
        console.log("Solution is valid - Sudoku solved successfully");
        console.log(printBoard(board));
        return true;
    } else {
        //find the first vacant spot
        for (let x = 0; x < 9; x++) {
          for (let y =0; y < 9; y++) {
                if (board[x][y] === 0)
                {
                     i = x;
                     j = y;
                     break;
                }
           }
        }

           // get all the possibilities for i,j
        let possiblities = possibleEntries(board, i, j);
        
        //  go through all the possibilities and call the the function again and again
        for (let x=1; x<10; x++) {
            if (possiblities[x] !== 0) {
                board[i][j] = possiblities[x];
                if(sudokuSolver(board) === true)
                     return true;
            }
         }
         // backtrack
         board[i][j] = 0;
    }
}

// main function
const  start = () => {
    
    let SudokuBoard = [9];
    
    // init board
    for(let i =0; i< 9; i++) {
        SudokuBoard[i] = [9];
      for(let j=0; j< 9; j++)
        SudokuBoard[i][j] = 0;
    }

    SudokuBoard[0][0] = 0
    SudokuBoard[0][1] = 0
    SudokuBoard[0][2] = 0
    SudokuBoard[0][3] = 0
    SudokuBoard[0][4] = 0
    SudokuBoard[0][5] = 0
    SudokuBoard[0][6] = 0
    SudokuBoard[0][7] = 6
    SudokuBoard[0][8] = 0
    SudokuBoard[1][0] = 0
    SudokuBoard[1][1] = 0
    SudokuBoard[1][2] = 7
    SudokuBoard[1][3] = 3
    SudokuBoard[1][4] = 0
    SudokuBoard[1][5] = 0
    SudokuBoard[1][6] = 9
    SudokuBoard[1][7] = 0
    SudokuBoard[1][8] = 0
    SudokuBoard[2][0] = 0
    SudokuBoard[2][1] = 0
    SudokuBoard[2][2] = 8
    SudokuBoard[2][3] = 9
    SudokuBoard[2][4] = 0
    SudokuBoard[2][5] = 0
    SudokuBoard[2][6] = 0
    SudokuBoard[2][7] = 0
    SudokuBoard[2][8] = 0
    SudokuBoard[3][0] = 0
    SudokuBoard[3][1] = 7
    SudokuBoard[3][2] = 1
    SudokuBoard[3][3] = 0
    SudokuBoard[3][4] = 0
    SudokuBoard[3][5] = 0
    SudokuBoard[3][6] = 0
    SudokuBoard[3][7] = 0
    SudokuBoard[3][8] = 0
    SudokuBoard[4][0] = 0
    SudokuBoard[4][1] = 0
    SudokuBoard[4][2] = 0
    SudokuBoard[4][3] = 0
    SudokuBoard[4][4] = 0
    SudokuBoard[4][5] = 0
    SudokuBoard[4][6] = 0
    SudokuBoard[4][7] = 0
    SudokuBoard[4][8] = 8
    SudokuBoard[5][0] = 8
    SudokuBoard[5][1] = 0
    SudokuBoard[5][2] = 0
    SudokuBoard[5][3] = 0
    SudokuBoard[5][4] = 5
    SudokuBoard[5][5] = 0
    SudokuBoard[5][6] = 6
    SudokuBoard[5][7] = 0
    SudokuBoard[5][8] = 4
    SudokuBoard[6][0] = 0
    SudokuBoard[6][1] = 1
    SudokuBoard[6][2] = 0
    SudokuBoard[6][3] = 2
    SudokuBoard[6][4] = 0
    SudokuBoard[6][5] = 0
    SudokuBoard[6][6] = 0
    SudokuBoard[6][7] = 9
    SudokuBoard[6][8] = 0
    SudokuBoard[7][0] = 2
    SudokuBoard[7][1] = 0
    SudokuBoard[7][2] = 0
    SudokuBoard[7][3] = 0
    SudokuBoard[7][4] = 0
    SudokuBoard[7][5] = 4
    SudokuBoard[7][6] = 0
    SudokuBoard[7][7] = 0
    SudokuBoard[7][8] = 0
    SudokuBoard[8][0] = 0
    SudokuBoard[8][1] = 6
    SudokuBoard[8][2] = 9
    SudokuBoard[8][3] = 0
    SudokuBoard[8][4] = 0
    SudokuBoard[8][5] = 0
    SudokuBoard[8][6] = 0
    SudokuBoard[8][7] = 7
    SudokuBoard[8][8] = 0
    
    console.log('Given Solution is : ');
    console.log(printBoard(SudokuBoard));

    if(sudokuSolver(SudokuBoard) !== true)
      console.log('Solution is invalid');



}

start();

