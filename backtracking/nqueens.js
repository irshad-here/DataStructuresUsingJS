


let board = [];
let boardSize = 4;
for(let i=0; i<boardSize; i++){
    board[i] = [];
    for(let j=0; j< boardSize; j++)
    board[i][j] = 'x';
}

console.log('Give board to solve N Queens problem: ');
printBoard(board);

var totalSolutions = 0;

nQueens(board);

console.log(`Total solutions found: ${totalSolutions}`);

function printBoard(board){
    for(let i=0; i<board.length; i++){
        let str = '';
        for(j=0; j<board[i].length; j++){
            str += board[i][j] + ' ';
        }
        console.log(str);
    }
}

function nQueens(board, row = 0){
    if(row == board.length){
        totalSolutions++;
        console.log('Soultion found..');
        printBoard(board);
        return;
    }

    for(let col=0; col < board[row].length; col++){
        if(isQueenSafe(board, row, col)){
            board[row][col] = 'Q';
            nQueens(board, row + 1);
            board[row][col] = 'x';
        }
    }

}

function isQueenSafe(board, row, col){
    //checking if Queen is already in that row
    for(let i=0; i<col; i++){
        if(board[row][i] == 'Q')
            return false;
    }

    //checking if Queen is already in that column
    for(let i=0; i<row; i++){
        if(board[i][col] == 'Q')
            return false;
    }

    //*****checking for queens presence diagonally 
    //get the start position of left diagnol
    let dgRowStart = row, dgColStart = col;
    while(dgRowStart > 0 && dgColStart >0){
        dgRowStart--;
        dgColStart--;
    }
    
    //checking for the queen's presence in left diagnol
    while(dgRowStart < board.length && dgColStart < board[0].length)
    {
        if(dgRowStart != row && dgColStart != col)
        {
            if(board[dgRowStart][dgColStart] == 'Q')
                return false;
        }
        dgRowStart++;
        dgColStart++;
    }
    
    //setting start positions for right diagnol
    dgRowStart = row; dgColStart = col;
    while(dgRowStart > 0 && dgColStart < board[0].length){
        dgRowStart--;
        dgColStart++;
    }

    //checking queens position in right diagnol
    while(dgRowStart < board.length && dgColStart > 0){
        if(dgRowStart != row && dgColStart != col){
            if(board[dgRowStart][dgColStart] == 'Q')
                return false;
        }
        dgRowStart++;
        dgColStart--;
    }

    return true;
}