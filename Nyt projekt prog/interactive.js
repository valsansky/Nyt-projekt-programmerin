//knapper
let buttonMargin = 100;
let button1Hover; let button1Active; let button1X; let button1Y; 
let button2Hover; let button2Active; let button2X; let button2Y; 
let button3Hover; let button3Active; let button3X; let button3Y; 
let sinusIcon; let sawIcon; let squareIcon;
//amplitude knobs
let knobAmplitude1Hover; let knobAmplitude1Value;
let knobAmplitude2Hover; let knobAmplitude2Value;
let knobAmplitude3Hover; let knobAmplitude3Value;
//hastighed knobs
let knobHastighed1Hover; let knobHastighed1Value;
let knobHastighed2Hover; let knobHastighed2Value;
let knobHastighed3Hover; let knobHastighed3Value;
//bølgelængde knobs
let knobBølgelængde1Hover; let knobBølgelængde1Value;
let knobBølgelængde2Hover; let knobBølgelængde2Value;
let knobBølgelængde3Hover; let knobBølgelængde3Value; 

let startX; let startY;
let type; let modify;
let dragging;

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
    } else if(mouseX > 25+button1X+10+300-35 && mouseX < 25+button1X+10+300+35) {
        if(mouseY > button1Y && mouseY < button1Y+70) {knobHastighed1Hover=true;} else { knobHastighed1Hover=false;}
        if(mouseY > button2Y && mouseY < button2Y+70) {knobHastighed2Hover=true;} else { knobHastighed2Hover=false;}
        if(mouseY > button3Y && mouseY < button3Y+70) {knobHastighed3Hover=true;} else { knobHastighed3Hover=false;}
    }  else if(mouseX > 25+button1X+10+450-35 && mouseX < 25+button1X+10+450+35) {
        if(mouseY > button1Y && mouseY < button1Y+70) {knobBølgelængde1Hover=true;} else { knobBølgelængde1Hover=false;}
        if(mouseY > button2Y && mouseY < button2Y+70) {knobBølgelængde2Hover=true;} else { knobBølgelængde2Hover=false;}
        if(mouseY > button3Y && mouseY < button3Y+70) {knobBølgelængde3Hover=true;} else { knobBølgelængde3Hover=false;}
    } else { 
        knobAmplitude1Hover=false; knobAmplitude2Hover=false; knobAmplitude3Hover=false; 
        knobHastighed1Hover=false; knobHastighed2Hover=false; knobHastighed3Hover=false; 
        knobBølgelængde1Hover=false; knobBølgelængde2Hover=false; knobBølgelængde3Hover=false;
    }

    //mustryk til opdatering af knobs.
    if(mouseIsPressed) {
        if(!dragging) {  
            if(knobAmplitude1Hover) {dragging = true; startX = mouseX; startY = mouseY; type = "amplitude"; modify = 1; knobAmplitude1Value=10;} else
            if(knobAmplitude2Hover) {dragging = true; startX = mouseX; startY = mouseY; type = "amplitude"; modify = 2; knobAmplitude2Value=10;} else
            if(knobAmplitude3Hover) {dragging = true; startX = mouseX; startY = mouseY; type = "amplitude"; modify = 3; knobAmplitude3Value=10;}

            if(knobHastighed1Hover) {dragging = true; startX = mouseX; startY = mouseY; type = "hastighed"; modify = 1; knobHastighed1Value=10;} else
            if(knobHastighed2Hover) {dragging = true; startX = mouseX; startY = mouseY; type = "hastighed"; modify = 2; knobHastighed2Value=10;} else
            if(knobHastighed3Hover) {dragging = true; startX = mouseX; startY = mouseY; type = "hastighed"; modify = 3; knobHastighed3Value=10;}

            if(knobBølgelængde1Hover) {dragging = true; startX = mouseX; startY = mouseY; type = "bølgelængde"; modify = 1; knobBølgelængde1Value=10;} else
            if(knobBølgelængde2Hover) {dragging = true; startX = mouseX; startY = mouseY; type = "bølgelængde"; modify = 2; knobBølgelængde2Value=10;} else
            if(knobBølgelængde3Hover) {dragging = true; startX = mouseX; startY = mouseY; type = "bølgelængde"; modify = 3; knobBølgelængde3Value=10;}
        }
        if(dragging){opdaterKnob(type, modify);}
    } else { dragging = false; }
}   



