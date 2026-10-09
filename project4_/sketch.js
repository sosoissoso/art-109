
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
// https://github.com/mveteanu/p5.SceneManager
// http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let img1;
let snd1,snd2,snd3,snd4;

// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var firefly;

function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/field2.mp3");
   snd2 = loadSound("assets/sky.mp3");
   snd3 = loadSound("assets/adventure.mp3");

}

function setup() {
    createCanvas(1920, 1080);
    //console.log(hell);
    mgr = new SceneManager();

    firefly = createSprite(0, 0);
    firefly.addAnimation("normal", "assets/field01.png",  "assets/field03.png");  // first image, and last image
     // make the sprite invisible until you need it.
    firefly.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (interface);
    mgr.addScene (field);
    mgr.addScene(fly);
    mgr.addScene(adventure);
    mgr.addScene (help);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( interface );
            break;
        case '2':
            mgr.showScene( field );
            break;
        case '3':
            mgr.showScene( fly );
            break;
         case '4':
            mgr.showScene( adventure );
            break;
        case 'h':
            mgr.showScene( help );
            break;
        case 'H':
            mgr.showScene( help );
            break;
    }


    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
