class Rect extends egret.Sprite{
    public constructor(){
        super();
        this.touchEnabled=true;
        this.draw();
    }
    private _colors:Array<number>=[0x000000,0xffffff,0xff0000,0x0000ff];  //黑，白，红，蓝
    private _currentColor:number=1;

    private draw(){
        this.width=Data.getWidth();
        this.height=this.width;
        this.graphics.beginFill(this._colors[this._currentColor]);
        this.graphics.lineStyle(1,0x000000);
        this.graphics.drawRect(0,0,this.width,this.height);
        this.graphics.endFill();
    }

    private _type:string=RectType.CLICKENABLE;

    public get type():string
    {
        return this._type;
    }
    public set type(val:string){
        this._type=val;
        if(this._type==RectType.CLICKABLE){
            this._currentColor=0;
        }else{
            this._currentColor=1;
        }
        this.draw();
    }

    public onRectClick(){
        if(this._type==RectType.CLICKABLE){
            this._currentColor=3;
        }else{
            this._currentColor=2;
        }
        this.draw()
    }
}