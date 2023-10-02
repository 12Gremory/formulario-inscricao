import { Button, TextField } from "@mui/material";
import { useState } from "react";

function Entrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ cep, endereco, numero, cidade, estado });
      }}
    >
      <TextField
        onChange={(e) => setCep(e.target.value)}
        id="CEP"
        label="CEP"
        value={cep}
        variant="outlined"
        type="number"
        margin="normal"
      />
      <TextField
        onChange={(e) => setEndereco(e.target.value)}
        id="Endereço"
        label="Endereço"
        value={endereco}
        variant="outlined"
        type="text"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(e) => setNumero(e.target.value)}
        id="Número"
        label="Número"
        value={numero}
        variant="outlined"
        type="number"
        margin="normal"
      />
      <TextField
        onChange={(e) => setCidade(e.target.value)}
        id="cidade"
        label="cidade"
        value={cidade}
        variant="outlined"
        type="text"
        margin="normal"
      />
      <TextField
        onChange={(e) => setEstado(e.target.value)}
        id="estado"
        label="estado"
        value={estado}
        variant="outlined"
        type="text"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar
      </Button>
    </form>
  );
}

export default Entrega;
