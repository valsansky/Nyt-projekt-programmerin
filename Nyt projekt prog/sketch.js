let inddelingX=10;
let inddelingY=5;
let opdelingKurve=300;
let mainDisplayWidth=700; let mainDisplayheight=300; let fps = 30;
let punktX; let punktY;
let tidSinus=0; let tidSaw=0; let tidSquare=0;
let meterToPixelsY = (((mainDisplayheight-50)/2)/100);
let gammeltX; let gammeltY;


function preload() {
    sinusIcon = loadImage("assets/Sinus-wave.png");
    sawIcon = loadImage("assets/Saw-wave.png");
    squareIcon = loadImage("assets/Square-wave.png");
    start = loadImage("assets/Playing.png");
    pause = loadImage("assets/Paused.png");
    linkIcon = loadImage("assets/Linked.png");
    showPreview = loadImage("assets/Show-preview.png");
    hidePreview = loadImage("assets/Hide-preview.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight); background(240); frameRate(fps);
    button1X = width/2-350; button1Y = height/3+150+buttonMargin*1;
    button2X = width/2-350; button2Y = height/3+150+buttonMargin*2;
    button3X = width/2-350; button3Y = height/3+150+buttonMargin*3;

    knobAmplitudeX = 25+button1X+10+110;
    knobHastighedX = 25+button1X+10+315;
    knobBølgelængdeX = 25+button1X+10+520;

    //start indstillinger
    button1Active = true;
}

function draw() {
    background(240);
    
    //interaktivitet. se interactive.js
    checkHover();
    tegnInteraktiv();

    //visuelt
    tegnDisplay();
    skrivAktuelleVærdier();

    tegnKurve();
}

let topSquare; let bundSquare;

function tegnKurve() { 
    //tegner bølgepreview
    if(wavePreview) {
        drawPreview("Preview-all");
    } else if(button1Hover) {
        drawPreview("SINUS");
    } else if(button2Hover) {
        drawPreview("SAW");
    } else if(button3Hover) {
        drawPreview("SQUARE");
    }
    //kontrollerer fart
    if(playing) {
        if(link) {
            tidSinus+=((opdelingKurve/inddelingX)/fps)*(knobHastighed1Value/10);
            tidSaw+=((opdelingKurve/inddelingX)/fps)*(knobHastighed2Value/10);
            tidSquare+=((opdelingKurve/inddelingX)/fps)*(knobHastighed3Value/10);
        } else {
            if(button1Active) {tidSinus+=((opdelingKurve/inddelingX)/fps)*(knobHastighed1Value/10);}
            if(button2Active) {tidSaw+=((opdelingKurve/inddelingX)/fps)*(knobHastighed2Value/10);}
            if(button3Active) {tidSquare+=((opdelingKurve/inddelingX)/fps)*(knobHastighed3Value/10);}
        }
    }
    gammeltX = undefined; gammeltY = undefined;
    for(let i = 0; i < opdelingKurve; i++) {
        punktX = width/2-(mainDisplayWidth-100)/2+((mainDisplayWidth-100)/opdelingKurve)*i;
        punktY = height/3;

        if(button1Active) {
            punktY+=sin((tidSinus+i)/(opdelingKurve/100)*(((2*PI)/knobBølgelængde1Value)*(inddelingX/10)))*knobAmplitude1Value*meterToPixelsY;
        }
        if(button2Active) {
            punktY+=knobAmplitude2Value*meterToPixelsY-(((tidSaw+(i+opdelingKurve/4))/(opdelingKurve/100)/(knobBølgelængde2Value)*(inddelingX/10))-floor(((tidSaw+(i+opdelingKurve/4))/(opdelingKurve/100)/(knobBølgelængde2Value)*(inddelingX/10))))*knobAmplitude2Value*2*meterToPixelsY;
        }
        if(button3Active) {
            punktY+=((knobAmplitude3Value*meterToPixelsY)*Math.sign(sin((2*PI*((tidSquare+(i+1))/(opdelingKurve/100)))/(knobBølgelængde3Value)*(inddelingX/10))));
        }

        //retter punkter hvis de er uden for display
        let outOfBounds;
        if(punktY < height/3-mainDisplayheight/2+25) {punktY = height/3-mainDisplayheight/2+25; if(gammeltY>height/3-mainDisplayheight/2+25){}else{outOfBounds = true;}} 
        if(punktY > height/3+mainDisplayheight/2-25) {punktY = height/3+mainDisplayheight/2-25; if(gammeltY<height/3+mainDisplayheight/2-25){}else{outOfBounds = true;}}
        
        //tegner linjerne
        if(outOfBounds!==true) {
            //fill(0); strokeWeight(0.1); circle(punktX,punktY,4);
            fill(0); strokeWeight(2); stroke(0);
            if(gammeltX !== undefined && gammeltY !== undefined) {
            line(gammeltX,gammeltY,punktX,punktY);}
        } gammeltX = punktX; gammeltY = punktY; 
    }
}

function drawPreview(waveType) {
    if(waveType==="Preview-all") { strokeWeight(1);
        gammeltX = undefined; gammeltY = undefined;
        for(let i = 0; i < opdelingKurve; i++) {
            punktX = width/2-(mainDisplayWidth-100)/2+((mainDisplayWidth-100)/opdelingKurve)*i;
            punktY = height/3+sin((tidSinus+i)/(opdelingKurve/100)*(((2*PI)/knobBølgelængde1Value)*(inddelingX/10)))*knobAmplitude1Value*meterToPixelsY;;
            let outOfBounds;
            if(punktY < height/3-mainDisplayheight/2+25) {punktY = height/3-mainDisplayheight/2+25; if(gammeltY>height/3-mainDisplayheight/2+25){}else{outOfBounds = true;}} 
            if(punktY > height/3+mainDisplayheight/2-25) {punktY = height/3+mainDisplayheight/2-25; if(gammeltY<height/3+mainDisplayheight/2-25){}else{outOfBounds = true;}}
            if(outOfBounds!==true) { //tegner linjerne
                fill(0); stroke(255,0,0);
                if(gammeltX !== undefined && gammeltY !== undefined) {
                line(gammeltX,gammeltY,punktX,punktY);}
            } gammeltX = punktX; gammeltY = punktY;
        } gammeltX = undefined; gammeltY = undefined;
        for(let i = 0; i < opdelingKurve; i++) {
            punktX = width/2-(mainDisplayWidth-100)/2+((mainDisplayWidth-100)/opdelingKurve)*i;
            punktY = height/3+knobAmplitude2Value*meterToPixelsY-(((tidSaw+(i+opdelingKurve/4))/(opdelingKurve/100)/(knobBølgelængde2Value)*(inddelingX/10))-floor(((tidSaw+(i+opdelingKurve/4))/(opdelingKurve/100)/(knobBølgelængde2Value)*(inddelingX/10))))*knobAmplitude2Value*2*meterToPixelsY;
            let outOfBounds;
            if(punktY < height/3-mainDisplayheight/2+25) {punktY = height/3-mainDisplayheight/2+25; if(gammeltY>height/3-mainDisplayheight/2+25){}else{outOfBounds = true;}} 
            if(punktY > height/3+mainDisplayheight/2-25) {punktY = height/3+mainDisplayheight/2-25; if(gammeltY<height/3+mainDisplayheight/2-25){}else{outOfBounds = true;}}
            if(outOfBounds!==true) { //tegner linjerne
                fill(0); stroke(0,255,0);
                if(gammeltX !== undefined && gammeltY !== undefined) {
                line(gammeltX,gammeltY,punktX,punktY);}
            } gammeltX = punktX; gammeltY = punktY;
        } gammeltX = undefined; gammeltY = undefined; 
        for(let i = 0; i < opdelingKurve; i++) {
            punktX = width/2-(mainDisplayWidth-100)/2+((mainDisplayWidth-100)/opdelingKurve)*i;
            punktY = height/3+((knobAmplitude3Value*meterToPixelsY)*Math.sign(sin((2*PI*((tidSquare+(i+1))/(opdelingKurve/100)))/(knobBølgelængde3Value)*(inddelingX/10))));
            let outOfBounds;
            if(punktY < height/3-mainDisplayheight/2+25) {punktY = height/3-mainDisplayheight/2+25; if(gammeltY>height/3-mainDisplayheight/2+25){}else{outOfBounds = true;}} 
            if(punktY > height/3+mainDisplayheight/2-25) {punktY = height/3+mainDisplayheight/2-25; if(gammeltY<height/3+mainDisplayheight/2-25){}else{outOfBounds = true;}}
            if(outOfBounds!==true) { //tegner linjerne
                fill(0); stroke(0,0,255);
                if(gammeltX !== undefined && gammeltY !== undefined) {
                line(gammeltX,gammeltY,punktX,punktY);}
            } gammeltX = punktX; gammeltY = punktY;
        }

    } else {
        gammeltX = undefined; gammeltY = undefined;
        for(let i = 0; i < opdelingKurve; i++) {
            punktX = width/2-(mainDisplayWidth-100)/2+((mainDisplayWidth-100)/opdelingKurve)*i;
            punktY = height/3;
            if(waveType==="SINUS") {
                punktY+=sin((tidSinus+i)/(opdelingKurve/100)*(((2*PI)/knobBølgelængde1Value)*(inddelingX/10)))*knobAmplitude1Value*meterToPixelsY;
            } else if(waveType==="SAW") {
                punktY+=knobAmplitude2Value*meterToPixelsY-(((tidSaw+(i+opdelingKurve/4))/(opdelingKurve/100)/(knobBølgelængde2Value)*(inddelingX/10))-floor(((tidSaw+(i+opdelingKurve/4))/(opdelingKurve/100)/(knobBølgelængde2Value)*(inddelingX/10))))*knobAmplitude2Value*2*meterToPixelsY;
            } else if(waveType==="SQUARE") {
                punktY+=((knobAmplitude3Value*meterToPixelsY)*Math.sign(sin((2*PI*((tidSquare+(i+1))/(opdelingKurve/100)))/(knobBølgelængde3Value)*(inddelingX/10))));
            }
            //retter punkter hvis de er uden for display
            let outOfBounds;
            if(punktY < height/3-mainDisplayheight/2+25) {punktY = height/3-mainDisplayheight/2+25; if(gammeltY>height/3-mainDisplayheight/2+25){}else{outOfBounds = true;}} 
            if(punktY > height/3+mainDisplayheight/2-25) {punktY = height/3+mainDisplayheight/2-25; if(gammeltY<height/3+mainDisplayheight/2-25){}else{outOfBounds = true;}}
            //tegner linjerne
            if(outOfBounds!==true) {
                fill(0); strokeWeight(2); stroke(170);
                if(gammeltX !== undefined && gammeltY !== undefined) {
                line(gammeltX,gammeltY,punktX,punktY);}
            } gammeltX = punktX; gammeltY = punktY; 
        } 
    }
}

function tegnDisplay() { stroke(0); 
    fill(255); strokeWeight(10); centerRect(width/2, height/3, mainDisplayWidth, mainDisplayheight);
    fill(0); textSize(16); textAlign(CENTER, CENTER); strokeWeight(0.5); text("ALLE MÅL I KOORDINATSYSTEMET ER I METER", width/2, height/3-180);
    //x-akse (længde)
    strokeWeight(2); linjeFraVinkel(width/2-mainDisplayheight,height/3,0,(mainDisplayWidth-100));
    //y-akse (amplitude)
    linjeFraVinkel(width/2-mainDisplayheight, height/3-((mainDisplayheight-50)/2), PI/2, mainDisplayheight-50);
    for(let x = 0; x <= inddelingX; x++) {
        strokeWeight(0.5); line(width/2-mainDisplayheight+((mainDisplayWidth-100)/inddelingX)*x,height/3-((mainDisplayheight-50)/2),width/2-mainDisplayheight+((mainDisplayWidth-100)/inddelingX)*x,height/3+125);
        if(x!==0) { stroke(10); text(round(x,2), width/2-mainDisplayheight+((mainDisplayWidth-100)/inddelingX)*x, 12+height/3); }
    }
    for(let y = 0; y <= inddelingY; y++) {
        //over aksen
        strokeWeight(0.5); line(width/2-mainDisplayheight,height/3-(((mainDisplayheight-50)/2)/inddelingY)*y,width/2+mainDisplayheight,height/3-(((mainDisplayheight-50)/2)/inddelingY)*y);
        stroke(10); text(round(y/inddelingY,2), -20+width/2-mainDisplayheight, height/3-(((mainDisplayheight-50)/2)/inddelingY)*y);
        //under aksen:
        strokeWeight(0.5); line(width/2-mainDisplayheight,height/3+(((mainDisplayheight-50)/2)/inddelingY)*y,width/2+mainDisplayheight,height/3+(((mainDisplayheight-50)/2)/inddelingY)*y);
        if(y!==0) { stroke(10); text("-"+round(y/inddelingY,2), -20+width/2-mainDisplayheight, height/3+(((mainDisplayheight-50)/2)/inddelingY)*y); }
    } strokeWeight(1); stroke(1);
}

function skrivAktuelleVærdier() {
    textAlign(LEFT, CENTER);    
    text(`A: ${round(knobAmplitude1Value/100,2)} m`,knobAmplitudeX+35+6,button1Y+35);
    text(`A: ${round(knobAmplitude2Value/100,2)} m`,knobAmplitudeX+35+6,button2Y+35);
    text(`A: ${round(knobAmplitude3Value/100,2)} m`,knobAmplitudeX+35+6,button3Y+35);

    text(`v: ${round(knobHastighed1Value)/10} m/s`,knobHastighedX+35+6,button1Y+35);
    text(`v: ${round(knobHastighed2Value)/10} m/s`,knobHastighedX+35+6,button2Y+35);
    text(`v: ${round(knobHastighed3Value)/10} m/s`,knobHastighedX+35+6,button3Y+35);

    text(`\u03BB: ${round(knobBølgelængde1Value/10,1)} m`,knobBølgelængdeX+35+6,button1Y+35);
    text(`\u03BB: ${round(knobBølgelængde2Value/10,1)} m`,knobBølgelængdeX+35+6,button2Y+35);
    text(`\u03BB: ${round(knobBølgelængde3Value/10,1)} m`,knobBølgelængdeX+35+6,button3Y+35);

    text(`f: ${round(knobHastighed1Value/knobBølgelængde1Value,2)} Hz`,knobBølgelængdeX+35+100+6,button1Y+35);
    text(`f: ${round(knobHastighed2Value/knobBølgelængde2Value,2)} Hz`,knobBølgelængdeX+35+100+6,button2Y+35);
    text(`f: ${round(knobHastighed3Value/knobBølgelængde3Value,2)} Hz`,knobBølgelængdeX+35+100+6,button3Y+35);
}

function centerRect(x,y,w,h) {rect(x-w/2, y-h/2, w, h)}
function linjeFraVinkel(x,y,v,l) {line(x,y,x+cos(v)*l,y+sin(v)*l)}