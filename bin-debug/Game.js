var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var Game = (function () {
    function Game(root) {
        this._root = root;
        this.creatGroupRect();
        this.creatTimer();
        this.startGame();
    }
    Game.prototype.creatGroupRect = function () {
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroups = [];
        this._row = Data.getRectRow();
        var groupRect;
        for (var i = 0; i < this._row; i++) {
            groupRect = new GroupRect();
            groupRect.addEventListener("gameOver", this.gameOver, this);
            groupRect.addEventListener("clickRight", this.nextRow, this);
            this._rectGroups.push(groupRect);
            groupRect.y = Data.getWidth() * i;
            this._rectRoot.addChild(groupRect);
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    };
    Game.prototype.gameOver = function () {
        this._timerPanel.stop();
        if (!this.gameOverPanel) {
            this.gameOverPanel = new GameOverPanel();
            this.gameOverPanel.addEventListener('startGame', this.startGame, this);
        }
        this._root.addChild(this.gameOverPanel);
    };
    Game.prototype.nextRow = function () {
        for (var i = 0; i < this._row; i++) {
            this._rectGroups[i].move();
        }
        Data.score++;
    };
    Game.prototype.creatTimer = function () {
        this._timerPanel = new TimerPanel();
        this._timerPanel.addEventListener("gameOver", this.gameOver, this);
        this._root.addChild(this._timerPanel);
    };
    Game.prototype.startGame = function () {
        Data.score = 0;
        for (var i = 0; i < this._row; i++) {
            this._rectGroups[i].init();
            this._rectGroups[i].y = Data.getWidth() * i;
            this._rectGroups[i]._currentRow = i;
            if (i != (this._row - 1)) {
                this._rectGroups[i].creatBlackRect();
            }
        }
        this._timerPanel.start();
    };
    return Game;
}());
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map