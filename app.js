// on créer un objet : 
let vaisseau1 = new Sprite("vaisseau1", document.body.clientWidth/2, document.body.clientHeight/2, "red", 150);
let vaisseau2 = new Sprite("vaisseau2", 500, 120 , "green", 25);
let vaisseau3 = new Sprite("vaisseau3", 400, 600, "yellow", 45);
// Première étape : créer l'objet visuel Sprite

// Notre objet Sprite va prendre 3 propriétés :
// 1) filename => nom du fichier/chemin d'accès
// 2) left => récupérer et définir sa position par rapport au bord gauche 
// 3) top => récupérer et définir sa position par rapport au bord haut 
function Sprite(filename, left, top, bgColor, width){

    // this = anglais => celui-ci

    // this._node = anglais => node (noeud) DONC on rappelle l'objet en cours (Sprite) avec tout son noeud (donc toutes ses méthodes)

    // 1ère chose que l'on veut faire, c'est définir ce à quoi va reseembler notre objet visuel
    // (donc, créer une image)
    this._node = document.createElement('img');

    // je veux attribuer à cette image sa source 
    this._node.src = "./images/"+filename+".png";

    // je mets en position absolute l'objet courant
    this._node.style.position = "absolute";

    // j'attribue mon objet au body
    document.body.appendChild(this._node);

    // Nos premières méthodes de get et de set pour LEFT
    // Définir la propriété Left et ses deux méthodes (get set)

    this._bgColor = bgColor;
    this._node.style.backgroundColor = this._bgColor;

    //définir la propriété width

    this._width = width;
    this._node.style.width = this._width +"px";


    // on définit une propriété (ici LEFT), de l'objet courant (THIS)
    Object.defineProperty(this, "left",{
        get: function(){
            // la méthode get me renvoie la valeur de LEFT de l'objet en cours
            return this._left;
        },
        // la méthode set c'est une méthode qui attribue une valeur à LEFT
        set: function (value){
            // on prend la valeur de la propriété LEFT de l'objet courant et on lui attribue une valeur (reçue en paramètre)
            this._left = value;

            // on modifie le css de l'objet pour sa propriété left
            this._node.style.left = this._left+"px";

        }
    });
    Object.defineProperty(this, "top",{
        get: function (){
            return this._top;
        },
        set: function(value){
            this._top = value;

            // this._node = l'objet + tous ses noeuds (toutes ses propriétés)
            this._node.style.top = this._top+"px";
        }
    })
    // on définit la valeur de la propriété left de l'objet par le paramètre left reçu lors de la création d'un objet
    this.left = left;
    this.top = top;
    this.width = width;
}

//factorisation

// definition fonction move
function move(vaisseau1){
    if(event.code == "ArrowUp"){
        vaisseau1.top -= 15;
    }if(event.code == "ArrowDown"){
        vaisseau1.top += 25;
    }if(event.code == "ArrowLeft"){
        vaisseau1.left -= 25;
    }if(event.code == "ArrowRight"){
        vaisseau1.left += 25;
    }
}
// fonction controleBorders controler que le sprite ne sors pas du body
function controleBorders(vaisseau1){
    // on empeche de sortir en haut 
    if(vaisseau1.top < 0){
        vaisseau1.top = 0;
    // on empeches de sortir à gauche    
    }if(vaisseau1.left < 0){
        vaisseau1.left = 0;
    // on empeches de sortir en bas
    }if(vaisseau1.top > document.body.clientHeight-vaisseau1._node.height-25){
    vaisseau1.top = document.body.clientHeight-vaisseau1._node.height-25;
    // on empeches de sortir à  droite
    }if(vaisseau1.left > document.body.clientWidth-vaisseau1._node.width-25){
        vaisseau1.left = document.body.clientWidth-vaisseau1._node.width-25;
    }   
}   

let keycode = console.log(event.code);
// function attribuer à une touche 
function moveUp(vaisseau1,keycode){
    if(event.code == keycode){
        vaisseau1.top -= 25;
    }
}
function moveDown(vaisseau1,keycode){
    if(event.code == keycode){
        vaisseau1.top += 25;
    }
}
function moveLeft(vaisseau1,keycode){
    if(event.code == keycode){
        vaisseau1.left -= 25;
    }
}
function moveRight(vaisseau1,keycode){
    if(event.code == keycode){
        vaisseau1.left += 25 ;
    }
}

// function maitre avec appel fonctions
document.onkeydown = function(event){
    console.log(event.code);
    // fonction qui gére le déplacement d'un sprite passé en paramétre
    move(vaisseau1);
    // fonction qui empeche un sprite passé en paramètre de sortir du body
    controleBorders(vaisseau1);
}

