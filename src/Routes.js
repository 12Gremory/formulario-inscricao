import { Container, Typography } from "@mui/material";
import "./App.css";
import Formulario from "./Formulario/Formulario";
import "fontsource-roboto";
import { validarCPF, validarSenha } from "./Formulario/Modelos/validacoes";
import validacoesCadastro from "./Formulario/Contexto/validacoesCadastro";

function App() {
  function aoEnviarForm(dados) {
    return console.log(dados);
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <validacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha }}
      >
        <Formulario aoEnviar={aoEnviarForm} />
      </validacoesCadastro.Provider>
    </Container>
  );
}

export default App;
