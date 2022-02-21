


/*dégradé entete souris*/
let x;
let y;
let zone = document.querySelector('.EnTete');
zone.addEventListener('mousemove', (e) =>{
    zone.x = e.clientX;
    zone.y = e.clientY;
    
})


/*boutons*/


/*formulaire*/

let contactCacher = document.getElementsByClassName("cacher");
contactCacher.item(0).classList.add("cInvisible");
let boutonForm = document.getElementById('clickContact');
boutonForm.addEventListener('mouseover', () =>{
    boutonForm.style.backgroundColor = 'RGBA(89,82,158,0.19)';
})
boutonForm.addEventListener('mouseleave', () =>{
    boutonForm.style.backgroundColor = 'white';
})
boutonForm.addEventListener('click', () => {
    contactCacher.item(0).classList.toggle("cInvisible");
});



let boutonEnvoyer = document.querySelector(".envoyer");

boutonEnvoyer.addEventListener('click', (e) =>{
   /*faire une animation pour dire que c'est envoyé (img qui apparait au milieu de l'écran ou bouton devient vert puis page
   * rafraichie*/
});



/*ancre haut de page*/
document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
        document.getElementById("FixedNav").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
});