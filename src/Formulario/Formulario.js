import { useEffect, useState } from "react";
import DadosPessoais from "./Components/DadosPessoais/DadosPessoais";
import LoginSenha from "./Components/LoginSenha/LoginSenha";
import Entrega from "./Components/Entregas/Entrega";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

function Formulario({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dados);
    }
  });

  const formularios = [
    <LoginSenha aoEnviar={dadosColetados} />,
    <DadosPessoais aoEnviar={dadosColetados} />,
    <Entrega aoEnviar={dadosColetados} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>,
  ];

  function dadosColetados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <div>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </div>
  );
}

export default Formulario;
