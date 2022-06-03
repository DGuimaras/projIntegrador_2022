<%@ page contentType = "text/html; charset = UTF-8" %>
<html xmlns:th="http://www.thymeleaf.org" xmlns:tiles="http://www.thymeleaf.org">
    <head>
        <link rel="stylesheet" type="text/css" href="/../css/style.css">
        <meta charset=UTF-8>
        <title>Vendas da Associação</title>
        <script src="/../js/script.js"></script>
    </head>

    <body>
        <nav id="menuinicio">
            <ul>
                <div class="center">
                    <li class="aboutus"><a href="#aboutus">Sobre nós</a></li>
                    <li class="contacts"><a href="#contact">Contactos</a></li>
                </div>
            </ul>
        </nav>
        <aside id="introducao">
            <h1><p> Associação </p></h1>
            <h2><p>It is a long established fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using Lorem Ipsum.
            </p></h2>
            <button onclick="goToLoja()" type="button">Ir para a Loja</button>
        </aside>
        <article>
            <div id="iniciar">
                <form name="f" th:action="@{/login}" method="post">
                    <fieldset>
                        <input type="text" placeholder="E-mail ou nome de utilizador">
                        <input type="password" placeholder="Palavra-Passe">
                        <button type="button">Iniciar Sessão</button>
                        <hr class="separate">
                        <button type="button" id="criarconta">Criar Conta</button>
                    </fieldset>
                </form>
            </div>
            <div id="criar">
                <form name="f" th:action="@{/register}" method="post">
                    <fieldset>
                        <input type="text" placeholder="E-mail">
                        <input type="text" placeholder="Nome de Utilizador">
                        <input type="text" placeholder="Nome Próprio">
                        <input type="date" placeholder="Data de nascimento">
                        <input type="password" placeholder="Palavra-Passe">
                        <button type="button">Criar Conta</button>
                        <hr class="separate">
                        <button type="button" id= "iniciar_sessao">Iniciar Sessão</button>
                    </fieldset>
                </form>
            </div>
        </article>
        <script src="/../js/script.js"></script>
    </body>
</html>
