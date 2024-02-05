 // Script para escriptar   

function encriptar(entrada) {
  let letras = ["e", "i", "a", "o", "u"];
  let chaves = ["enter", "imes", "ai", "ober","ufat"];
  let texto = entrada;

  for (i in letras){
    texto = texto.replaceAll(letras[i], chaves[i]);
  }
  return (texto);
}

function encriptador() {
  let txt = document.querySelector("textarea").value;
  let txtArea = document.querySelector("textarea");
  let texto = encriptar(txt);
  document.getElementById("entrada").value = texto;
}
