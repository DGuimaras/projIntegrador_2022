import React from "react";
import { NavLink } from "react-router-dom";

function LogIn() {
  return (
    <div>
      <aside id="introducao">
        <h1><p> Associação </p></h1>
        <h2><p>It is a long established fact that a reader will be distracted by the readable content of 
            a page when looking at its layout. The point of using Lorem Ipsum.
          </p></h2>
          <button class="loja">
              <NavLink class="nav-link" to="/store" style={{ textDecoration: 'none', color: 'white' }}>
                Ir Para a Loja
              </NavLink>
          </button>
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

export default LogIn;

