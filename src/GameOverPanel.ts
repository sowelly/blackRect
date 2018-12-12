// TypeScript file
class GameOverPanel extends egret.Sprite{
    constructor(){
        super();
        this.draw();
        this.addEventListener(egret.Event.ADDED,this.showText,this)
    }

    private txt:egret.TextField;
    private draw(){
        let w=egret.MainContext.instance.stage.stageWidth;
        let h=egret.MainContext.instance.stage.stageHeight;

        this.graphics.beginFill(0x111111,0.5);
        this.graphics.drawRect(0,0,w,h);
        this.graphics.endFill();
        

        this.txt=new egret.TextField();
        
        this.txt.width=w;
        this.txt.height=400;
        this.txt.textColor=0xff0000;
        this.txt.textAlign=egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);

        let btn=new egret.TextField();
        btn.text = "重玩";
        btn.size = 40;
        btn.textColor = 0xffffff;
        btn.x=(w-btn.size)/2;
        btn.y=(h-100)/2;
        
        this.addChild(btn);
        btn.touchEnabled=true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this)

    }

    private showText(){
        this.txt.text=`点击了${Data.score}次`
    }

    private startGame(){
        this.parent.removeChild(this);
        this.dispatchEventWith('startGame',true)

    }
}