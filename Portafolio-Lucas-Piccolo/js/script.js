function validarDatos(){
  window.event.preventDefault();

  if(document.formulario.nombreapellido.value == ""){
      alert("Campo nombre es obligatorio");
      document.formulario.nombre. focus();
      }else if(document.formulario.correoelectronico.value == ""){
          alert("Campo email es obligatorio");
          document.formulario.email. focus();
      }else if(document.formulario.asunto.value == ""){
              alert("Campo asunto es obligatorio");
              document.formulario.asunto. focus();
      }else if(document.formulario.correoelectronico.value.indexOf("@")== -1 && document.formulario.correoelectronico.value.indexOf(".")== -1){
          alert("Campo email es invalido");
          document.formulario.correoelectronico. focus();
      }else if(document.formulario.mensaje.value == "" || document.formulario.mensaje.length <= 50){
          alert("Campo mensaje es obligatorio de debe contener al menos 50 caracteres");
          document.formulario.mensaje. focus();
      }        
}
document.querySelector("formulario").addEventListener("submit",validarDatos)