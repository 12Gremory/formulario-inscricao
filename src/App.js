import './App.css';

function App() {
  return (
    <>
      <h1>
        Formulário de Cadastro
      </h1>
      <form>
        <label>Nome</label>
        <input type='text'/>

        <label>Sobrenome</label>
        <input type='text'/>
        
        <label>CPF</label>
        <input type='text'/>
        
        <label>Promoções</label>
        <input type='checkbox'/>
        
        <label>Novidades</label>
        <input type='checkbox'/>

        <button type='submit'>Cadastrar</button>
      </form>
    </>
  );
}

export default App;
