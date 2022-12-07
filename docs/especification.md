# Especificações do Projeto

A aplicação web "Not So Fake" foi desenvolvida mirando atingir um amplo público alvo, pessoas de diversas idades, etnias e classes sociais, mas, marcadas pelo 
interesse em se informar com fatos verídicas de forma fácil. O fluxo de informações se dá de forma ativa e passiva. A forma ativa é definida por um motor de busca 
que irá utilizar como filtro sites jornalísticos com credibilidade perante a sociedade, para o usuário realizar a pesquisa do tema de seu interesse e ver as 
correspondências mais confiáveis. A parte passiva se relaciona a um feed de RSS dos tais sites supracitados, além de um newsletter de rotina definida pelo usuário. 
A aplicação em geral irá operar totalmente em front-end, utilizando de HTML, CSS e Javascript.

## Personas

- Dona Eleonora tem 67 anos, é aposentada, seus filhos já São adultos e independentes e atualmente passa o dia cuidando da casa. Ela tem muitos grupos nas redes 
  sociais e, conversa com várias amigas da mesma faixa de idade. Ela sabe que existem muitas informações falsas na internet e, está buscando uma fonte confiável de 
  notícias assim como explicações de como identificar uma "Fake News" para que ela não compartilhe para suas amigas.

- Márcio Cardoso tem 23 anos, é morador de uma comunidade no Rio de Janeiro e não possuiu muitas oportunidades na vida quanto ao estudo. Trabalha atualmente como 
  caixa e em seu tempo livre utiliza muito o celular e as redes-sociais. Márcio possui dificuldade em entender quando uma informação que vê é verdadeira ou não, 
  devido sua falta de instrução, ele procura uma forma simples de ler notícias confiáveis e se informar quanto ao dia-a-dia da sociedade.
  
- Fernando tem 38 anos, é torneiro mecânico em uma indústria automotiva, trabalha de 8 as 18 e gasta mais 3 horas por dia no transporte ao trabalho, não possui
  muito tempo disponível. Fernando nas horas vagas do serviço tem contato com vários colegas de trabalho e eles possuem o hábito de conversar sobre as notícias da 
  atualidade, Fernando desde o advento das "Fake News" toma cuidado para não compartilhar qualquer informação, mas com a falta de tempo fica difícil consultar de 
  forma eficaz a veracidade das notícias e gostaria de ter acesso a algum site que unificasse boas fontes jornalísticas.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO ... | QUERO/PRECISO ... |PARA ... |
|------------|-------------------|---------|
|Usuário do sistema | Verificar as notícias diárias de forma rápida | Me manter sempre atento quanto o dia-a-dia da sociedade |
|Usuário do sistema | Determinar se quero e, caso queira, os dias que receberei newsletter | Que não precise lidar com e-mails indesejados |
|Usuário do sistema | Buscar a veracidade de uma notícia em sites confiáveis | Que não dissemine informações falsas |
|Usuário do sistema | Entender melhor o advento das "Fake News" | Entender que a disseminação de informações falsas possui consequências |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID      | Descrição do Requisito  | Prioridade | Responsável |
|--------|-------------------------|------------|-------------|
| RF-001 | O sistema deverá permitir que o usuário pesquise notícias confiáveis através um motor de busca | ALTA | |
| RF-002 | O usuário poderá consultar as notícias através de um agregador | ALTA | |
| RF-003 | O sistema deverá possuir uma aba informativa com o resumo da temática "fake news" na sociedade | ALTA | |
| RF-004 | O sistema deverá possuir uma aba de transparência que poderá ser consultada pelo usuário | MÉDIA | |
| RF-005 | A aplicação poderá enviar notificações, com notícias ao navegador do usuário | MÉDIA | |
| RF-006 | O usuário poderá se cadastrar com um e-mail para receber newsletter | MÉDIA | |
| RF-007 | O usuário poderá decidir quais dias irá receber newsletter | BAIXA | |

### Requisitos não Funcionais

|ID       | Descrição do Requisito  |Prioridade |
|---------|-------------------------|-----------|
| RNF-001 | O motor deve operar através do Google Custom Search API | ALTA |
| RNF-002 | O feed deve funcionar como agregador de notícias de páginas de referência | ALTA |
| RNF-003 | A aplicação irá operar em HTML, CSS e Javascript | ALTA | 
| RNF-004 | A aba informativa deverá ser objetiva, de fácil entendimento e imutável | MÉDIA |
| RNF-005 | O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA |
| RNF-006 | O design da aplicação deverá ser minimalistas e, de fácil entendimento | BAIXA |
| RNF-007 | A aba de transparência deverá conter as informações utilizadas como guia para realização do projeto | BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
