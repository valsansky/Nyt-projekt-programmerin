let inddelingX=10;
let inddelingY=5;
let opdelingKurve=200;
let mainDisplayWidth=700; let mainDisplayheight=300; let fps = 30;
let punktX; let punktY;
let tidSinus=0; let tidSaw=0; let tidSquare=0;
let meterToPixelsY = (((mainDisplayheight-50)/2)/100);

function preload() {
    sinusIcon = loadImage("assets/Sinus-wave.png");
    sawIcon = loadImage("assets/Saw-wave.png");
    squareIcon = loadImage("assets/Square-wave.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight); background(240); frameRate(fps);
    button1X = width/2-350; button1Y = height/3+150+buttonMargin*1;
    button2X = width/2-350; button2Y = height/3+150+buttonMargin*2;
    button3X = width/2-350; button3Y = height/3+150+buttonMargin*3;

    knobAmplitudeX = 25+button1X+10+110;
    knobHastighedX = 25+button1X+10+315;
    knobBølgelængdeX = 25+button1X+10+520;

    button1Active=true;
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
    tidSinus+=((opdelingKurve/inddelingX)/fps)*(knobHastighed1Value/10);
    tidSaw+=((opdelingKurve/inddelingX)/fps)*(knobHastighed2Value/10);
    tidSquare+=((opdelingKurve/inddelingX)/fps)*(knobHastighed3Value/10);

    if(button1Active) {
        for(let i = 0; i < opdelingKurve; i++) {
            punktX = width/2-(mainDisplayWidth-100)/2+((mainDisplayWidth-100)/opdelingKurve)*i;
            punktY = height/3+sin((tidSinus+i)/(opdelingKurve/100)*(((2*PI)/knobBølgelængde1Value)*(inddelingX/10))) /*amplitude:*/*knobAmplitude1Value*meterToPixelsY;
            fill(0); strokeWeight(0.2); circle(punktX,punktY,4);
        } }
    if(button2Active) {
        for(let i = 0; i < opdelingKurve; i++) {
            punktX = width/2-(mainDisplayWidth-100)/2+((mainDisplayWidth-100)/opdelingKurve)*i;
            punktY = height/3+knobAmplitude2Value*meterToPixelsY-(((tidSaw+i)/(opdelingKurve/100)/(knobBølgelængde2Value)*(inddelingX/10))-floor(((tidSaw+i)/(opdelingKurve/100)/(knobBølgelængde2Value)*(inddelingX/10))))/*amplitude:*/*knobAmplitude2Value*2*meterToPixelsY;
            fill(0); strokeWeight(0.2); circle(punktX,punktY,4); 
            strokeWeight(2);
            if(punktY<=height/3-knobAmplitude2Value*meterToPixelsY+(1/40)*knobAmplitude2Value) {line(punktX,height/3-knobAmplitude2Value*meterToPixelsY,punktX,height/3+ knobAmplitude2Value*meterToPixelsY)}   
        } }     
    if(button3Active) { 
        for(let i = 0; i < opdelingKurve; i++) {
            punktX = width/2-(mainDisplayWidth-100)/2+((mainDisplayWidth-100)/opdelingKurve)*i;
            punktY = height/3-((knobAmplitude3Value*meterToPixelsY)*Math.sign(sin((2*PI*((tidSquare+i)/(opdelingKurve/100)))/(knobBølgelængde3Value)*(inddelingX/10)))); 
            fill(0); strokeWeight(0.2); circle(punktX,punktY,4);
            strokeWeight(2);
            if(punktY === height/3-(knobAmplitude3Value*meterToPixelsY)) {
                if(punktX>=(width/2-mainDisplayWidth/2+52)&&bundSquare==true){line(punktX-((mainDisplayWidth-100)/opdelingKurve), height/3-knobAmplitude3Value*meterToPixelsY, punktX-((mainDisplayWidth-100)/opdelingKurve), height/3+knobAmplitude3Value*meterToPixelsY);}
                topSquare = true; bundSquare = false; 
            }else if(punktY === height/3+(knobAmplitude3Value*meterToPixelsY)) {
                if(punktX>=(width/2-mainDisplayWidth/2+52)&&topSquare==true){line(punktX-((mainDisplayWidth-100)/opdelingKurve), height/3-knobAmplitude3Value*meterToPixelsY, punktX-((mainDisplayWidth-100)/opdelingKurve), height/3+knobAmplitude3Value*meterToPixelsY);}
                bundSquare = true; topSquare = false;   
            }
        }
    }
}

function tegnDisplay() {
    fill(255); strokeWeight(10); centerRect(width/2, height/3, mainDisplayWidth, mainDisplayheight);
    fill(0); textSize(16); textAlign(CENTER, CENTER); strokeWeight(0.5); text("ALLE MÅL ER I METER", width/2, height/3-180);
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

}

function centerRect(x,y,w,h) {rect(x-w/2, y-h/2, w, h)}
function linjeFraVinkel(x,y,v,l) {line(x,y,x+cos(v)*l,y+sin(v)*l)}
