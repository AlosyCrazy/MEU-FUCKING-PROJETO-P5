let video;
function setup(){
    let canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200);
    fill(240, 177, 33);
    stroke(240, 177, 33);
    circle(239, 100, 126);
    fill(267, 211, 163);
    stroke(267, 211, 163); 
    rect(122, 322, 322, 233);
}

function takeSnapshot(){
    save("phxv.png");
}

