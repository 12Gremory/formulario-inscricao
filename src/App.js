import { Container, Typography } from "@mui/material";
import "./App.css";
import Formulario from "./Formulario/Formulario";
import "fontsource-roboto";

function App() {
  function aoEnviarForm(dados) {
    return console.log(dados);
  }

  function validarCPF(cpf) {
    if (cpf.length !== 11) {
      return { valido: false, texto: "O CPF deve conter 11 dígitos" };
    } else {
      return { valido: true, texto: "" };
    }
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <Formulario aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
    </Container>
  );
}

export default App;
