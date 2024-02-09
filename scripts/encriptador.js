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
  //txt = txt.replace(/(\n)/gm, " ");
  let txtArea = document.querySelector("textarea");
  let acentos = txt.match(/([^a-z \n])/g);
  if (acentos){
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

  let texto = encriptar(txt);
  document.getElementById("entrada").value = texto;
}
