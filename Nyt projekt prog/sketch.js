function preload() {
    sinusIcon = loadImage("assets/Sinus-wave.png");
    sawIcon = loadImage("assets/Saw-wave.png");
    squareIcon = loadImage("assets/Square-wave.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight); background(240);
    button1X = width/2-350; button1Y = height/3+150+buttonMargin*1;
    button2X = width/2-350; button2Y = height/3+150+buttonMargin*2;
    button3X = width/2-350; button3Y = height/3+150+buttonMargin*3;
}


function draw() {
    background(240);
    fill(255); centerRect(width/2, height/3, 700, 300); //Display

    //interaktivitet. se interactive.js
    checkHover();
    tegnInteraktiv();
}

function centerRect(x,y,w,h) {rect(x-w/2, y-h/2, w, h)}
function linjeFraVinkel(x,y,v,l) {line(x,y,x+cos(v)*l,y+sin(v)*l)}
