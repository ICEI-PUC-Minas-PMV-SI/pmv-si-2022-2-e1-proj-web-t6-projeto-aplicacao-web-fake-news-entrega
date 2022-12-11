# Programação de Funcionalidades - HTML e CSS.

A programação das funcionalidades determinadas através da Aplicação Web, foi realizada com a elaboração de múltiplos documentos HTML e estilos CSS, que 
possibilitassem um design agradável e condizente com a elaboração dos templates feitos na plataforma Figma.

A programação das páginas foi feita em dois documentos ".html" semi-idênticos, um para caso o usuário estivesse logado, outro para caso ele não estivesse 
cadastrado no site no momento de acesso.

O código fonte que exemplifica como a programação foi feita consta na ["src"](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2022-2-e1-proj-web-t6-projeto-aplicacao-web-fake-news/tree/main/src) do projeto.

O resultado em HTML e CSS das páginas constam em imagem abaixo, para a verificação do código basta acessar o código na pasta fonte do projeto nos arquivos de 
mesmo nome.

## in_Home.html e out_home.html

A página "Home" tem como objetivo, receber o usuário na aplicação web e redirecioná-lo pelo conteúdo através dos botões na aba inferior ou dos links na barra 
de navegação.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202917808-37b57bd2-38bc-40cd-aec1-e75ea189e80b.png">

## in_FeedRSS.html e out_FeedRSS.html

A página de "Feed de Notícias" tem como objetivo, receber atualizações dinâmicamente de Feeds RSS de site de notícias e utilizá-los para preencher as 
informações do corpo da página. Como o preenchimento dinâmico será realizado através do JavaScript, a estrutura foi preenchida com valores Lorem Ipsum no 
HTML estático.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/103666432/205665322-c5ff41be-09e1-483d-b879-045dfd3195de.png">

## in_MotorDeBusca.html e out_MotorDeBusca.html

A página de "Pesquisa" tem como objetivo, servir como motor de busca em sites de notícia verificados determinados pelo grupo e retornar uma lista de 
resultados. Como o preenchimento dinâmico será realizado através do JavaScript, a estrutura foi preenchida com valores Lorem Ipsum no HTML estático.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202918353-638f7317-530a-4acc-bb75-f89e5b1988f8.png">

## in_BlogFakeNews.html, out_BlogFakeNews.html e noticiaXX.html

A página de "O Que São "Fake News"?" tem como objetivo servir como Blog Estático de informações pré-definidas e pesquisas realizadas pelo grupo sobre o 
advento das FakeNews na sociedade e, seu impacto como um todo, contendo curiosidades, informações, dicas etc. Diferentemente das outras páginas, essa possui 
uma estrutura de usuário logado ou deslogado, que ao acessar algum tópico do blog, redireciona para um novo documento HTML (**noticiaXX**) com as informações 
referentes ao conteúdo do Blog. Tal página se baseará totalmente no HTML e CSS estáticos, sem dinamicidades, portanto já está funcionando.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202918715-e6eca139-939a-40a3-be52-6e8521fbf41e.png">

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202918742-c7eb4b02-d986-4036-9258-0d90d7848654.png">

## in_ControleUsuario.html

A página de "Usuário" tem como objetivo realizar a administração do cadastro do usuário na plataforma "Not So Fake", a mesma já foi estruturada através de 
botões e formulários em HTML e CSS que possibilitarão futuramente a atualização de preferências no cadastro do usuário contido em arquivo ".json". Atualmente 
a estrutura da página sómente é visual devido ser uma entrega em HTML e CSS mas, o seu objetivo será atingido posteriormente através de códigos JavaScript.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202918958-6fdd5eeb-7e93-40cf-9875-58985acd7056.png">

## out_Cadastro.html e out_Login.html

As páginas de "Login" e "Cadastro" possuem como objetivo o armazenamento e autentificação de usuários na plataforma, o login e cadastro irá funcionar através 
de formulários e botões elaborados em HTML e CSS que irão, ou conferir a procedência dos dados de login em banco ".json" para realização do acesso, ou 
cadastrar novas informações de usuário no banco ".json". A visualização das páginas e os elementos dos formulários HTML e CSS já estão funcionando, a 
dinamicidade de conferência e criação de dados será feita na etapa posterior em JavaScript.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202919172-a3b970c0-6354-48c9-8a76-cd391918c552.png">

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202919198-2f9d8f13-6d5a-4c11-b80c-49e4bf850eb1.png">

# Programação de Funcionalidades - JavaScript.

Uma vez estando prontas as estruturas e design da aplicação nos documentos HTML e CSS, a parte dinâmica teve início, realizando as etapas de desenvolvimento 
relacionadas ao JavaScript. Após analisar o contexto do projeto, foi percebido que a dinamicidade através do JavaScript se daria em 3 frentes principais de 
interação, o **Motor de Busca**, a **Base de Acesso, Edição e Cadastro de Usuários** e o **Feed de Notícias em RSS**.

