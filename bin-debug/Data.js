var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var Data = (function () {
    function Data() {
    }
    Data.getWidth = function () {
        if (Data._rectWidth == 0) {
            Data._rectWidth = egret.MainContext.instance.stage.stageWidth / 4;
        }
        return Data._rectWidth;
    };
    Data.getRectRow = function () {
        if (Data._rectRow == 0) {
            Data._rectRow = Math.ceil(Data.getStageHeight() / Data.getWidth()) + 1;
        }
        return Data._rectRow;
    };
    Data.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    Data._rectWidth = 0;
    Data.score = 0;
    Data._rectRow = 0;
    return Data;
}());
__reflect(Data.prototype, "Data");
//# sourceMappingURL=Data.js.map