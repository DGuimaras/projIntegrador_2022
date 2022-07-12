
function sendCreateUserRequest() {
    let username = document.getElementById("user_reg").value.attributes("");
    let password = document.getElementById("pass_reg").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:8080/demo/add', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "username": username,
        "password": password
    }));
    if(username) {

    }
    location.replace("/");
}

function ChangeToCriar() {
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("criar").style.display = "block";
}

function ChangeToIniciar() {
    document.getElementById("iniciar").style.display = "block";
    document.getElementById("criar").style.display = "none";
}

function goToAbout() {
    location.replace("about");
}

function goToContacts() {
    location.replace("contacts");
}

function goToLoja() {
    location.replace("/");
}

function goToEvents() {
    location.replace("events");
}

function goToProfile() {
    let session_on = false;
    var getSession = new XMLHttpRequest();
    getSession.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            if(data.roles === "ROLE_USER" || data.roles === "ROLE_ADMIN"){
                location.replace("profile");
            }
            else {
                location.replace("login");
            }
        }
    };
    getSession.open('GET', 'http://localhost:8080/demo/sessionInfo', true);
    getSession.send();
}

function goToAddArticles() {
    location.replace("add_articles");
}src

function showCategories() {
    var x = document.getElementById("categories");
    var y = document.getElementById("pieces");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.marginTop = "15px";
    } else {
        x.style.display = "none";
        y.style.marginTop = "70px";
    }
}
function load_content(){
    let admin = false;
    var xhr = new XMLHttpRequest();
    var getUser = new XMLHttpRequest();
    getUser.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            if(data.roles === "ROLE_ADMIN"){
                admin = true;
            }
            console.log(data);
            Logged_user = data;

        }
    };
    getUser.open('GET', 'http://localhost:8080/demo/sessionInfo', true);
    getUser.send();
    var data;
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status === 200) {
            data = JSON.parse(this.responseText)
           // console.log(data);
            if(admin) {
                const article = document.createElement("article");
                let node = document.getElementById("pieces");
                node.appendChild(article);
                const div = document.createElement("div");
                div.setAttribute("id","container");
                div.setAttribute("onClick","goToAddArticles()");
                article.appendChild(div);
                const img = document.createElement("img");
                img.src = "../assets/plus.png";
                div.appendChild(img);
                const div1 = document.createElement("div");
                div1.setAttribute("class","overlay");
                div1.innerHTML = "Adicionar Artigo";
                div.appendChild(div1);
            }

            for(let i=0;i<data.length;i++){
                //console.log(data[i]);
                const article = document.createElement("article");
                let node = document.getElementById("pieces");
                node.appendChild(article);
                const div = document.createElement("div");
                div.setAttribute("id","container");
                div.setAttribute("onclick","fill_piece(".concat(data[i].id.toString()).concat(")"));
                article.appendChild(div);
                const img = document.createElement("img");
                console.log(data[i].id.toString());
                img.src = "../articles/" + data[i].id.toString() + ".png";
                div.appendChild(img);
                const div1 = document.createElement("div");
                div1.setAttribute("class","overlay");
                div1.innerHTML = data[i].title;
                div.appendChild(div1);
            }
        }
    }
    xhr.open('GET', 'http://localhost:8080/article/all', true);
    xhr.send();

}

function fill_piece(id){
    //console.log("Entrei Aquiiiiiiiiiiiiiiiiiiiiiiiiiiiii".concat(piece_id));
    piece_id = id;
    location.replace("piece?id=".concat(id));
   // aux(piece_id);
}
function aux(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let value = params.id;
    var xhr = new XMLHttpRequest();
    var data;
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status === 200) {
            data = JSON.parse(this.responseText);
            let j=0;
            for(let i=0;i<data.length;i++){
                if(data[i].id === parseInt(value)){
                    j=i;
                }
            }

            console.log(data);
            let node = document.getElementById("pieces");
            /*const li = document.createElement("li");
            li.setAttribute("id","desc");
            li.innerHTML = data[j].title;
            node.appendChild(li);*/
            const article = document.createElement("article");
            node.appendChild(article);
            const div = document.createElement("div");
            div.setAttribute("id","descim");
            article.appendChild(div);
            const div2 = document.createElement("div");
            div2.setAttribute("id","container");
            div.appendChild(div2);
            const img = document.createElement("img");
            img.src = "../articles/" + data[j].id.toString() + ".png";
            img.setAttribute("alt","");
            div2.appendChild(img);
            const div3 = document.createElement("div");
            div3.setAttribute("class","descricao");
            div.appendChild(div3);
            const p1 = document.createElement("p");
            p1.setAttribute("id","price");
            console.log(data);
            p1.innerHTML = "Preço: ".concat(data[j].price).concat("€");
            const p2 = document.createElement("p");
            p2.setAttribute("id","author");
            p2.innerHTML = "Autor: ".concat(data[j].author).concat(" ");
            const p3 = document.createElement("p");
            p3.setAttribute("id","description");
            p3.innerHTML = "Descrição: ".concat(data[j].description).concat(" ");
            const h2 =  document.createElement("h2");
            h2.setAttribute("id","title");
            h2.innerHTML=data[j].title;
            div3.appendChild(h2);
            div3.appendChild(p1);
            div3.appendChild(p2);
            div3.appendChild(p3);
            const butn = document.createElement("button");
            butn.setAttribute("id","reservar");
            butn.innerHTML = "Reservar";
            div3.appendChild(butn);
        }
    }
    xhr.open('GET', 'http://localhost:8080/article/all', true);
    xhr.send();
}
function publicar() {
    let title = document.getElementById("titulo").value;
    let description = document.getElementById("descricao").value;
    let price = document.getElementById("preco").value;
    let author = document.getElementById("autor").value;
    let contatos = document.getElementById("contactos").value;
    let file = document.getElementById("add_img").files[0]
    if (isNaN(price) || price < 1 ||  price > 100000) {
        return;
    }
    console.log(title)
    console.log(description)
    console.log(price)
    console.log(author)
    console.log(contatos)
    console.log(file)
    if(title === undefined) return;
    if(description === undefined) return;
    if(price === undefined) return;
    if(author === undefined) return;
    if(contatos === undefined) return;
    if(file === undefined) return;
    let data = new FormData();
    data.set('photo', file)
    data.append('title', title)
    data.append('description', description)
    data.append('price', price)
    data.append('author', author)
    data.append('contatos', contatos)
    console.log(data.keys());
    fetch('http://localhost:8080/article/add', {method: "POST", body: data}).then(console.log)
    location.replace("/");
}

function editar_perfil(){
    document.getElementById("editar_perfil").style.display = "block";
    document.getElementById("foto_perfil").style.display = "none";
}

function sub_edicao(){
    document.getElementById("foto_perfil").style.display = "block";
    document.getElementById("editar_perfil").style.display = "none";
}