function setup() {
    createCanvas(400, 400); background(240);
}
let ting;

function draw() {
    if(ting) {
        background(255,0,0);
    }
    if(!ting) {
        background(0,255,0)
    }
    console.log(ting,!ting);
}