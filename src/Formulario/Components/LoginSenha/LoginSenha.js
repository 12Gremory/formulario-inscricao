import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import validacoesCadastro from "../../Contexto/validacoesCadastro";
import useErros from "../../Hooks/useErros";

function LoginSenha({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(validacoesCadastro);

  const [erro, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        label="email"
        name="email"
        type="email"
        value={email}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(e) => setSenha(e.target.value)}
        onBlur={validarCampos}
        id="senha"
        label="senha"
        name="senha"
        type="password"
        error={!erro.senha.valido}
        helperText={erro.senha.texto}
        value={senha}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default LoginSenha;
