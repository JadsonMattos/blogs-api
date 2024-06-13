# Boas-vindas ao repositório do projeto API de Blogs!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary>

  Neste projeto você vai desenvolver uma API e um banco de dados para a produção de conteúdo para um blog! 

  Você deverá desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Você deverá desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`; 

  3. Será necessária a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

<br />
</details>

# Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  ## 👉 Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  ![sequelize test](./public/remote-container.png)

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - Lembre-se de usar o prefixo `env $(cat .env)` ao rodar os comandos localmente para carregar as variáveis de ambiente do arquivo `.env`. Por exemplo:
  
    ```bash
    env $(cat .env) npm run dev
    ```
  
  - **:warning: Atenção:** Não rode o comando `npm audit fix`! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - **✨ Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br/>
</details>


<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary>

2. Instale as dependências [**Caso existam**]
  * `npm install`

</details>

# Requisitos Obrigatórios

## 1 - Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`

- Esse teste fará uma conexão no banco utilizando a configuração de teste do arquivo `src/config/config.js`;
- Suas `migrations` devem estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Suas `migrations` devem respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama).
- Todas as tabelas e colunas devem estar em `snake_case` 

---

## 2 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>

---

## 3 - Sua aplicação deve ter o endpoint POST `/login`

- O endpoint deve ser acessível através do URL `/login`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

---

## 4 - Sua aplicação deve ter o endpoint POST `/user`

- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de adicionar um novo `user` a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    // a imagem não é obrigatória
  }
  ```

---

## :warning: Validando token nas requisições

- Após termos feito o requisito de criação de `users` e o requisito de `login`, alguns requisitos abaixo vão precisar desta autenticação prévia, para que seja possível consumir o endpoint;
- Todo requisito que precisar validar o `token` terá o símbolo ☝;
- Lembre-se de criar a lógica para a extração do token e de colocar a palavra "Bearer" antes de suas requisições à API;
- **✨ Dica:** Se é algo que vamos utilizar em mais de uma rota, será que podemos separa-lo em algum lugar que comece com `M` de `middleware`? 😜

---

## 5 - Sua aplicação deve ter o endpoint GET `/user`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de trazer todos `users` do banco de dados;

---

## 6 - Sua aplicação deve ter o endpoint GET `/user/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user/:id`;
- O endpoint deve ser capaz de trazer o `user` baseado no `id` do banco de dados se ele existir;

---

## 7 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama).
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>


---

## 8 - Sua aplicação deve ter o endpoint POST `/categories`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de adicionar uma nova categoria a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```

---

## 9 - Sua aplicação deve ter o endpoint GET `/categories`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de trazer todas categorias do banco de dados;

---

## 10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- Sua `model` deve respeitar a associação correta *(N:1)* com o modelo `User`;
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

- **✨ Dica:**
  - Explore como renomear campos no Sequelize;

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>


---

## 11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- Sua `model` deve respeitar a associação correta *(N:N)* entre o modelo `BlogPost` e o modelo `Category`;
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>


---

## 12 - Sua aplicação deve ter o endpoint POST `/post`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de adicionar um novo blog post e vinculá-lo às categorias em suas tabelas no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```
  

- **✨ Dicas:**
  - Explore outros [find na documentação do Sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall);
  - Explore outros [insert na documentação do Sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#creating-in-bulk);
  - Explore a [seção 6 - Dia 03: ORM - Associations N:N e Transactions - Transações](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/22fa9643-5f27-41f5-943b-2c7cc1c67c01/lesson/a46df24c-0175-49d4-8557-bdcd947eb168), essa seção vai deixar suas aplicações com mais confiablidade e atomicidade, quando o assunto for transações de banco de dados;

---

## 13 - Sua aplicação deve ter o endpoint GET `/post`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de trazer todos os blogs post, user dono dele e as categorias do banco de dados;

---

## 14 - Sua aplicação deve ter o endpoint GET `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de trazer o blog post baseado no `id` do banco de dados se ele existir;

---

## 15 - Sua aplicação deve ter o endpoint PUT `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de alterar um post do banco de dados, se ele existir;
- Sua aplicação só deve permitir a alteração de um blog post caso a pessoa seja dona dele;
- Sua aplicação não deve permitir a alteração das categorias do post, somente os atributos `title` e `content` podem ser alterados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```
  
---

# Requisitos Bônus

## 16 - Sua aplicação deve ter o endpoint DELETE `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- ⚠️ Para que os `testes` passem é necessário que o [requisito 12](#12---sua-aplicação-deve-ter-o-endpoint-post-post) esteja funcionando completamente ⚠️;
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de deletar um blog post baseado no `id` do banco de dados se ele existir;
- Sua aplicação só deve permitir a deleção de um blog post caso a pessoa seja dona dele;

---

## 17 - Sua aplicação deve ter o endpoint DELETE `/user/me`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user/me`;
- O endpoint deve ser capaz de deletar você do banco de dados, baseado no `id` que esta dentro do seu `token`;
- Sua aplicação deve ser capaz de utilizar o token de autenticação nos headers, para saber o user logado correspondente á ser apagado;

---

## 18 - Sua aplicação deve ter o endpoint GET `/post/search?q=:searchTerm`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/search`;
- O endpoint deve ser capaz de trazer os blogs post baseados no `q` do banco de dados, se ele existir;
- Sua aplicação deve ser capaz de retornar um array de blogs post que contenham em seu título ou conteúdo o termo passado na URL;
- Sua aplicação deve ser capaz de retornar um array vázio caso nenhum blog post satisfaça a busca;
- O query params da requisição deverá seguir o formato abaixo:
  ```js
    http://localhost:PORT/post/search?q=vamos
  ```

- **✨ Dica:**
  - Explore como fazer LIKE no Sequelize igual aprendemos na [seção 2 - Dia 03: Filtrando dados de forma específica - LIKE - criando pesquisas mais dinâmicas](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/fa69c314-da3c-46e0-bcdb-43297772a43e/day/0798d603-86d8-4b98-849e-06094bfa936c/lesson/3a587e1c-210a-4384-b4a6-242b708c40ce);
