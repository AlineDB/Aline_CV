


/*dégradé entete souris*/
let x;
let y;
let zone = document.querySelector('.EnTete');
zone.addEventListener('mousemove', (e) =>{
    zone.x = e.clientX;
    zone.y = e.clientY;
    
})


/*burger menu*/




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


//apparaitre au scroll

const resume = document.getElementsByClassName("Resume");
console.log(resume);

const ratio = .4;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio   //50% de l'élément visible il déclenche
}
const handleInterset = function (entries, observer) {
        entries.forEach(function (entry){ /*boucle sur les entry*/
           if(entry.intersectionRatio > ratio){ /*si entry a un ratio plus grand que le ratio défini*/
               entry.target.classList.add('reveal-visible');
               observer.unobserve(entry.target); /*arrete d'observer l'élément actuel*/
           } else {

           }
    })
}
const observer = new IntersectionObserver(handleInterset, options);
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r); /*boucle sur les élément et observe ceux ci un à un*/
});

