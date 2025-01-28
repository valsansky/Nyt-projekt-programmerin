let buttonMargin = 100;
let button1Hover; let button1Active;
let button2Hover; let button2Active;
let button3Hover; let button3Active;
let sinusIcon;
let sawIcon;
let squareIcon;

function preload() {
    sinusIcon = loadImage("assets/Sinus-wave.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight); background(240);
}

function draw() {
    background(240);
    fill(255); centerRect(width/2, height/3, 700, 300); //Display
    //buttonhover
    if(mouseX > width/2-350 && mouseX < width/2-350+70) {
        if(mouseY > height/3+150+buttonMargin && mouseY < height/3+150+buttonMargin+70) {button1Hover=true;} else { button1Hover=false;}
            if(button1Hover && button1Active) {fill(180) }else
            if(button1Hover || button1Active) { fill(220) } else { fill (255) }
            rect(width/2-350, height/3+150+buttonMargin, 70, 70);
        if(mouseY > height/3+150+buttonMargin*2 && mouseY < height/3+150+buttonMargin*2+70) {button2Hover=true;} else { button2Hover=false}
            if(button2Hover && button2Active) {fill(180) }else
            if(button2Hover || button2Active) { fill(220) } else { fill (255) }
            rect(width/2-350, height/3+150+buttonMargin*2, 70, 70);
        if(mouseY > height/3+150+buttonMargin*3 && mouseY < height/3+150+buttonMargin*3+70) {button3Hover=true;} else { button3Hover=false}
            if(button3Hover && button3Active) {fill(180) }else
            if(button3Hover || button3Active) { fill(220) } else { fill (255) }    
            rect(width/2-350, height/3+150+buttonMargin*3, 70, 70);
    } else { button1Hover=false; button2Hover=false; button3Hover=false;
        if(button1Active) {fill(220);} else {fill(255);} 
            rect(width/2-350, height/3+150+buttonMargin, 70, 70);
        if(button2Active) {fill(220);} else {fill(255);} 
            rect(width/2-350, height/3+150+buttonMargin*2, 70, 70);
        if(button3Active) {fill(220);} else {fill(255);} 
            rect(width/2-350, height/3+150+buttonMargin*3, 70, 70);    
    }

    image(sinusIcon, width/2-350+10, height/3+150+buttonMargin+10, 50, 50);
}

function mouseClicked() {
    //knapper
    if(button1Hover){if(button1Active){button1Active=false;}else{button1Active=true;}}
    if(button2Hover){if(button2Active){button2Active=false;}else{button2Active=true;}}
    if(button3Hover){if(button3Active){button3Active=false;}else{button3Active=true;}}
}

function centerRect(x,y,w,h) {rect(x-w/2, y-h/2, w, h)}