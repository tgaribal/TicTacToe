TicTacToe = function () {
  this.board = [[' ', ' ', ' '], 
                [' ', ' ', ' '], 
                [' ', ' ', ' ']]
  this.player1 = true;
  this.winner = null;
};

TicTacToe.prototype.drawBoard = function() {
  console.log(this.board[0]);
  console.log(this.board[1]);
  console.log(this.board[2]);
}

TicTacToe.prototype.takeTurn = function (x, y) {
  if (this.winner) {
    console.log('GAME OVER! ' + this.winner + ' is the winner!');
  }
  var player = this.player1 ? 'Player 1' : 'Player 2';
  console.log(player + ' it is your turn!');
  if (this.board[x][y] !== ' ') {
    console.log('Invalid move, please try again!')
  } else {
    this.board[x][y] = this.player1 ? 'X' : 'O'
    this.player1 = !this.player1
  }
  this.checkBoard();
  this.drawBoard();
}

TicTacToe.prototype.checkBoard = function() {
  this.board.forEach(function (row) {
    if (row[0] == row[1] && row[1] == row[2] && row[0] != ' ') {
      this.winner = this.player1 ? 'Player 1' : 'Player 2'
    }
  })
  this.winner ? console.log(this.winner + ' WINS!') : null;
}

// TicTacToe.prototype.playGame = function() {
//   while(!this.winner) {
//     this.takeTurn();
//     this.checkBoard();
//     this.drawBoard();
//   }
// }

var game = new TicTacToe();
// game.drawBoard();
game.takeTurn(0, 0);
game.takeTurn(1, 1);
game.takeTurn(0, 1);
game.takeTurn(1, 2);
game.takeTurn(0, 2);
game.takeTurn(2, 0)
// console.log(game.board);