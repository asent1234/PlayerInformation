class Form{
    constructor(){
        this.inputbox = createInput("Enter Your Name")
        this.button = createButton("Register/Submit")
        this.greeting = createElement("h3")
    }
    display(){
        var title = createElement("h2")
        title.html("Multiplayer Car Racing Game")
        title.position(130, 0) 
        
        
        this.inputbox.position(130, 160)

       
        this.button.position(250, 200)

        

        this.button.mousePressed(() =>{
            player.name = this.inputbox.value();
            
            playerCount = playerCount + 1
            player.index = playerCount
            player.updatePC(playerCount)
            if(player.name === "Enter Your Name"){
                player.name = "Anonymous"
            }
            player.updatePlayerInfo() 

            this.greeting.html("Hello Player "+ playerCount+ ", "+ player.name)
            this.greeting.position(130,160)
        })
    }
    hide(){
    this.inputbox.hide();
    this.button.hide();
    this.greeting.hide();
    }
}