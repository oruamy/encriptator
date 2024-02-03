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
  console.log(`Texto encriptado: ${textoCodificado}`);
}

  ////////////////////////
 // Descriptar  ///////// 
////////////////////////

function descriptar(entrada) {
  let texto = entrada.split(" ");
  let textoComprimento = texto.length;

  let textoDecodificado = [];
  let palavra = "";
  let palavraTamanho = 0;

  for (let i in texto){
    palavra = texto[i];
    palavraTamanho = palavra.length;
    let palavraDecodificada = "";

    while(palavraTamanho > 0){
      if(palavra.startsWith("enter")){
        palavraDecodificada += "e";
        palavra = palavra.slice(5, palavraTamanho);
        if (palavra.length == 0){
          break;
        }
      } else if (palavra.startsWith("imes")) {
        palavraDecodificada += "i";
        palavra = palavra.slice(4, palavraTamanho);
        if (palavra.length == 0){
          break;
        }
      } else if (palavra.startsWith("ai")) {
        palavraDecodificada += "a";
        palavra = palavra.slice(2, palavraTamanho);
        if (palavra.length == 0){
          break;
        }
      } else if (palavra.startsWith("ober")) {
        palavraDecodificada += "o";
        palavra = palavra.slice(4, palavraTamanho);
        if (palavra.length == 0){
          break;
        }
      } else if (palavra.startsWith("ufat")) {
        palavraDecodificada += "u";
        palavra = palavra.slice(4, palavraTamanho);
        if (palavra.length == 0){
          break;
        }
      } else {
        if (palavraTamanho >= 1){
          palavraDecodificada += palavra[0];
          palavra = palavra.slice(1, palavraTamanho);

          if (palavra.length == 0){
            break;
          }
        } 
        palavraTamanho = palavra.length;
        if (palavraTamanho == 0){
          break;
        }
      }
    } 
    textoDecodificado += palavraDecodificada;

    if (textoComprimento > 1){
        textoDecodificado += " ";
        textoComprimento -= 1;
    }
  }
  console.log(`O texto decodificado é: ${textoDecodificado}`);
}
encriptar(prompt("Entre com o texto para ser criptogafado: "));
descriptar(prompt("Entre com o texto para ser descriptogafado: "));
