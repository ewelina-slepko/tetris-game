class Board {
    constructor(updateScoring) {
        this.gameBoard = Array(20).fill(null).map(() => Array(10).fill(0));
        this.scoreAudio = document.getElementById('score_audio');
        this.bottomAudio = document.getElementById('bottom_audio');
        this.updateScoring = updateScoring;
    }
    clearOccupiedRows() {
        bottom_audio.volume = 0.5;
        this.bottomAudio.play();
        search: for (let y = this.gameBoard.length - 1; y > 0; y--) {
            for (let x = 0; x < this.gameBoard[y].length; ++x) {
                if (this.gameBoard[y][x] === 0) {
                    continue search;
                }
            }
            this.scoreAudio.play();
            const row = this.gameBoard.splice(y, 1)[0].fill(0);
            this.gameBoard.unshift(row);
            y++;
            this.updateScoring();
        }
    }
}
