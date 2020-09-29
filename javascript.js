

const tl = gsap.timeline({defaults: {ease: 'linear'},
repeat:-1,
yoyo:true
})
/*Animation normale*/
  .to('.pommeRouge', {
      scale: 1.25,
      duration: 0.5,
    })
.to('.pizza', {
      scale: 1.25,
      duration: 0.5,
      delay: 0.25,
    })
.to('.celeri', {
      scale: 1.25,
      duration: 0.5,
      delay: 0.25,
    })
.to('.fraise', {
      scale: 1.25,
      duration: 0.5,
      delay: 0.25,
    })
.to('.hamburger', {
      scale: 1.25,
      duration: 0.5,
      delay: 0.25,
    })
.to('.melon', {
      scale: 1.25,
      duration: 0.5,
      delay: 0.25,
    })
.to('.poulet', {
      scale: 1.25,
      duration: 0.5,
      delay: 0.25,
    })
.to('.raisin', {
      scale: 1.25,
      duration: 0.5,
      delay: 0.25,
    })
.to('.pommeVerte', {
      scale: 1.25,
      duration: 0.5,
      delay: 0.25,
    })
/*Animation inversée*/
.to('.pommeVerte', {
      scale: 1,
      duration: 0.5,
      delay: 0.25,
    })
.to('.raisin', {
      scale: 1,
      duration: 0.5,
      delay: 0.25,
    })
.to('.poulet', {
      scale: 1,
      duration: 0.5,
      delay: 0.25,
    })
.to('.melon', {
      scale: 1,
      duration: 0.5,
      delay: 0.25,
    })
.to('.hamburger', {
      scale: 1,
      duration: 0.5,
      delay: 0.25,
    })
.to('.fraise', {
      scale: 1,
      duration: 0.5,
      delay: 0.25,
    })
.to('.celeri', {
      scale: 1,
      duration: 0.5,
      delay: 0.25,
    })
.to('.pizza', {
      scale: 1,
      duration: 0.5,
      delay: 0.25,
    })
.to('.pommeRouge', {
      scale: 1,
      duration: 0.5,
      delay: 0.25,
    })

/*Animation crayon*/
gsap.registerPlugin(ScrollTrigger);


const t2 = gsap.timeline({defaults: {ease: 'linear'},
})
.to('.crayon', { 
  x: '2000px',
  rotation:-35,
  scrollTrigger: {
    scrub: 0.3,
    /*markers: true,*/
    start: 'top 75%',
    end: 'bottom 10%',
    trigger: '.sectionFormulaire',
  }
})
.to('.sectionFormulaire', { 
  backgroundColor:'#fdf1ec',
  scrollTrigger: {
    scrub: 0.3,
    /*markers: true,*/
    start: 'top 75%',
    end: 'bottom 100%',
    trigger: '.sectionFormulaire',
  }
})



/*Ajouter éléments liste*/
const ajouter = document.querySelector('.boutonAjouter');
const blocForm = document.querySelector('.boxForm');

ajouter.addEventListener('click', function(){ 
  new aliment();
})

class aliment { 
  constructor(){
    const elementAliment = document.createElement('div');

elementAliment.classList.add('formulaire');


elementAliment.innerHTML = `
<input type="text" id="alimentAjoute">
<button class='boutonEnlever'>🚫</button>`;

blocForm.appendChild(elementAliment);  
  }
}