//opdatering af knob værdier. type kan være amplitude, hastighed eller bølgelængde
function opdaterKnob(type, modify) {
    if(type==="amplitude") {
        if(modify===1) {
            if(knobAmplitude1Value>0 && knobAmplitude1Value<100) { knobAmplitude1Value=(startY-mouseY); } 
            else if(knobAmplitude1Value<=0){ knobAmplitude1Value = 0.01; }
            else if(knobAmplitude1Value>=100){ knobAmplitude1Value = 100; }
        } else if(modify===2) {
            if(knobAmplitude2Value>0 && knobAmplitude2Value<100) { knobAmplitude2Value=(startY-mouseY); } 
            else if(knobAmplitude2Value<=0){ knobAmplitude2Value = 0.01; }
            else if(knobAmplitude2Value>=100){ knobAmplitude2Value = 100; }
        } else if(modify===3) {
            if(knobAmplitude3Value>0 && knobAmplitude3Value<100) { knobAmplitude3Value=(startY-mouseY); } 
            else if(knobAmplitude3Value<=0){ knobAmplitude3Value = 0.01; }
            else if(knobAmplitude3Value>=100){ knobAmplitude3Value = 100; }
        }
    } else if(type==="hastighed") {
        if(modify===1) {
            if(knobHastighed1Value>0 && knobHastighed1Value<100) { knobHastighed1Value=(startY-mouseY); } 
            else if(knobHastighed1Value<=0){ knobHastighed1Value = 0.01; }
            else if(knobHastighed1Value>=100){ knobHastighed1Value = 100; }
        } else if(modify===2) {
            if(knobHastighed2Value>0 && knobHastighed2Value<100) { knobHastighed2Value=(startY-mouseY); } 
            else if(knobHastighed2Value<=0){ knobHastighed2Value = 0.01; }
            else if(knobHastighed2Value>=100){ knobHastighed2Value = 100; }
        } else if(modify===3) {
            if(knobHastighed3Value>0 && knobHastighed3Value<100) { knobHastighed3Value=(startY-mouseY); } 
            else if(knobHastighed3Value<=0){ knobHastighed3Value = 0.01; }
            else if(knobHastighed3Value>=100){ knobHastighed3Value = 100; }
        }
    } else if(type==="bølgelængde") {
        if(modify===1) {
            if(knobBølgelængde1Value>0 && knobBølgelængde1Value<100) { knobBølgelængde1Value=(startY-mouseY); } 
            else if(knobBølgelængde1Value<=0){ knobBølgelængde1Value = 0.01; }
            else if(knobBølgelængde1Value>=100){ knobBølgelængde1Value = 100; }
        } else if(modify===2) {
            if(knobBølgelængde2Value>0 && knobBølgelængde2Value<100) { knobBølgelængde2Value=(startY-mouseY); } 
            else if(knobBølgelængde2Value<=0){ knobBølgelængde2Value = 0.01; }
            else if(knobBølgelængde2Value>=100){ knobBølgelængde2Value = 100; }
        } else if(modify===3) {
            if(knobBølgelængde3Value>0 && knobBølgelængde3Value<100) { knobBølgelængde3Value=(startY-mouseY); } 
            else if(knobBølgelængde3Value<=0){ knobBølgelængde3Value = 0.01; }
            else if(knobBølgelængde3Value>=100){ knobBølgelængde3Value = 100; }
        }
    }
}

//mustryk til opdatering af knapper
function mouseClicked() {
    if(button1Hover){if(button1Active){button1Active=false;}else{button1Active=true;}}
    if(button2Hover){if(button2Active){button2Active=false;}else{button2Active=true;}}
    if(button3Hover){if(button3Active){button3Active=false;}else{button3Active=true;}}
}

