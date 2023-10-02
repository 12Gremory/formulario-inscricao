function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF deve conter 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4) {
    return { valido: false, texto: "A senha deve conter pelo menos 4 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha };
