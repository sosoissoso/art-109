
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// SCENE 1 - interface /////////////////
let wheatImg;
let jellyImg;
let hatImg;
let font;

function interface() {
  var textX;
  var textY;
  var loy = 0;
  let btnevent2 = false;
 
  // Define square positions and dimensions
  const square1 = { x: 700, y: 250, w: 300, h: 280 };
  const square2 = { x: 1050, y: 250, w: 300, h: 280 };
  const square3 = { x: 1400, y: 250, w: 300, h: 280 };

  // scene1.setup
  this.setup = function () {
      console.log("Set up for interface");
      wheatImg = loadImage('assets/fieldThumbNail.png');
      jellyImg = loadImage('assets/flyThumbNail.png');
      hatImg = loadImage('assets/adventureThumbNail.png');
      font = loadFont('assets/pastelCrayon.ttf');
      outputVolume(1.0); // Turn down the volume
  };

  // enter() will be called each time SceneManager switches to this scene
  this.enter = function () {
      console.log("this is the interface");
      background("grey");
      textAlign(CENTER);
      textFont(font);
      textSize(30);
      noStroke();
      snd1.stop();
      snd2.stop();
      snd3.stop(); // Turn off sound
     
      firefly.visible = false;
  };

  // interface
  this.draw = function () {
      background(41, 33, 25);

      noStroke();
      fill(78, 63, 50);

      // Play bar
      rect(0, 900, 1922, 900);

      // Playlist view side box
      rect(80, 100, 450, 700, 20);

      // Playlists
      fill(165, 134, 103);
      ellipse(170, 190, 100, 100);
      rect(110, 290, 395, 100, 10);
      rect(110, 410, 395, 100, 10);
      rect(110, 530, 395, 100, 10);
      rect(110, 650, 395, 100, 10);

      //playlist names
      push();
      fill(250, 224, 199);
      text("Beats to relax and\n study to", 300, 330);
      text("Morning Lo-Fi \n Eggs and Toast", 300, 450);
      text("E ve Playlist", 300, 590);
      text("Soft Feels", 300, 710);
      pop();


      // Song thumbnail bottom left
      fill(165, 134, 103);
      rect(100, 930, 120, 120, 5);

      // Title & artist bottom left
      fill(250, 224, 199);
      text("Daydream Number ?", 375, 970);
      text("You", 265, 1020);

      // Clickable albums (squares)
      image (wheatImg, square1.x,square1.y,square1.w,square1.h);
      image (jellyImg,square2.x,square2.y,square2.w,square2.h);
      image(hatImg,square3.x,square3.y,square3.w,square3.h);

      //text under albums
      push();
      textSize(45);
      text("Daydream 1", 850,580);
      text("Daydream 2", 1205,580);
      text("Daydream 3", 1550,580);
      pop();

      text("Fireflies", 850, 630);
      text("Fishy Sky", 1205, 630);
      text("The Wanderer", 1550, 630);

      //music bar w/ buttons

      //back button
      fill(250, 224, 199);
      triangle( 1050, 1013, 1080, 1000,1080, 1025);
      triangle(1040, 1013,1065, 1000, 1065, 1025);

      //forwards button
      triangle( 1255, 1013, 1230, 1000, 1230, 1025);
     triangle(1265, 1013,1243, 1000, 1243, 1025);

      //music bar
      push();
      stroke(41,33,25);
      strokeWeight(13);
      line(650,935,1700,935);
      pop();

      ellipse(650,935, 20,20);
      text("0:00", 650, 985);
      text("-:--", 1700, 980);

      //play button
      fill(165, 134, 103);
      ellipse(1155, 1015, 77, 77);
      fill(250, 224, 199);
      triangle(1182,1015,1137,995,1137,1035);

      //search bar and menu
    push();
    stroke(78,63,50);
    strokeWeight(10);
    line(1750,71, 1860,71);
    line(1750,95, 1860,95);
    line(1750,120, 1860,120);
    pop();


      fill(78,63,50);
      rect(700,50,1000,100,10);
  
      fill(250, 224, 199);
      text("Search...", 800,110);

    //Help button
  btnevent2 = checkButtonPress("Help",width - 150,height - 70,100,40,color(165,134,103),color(100),color(250));
    
  if (btnevent2) {
    btnevent2 = false;
    this.sceneManager.showScene(help);
  }

      push();
      if (loy > height - 140) {
          loy = 0;
      }
      loy++;
      pop();
 

  };

  // Handle mouse clicks
  this.mousePressed = function () {

  
      // Check if square 1 is clicked
      if (mouseX > square1.x && mouseX < square1.x + square1.w && mouseY > square1.y && mouseY < square1.y + square1.h) {
          console.log("Square 1 clicked, switching to field scene");
          this.sceneManager.showScene(field);
      }
      // Check if square 2 is clicked
      else if (mouseX > square2.x && mouseX < square2.x + square2.w && mouseY > square2.y && mouseY < square2.y + square2.h) {
          console.log("Square 2 clicked, switching to fly scene");
          this.sceneManager.showScene(fly);
      }
      // Check if square 3 is clicked
      else if (mouseX > square3.x && mouseX < square3.x + square3.w && mouseY > square3.y && mouseY < square3.y + square3.h) {
          console.log("Square 3 clicked, switching to adventure scene");
          this.sceneManager.showScene(adventure);
      }
  };

  this.keyPressed = function () {
      fill(0, 255, 0);
      text(keyCode, textX, textY += 10);

      if (textY > height) {
          textX += 20;
          textY = 0;
      }
  };
}



