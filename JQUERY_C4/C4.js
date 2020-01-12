var n1= prompt("Player 1 enter your name");
var n2=prompt("Player 2 Enter Your name");

var c2='rgb(237, 45, 73)';
var c1='rgb(86, 151, 255)';

var game=true;
var table= $('table tr');

function reportWin(rowNum,colNum){
    console.log("you win at ",rowNum,colNum);
}

function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

// Report Back to current color of a button
function returnColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
    console.log("in checkBottom")
    var colorReport=returnColor(5,colIndex);
    console.log(colorReport)
    for(var row=5;row>-1;row++){
        colorReport= returnColor(row,colIndex)
        if(colorReport=== 'rgb(128, 128, 128)'){
            return row
        }
    }
}

function colorMatchCheck(one,two,three,four){
    console.lolg("colorMatchcheck")
    return(one===two && one===three && one === four && one != 'rgb(128, 128, 1280' && one!= undefined)
}
function horizontalWinCheck() {
    console.log("in horizontal win check")
    for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 4; col++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
          console.log('horiz');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }
  
  // Check for Vertical Wins
  function verticalWinCheck() {
    console.log("In vertical wins")
    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 3; row++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
          console.log('vertical');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }
  
  // Check for Diagonal Wins
  function diagonalWinCheck() {
    console.log("in diaognal win check")
    for (var col = 0; col < 5; col++) {
      for (var row = 0; row < 7; row++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
          console.log('diag');
          reportWin(row,col);
          return true;
        }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
          console.log('diag');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }
  
  // Game End
  function gameEnd(winningPlayer) {
    console.log("in game end")
    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 7; row++) {
        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');
        $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
      }
    }
  }
// Start with Player One
var currentPlayer = 1;
var currentName = n1;
var currentColor = c1;

// Start with Player One
$('h3').text(n1+": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click',function() {

  // Recognize what column was chosen
  var col = $(this).closest("td").index();
  console.log("var col called")
  console.log(col)
  // Get back bottom available row to change
  var bottomAvail = checkBottom(col);
  console.log("var v=bottomavl called")

  // Drop the chip in that column at the bottomAvail Row
  changeColor(bottomAvail,col,currentColor);
  console.log("change color called")

  // Check for a win or a tie.
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    console.log("game end called")
    gameEnd(currentName);
  }

  // If no win or tie, continue to next player
  currentPlayer = currentPlayer * -1 ;

  // Re-Check who the current Player is.
  if (currentPlayer === 1) {
    console.log("recheck the player called")
    currentName = n1;
    $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
    currentColor = c1;
  }else {
    console.log("player 2 change called")
    currentName = player2
    $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
    currentColor = player2Color;
  }

}
);


