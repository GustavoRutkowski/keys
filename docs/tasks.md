# 📌 Lista de Tarefas Pendentes

Aqui se encontra a nossa lista de tarefas pendentes. Abaixo estão listadas as tarefas categorizadas por *branch*.

Sinta-se à vontade para contribuir com o que preferir!

<h2 align="center"><code>main</code></h2>

* [ ] Criar um Docker Compose para o projeto, ele deve incluir o *Node.js* e o *MySQL*.
* [ ] Configurar o *WebPack* para que ele também compile o *SASS*.

<h2 align="center"><code>front/main</code></h2>

* [ ] Criar um sistema de compartilhamento do `.env` com o *front-end* utilizando *templates* do ***Mustache*** e um `<input type="hidden">`.

<h2 align="center"><code>front/interface</code></h2>

* [ ] Deixar a interface de *login* mais robusta, semelhante à interface de entrada de sistemas operacionais, com todos os usuários listados e um botão `+` para adicionar um novo usuário naquela máquina.

* [ ] Reajustar o design do `<header>` nas páginas de *login* e *register*.

* [ ] Ajustar o botão de `+` na página *`register.html`*.

* [ ] Remover o *timestamp* das senhas, não faz sentido exibi-los por hora.

<h2 align="center"><code>front/features</code></h2>

* [ ] Implementar as features de *login*/*logout* do usuário.

* [ ] Implementar as funcionalidades ***CRUD*** da página de *dashboard*.
    * [ ] Renderizar as senhas do usuário na tela.
    * [ ] Adicionar uma nova senha.
    * [ ] Editar uma senha já existente.
    * [ ] Deletar uma senha.
    * [ ] Exibir o nível de segurança de cada senha.

* [ ] Na página de **registro**, mostrar a segurança da `main_pass` para o usuário em tempo real.
    * [ ] Criar uma versão simplicada da lógica de "*feedback* inteligente"
    * [ ] Implementar um algoritmo de *`debounce`* nessa atualização em tempo real.


<h2 align="center"><code>front/fix-bugs</code></h2>

Está em aberto a procura por *bugs*!

<h2 align="center"><code>front/refactor</code></h2>

Sinta-se à vontade para refatorar código já existente no *front-end*!

<h2 align="center"><code>front/docs</code></h2>

* [ ] Documentar os componentes (`/components`).
* [ ] Documentar os *models* (`/models`).
* [ ] Documentar os utilitários (`/utils`).

<h2 align="center"><code>back/database</code></h2>

* [ ] Criar uma tabela `feedback` com as colunas `security_level` (o nível de segurança em si) e `message` (um *feedback* textual da senha). Toda senha deve estar vinculada a um *feedback*.

* [ ] Adicionar um *dump* padrão (vazio) na pasta `/src/backend/dumps` para facilitar na hora de baixar o banco.

* [ ] Remover a coluna `is_deleted` da tabela `passwords`.

<h2 align="center"><code>back/features</code></h2>

* [ ] Ao criar uma senha, sempre gerar um *feedback* junto. Esse feedback deve conter um **nível** e uma **descrição**. Esse nível e essa descrição devem ser gerados a partir de uma **lógica de geração de *feedback* "inteligente"**.

* [ ] Criar o sistema de **autenticação** e **autorização** ***JWT*** para privar rotas específicas.

<h2 align="center"><code>back/fix-bugs</code></h2>

Está em aberto a procura por *bugs*!

<h2 align="center"><code>back/refactor</code></h2>

Sinta-se à vontade para refatorar código já existente no *back-end*!

<h2 align="center"><code>back/docs</code></h2>

* [ ] Documentar os controladores (`/controllers`).
* [ ] Documentar os utilitários (`/helpers`).
* [ ] Documentar os *middlewares* (`/middlewares`).
* [ ] Documentar os *models* (`/models`).

<h2 align="center"><code>docs</code></h2>

* [ ] Documentar a estrutura de pastas do projeto.
