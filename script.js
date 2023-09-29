$('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
  
// VARIAVEIS QUIZ 
let resultado = null

// Quiz
function verificarCheckbox() {
  let checkbox = document.getElementById("cravosespinhas");
  
  if (checkbox.checked) {
   console.log('Cravos e Espinhas')
      
  }
}

function verificarCheckbox1() {
  let checkbox = document.getElementById("flacidez");
  if (checkbox.checked) {
  console.log('Flacidez')
      
  }
}

function verificarCheckbox2() {
  let checkbox = document.getElementById("faltadeviço");
  if (checkbox.checked) {
  console.log('Falta de Viço')
      
  }
}

function verificarCheckbox3() {
  let checkbox = document.getElementById("manchas");
  if (checkbox.checked) {
  console.log('Mancha')
      
  }
}

function verificarCheckbox4() {
  let checkbox = document.getElementById("texturairregular");
  if (checkbox.checked) {
  console.log('Textura Irregular')
      
  }
}

function verificarCheckbox5() {
  let checkbox = document.getElementById("rugas");
  if (checkbox.checked) {
  console.log('Rugas')
      
  }
}

function verificarCheckbox6() {
  let checkbox = document.getElementById("poros");
  if (checkbox.checked) {
  console.log('Poros')
      
  }
}
