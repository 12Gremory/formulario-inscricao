import { useState } from "react";

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }

  return estadoInicial;
}


function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes);
    const [erro, setErro] = useState(estadoInicial);
    
    function possoEnviar() {
      for (let campo in erro) {
        if (!erro[campo].valido) {
          return false;
        }
      }
      return true;
    }
    
    function validarCampos(evento) {
    const { name, value } = evento.target;
    const novoEstado = { ...erro };
    novoEstado[name] = validacoes[name](value);
    setErro(novoEstado);
  }

  return [erro, validarCampos, possoEnviar];
}

export default useErros;
