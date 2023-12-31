function tocaSom(seletorAudio) { 
    const elemento = document.querySelector(seletorAudio); 

    if ( elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }  
    else { 
        //alert('Elemento não encontrado');
        console.log('elemento não encontrado ou seletor invalido');
    }
}

 const listadeteclas = document.querySelectorAll('.tecla');
  
 //para
 for (let contador = 0; contador < listadeteclas.length; contador++) {

    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {  

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
         
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
