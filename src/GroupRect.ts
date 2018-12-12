// TypeScript file
class GroupRect extends egret.Sprite{
    public constructor(){
        super();
        this.creatRect();
    }
    
    private _rects:Array<Rect>;
    private creatRect(){
        this._rects=[];
        for(let i=0;i<4;i++){
            let rect:Rect=new Rect();
            this._rects.push(rect);
            rect.x=rect.width*i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickRect,this,true)

        }
    }

    public _currentRow:number=0;
    private onClickRect(evt:egret.TouchEvent){
        evt.target.onRectClick();
        if(evt.target.type==RectType.CLICKENABLE||this._currentRow!=Data.getRectRow()-2){
            this.dispatchEventWith("gameOver")
        }else{
            this.dispatchEventWith("clickRight")
        }
    }

    private _currentBlackRectIndex:number=0;
    public creatBlackRect(){
        this.init();
        let n:number=Math.random();
        if(n>=0&&n<0.25){
            this._currentBlackRectIndex=0;
        }
        if(n>=0.25&&n<0.5){
            this._currentBlackRectIndex=1;
        }
        if(n>=0.5&&n<0.75){
            this._currentBlackRectIndex=2;
        }
        if(n>=0.75&&n<=1){
            this._currentBlackRectIndex=3;
        }
        this._rects[this._currentBlackRectIndex].type=RectType.CLICKABLE;
        
    }
    public init(){
        for(let i=0;i<4;i++){
            this._rects[i].type=RectType.CLICKENABLE;
        }
    }
    public move(){
        this._currentRow++;
        if(this._currentRow==Data.getRectRow()){
            this._currentRow=0;
            this.creatBlackRect();
        }
        this.y=this._currentRow*Data.getWidth();
    }
}