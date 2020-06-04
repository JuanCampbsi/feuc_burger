const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".mais-acessadas__card");

for (let card of cards) {
  card.addEventListener("click", function() {
    const fotoId = card.querySelector("img").getAttribute("alt");
    const title = card.querySelector("p.nome").textContent;
    const autor = card.querySelector("p.autor").textContent;

    modalOverlay.querySelector("img").src = `img/${fotoId}.jpg`;
    modalOverlay.querySelector("p.nome").innerHTML = title;
    modalOverlay.querySelector("p.autor").innerHTML = autor;

    modalOverlay.classList.add("active");
  });
}

document.querySelector(".modal-close").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
});


function SomenteNumero(e){
  var tecla=(window.event)?event.keyCode:e.which;
  if((tecla>47 && tecla<58)) return true;
  else{
  if (tecla==8 || tecla==0) return true;
  else  return false;
  }
 }

 function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
   
  if ((usuario.length >=1) &&
      (dominio.length >=3) && 
      (usuario.search("@")==-1) && 
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) && 
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&      
      (dominio.indexOf(".") >=1)&& 
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  document.getElementById("msgemail").innerHTML="E-mail válido";
  alert("E-mail valido");
  }
  else{
  document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
  alert("E-mail invalido");
  }
  }

  function limitarInput(obj) {
    obj.value = obj.value.substring(0,2); 
  }