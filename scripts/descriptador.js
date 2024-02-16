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
  // if txtArea tiver Caixa alta ou caractere emita um alert box
  //let acentos = txt.match(/([A-Zà-úÀ-Ú])/g);
  //let acentos = txt.match(/([^a-z ])/g);
  let acentos = txt.match(/([^a-z \n])/g);
  if (acentos){
    let audio = new Audio("./assets/error.wav");
    audio.play();

    Swal.fire({
      icon: "",
      title: '😥',
      text: 'Desculpe. O app só aceita caracteres do alfabeto em caixa baixa e sem acentos. ',
      customClass: {
      content: 'my-custom-class', // Add your custom class for styling
      },
      confirmButtonText: 'OK',
    });
     return 0;
  }

  let audio = new Audio("./assets/descript.wav");
  audio.play();

  let textoDescriptado = descriptar(txt);
  document.getElementById("entrada").value = textoDescriptado;
}

