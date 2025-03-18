//knapper
let buttonMargin = 100;
let button1Hover; let button1Active; let button1X; let button1Y; 
let button2Hover; let button2Active; let button2X; let button2Y; 
let button3Hover; let button3Active; let button3X; let button3Y; 
let sinusIcon; let sawIcon; let squareIcon;

let start; let pause; let playing = false; let buttonPlayingHover;
let linkIcon; let buttonLinkHover; let link = true;
let showPreview; let hidePreview; let wavePreview = false; let buttonWavePreviewHover;
//amplitude knobs
let knobAmplitude1Hover; let knobAmplitude1Value=50; let knobAmplitudeX;
let knobAmplitude2Hover; let knobAmplitude2Value=50;
let knobAmplitude3Hover; let knobAmplitude3Value=50;
//hastighed knobs
let knobHastighed1Hover; let knobHastighed1Value=10; let knobHastighedX;
let knobHastighed2Hover; let knobHastighed2Value=10;
let knobHastighed3Hover; let knobHastighed3Value=10;
//bølgelængde knobs
let knobBølgelængde1Hover; let knobBølgelængde1Value=50; let knobBølgelængdeX;
let knobBølgelængde2Hover; let knobBølgelængde2Value=50;
let knobBølgelængde3Hover; let knobBølgelængde3Value=50; 

//knob
let startX; let startY;
let type; let modify;
let dragging;

function checkHover() {
    //tjek om mussen er over knapper
    if(mouseX > button1X && mouseX < button1X+70) { 
        if(mouseY > button1Y && mouseY < button1Y+70) {button1Hover=true;} else { button1Hover=false;}
        if(mouseY > button2Y && mouseY < button2Y+70) {button2Hover=true;} else { button2Hover=false;}
        if(mouseY > button3Y && mouseY < button3Y+70) {button3Hover=true;} else { button3Hover=false;}
    } else { button1Hover=false; button2Hover=false; button3Hover=false; }
    //play-knap
    if(mouseX>width/2+mainDisplayWidth/2+60&&mouseX<width/2+mainDisplayWidth/2+60+40&&mouseY>height/3-mainDisplayheight/2&&mouseY<height/3-mainDisplayheight/2+40) {
        buttonPlayingHover = true;
    } else {buttonPlayingHover = false;}
    //link-knap
    if(mouseX>width/2+mainDisplayWidth/2+60&&mouseX<width/2+mainDisplayWidth/2+60+40&&mouseY>height/3-mainDisplayheight/2+50&&mouseY<height/3-mainDisplayheight/2+40+50) {
        buttonLinkHover = true;
    } else {buttonLinkHover = false;}
    //wave-Preview
    if(mouseX>width/2+mainDisplayWidth/2+60&&mouseX<width/2+mainDisplayWidth/2+60+40&&mouseY>height/3-20&&mouseY<height/3+20) {
        buttonWavePreviewHover = true;
    } else {buttonWavePreviewHover = false;}

    //tjek over knobs
    if(mouseX > knobAmplitudeX-35 && mouseX < knobAmplitudeX+35) {
        if(mouseY > button1Y && mouseY < button1Y+70) {knobAmplitude1Hover=true;} else { knobAmplitude1Hover=false;}
        if(mouseY > button2Y && mouseY < button2Y+70) {knobAmplitude2Hover=true;} else { knobAmplitude2Hover=false;}
        if(mouseY > button3Y && mouseY < button3Y+70) {knobAmplitude3Hover=true;} else { knobAmplitude3Hover=false;}
    } else if(mouseX > knobHastighedX-35 && mouseX < knobHastighedX+35) { 
        if(mouseY > button1Y && mouseY < button1Y+70) {knobHastighed1Hover=true;} else { knobHastighed1Hover=false;}
        if(mouseY > button2Y && mouseY < button2Y+70) {knobHastighed2Hover=true;} else { knobHastighed2Hover=false;}
        if(mouseY > button3Y && mouseY < button3Y+70) {knobHastighed3Hover=true;} else { knobHastighed3Hover=false;}
    }  else if(mouseX > knobBølgelængdeX-35 && mouseX < knobBølgelængdeX+35) { 
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
        if(dragging){ opdaterKnob(type, modify); }
    } else { dragging = false; }
}   

