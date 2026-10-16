
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
    xPos = ((mouseX - xPos) * easing + xPos);
    yPos = ((mouseY - yPos) * easing + yPos);

    drawThings(xPos, yPos);

}



function drawThings(x, y) {

    //eyeballs
    fill(117, 86, 40);
    ellipse(x, y, 40, 40);


    //pupils
    fill(240, 228, 58);
    ellipse(x+10, y, 30, 10);
    fill(0);
    ellipse(x+10, y-10, 5, 5);
    fill(0);
    ellipse(x-10, y-10, 5, 5);

}