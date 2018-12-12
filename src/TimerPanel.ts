// TypeScript file
class TimerPanel extends egret.Sprite{
    public constructor(){
        super();
        this.draw();
        this.creatTimer();
    }

    private txt:egret.TextField;
    private draw(){
        this.txt=new egret.TextField();
        this.txt.width=egret.MainContext.instance.stage.stageWidth;
        this.txt.y=100;
        this.txt.textColor=0xFF0000;
        this.txt.textAlign=egret.HorizontalAlign.CENTER;
        this.txt.text="20'00''";
        this.addChild(this.txt);
    }

    private _timer:egret.Timer;
    private _nuff=20;

    private creatTimer(){
        this._timer=new egret.Timer(1000,this._nuff);
        this._timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerCom,this)
    }

    private _timers=20;
    private onTimer(){
        this._timers-=1;
        this.txt.text=this._timers+"'00''";
    }

    private onTimerCom(){
        this.txt.text="00'00''";
        this.dispatchEventWith("gameOver");
    }

    public start(){
        this.txt.text="20'00''";
        this._timers=20;
        this._timer.reset();
        this._timer.start();
        
    }

    public stop(){
        this._timer.stop();    
    }
}