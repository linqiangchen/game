var board = [];
var score = 0;
$(function () {
    newGame();
});

function newGame() {
    updateScore(0);
    init();
    generateOneNumber();
    generateOneNumber();

}

function init() {
    for (var i = 0; i < 4; i++) {
        board[i] = [];
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top", getPosTop(i, j));
            gridCell.css("left", getPosLeft(i, j));
        }
    }
    updateBoardView();
}

function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {

        for (var j = 0; j < 4; j++) {
            $("#grid-cell").append("<div class='number-cell' id='number-cell-" + i + '-' + j + "'></div>");
            var numberCell = $("#number-cell-" + i + "-" + j);
            if (board[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getPosTop(i, j) + 100);
                numberCell.css("left", getPosLeft(i, j) + 100);
            } else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", getPosTop(i, j));
                numberCell.css("left", getPosLeft(i, j));
                numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numberCell.css("color", getNumbeColor(board[i][j]));
                numberCell.text(board[i][j]);
            }
        }
    }
}

function generateOneNumber() {

    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy = parseInt(Math.floor(Math.random() * 4));
    while (true) {
        if (board[randx][randy] == 0) {
            break;
        }
        var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));

    }
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    board[randx][randy] = randNumber;


    ShowNumberWithAnimation(randx, randy, randNumber);
}