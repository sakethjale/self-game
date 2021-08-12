class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.rank=null;
      this.xpos=null;
      this.ypos=null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }

    getposition()
    {
      var playerpos = database.ref('players/player'+this.index);
      playerpos.on("value",(data)=>{
        pos = data.val();
      })
      this.xpos=pos.x;
      this.ypos=pos.y;
    }

    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        x:this.xpos,
        y:this.ypos
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }

    changePosition(myx,myy)
    {
       database.ref('players/player'+player.index).update({
         'x':this.xpos+myx,
         'y':this.ypos+myy
       }) 
    }  
    
  }
  