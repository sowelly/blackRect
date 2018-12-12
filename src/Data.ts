// TypeScript file
class Data{
    private static _rectWidth:number=0;
    public static getWidth():number{
        if(Data._rectWidth==0){
            Data._rectWidth=egret.MainContext.instance.stage.stageWidth/4;
        }
        return Data._rectWidth
    }
    public static score:number=0;

    private static _rectRow:number=0;
    public static getRectRow():number{

        if(Data._rectRow==0){
            Data._rectRow=Math.ceil(Data.getStageHeight()/Data.getWidth())+1;
        }
        return Data._rectRow;
    }
    
    public static getStageHeight():number{
        return egret.MainContext.instance.stage.stageHeight
    }


}