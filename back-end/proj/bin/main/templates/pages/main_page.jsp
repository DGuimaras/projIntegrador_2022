<%@ page contentType = "text/html; charset = UTF-8" %>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/../css/style.css">
        <meta charset=UTF-8>       
        <title>Vendas da Associação</title>
        <script src="/../js/script.js"></script>
    </head>

    <body>
        <nav id="menu">
            <ul>
                <li class="profile"><a href="#perfil">Perfil</a></li>
                <div class="center">
                    <li onclick="goToLoja()" class="loja"><a href="#loja">Loja</a></li>
                    <li onclick="goToEvents()" class="events"><a href="#events">Eventos</a></li>
                    <li onclick="goToAbout()" class="aboutus"><a href="#aboutus">Sobre nós</a></li>
                    <li onclick="goToContacts()" class="contacts"><a href="#contact">Contactos</a></li>
                </div>
                <input onclick="showCategories()" type="text" placeholder="Pesquisa..">
            </ul> 
        </nav>
        <section id="categories">
            <button type="button">Categorie</button>
            <button type="button">Categorie</button>
            <button type="button">Categorie</button>
            <button type="button">Categorie</button>  
        </section>
        <section id="pieces" >
            <article>
                <div id="container">
                    <img src="https://picsum.photos/600/400?business" alt="">
                    <div class="overlay">Art Piece One</div>
                </div>
            </article>
            <article>
                <div id="container">
                    <img src="https://picsum.photos/600/400?business" alt="">
                    <div class="overlay">Art Piece One</div>
                </div>
            </article>
            <article>
                <div id="container">
                    <img src="https://picsum.photos/600/400?business" alt="">
                    <div class="overlay">Art Piece One</div>
                </div>
            </article>
            <article>
                <div id="container">
                    <img src="https://picsum.photos/600/400?business" alt="">
                    <div class="overlay">Art Piece One</div>
                </div>
            </article>
            <article>
                <div id="container">
                    <img src="https://picsum.photos/600/400?business" alt="">
                    <div class="overlay">Art Piece One</div>
                </div>
            </article>
            <article>
                <div id="container">
                    <img src="https://picsum.photos/600/400?business" alt="">
                    <div class="overlay">Art Piece One</div>
                </div>
            </article>
            <article>
                <div id="container">
                    <img src="https://picsum.photos/600/400?business" alt="">
                    <div class="overlay">Art Piece One</div>
                </div>
            </article>
            <article>
                <div id="container">
                    <img src="https://picsum.photos/600/400?business" alt="">
                    <div class="overlay">Art Piece One</div>
                </div>
            </article>
            <article>
                <div id="container">
                    <img src="https://picsum.photos/600/400?business" alt="">
                    <div class="overlay">Art Piece One</div>
                </div>
            </article>
        </section>
        <div class="fixed-bottom">
            <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#" class="active">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
            </div>
        </div>
        <script src="/../js/script.js"></script>
    </body>
</html>