/////////////////////// SCENE 2 - Daydream 1  ////////////////////////
let fieldImage; 
let textBoxImg1;
let fieldBoxImg;
let showUpperBox = false;
let showLowerBox = false;
//let font;

function field() {
  this.y = 0;
  this.lox = 50;
  this.loy = 120;
  let btnevent1 = false;

  this.setup = function () {
    console.log("We are at setup for main");
    frameRate(10);

    fieldImage = loadImage('assets/field.png'); 

  };

  this.enter = function () {
    console.log("We are entering main");

    firefly.position.x = width / 2; 
    firefly.position.y = height / 2; 
    firefly.visible = true;
    firefly.changeAnimation("normal");

    if (!snd1.isPlaying()) {
      snd1.play();
      snd2.pause();
      snd3.pause();
    }


  };

  this.draw = function () {

    background(255, 0, 0)

    // Display the upper box if clicked in the upper half
    if (showUpperBox) {
      
      fill(162, 121, 80, 200); // Semi-transparent background
      stroke(47, 40, 32);
      strokeWeight(20);
      rect(980, 100, 850, 200, 10);

      fill(255);
      noStroke();
      textSize(50);
      textAlign(CENTER);
      textFont(font);
      text("Fields", 1100, 180);

      textSize(30);
      text("- Haven forgotten or being concerned about forgetting \n to do something important in waking life", 1400, 220);
      
    }

    // Display the lower box if clicked in the lower half
    if (showLowerBox) {
      fill(162, 121, 80, 200); // Semi-transparent background
      stroke(47, 40, 32);
      strokeWeight(20);
      rect(150, 690, 700, 210, 10);

      fill(255);
      noStroke();
      textSize(50);
      textAlign(CENTER);
      textFont(font);
      text("Fireflies", 280, 767);

      textSize(30);
      text("- A positive sign symbolizing hope, sense of \n wonder, and connection to your inner light", 500, 810);
    }


    // Draw the firefly animation AFTER the text boxes (ensure it doesn't overlap)
    firefly.draw();  // Drawing the animation after other elements
  };

  this.mousePressed = function () {
    // Check if the click was in the upper or lower half
    console.log("Mouse pressed at:", mouseX, mouseY);
    if (mouseY < height / 2) {
      // Clicked in the upper half
      showUpperBox = true;
      showLowerBox = false;
      console.log("Upper box clicked");
    } else {
      // Clicked in the lower half
      showLowerBox = true;
      showUpperBox = false;
      console.log("Lower box clicked");
    }

  };
}



////////////////////////////// SCENE 3 - daydream 2 /////////////////

let skyImg;

function fly() {
  this.y = 0;
  this.lox = 50;
  this.loy = 120;
  let btnevent1 = false;
  let upperText = ""; // Text for upper half clicks
  let lowerText = ""; // Text for lower half clicks

  this.setup = function () {
    console.log("We are at setup for main");
    // Load the image once during setup
    skyImg = loadImage("assets/fly.png");
    font = loadFont('assets/pastelCrayon.ttf');
  }


  this.enter = function () {
    console.log("We are entering main");
    firefly.visible = false;
    
    if (!snd2.isPlaying()) {
      snd2.play();
      snd1.pause();
      snd3.pause();
    }
  };

  this.draw = function () {
    // Use the loaded image as the background
    if (skyImg) {
      background(skyImg);
    } else {
      background(255, 0, 0); // Fallback color if the image fails to load
    }

    // Display text boxes
    fill(0, 100, 200, 150); // Semi-transparent blue for text background
    noStroke();
    textSize(45);
     textAlign(LEFT);
    textFont(font);

    if (upperText) {
      rect(1013,140,850,250, 10); // Upper half box
      fill(255);
      text(upperText, 1070, 220);
    }

    if (lowerText) {
      rect(80, 780, 889, 230, 10); // Lower half box
      fill(255);
      text(lowerText, 120, 850);
    }


    // Ensure the firefly animation does not override other elements
    if (firefly.visible) {
      firefly.draw(); // Draw the firefly only if it is visible
    }


  };

  this.mousePressed = function () {
    console.log("Mouse pressed at:", mouseX, mouseY); 

    if (mouseY < height / 2) {
      upperText = "Flying \n    - Sense of freedom and \n ability to rise above limitations.";
      lowerText = ""; // Clear lower text
    } else {
      lowerText = "Fish \n    - Freedom, grace, emotional depth,\n flow of energy.";
      upperText = ""; // Clear upper text
    }
  };

  this.exit = function () {
    console.log("Exiting fly scene");
    firefly.visible = true; // Hide firefly when leaving the scene
    upperText = ""; // Clear text on exit
    lowerText = ""; // Clear text on exit
  };
}



