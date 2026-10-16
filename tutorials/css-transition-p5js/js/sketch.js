
let canvas;
let xPos=0;
let yPos=0;
let easing = 0.7;

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-2');
    background(220);

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    //background(220);
    clear();
    xPos = ((mouseX - xPos) + easing);
    yPos = ((mouseY - yPos) + easing);

    drawThings(xPos, yPos);

}



function drawThings(x, y) {

    //eyeballs
    fill(255);
    ellipse(x, y, 20, 40);
    fill(255);
    ellipse(x-15, y+5, 20, 40);

    //pupils
    fill(0);
    ellipse(x+10, y, 5, 5);
    ellipse(x-10, y-5, 5, 5);

}