// TypeScript file
class Game{

    private _root:egret.DisplayObjectContainer;
    public constructor(root:egret.DisplayObjectContainer){

        this._root=root;
        this.creatGroupRect();
        this.creatTimer();
        this.startGame();

    }
    private _row:number;
    private _rectRoot:egret.Sprite;
    private _rectGroups:Array<GroupRect>
    private creatGroupRect(){
        this._rectRoot=new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroups=[];
        this._row=Data.getRectRow();

        let groupRect:GroupRect;
        for(let i=0;i<this._row;i++){
            groupRect=new GroupRect();
            groupRect.addEventListener("gameOver",this.gameOver,this);
            groupRect.addEventListener("clickRight",this.nextRow,this);
            this._rectGroups.push(groupRect);
            groupRect.y=Data.getWidth()*i;
            this._rectRoot.addChild(groupRect);
        }
            this._rectRoot.y=Data.getStageHeight()-this._rectRoot.height;
    }

    private gameOverPanel:GameOverPanel;
    private gameOver(){
        this._timerPanel.stop();
        if(!this.gameOverPanel){
            this.gameOverPanel=new GameOverPanel();
            this.gameOverPanel.addEventListener('startGame',this.startGame,this);

        }
        this._root.addChild(this.gameOverPanel)
    }
    private nextRow(){
        for(let i=0;i<this._row;i++){
            this._rectGroups[i].move()
        }
        Data.score++;
    }

    private _timerPanel:TimerPanel;    
    private creatTimer(){
        this._timerPanel=new TimerPanel();
        this._timerPanel.addEventListener("gameOver",this.gameOver,this);
        this._root.addChild(this._timerPanel);
    }

    public startGame(){
        Data.score=0;
        for(let i=0;i<this._row;i++){
            this._rectGroups[i].init();
            this._rectGroups[i].y=Data.getWidth()*i;
            this._rectGroups[i]._currentRow=i;
            if(i!=(this._row-1)){
                this._rectGroups[i].creatBlackRect();
            }
        }
        this._timerPanel.start();
    }
}