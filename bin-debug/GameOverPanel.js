var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var GameOverPanel = (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        var _this = _super.call(this) || this;
        _this.draw();
        _this.addEventListener(egret.Event.ADDED, _this.showText, _this);
        return _this;
    }
    GameOverPanel.prototype.draw = function () {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.graphics.beginFill(0x111111, 0.5);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
        this.txt = new egret.TextField();
        this.txt.width = w;
        this.txt.height = 400;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);
        var btn = new egret.TextField();
        btn.text = "重玩";
        btn.size = 40;
        btn.textColor = 0xffffff;
        btn.x = (w - btn.size) / 2;
        btn.y = (h - 100) / 2;
        this.addChild(btn);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    };
    GameOverPanel.prototype.showText = function () {
        // this.txt.text='点击了'+Data.score+'次';
        this.txt.text = "\u70B9\u51FB\u4E86" + Data.score;
    };
    GameOverPanel.prototype.startGame = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith('startGame', true);
    };
    return GameOverPanel;
}(egret.Sprite));
__reflect(GameOverPanel.prototype, "GameOverPanel");
//# sourceMappingURL=GameOverPanel.js.map