//interaktive elementer tegnes
function tegnInteraktiv() {
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

    //tegn knobs:
    //amplitude
    if(knobAmplitude1Hover) { fill(220) } else { fill (255) }
    createKnob(25+button1X+10+150, 25+button1Y+10, 70, 1, "amplitude");
    if(knobAmplitude2Hover) { fill(220) } else { fill (255) }
    createKnob(25+button2X+10+150, 25+button2Y+10, 70, 2, "amplitude");
    if(knobAmplitude3Hover) { fill(220) } else { fill (255) }
    createKnob(25+button3X+10+150, 25+button3Y+10, 70, 3, "amplitude");
    //hastighed
    if(knobHastighed1Hover) { fill(220) } else { fill (255) }
    createKnob(25+button1X+10+300, 25+button1Y+10, 70, 1, "hastighed");
    if(knobHastighed2Hover) { fill(220) } else { fill (255) }
    createKnob(25+button2X+10+300, 25+button2Y+10, 70, 2, "hastighed");
    if(knobHastighed3Hover) { fill(220) } else { fill (255) }
    createKnob(25+button3X+10+300, 25+button3Y+10, 70, 3, "hastighed");
    //bølgelængde
    if(knobBølgelængde1Hover) { fill(220) } else { fill (255) }
    createKnob(25+button1X+10+450, 25+button1Y+10, 70, 1, "bølgelængde");
    if(knobBølgelængde2Hover) { fill(220) } else { fill (255) }
    createKnob(25+button2X+10+450, 25+button2Y+10, 70, 2, "bølgelængde");
    if(knobBølgelængde3Hover) { fill(220) } else { fill (255) }
    createKnob(25+button3X+10+450, 25+button3Y+10, 70, 3, "bølgelængde");

    //titel til knobs  
    fill(0); textSize(20); textAlign(CENTER, CENTER); textFont('Courier New'); text("AMPLITUDE",25+button1X+10+150, 25+button1Y+10-60);
    fill(0); textSize(20); textAlign(CENTER, CENTER); textFont('Courier New'); text("HASTIGHED",25+button1X+10+300, 25+button1Y+10-60);
    fill(0); textSize(20); textAlign(CENTER, CENTER); textFont('Courier New'); text("BØLGELÆNGDE",25+button1X+10+450, 25+button1Y+10-60);
}

function createKnob(x,y,d,n,t) { 
    circle(x, y, d);
    linjeFraVinkel(x, y, 2, d/2); 
    linjeFraVinkel(x, y, 1, d/2);
    if(n===1) {
        if(t==="amplitude") { fill(255,0,0);
            if((2+(knobAmplitude1Value/100)*(2*PI-1))>=2 && (2+(knobAmplitude1Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobAmplitude1Value/100)*(2*PI-1)); } }
        if(t==="hastighed") { fill(255,0,0);
            if((2+(knobHastighed1Value/100)*(2*PI-1))>=2 && (2+(knobHastighed1Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobHastighed1Value/100)*(2*PI-1)); } }
        if(t==="bølgelængde") { fill(255,0,0);
            if((2+(knobBølgelængde1Value/100)*(2*PI-1))>=2 && (2+(knobBølgelængde1Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobBølgelængde1Value/100)*(2*PI-1)); } }
    }
    else if(n===2) {
        if(t==="amplitude") { fill(255,0,0);
            if((2+(knobAmplitude2Value/100)*(2*PI-1))>=2 && (2+(knobAmplitude2Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobAmplitude2Value/100)*(2*PI-1)); } }
        if(t==="hastighed") { fill(255,0,0);
            if((2+(knobHastighed2Value/100)*(2*PI-1))>=2 && (2+(knobHastighed2Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobHastighed2Value/100)*(2*PI-1)); } }
        if(t==="bølgelængde") { fill(255,0,0);
            if((2+(knobBølgelængde2Value/100)*(2*PI-1))>=2 && (2+(knobBølgelængde2Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobBølgelængde2Value/100)*(2*PI-1)); } }
    }
    else if(n===3) {
        if(t==="amplitude") { fill(255,0,0);
            if((2+(knobAmplitude3Value/100)*(2*PI-1))>=2 && (2+(knobAmplitude3Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobAmplitude3Value/100)*(2*PI-1)); } }
        if(t==="hastighed") { fill(255,0,0);
            if((2+(knobHastighed3Value/100)*(2*PI-1))>=2 && (2+(knobHastighed3Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobHastighed3Value/100)*(2*PI-1)); } }
        if(t==="bølgelængde") { fill(255,0,0);
            if((2+(knobBølgelængde3Value/100)*(2*PI-1))>=2 && (2+(knobBølgelængde3Value/100)*(2*PI-1))<=(2*PI+1)) {
                arc(x, y, 70, 70, 2, 2+(knobBølgelængde3Value/100)*(2*PI-1)); } }
    }
    fill(255); circle(x, y, d*0.7); 
}