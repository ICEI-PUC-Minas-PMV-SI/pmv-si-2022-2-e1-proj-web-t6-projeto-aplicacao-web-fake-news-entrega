{

    // Fazendo "fetch" dos links dos arquivos XML, referentes ao Feed RSS.

    Promise.all([
        
        fetch("rss/rss-R7.xml").then(response => response.text()),
        fetch("rss/rss-G1.xml").then(response => response.text()), 
        fetch("rss/rss-EP.xml").then(response => response.text()),
    
    ]).then(function(data){

        // Fazendo "parse" do arquivo xml para text.

        let parserR7 = new DOMParser();
        let xmlDOCR7 = parserR7.parseFromString(data[0], "text/xml");
        let itemStrLenghtR7 = xmlDOCR7.getElementsByTagName("entry").length; // Verificando tamanho da "string" de noticias.

        let imgItemR7 = ""; // Definindo imagem R7 padrão como vazia.

        // Fazendo "parse" do arquivo xml para text.

        let parserG1 = new DOMParser();
        let xmlDOCG1 = parserG1.parseFromString(data[1], "text/xml");
        let itemStrLenghtG1 = xmlDOCG1.getElementsByTagName("item").length; // Verificando tamanho da "string" de noticias.

        // Fazendo "parse" do arquivo xml para text.

        let parserEP = new DOMParser();
        let xmlDOCEP = parserEP.parseFromString(data[2], "text/xml");
        let itemStrLenghtEP = xmlDOCEP.getElementsByTagName("item").length; // Verificando tamanho da "string" de noticias.                  

        // Delimitando no máximo 5 noticias geradas por cada fonte.

        let limitadorDeNoticiasR7 = 0;
        let limitadorDeNoticiasG1 = 0;
        let limitadorDeNoticiasEP = 0;   
        
        // "Loop" para gerar as noticias do R7.

        for (let x = 0; x < itemStrLenghtR7; x++) { 

            // Selecionando as tags "entry" das noticias do RSS.

            let itemStrR7 = xmlDOCR7.getElementsByTagName("entry")[x]; // Definindo todos os conteudos de "entry".
            let titleItemR7 = itemStrR7.querySelectorAll("title")[0].innerHTML; // Separando os títulos dos itens.
            let linkItemR7 = itemStrR7.querySelectorAll("url")[0].innerHTML; // Separando os links dos itens.
            imgItemR7 = itemStrR7.querySelectorAll("mediaurl")[0].innerHTML; // Separando as origens das imagens dos itens. 

            // Tratando casos de imagem "undefined" ou "null".

            if (imgItemR7 === "") { 
                    
                console.log("Erro! Imagem da noticia n°" + x + " do R7 indefinida. Noticia não pode ser carregada...");
            
            } else {
                
                // Caso a imagem esteja definida, irá ser realizado um contador com limite de 5 notícias por fonte RSS.

                limitadorDeNoticiasR7 ++;

                if (limitadorDeNoticiasR7 > 5) {
                    
                    break;

                }   

                let listR7 = document.getElementById("Lista-noticias-secundarias"); // Criando lista de notícias secundárias.
            
                // Função para gerar as noticias em lista.

                function createListR7(){

                    // Realizando o envio de notificações sobre as notícias.
                    const img = imgItemR7;
                    const text = titleItemR7;
                    const notification = new Notification('Not So Fake - Feed de Notícias', { body: text, icon: img });


                    return `<li class="list-group-item bg-transparent">
                                
                                <a href="${linkItemR7}" target="_blank" class="titulo-noticia-secundario"><img src="${imgItemR7}" class="imagem-noticia-secundario" alt="">${titleItemR7}</a>

                            </li>`
            
                }

                document.getElementById("Lista-noticias-secundarias").innerHTML += createListR7(); // Chama a função para criar lista adicionando ao corpo do HTML.
            }
        }           
        
        // Loop para gerar notícias do G1.

        for (let x = 0; x < itemStrLenghtG1; x++) {

            // Selecionando as tags "item" das noticias do RSS.

            let itemStrG1 = xmlDOCG1.getElementsByTagName("item")[x]; // Selecionando todos os conteudos de itens.
            let titleItemG1 = itemStrG1.querySelectorAll("title")[0].innerHTML; // Separando os títulos dos itens.
            let linkItemG1 = itemStrG1.querySelectorAll("link")[0].innerHTML; // Separando os links dos itens.
            let imgItemG1 = itemStrG1.getElementsByTagName("media:content")[0]; // Separando as origens das imagens dos itens.
            
            // Tratando casos de imagem "undefined" ou "null".

            if (typeof imgItemG1 === "undefined") {
                    
                console.log("Erro! Imagem da noticia n°" + x + " do G1 indefinida. Noticia não pode ser carregada...");
            
            } else {

                // Caso a imagem esteja definida, irá ser realizado um contador com limite de 5 notícias por fonte RSS.

                limitadorDeNoticiasG1 ++;

                if (limitadorDeNoticiasG1 > 10) {

                    break;

                }

                // Realizando o envio de notificações sobre as notícias.
                const img = imgItemG1.attributes[0].value;
                const text = titleItemG1;
                const notification = new Notification('Not So Fake - Feed de Notícias', { body: text, icon: img });


                if (limitadorDeNoticiasG1 == 1) {
                    
                    let imgItemSrcG1 = imgItemG1.attributes[0].value; // Separando o link das imagens das noticias.

                    // Função para gerar as notícias em lista.

                    function createListG1_500px() {

                        return `<div class="wrapped-imagem-500x500"> 
                                    
                                    <a href="${linkItemG1}" target="_blank" id="titulo-noticias500px"><div class="imagem-noticia-primario-500px" style="background-image: url(${imgItemSrcG1});"><div style="font-size:55%; position:relative; top:65%; background-color:black; opacity: 70%">${titleItemG1}</div></div></a>
                                                
                                </div>`

                    }

                    document.getElementById("wrapper-imagem-500x500").innerHTML += createListG1_500px(); // Chama a função para criar lista adicionando ao corpo do HTML.
                    
                    function createListG1() {

                        return `<li class="list-group-item bg-transparent">
    
                                    <img src="${imgItemSrcG1}" class="imagem-noticia-secundario" alt="">
                                    <a href="${linkItemG1}" target="_blank" class="titulo-noticia-secundario">${titleItemG1}</a>
    
                                </li>`
    
                    }
    
                    document.getElementById("Lista-noticias-principais").innerHTML += createListG1(); // Chama a função para criar lista adicionando ao corpo do HTML.
                    
                } else if (limitadorDeNoticiasG1 > 1 && limitadorDeNoticiasG1 <= 5) {
                    
                    let imgItemSrcG1 = imgItemG1.attributes[0].value; // Separando o link das imagens das notícias.

                    // Função para gerar as noticias em lista.

                    function createListG1_250px() {

                        return `<div class="wrapped-imagem-250x250">
                                    
                                    <a href="${linkItemG1}" target="_blank id="titulo-noticias250px" style="text-decoration: none;"><div class="imagem-noticia-primario-250px" style="background-image: url(${imgItemSrcG1});"><div id="titulo-noticias250px" style="position:relative; top:40%; background-color:black; opacity: 70%">${titleItemG1}</div></div></a>
                                                    
                                </div>`

                    }

                    document.getElementById("wrapper-imagem-250x250").innerHTML += createListG1_250px(); // Chama a função para criar lista adicionando ao corpo do HTML.

                    function createListG1() {

                        return `<li class="list-group-item bg-transparent">
                 
                                    <a href="${linkItemG1}" target="_blank" class="titulo-noticia-secundario"><img src="${imgItemSrcG1}" class="imagem-noticia-secundario" alt="">${titleItemG1}</a>
    
                                </li>`
    
                    }
    
                    document.getElementById("Lista-noticias-principais").innerHTML += createListG1(); // Chama a função para criar lista adicionando ao corpo do HTML.

                } else {

                    let imgItemSrcG1 = imgItemG1.attributes[0].value; // Separando o link das imagens das notícias.

                    // Função para gerar as noticias em lista.
                    
                    function createListG1() {

                        return `<li class="list-group-item bg-transparent">

                                    <a href="${linkItemG1}" target="_blank" class="titulo-noticia-secundario"><img src="${imgItemSrcG1}" class="imagem-noticia-secundario" alt="">${titleItemG1}</a>

                                </li>`

                    }

                    document.getElementById("Lista-noticias-secundarias").innerHTML += createListG1(); // Chama a função para criar lista adicionando ao corpo do HTML.
                
                }
            
            }

        }
        
        // Loop para gerar noticias do El Pais.

        for(let x = 0; x < itemStrLenghtEP; x++){

            // Selecionando as tags "item" das noticias do RSS.

            let itemStrEP = xmlDOCEP.getElementsByTagName("item")[x]; // Selecionando todos os conteúdos de itens.
            let titleItemEP = itemStrEP.getElementsByTagName("title")[0].innerHTML; // Separando os títulos dos itens.
            let linkItemEP = itemStrEP.querySelectorAll("link")[0].innerHTML; // Separando os links dos itens.
            let imgItemEP = itemStrEP.getElementsByTagName("media:content")[0]; // Separando as origens das imagens dos itens. 

            // Tratando casos de imagem "undefined" ou "null".

            if (typeof imgItemEP === "undefined") {
                    
                console.log("Erro! Imagem da notícia n°" + x + " do El País indefinida. Noticia não pode ser carregada...");
            
            } else {

                // Caso a imagem esteja definida, irá ser realizado um contador com limite de 5 notícias por fonte RSS.

                limitadorDeNoticiasEP ++;

                if (limitadorDeNoticiasEP > 5) {
                    
                    break;
                
                }   

                let imgItemSrcEP = imgItemEP.attributes[0].value; // Separando o link das imagens das noticias.
                
                let listEP = document.getElementById("Lista-noticias-secundarias");

                // Função para gerar as noticias em lista.

                function createListEP(){

                    // Realizando o envio de notificações sobre as notícias.
                    const img = imgItemSrcEP;
                    const text = titleItemEP;
                    const notification = new Notification('Not So Fake - Feed de Notícias', { body: text, icon: img });


                    return `<li class="list-group-item bg-transparent">

                                <a href="${linkItemEP}" target="_blank" class="titulo-noticia-secundario"><img src="${imgItemSrcEP}" class="imagem-noticia-secundario" alt="">${titleItemEP}</a>

                            </li>`

                }

                document.getElementById("Lista-noticias-secundarias").innerHTML += createListEP(); // chamar função pra criar lista

            }
        }
    
    })

}