O código fonte que exemplifica como a programação foi feita consta na ["src"](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2022-2-e1-proj-web-t6-projeto-aplicacao-web-fake-news/tree/main/src) do projeto.

- Quanto ao Motor de Busca, foi utilizado pelo grupo a API do Google Cloud **"Custom Search Engine API"**, cuja configuração foi feita para que os resultados 
pesquisados pudessem ser apenas de 10 sites de referência jornalística nacional, buscando resultados confiáveis que não fossem Fake News referentes à 
qualquer tema de interesse do usuário.

Sites utilizados definidos no Painel de Controle da API do Google Cloud:

<img width="479" alt="image" src="https://user-images.githubusercontent.com/110254863/202927131-545afc0e-7371-41a0-9575-8e3f4e4f130b.png">

Exemplo do motor de busca em funcionamento:

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202927244-dedafae8-3172-416c-b53c-940553c3ca08.png">

- No Feed de notícias, utilizamos o RSS (Really Simple Syndication) que é um formato de distribuição de informações em tempo real pela internet, ou seja, o 
usuário tem acesso a várias notícias de diferentes fontes (fontes pré-estabelecidas) em um mesmo ambiente de maneira automática. O arquivo RSS é recebido no 
formato XML, que se caracteriza por ser uma linguagem de marcação com regras específicas de modo que ele seja facilmente lido por humanos e por máquinas. No 
Feed utilizamos três fontes de notícias e, portanto, três arquivos RSS, são eles: El pais, G1 e R7.

<img width="250" alt="image" src="https://user-images.githubusercontent.com/103666432/205677271-a7069989-0b66-4889-b1ff-16cbe18e67a1.png">

No arquivo Javascript, seguimos os seguintes passos:  

1 – Foi criado um Fetch dos links dos arquivos XML, referentes ao Feed RSS.  

2 – Em seguida foi feito o parse, ou seja, foi analisado o arquivo XML e ele foi convertido para texto.  

3 – Também foi limitado o número de notícias máximo para cada fonte.  

4 – Em seguida foi feito o tratamento das notícias, onde foi executado o loop para gerar notícias, também a separação dos títulos, links e imagens.  

5 – Após esses filtros e tratamentos das informações foi aplicado a estilização CSS para se adequar ao template padrão do site.  

- Acessando o feed:
<img width="925" alt="image" src="https://user-images.githubusercontent.com/103666432/205678814-2bf268c1-f32b-43b9-946b-460f4e0e782f.png">

- Clicando em uma notícia:
<img width="925" alt="image" src="https://user-images.githubusercontent.com/103666432/205678833-9139ddd6-bbdb-4c04-8d5d-bdca2bd6f59e.png">

- Usuário direcionado ao portal que contém a nóticia:
<img width="925" alt="image" src="https://user-images.githubusercontent.com/103666432/205678853-e842f8cd-01de-4899-8b74-325b7e67fddf.png">

- Na página de cadastro, utilizamos o JQuery para armazenar em localStorage os dados obtidos atráves do formulário html. Os dados são armazenados em formato 
chave-valor.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/206906646-31d71dae-6e27-496c-8908-8fd38c7d30e4.png">

- Na página de acesso, a verificação de credenciais foi feita através da conferência de valores alocados no localStorage criado no JQuery.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/206907087-bc40183f-b2a5-43f8-ade9-3d3ce1a0895d.png">

- Na página de controle de usuário é onde ocorre a maniplação dos dados obtidos na página do cadastro, manipulação feita a partir do JQuery. Sendo possível 
alterar o nome, email e senha. Além disso, é possivel alterar a configuração relacionada a newsletter, como: frênquencia de envios e envio imediato. A demonstração 
abaixo conta com a alteração do nome, mas a alteração de todos os demais campos ocorre da mesma forma, é indicado o valor de referência que se deseja alterar, a 
altreação é feita através do JQuery e um pop up indica a alteração.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/206907164-43aa65ca-5f6f-4342-b8e1-476a367e6d22.png">

## Observação quanto a funcionalidade de Newsletter:

**Quanto a funcionalidade do envio de Newsletters para o usuário, por se tratar de um projeto inteiramente em Front-End, a realização de tal feito sem um banco de 
dados configurado (motivo do salvamento do cadastro em localStorage) e, sem uma API para realização se provou muito complexa devido o tempo hábil em questão. Logo, ao 
questionar a Professora Simone sobre como prosseguir, foi aconselhado que deixássemos de lado tal requisito pois já estávamos entregando todos os outros e, que 
constatar que não seria possível a realização de algum requisito, fazia parte do processo.**
