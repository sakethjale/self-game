class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
    }
  
    play(){
      form.hide()
      background(bgimg)

      Player.getPlayerInfo()
if(allPlayers!==undefined)
{

    for(var plr in allPlayers)
    {
      console.log(player.index)
      
          if(player.index===1)
          {
            console.log(plr)
            if(keyCode===UP_ARROW){
              hero1.y=hero1.y-4
              player.changePosition(0,-4)  
            }
            if(keyCode===DOWN_ARROW){
              hero1.y=hero1.y+4
              player.changePosition(0,4)
            }
            if(keyCode===LEFT_ARROW){
              hero1.x=hero1.x-4
              player.changePosition(-4,0)
            }
            if(keyCode===RIGHT_ARROW){
              hero1.x=hero1.x+4
              player.changePosition(0,4)
             }
             hero1.x=hero1.x-0.5
          }
          
          if(player.index===2)
          {
            console.log(plr)
            if(keyCode===UP_ARROW){
              hero2.y=hero2.y-4  
            }
            if(keyCode===DOWN_ARROW){
              hero2.y=hero2.y+4
            }
            if(keyCode===LEFT_ARROW){
              hero2.x=hero2.x-4
            }
            if(keyCode===RIGHT_ARROW){
              hero2.x=hero2.x+4
             }
             hero2.x=hero2.x-0.5
          }
      }
      hero1.collide(invisibl)
      hero2.collide(invisibl)
    
  }
       }
    
      
    end(){
      
    }
  }
  