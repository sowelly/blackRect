class Main extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this)
        // let group:GroupRect=new GroupRect();
        // this.addChild(group);
    }
  
   
    private addStage(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);
        let game=new Game(this);

    }

}