////////////////////////////// SCENE 4 - daydream 3 /////////////////


let forestImg;

function adventure() {
  this.y = 0;
  this.lox = 50;
  this.loy = 120;
  let btnevent1 = false;
  let upperText = ""; // Text for upper half clicks
  let lowerText = ""; // Text for lower half clicks

  this.setup = function () {
    console.log("We are at setup for datdream 3");
    // Load the image once during setup
    forestImg = loadImage("assets/forest.png"); 
    font = loadFont('assets/pastelCrayon.ttf');
  };



  this.enter = function () {
    console.log("We are entering daydream 3");
    firefly.visible = false;

    if (!snd3.isPlaying()) {
      snd3.play();
      snd1.pause();
      snd2.pause();
    }
  };

  this.draw = function () {
    // Use the loaded image as the background
    if (forestImg) {
      background(forestImg);
    } else {
      background(255, 0, 0); // Fallback color if the image fails to load
    }

    // Display text boxes
    fill(97,29,214, 150); // Semi-transparent blue for text background
    noStroke();
    textSize(45);
     textAlign(LEFT);
    textFont(font);

    if (upperText) {
      rect(1013,140,850,290, 10); // Upper half box
      fill(255);
      text(upperText, 1070, 220);
    }

    if (lowerText) {
      rect(80, 780, 1000, 230, 10); // Lower half box
      fill(255);
      text(lowerText, 120, 850);
    }

    // Ensure the firefly animation does not override other elements
    if (firefly.visible) {
      firefly.draw(); // Draw the firefly only if it is visible
    }
  };

  this.mousePressed = function () {
    console.log("Mouse pressed at:", mouseX, mouseY); 

    if (mouseY < height / 2) {
      upperText = "Adventure \n   - Desire for excitement, personal \n growth represents a souls \n movement into new realms.";
      lowerText = ""; // Clear lower text
    } else {
      lowerText = "Forest \n   - Symbolizes the unknown, \n your subconscious mind, or personal growth.";
      upperText = ""; // Clear upper text
    }
  };

  this.exit = function () {
    console.log("Exiting fly scene");
    firefly.visible = true; // Hide firefly when leaving the scene
    upperText = ""; // Clear text on exit
    lowerText = ""; // Clear text on exit
  };
}


////////////// HELP PAGE  //////////////
let btnevent2 = false;
let currentPage =1;


function help() {

    this.setup = function()  {
        console.log("We are at setup for help");


    }
    this.enter = function () {
      console.log("We are entering help page");
      firefly.visible = false;
      // Ensure firefly is only visible for this scene
      
        snd3.pause();
        snd1.pause();
        snd2.pause();
      
    };

    this.draw = function() {
      
      background(41, 33, 25);
      // this is the draw function for all p5.play commands

      noStroke();
      fill(78, 63, 50);

      // Play bar
      rect(0, 900, 1922, 900);

    //music bar w/ buttons


      //back button
      fill(250, 224, 199);
      triangle( 1050, 1013, 1080, 1000,1080, 1025);
      triangle(1040, 1013,1065, 1000, 1065, 1025);

      //forwards button
      triangle( 1255, 1013, 1230, 1000, 1230, 1025);
     triangle(1265, 1013,1243, 1000, 1243, 1025);


      // Song thumbnail bottom left
      fill(165, 134, 103);
      rect(100, 930, 120, 120, 5);

      //music bar
      push();
      stroke(41,33,25);
      strokeWeight(13);
      line(650,935,1700,935);
      pop();

      ellipse(650,935, 20,20);
      text("-:--", 650, 985);
      text("-:--", 1700, 980);

      //play button
      fill(165, 134, 103);
      ellipse(1155, 1015, 77, 77);
      fill(250, 224, 199);
      triangle(1182,1015,1137,995,1137,1035);

      push();

      textSize(80);
      text("Help Page", 250,100);

      textSize(50);
      textAlign(LEFT);
      text("Not sure how to navigate this music player?\n No problem! This is what this page is for!", 150,200);
      text("- Click on any of the three Daydream songs to be transported to a \nnew world. You can also press the number keys to switch between.", 150,350);
      text("1 - Home Page      2 - Daydream 1      3 - Daydream 2    \n 4 - Daydream 3      H/h - Help Page", 150, 500);
      text("Once youve been transported into a daydream, click on the upper \nor lower half of the screen to learn something new!", 150, 650);
      text("Enjoy daydreaming ` 3 `", 150, 800);

      pop();

     }  

    }



function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}




