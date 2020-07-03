class Game{
    constructor(){

    }
    getGS(){
    var gsrefer = database.ref('gameState')
    gsrefer.on("value", function(data){
        gameState = data.val();  
    });
    }
    
    updateGS(state){
        var updategsref = database.ref('/')
        updategsref.update({
            gameState: state
        });
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getPC();
            form = new Form 
            form.display(); 
        }
    }
    play(){
        form.hide();
        text("The Game will Begin in, 3 seconds", 120, 100)
        Player.getAllPlayerInfo();
        if(allPlayers !== undefined ){
            var playersy = 130
            for(var plr in allPlayers){
                if(plr === "player " + player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                playersy = playersy + 20
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 200, playersy)
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20
            player.updatePlayerInfo();
        }
        

    }
    

}