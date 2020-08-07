$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37: //left
            if (moveLeft()) {
                setTimeout(function () {
                    generateOneNumber();
                }, 100);

            }
            isgameover();
            break;
        case 38: //top
            if (moveTop()) {
                generateOneNumber();

            }
            isgameover();
            break;
        case 39: //right
            if (moveRight()) {

                setTimeout(function () {
                    generateOneNumber();
                }, 100);

            }
            isgameover();
            break;
        case 40: //down
            if (moveBottom()) {

                setTimeout(function () {
                    generateOneNumber();
                }, 100);

            }
            isgameover();
            break;
    }
});

function moveLeft() {
    if (!canMoveLeft(board)) {
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && noBlokHorizontalCol(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[i][k] == board[i][j] && noBlokHorizontalCol(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        score += board[i][k];
                        updateScore(score);
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    setTimeout(function () {
        updateBoardView();
    }, 200);
    return true;
}

function moveRight() {
    if (!canMoveRight(board)) {
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    if (board[i][k] == 0 && noBlokHorizontalCol(i, j, k, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[i][k] == board[i][j] && noBlokHorizontalCol(i, j, k, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        score += board[i][k];
                        updateScore(score);
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    setTimeout(function () {
        updateBoardView();
    }, 200);
    return true;
}

function moveTop() {
    if (!canMoveTop(board)) {
        return false;
    }
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    if (board[k][j] == 0 && noBlokRow(j, k, i, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[k][j] == board[i][j] && noBlokRow(j, k, i, board)) {

                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        score += board[k][j];
                        updateScore(score);
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    setTimeout(function () {
        updateBoardView();
    }, 200);
    return true;
}

function moveBottom() {
    if (!canMoveBottom(board)) {
        return false;
    }
    for (var i = 2; i >= 0; i--) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 3; k > i; k--) {
                    if (board[k][j] == 0 && noBlokRow(j, i, k, board)) {
                        console.log("ok");
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[k][j] == board[i][j] && noBlokRow(j, i, k, board)) {

                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        score += board[k][j];
                        updateScore(score);
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    setTimeout(function () {
        updateBoardView();
    }, 200);
    return true;
}

function isgameover() {
    if (nospace(board) && nomove(board)) {
        gameOver();
    }
}

function gameOver() {
    alert("gameOver!");
}

function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }

        }
    }
    console.log("nospace");
    return true;
}

function nomove(board) {
    if (canMoveBottom(board) || canMoveLeft(board) || canMoveRight(board) || canMoveTop(board)) {
        return false;

    }
    console.log("nomove");
    return true;
}