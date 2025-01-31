let buttonMargin = 100;
let button1Hover; let button1Active; let button1X; let button1Y; let knobAmplitude1Hover; let knobAmplitude1Value;
let button2Hover; let button2Active; let button2X; let button2Y; let knobAmplitude2Hover; let knobAmplitude2Value;
let button3Hover; let button3Active; let button3X; let button3Y; let knobAmplitude3Hover; let knobAmplitude3Value;
let sinusIcon;
let sawIcon;
let squareIcon;

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
let startX; let startY;

function draw() {
    background(240);
    fill(255); centerRect(width/2, height/3, 700, 300); //Display
    checkHover();
    tegnInteraktiv();

    


}

function checkHover() {
    //tjek om mussen er over knapper
    if(mouseX > width/2-350 && mouseX < width/2-350+70) { 
        if(mouseY > button1Y && mouseY < button1Y+70) {button1Hover=true;} else { button1Hover=false;}
        if(mouseY > button2Y && mouseY < button2Y+70) {button2Hover=true;} else { button2Hover=false;}
        if(mouseY > button3Y && mouseY < button3Y+70) {button3Hover=true;} else { button3Hover=false;}
    } else { button1Hover=false; button2Hover=false; button3Hover=false; }
    //tjek over knobs
    if(mouseX > 25+button1X+10+150-35 && mouseX < 25+button1X+10+150+35) {
        if(mouseY > button1Y && mouseY < button1Y+70) {knobAmplitude1Hover=true;} else { knobAmplitude1Hover=false;}
        if(mouseY > button2Y && mouseY < button2Y+70) {knobAmplitude2Hover=true;} else { knobAmplitude2Hover=false;}
        if(mouseY > button3Y && mouseY < button3Y+70) {knobAmplitude3Hover=true;} else { knobAmplitude3Hover=false;}
    } else { knobAmplitude1Hover=false; knobAmplitude2Hover=false; knobAmplitude3Hover=false; }

    if(mouseIsPressed) {
        if(knobAmplitude1Hover) { if(!dragging){startX = mouseX; startY = mouseY} dragging = true; knobAmplitude1Value=10;}
        
        if(knobAmplitude1Value>0 && knobAmplitude1Value<100) { knobAmplitude1Value=(startY-mouseY); } 
        else if(knobAmplitude1Value<=0){ knobAmplitude1Value = 0; }
        else if(knobAmplitude1Value>=100){ knobAmplitude1Value = 100; }
    } else {
        dragging = false;
    }
}

function tegnInteraktiv() { //tegner knapper og "knobs"
    //tegn knapper
    if(button1Hover && button1Active) { fill(180) } else if(button1Hover || button1Active) { fill(220) } else { fill (255) }
    rect(button1X, button1Y, 70, 70);
    if(button2Hover && button2Active) { fill(180) } else if(button2Hover || button2Active) { fill(220) } else { fill (255) }
    rect(button2X, button2Y, 70, 70);
    if(button3Hover && button3Active) { fill(180) } else if(button3Hover || button3Active) { fill(220) } else { fill (255) }
    rect(button3X, button3Y, 70, 70);
    //ikoner til knapper
    image(sinusIcon, button1X+10, button1Y+10, 50, 50);
    image(sawIcon, button2X+10, button2Y+10,50,50);
    image(squareIcon, button3X+10, button3Y+10,50,50);

    //tegn knobs
    if(knobAmplitude1Hover) { fill(220) } else { fill (255) }
    createKnob(25+button1X+10+150, 25+button1Y+10, 70, 1, "amplitude");
    if(knobAmplitude2Hover) { fill(220) } else { fill (255) }
    createKnob(25+button2X+10+150, 25+button2Y+10, 70, 2, "amplitude");
    if(knobAmplitude3Hover) { fill(220) } else { fill (255) }
    createKnob(25+button3X+10+150, 25+button3Y+10, 70, 3, "amplitude");
}

//amplitude
//hastighed
//bølgelængde
let dragging;

function mouseClicked() {
    //knapper
    if(button1Hover){if(button1Active){button1Active=false;}else{button1Active=true;}}
    if(button2Hover){if(button2Active){button2Active=false;}else{button2Active=true;}}
    if(button3Hover){if(button3Active){button3Active=false;}else{button3Active=true;}} 
}

function createKnob(x,y,d,n,t) { 
    circle(x, y, d);
    linjeFraVinkel(x, y, 2, d/2); 
    linjeFraVinkel(x, y, 1, d/2);
    if(n===1) {
        if(t==="amplitude") { fill(255,0,0);
            if((2+(knobAmplitude1Value/100)*(2*PI-1))>=2 && (2+(knobAmplitude1Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobAmplitude1Value/100)*(2*PI-1)); } }
    }
    else if(n===2) {
        if(t==="amplitude") { fill(255,0,0);
            if((2+(knobAmplitude2Value/100)*(2*PI-1))>=2 && (2+(knobAmplitude2Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobAmplitude2Value/100)*(2*PI-1)); } }
    }
    else if(n===3) {
        if(t==="amplitude") { fill(255,0,0);
            if((2+(knobAmplitude3Value/100)*(2*PI-1))>=2 && (2+(knobAmplitude3Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobAmplitude3Value/100)*(2*PI-1)); } }
    }
    fill(255); circle(x, y, d*0.7); 
}

function centerRect(x,y,w,h) {rect(x-w/2, y-h/2, w, h)}
function linjeFraVinkel(x,y,v,l) {line(x,y,x+cos(v)*l,y+sin(v)*l)}
