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
  alert(`O texto decodificado é: ${textoDecodificado}`);
}

function descriptador() {
  let txt = document.querySelector("textarea").value;
  descriptar(txt);
}

