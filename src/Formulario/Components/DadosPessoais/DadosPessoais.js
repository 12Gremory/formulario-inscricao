import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";

function DadosPessoais({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erro, setErro] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        onChange={(e) => {
          setNome(e.target.value);
        }}
        value={nome}
        id="Nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
        value={sobrenome}
        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={(e) => {
          const valido = validarCPF(e.target.value);
          setErro({
            cpf: { valido },
          });
        }}
        error={!erro.cpf.valido}
        helperText={erro.cpf.texto}
        value={cpf}
        id="Cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(e) => {
              setPromocoes(e.target.checked);
            }}
            checked={promocoes}
            name="Promoções"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(e) => {
              setNovidades(e.target.checked);
            }}
            checked={novidades}
            name="Novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais
