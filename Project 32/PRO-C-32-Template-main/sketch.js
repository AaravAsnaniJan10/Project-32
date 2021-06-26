const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;


function preload() {
    // create getBackgroundImg() here
    bg = loadImage("sunsrise1.png","sunsrise2.png","sunsrise3.png","sunsrise4.png","sunsrise5.png","sunsrise6.png","sunsrise7.png","sunsrise8.png","sunsrise9.png","sunsrise10.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

   // add condition to check if any background image is there to add
          

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var responseJSON = await response.json()
    var datetime=responseJSON.datetime
    
   // write code slice the datetime  "datetime":"2021-06-26T21:51:53.909198+05:30"
   var hour  = datetime.slice(11,13)
   console.log(hour)
 
    // add conditions to change the background images from sunrise to sunset
     if(hour>=04 && hour<=06){
     bg = "sunrise1.png"
     }else if (hour>=06 && hour<=08){
     bg = "sunrise2.png"
    }else if   (hour>=08 && hour<=10){
     bg = "sunrise3.png"  
    }else if (hour>=10 && hour<=12){
     bg = "sunrise4.png"
    }else if   (hour>=12 && hour<=14){
     bg = "sunrise5.png"  
    }else if (hour>=14 && hour<=16){
     bg = "sunrise6.png"
    }else if   (hour>=16 && hour<=18){
     bg = "sunrise7.png"  
    }else if (hour>=18 && hour<=20){
     bg = "sunrise8.png"
    }else if   (hour>=22 && hour<=24){
     bg = "sunrise9.png"     
    }else if   (hour>=24 && hour<=06){
     bg = "sunrise10.png"
     
    //load the image in backgroundImg variable here

}}
