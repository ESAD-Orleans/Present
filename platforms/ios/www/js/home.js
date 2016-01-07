var rayon = 10, //variable décimale
 opaciteStroke = 1,
mousex,
mousey;	

function setup() {
  	createCanvas(windowWidth, windowHeight);
    background(0xffffff);
    smooth();
}

function draw() {
    maintien();//appel de la fonction maintien  
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
    
function maintien()
{     
//      if(!mousePressed) // si je ne clique pas
//      {
//         mousex = mouseX; // récupère en permanence les coordonnées de x et y quand je ne clique pas
//         mousey = mouseY;
//      }
//
//         if(mousePressed)
//          { 
//                if((mouseX == mousex) && (mouseY == mousey)) // 2e condition : position de la souris stable
//                {
//                  rayon+=1.8;//incremente de 1.8 le rayon
//                  opaciteStroke-=1.5; //décrémente l'opacité de 1,5
//                  stroke(0,0,0,opaciteStroke); 
//                  ellipse(mouseX,mouseY,rayon,rayon); 
//                }
//                else 
//                {
//                  opaciteStroke = 100; //réinitialise l'opacité à fond
//                  rayon = 10; //reinitialise la variable a 10
//                  background(0xffffff); //remettre le fond blanc pour effacer les cercles precedents
//                }
//          }
//          else
//          {
//                opaciteStroke = 100; //réinitialise l'opacité à fond
//                rayon = 10; //reinitialise la variable a 10
//                background(0xffffff); //remettre le fond blanc pour effacer les cercles precedents
//          }
}