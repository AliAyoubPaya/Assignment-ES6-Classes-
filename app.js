class Automobile {
    constructor(name, model, color, type){
    this.name = name
    this.model = model
    this.color = color
    this.type = type
    }
    start(){
        return "car is raedy for drive"
    }
    opendoor(){
        return " open the door"
    }
}



class truck extends Automobile{
    constructor(name, model, color, type, doorlock, maxspeed){
        super(name, model, color, type)
        this.doorlock = doorlock
        this.maxspeed = maxspeed
    }
}
class car extends Automobile{
    constructor(name, model, color, type, doordesign, maxspeed){
        super(name, model, color, type)
        this.doordesign = doordesign
        this.maxspeed = maxspeed
    }
}
class bus extends Automobile{
    constructor(name, model, color, type, doorhandle, maxspeed){
        super(name, model, color, type)
        this.doorhandle = doorhandle
        this.maxspeed = maxspeed

}
}
const check = new bus ("Tesla" , "2021", "White", "Auto", "Automatic", "120km/h" , "Scissor doors", "221mph","Kit", "50mph" )
console.log(check)