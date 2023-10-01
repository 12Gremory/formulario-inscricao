import { Button, TextField } from "@mui/material"

function Entrega () {
    return (
        <div>
            <TextField id="CEP" label="CEP" variant="outlined" type="number" margin="normal" />
            <TextField id="Endereço" label="Endereço" variant="outlined" type="text" margin="normal" fullWidth/>
            <TextField id="Número" label="Número" variant="outlined" type="number" margin="normal" />
            <TextField id="cidade" label="cidade" variant="outlined" type="text" margin="normal" />
            <TextField id="estado" label="estado" variant="outlined" type="text" margin="normal" />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar</Button>
        </div>
    )
}

export default Entrega