//mustryk til opdatering af knapper
function mouseClicked() {
    if(button1Hover){if(button1Active){button1Active=false;}else{button1Active=true;}}
    if(button2Hover){if(button2Active){button2Active=false;}else{button2Active=true;}}
    if(button3Hover){if(button3Active){button3Active=false;}else{button3Active=true;}}
    if(buttonPlayingHover){if(playing){playing=false;}else{playing=true;}}
    if(buttonLinkHover){if(link){link=false;}else{link=true;}}
    if(buttonWavePreviewHover){if(wavePreview){wavePreview=false;}else{wavePreview=true;}}
}

//opdatering af knob værdier. type kan være amplitude, hastighed eller bølgelængde
function opdaterKnob(type, modify) {
    if(type==="amplitude") {
        if(modify===1) { if(knobAmplitude1Value>0 && knobAmplitude1Value<100) { knobAmplitude1Value=(startY-mouseY); }   
        } else if(modify===2) { if(knobAmplitude2Value>0 && knobAmplitude2Value<100) { knobAmplitude2Value=(startY-mouseY); } 
        } else if(modify===3) { if(knobAmplitude3Value>0 && knobAmplitude3Value<100) { knobAmplitude3Value=(startY-mouseY); }}
    } else if(type==="hastighed") {
        if(modify===1) { if(knobHastighed1Value>0 && knobHastighed1Value<100) { knobHastighed1Value=(startY-mouseY); } 
        } else if(modify===2) { if(knobHastighed2Value>0 && knobHastighed2Value<100) { knobHastighed2Value=(startY-mouseY); }  
        } else if(modify===3) { if(knobHastighed3Value>0 && knobHastighed3Value<100) { knobHastighed3Value=(startY-mouseY); }}
    } else if(type==="bølgelængde") {
        if(modify===1) { if(knobBølgelængde1Value>0 && knobBølgelængde1Value<100) { knobBølgelængde1Value=(startY-mouseY); } 
        } else if(modify===2) { if(knobBølgelængde2Value>0 && knobBølgelængde2Value<100) { knobBølgelængde2Value=(startY-mouseY); } 
        } else if(modify===3) { if(knobBølgelængde3Value>0 && knobBølgelængde3Value<100) { knobBølgelængde3Value=(startY-mouseY); }}
    }
    valueControl();
}

