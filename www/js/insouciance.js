var p5canvas,
    touchX_start, touchY_start, index = 0, pages,
    touchStartTime = -1;
    touchDown = false;
    dragUIList = [];

function now(){
    return (new Date()).getTime();
}

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
    clear();
   dragUIList.forEach(function(dragUI){
        dragUI.update();
    });
    fill('#ff0000');
}

var DragUI = function(){
    var args = arguments,
        self = {
            x:args[0],
            y:args[1],
            starttime:(new Date()).getTime(),
            initialize:function(){
                dragUIList.push(this);
            },
            age:function(){
                return now() - this.starttime;
            },
            update:function(){
                this.draw();
            },
            draw:function(){
                var alpha = 1-Math.log(this.age()*10)/10;
                alpha = alpha<0 ? 0 : alpha;
                fill("rgba(0,0,0,"+alpha+")");
                var r = Math.log(this.age()/10)*10;
                noStroke();
                ellipse(this.x,this.y,r,r);
            }
        };
    self.initialize();
    return self;    
}

function touchStarted() {
    clear();
    touchX_start = touchX;
    touchY_start = touchY;
    new DragUI(touchX,touchY);
    if(touches.length<=1){
        touchStartTime = now();
        touchDown = true;
    }
    console.log(touchDown,touches.length);
}
function touchMoved() {
    var lastDragUI = dragUIList[dragUIList.length-1];
    if(lastDragUI){
        lastDragUI.x = touchX;
        lastDragUI.y = touchY;
    }
}
function touchEnded(){
     if(touchDown && now()-touchStartTime < 200 && index < pages.length-1){
        NextPage();
    }else if(index == pages.length-1){
         $('.p5').fadeOut();
    } 
    touchDown = false;
}

function NextPage(){
    console.log('NextPage');
    index ++;
    for(var i=0; i<pages.length; i++){
        if(i!=index){
            pages[i].removeClass('visible').addClass('hidden');
        }else{
            pages[i].addClass('visible').removeClass('hidden');
        }
    }
    if(index==pages.length-1){
        select('.p5').hide();
    }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}