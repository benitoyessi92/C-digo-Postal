document.getElementById("codigoPostal").addEventListener("submit", function(e){
  e.preventDefault();

  if(this.checkValidity()){
    alert("Código postal válido ✅");
  }else{
    alert("Código postal inválido ❌");
  }
});