function valueControl() { //sørger for at værdier aldrig kommer under 0 og over 100.
    if(knobAmplitude1Value<=0){ knobAmplitude1Value = 0.01; } else if(knobAmplitude1Value>=100){ knobAmplitude1Value = 100; }
    if(knobAmplitude2Value<=0){ knobAmplitude2Value = 0.01; } else if(knobAmplitude2Value>=100){ knobAmplitude2Value = 100; }
    if(knobAmplitude3Value<=0){ knobAmplitude3Value = 0.01; } else if(knobAmplitude3Value>=100){ knobAmplitude3Value = 100; }
    if(knobHastighed1Value<=0){ knobHastighed1Value = 0.01; } else if(knobHastighed1Value>=100){ knobHastighed1Value = 100; }
    if(knobHastighed2Value<=0){ knobHastighed2Value = 0.01; } else if(knobHastighed2Value>=100){ knobHastighed2Value = 100; }
    if(knobHastighed3Value<=0){ knobHastighed3Value = 0.01; } else if(knobHastighed3Value>=100){ knobHastighed3Value = 100; }
    if(knobBølgelængde1Value<=0){ knobBølgelængde1Value = 0.01; } else if(knobBølgelængde1Value>=100){ knobBølgelængde1Value = 100; }
    if(knobBølgelængde2Value<=0){ knobBølgelængde2Value = 0.01; } else if(knobBølgelængde2Value>=100){ knobBølgelængde2Value = 100; }
    if(knobBølgelængde3Value<=0){ knobBølgelængde3Value = 0.01; } else if(knobBølgelængde3Value>=100){ knobBølgelængde3Value = 100; }
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

//interaktive elementer tegnes
function tegnInteraktiv() {
    strokeWeight(1); stroke(0);
    //tegn knapper
    if(button1Hover && button1Active) { fill(180) } else if(button1Hover || button1Active) { fill(220) } else { fill (255) }
    rect(button1X, button1Y, 70, 70);
    if(button2Hover && button2Active) { fill(180) } else if(button2Hover || button2Active) { fill(220) } else { fill (255) }
    rect(button2X, button2Y, 70, 70);
    if(button3Hover && button3Active) { fill(180) } else if(button3Hover || button3Active) { fill(220) } else { fill (255) }
    rect(button3X, button3Y, 70, 70);
    if(buttonPlayingHover) { fill(220) } else { fill (255) }
    rect(width/2+mainDisplayWidth/2+60, height/3-mainDisplayheight/2, 40, 40)
    if(buttonLinkHover && link) { fill(180) } else if(buttonLinkHover || link) { fill(220) } else { fill (255) }
    rect(width/2+mainDisplayWidth/2+60, height/3-mainDisplayheight/2+50, 40, 40)
    if(buttonWavePreviewHover) { fill(220) } else { fill (255) }
    rect(width/2+mainDisplayWidth/2+60, height/3-20, 40, 40)

    //ikoner til knapper
    image(sinusIcon, button1X+10, button1Y+10, 50, 50);
    image(sawIcon, button2X+10, button2Y+10,50,50);
    image(squareIcon, button3X+10, button3Y+10,50,50);
    if(playing) { image(start, width/2+mainDisplayWidth/2+60+2, height/3-mainDisplayheight/2+2, 36, 36)   
    } else { image(pause, width/2+mainDisplayWidth/2+60+2, height/3-mainDisplayheight/2+2, 36, 36) }
    image(linkIcon,width/2+mainDisplayWidth/2+60+2, height/3-mainDisplayheight/2+2+50,36,36);
    if(wavePreview) { image(hidePreview, width/2+mainDisplayWidth/2+60+2, height/3-20+2, 36, 36)   
    } else { image(showPreview, width/2+mainDisplayWidth/2+60+2, height/3-20+2, 36, 36) }
    //tegn knobs:
    //amplitude
    if(!dragging && knobAmplitude1Hover) { fill(220) } else { fill (255) }
    createKnob(knobAmplitudeX, 25+button1Y+10, 70, 1, "amplitude");
    if(!dragging && knobAmplitude2Hover) { fill(220) } else { fill (255) }
    createKnob(knobAmplitudeX, 25+button2Y+10, 70, 2, "amplitude");
    if(!dragging && knobAmplitude3Hover) { fill(220) } else { fill (255) }
    createKnob(knobAmplitudeX, 25+button3Y+10, 70, 3, "amplitude");
    //hastighed
    if(!dragging && knobHastighed1Hover) { fill(220) } else { fill (255) }
    createKnob(knobHastighedX, 25+button1Y+10, 70, 1, "hastighed");
    if(!dragging && knobHastighed2Hover) { fill(220) } else { fill (255) }
    createKnob(knobHastighedX, 25+button2Y+10, 70, 2, "hastighed");
    if(!dragging && knobHastighed3Hover) { fill(220) } else { fill (255) }
    createKnob(knobHastighedX, 25+button3Y+10, 70, 3, "hastighed");
    //bølgelængde
    if(!dragging && knobBølgelængde1Hover) { fill(220) } else { fill (255) }
    createKnob(knobBølgelængdeX, 25+button1Y+10, 70, 1, "bølgelængde");
    if(!dragging && knobBølgelængde2Hover) { fill(220) } else { fill (255) }
    createKnob(knobBølgelængdeX, 25+button2Y+10, 70, 2, "bølgelængde");
    if(!dragging && knobBølgelængde3Hover) { fill(220) } else { fill (255) }
    createKnob(knobBølgelængdeX, 25+button3Y+10, 70, 3, "bølgelængde");

    //titel til knobs  
    fill(0); textSize(20); textAlign(CENTER, CENTER); textFont('Courier New'); text("AMPLITUDE",knobAmplitudeX, 25+button1Y+10-60);
    fill(0); textSize(20); textAlign(CENTER, CENTER); textFont('Courier New'); text("HASTIGHED",knobHastighedX, 25+button1Y+10-60);
    fill(0); textSize(20); textAlign(CENTER, CENTER); textFont('Courier New'); text("BØLGELÆNGDE",knobBølgelængdeX, 25+button1Y+10-60);
}