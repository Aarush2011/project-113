function setup(){
    canvas = createCanvas(700,400);
    canvas.position(110,170);
    video = createCapture(VIDEO);
     video.hide();
    }
function draw() {
   fill ('red');
   stroke ('red');
   circle(40, 40, 50);
circle(660, 40, 50);
circle(40, 360, 50);
circle(660, 360, 50);
fill (0,120,0);
stroke (0,120,0);
rect(65, 30, 570, 20);
rect(65, 352, 570, 20);
rect(31, 64, 20, 272);
rect(650, 64, 20, 272);
     image(video, 230, 80, 250, 250);
     } function take_snapshot(){ 
        save('student_name.png');
     }
 