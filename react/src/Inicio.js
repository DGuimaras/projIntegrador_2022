import './Inicio.css';

function Inicio() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="inicio.css" />
      <meta charSet="UTF-8" />       
      <title>Vendas da Associação</title>
      <nav id="menuinicio">
        <ul>
          <div className="center">
            <li className="aboutus"><a href="#aboutus">Sobre nós</a></li>
            <li className="contacts"><a href="#contact">Contactos</a></li>
          </div>
        </ul> 
      </nav>
      <aside id="introducao">
        <h1><p> Associação </p></h1>
        <h2><p>It is a long established fact that a reader will be distracted by the readable content of 
            a page when looking at its layout. The point of using Lorem Ipsum.
          </p></h2>
        <button onclick="changeToSite()" type="button">Ir para a Loja</button>
      </aside>
      <article>
        <div id="iniciar">
          <input type="text" placeholder="E-mail ou nome de utilizador" />
          <input type="password" placeholder="Palavra-Passe" />
          <button type="button">Iniciar Sessão</button>
          <hr className="separate" />
          <button type="button" id="criarconta">Criar Conta</button>
        </div>
        <div id="criar">
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Nome de Utilizador" />
          <input type="text" placeholder="Nome Próprio" />
          <input type="date" placeholder="Data de nascimento" />
          <input type="password" placeholder="Palavra-Passe" />
          <button type="button">Criar Conta</button>
          <hr className="separate" />
          <button type="button" id="iniciar_sessao">Iniciar Sessão</button>
        </div>
      </article>
    </div>
  );
}

export default Inicio;

