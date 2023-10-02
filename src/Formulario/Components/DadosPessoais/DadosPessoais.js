import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useContext, useState } from "react";
import validacoesCadastro from "../../Contexto/validacoesCadastro";
import useErros from "../../Hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(validacoesCadastro);

  const [erro, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        onChange={(e) => {
          setNome(e.target.value);
        }}
        value={nome}
        id="Nome"
        label="Nome"
        name="nome"
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
        name="sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={validarCampos}
        error={!erro.cpf.valido}
        helperText={erro.cpf.texto}
        value={cpf}
        id="Cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        required
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
