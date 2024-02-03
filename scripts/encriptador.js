  ////////////////////////
 // Escriptar  ////////// 
////////////////////////

function encriptar(entrada) {
  let texto = entrada.split(" ");
  let textoComprimento = texto.length;

  let textoCodificado = [];
  let palavra = "";
  let letra = "";

  for (let i in texto){
    palavra = texto[i];
    palavraVerificada = "";

    

    for (let j in palavra){
      if (palavra[j] == 'e'){
        palavraVerificada += "enter";
      } else if (palavra[j] == "i"){
        palavraVerificada += "imes";
      } else if (palavra[j] == "a") {
        palavraVerificada += "ai";
      } else if (palavra[j] == "o") {
        palavraVerificada += "ober" 
      } else if (palavra[j] == "u") {
        palavraVerificada += "ufat";
      } else {
        palavraVerificada += palavra[j];
      }
    }

    textoCodificado += palavraVerificada;

    if (textoComprimento > 1){
        textoCodificado += " ";
        textoComprimento -= 1;
    }
  }
  alert(`Texto encriptado: ${textoCodificado}`);
}

function encriptador() {
  encriptar(prompt("Entre com o texto para ser criptogafado: "));
}
