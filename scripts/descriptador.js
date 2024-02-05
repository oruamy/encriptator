// Script para descriptar

function descriptar(entrada) {
  let chaves = ["enter", "imes", "ai", "ober","ufat"];
  let letras = ["e", "i", "a", "o", "u"];
  let texto = entrada;

  for (i in chaves){
    texto = texto.replaceAll(chaves[i], letras[i]);
  }
  return (texto);
}

function descriptador() {
  let txt = document.querySelector("textarea").value;
  let txtArea = document.querySelector("textarea");
  let textoDescriptado = descriptar(txt);
  document.getElementById("entrada").value = textoDescriptado;
}

