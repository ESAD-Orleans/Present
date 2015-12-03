var p5canvas,
    touchX_start, touchY_start, index = 0, pages;

function setup() {
  	
    pages = selectAll('.page');
    
    p5canvas = createCanvas(100, 100);
    p5canvas.parent('p5');
    background(0xffffff);
    smooth();
    windowResized();

}

function draw() {
    //maintien();//appel de la fonction maintien  
}

function touchStarted() {
    clear();
    touchX_start = touchX;
    touchY_start = touchY;
}
function touchEnded() {
    var mouvement = createVector(touchX-touchX_start,touchY-touchY_start),
        direction = createVector(0,100);
    var inclinaison = 180*p5.Vector.angleBetween(direction,mouvement)/PI, // en degres
        distance = mouvement.mag(); // en pixel
    if(inclinaison<30 && distance>70 && index<pages.length-1){
        index ++;
        for(var i=0; i<pages.length; i++){
            if(i!=index){
                pages[i].removeClass('visible');
            }else{
                pages[i].addClass('visible');
            }
        }
        if(index==pages.length-1){
            select('.p5').hide();
        }
    }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}