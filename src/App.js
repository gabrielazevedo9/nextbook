import './app.css';

function App() {
  return(
    <main className="main">
      <div className="conteudo">
        <div className="conteudo-texto">
        <h1 className="titulo"><strong>Encontre novos livros perto de sua casa</strong></h1>
          <p className="paragrafo">Os vendedores de livros e e cambistas mais próximos de sua localização.</p>
            <div className="botoes">
              <button className="botao-explorar"><strong>Explorar minha região</strong></button>
              <button className="botao-criar"><strong>Crie sua conta &#62;</strong></button>
            </div>
        </div>
        <div className="conteudo-foto">
          <img className="livros" src="../book.png" alt="livro, oculos e relogio"></img>
        </div>
      </div>
    </main>
  );
}

export default App;
