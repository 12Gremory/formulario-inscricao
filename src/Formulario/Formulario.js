import DadosPessoais from "./Components/DadosPessoais/DadosPessoais";
import LoginSenha from "./Components/LoginSenha/LoginSenha";
import Entrega from "./Entregas/Entrega";

function Formulario({ aoEnviar, validarCPF }) {
  return (
    <div>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
      <LoginSenha/>
      <Entrega/>
    </div>
  )
}

export default Formulario;
