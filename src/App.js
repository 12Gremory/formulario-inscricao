import { Container, Typography } from "@mui/material";
import "./App.css";
import Formulario from "./Formulario/Formulario";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <Formulario />
    </Container>
  );
}

export default App;
