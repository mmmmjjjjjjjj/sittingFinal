const twoD = function(p) {

    let audio
    // let reverse = true;
  
    // let rateTarget = 1.0;
    // let currentRate = 1.0;

    // let timeClicked;
    // let timeToWait = 2000;

    // let audioTime = 0.0;

    // let playing = false;
    // let reachedBufferEnd = true;

     let bg;

    p.preload = function() {
        audio = p.loadSound("datatrack.mp3")
        //audio.play();
      }
      p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight)
        bg = p.loadImage('zoom.png')
        //audio.play();
      }
    p.draw = function() {
      p.CENTER; 
      p.background(bg); 
      }
    // }
    p.mousePressed = function(){
        audio.stop()
        audio.play()
    }
}

      
const threeD = function(p) {
    let softy
    let spinAngle = 0.002
    let breathSize = 0.002
    let rotationAngle = 0
    let rotationTarget = 0
    let easing = 0.02
    // let mx = 0
    // let my = 0
    p.preload = function() {
      softy = p.loadModel('Sit2.obj')
    }
    p.setup = function() {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
      p.canvas.style.zIndex = 2 
    }
    p.draw = function() {
      p.clear()
      p.translate(0, 0, -200)
      // if ((p.frameCount * breathSize) >= 0.1){
      //   breathSize == 0;
      // }p.frameCount * breathSize
      //p.scale(10.5, 10.5, 10.5);
      rotationAngle += ease(rotationAngle, rotationTarget, easing)
      p.rotateY(p.frameCount * spinAngle)
      
      p.rotateX(rotationAngle)
      p.normalMaterial();
      p.model(softy)
    }
    
    // p.mousePressed = function() {
    //   if ( rotationTarget == 0 ) {
    //     rotationTarget = p.PI
    //   } else {
    //     rotationTarget = 0
    //   }
    // }
    
    function ease(value, target, easing) {
      let dx = target - value;
      return dx * easing; 
    }
  }
    
  new p5(twoD)
  new p5(threeD)