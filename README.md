<h1>📃 TodoList</h1>

<h2>⚡ Projeto</h2>

A aplicação visa oferecer uma solução completa para o acompanhamento e organização de tarefas com as seguintes características principais:

1. Dashboard Dinâmico:

Dashboard que fornece um resumo visual destacando estatísticas como o número de tarefas em execução, concluídas e pausadas.

2. Operações Básicas:

Permite a adição de novas tarefas, onde cada uma deve conter um nome descritivo e uma data de conclusão e a funcionalidade de exclusão de tarefas para manter a lista atualizada.

3. Visualização Flexível:

Disponibiliza duas opções de visualização: lista e grade, permitindo que os usuários escolham a visualização mais adequada às suas preferências.

4. Status de Tarefas:

Classifica as tarefas em três estados principais: em execução, concluídas ou pausadas. Fornecendo meios fáceis de alterar o status de uma tarefa, permitindo que os usuários atualizem seu progresso com facilidade.

5 . Persistência de Dados:

Implementa a persistência de dados de forma dinâmica utilizando o json-server. Isso permite a interação em tempo real e o armazenamento dinâmico das informações, garantindo uma experiência contínua ao adicionar, excluir ou modificar status das tarefas.

<img width="960" alt="image" src="https://github.com/afcj8/todolist/assets/102259875/bd5c54b1-a092-4641-9564-707784c2dc36">
<img width="957" alt="image" src="https://github.com/afcj8/todolist/assets/102259875/c60ed661-4268-42e2-9e42-4445ee2d27f0">
<img width="959" alt="image" src="https://github.com/afcj8/todolist/assets/102259875/5f491f62-1217-412b-82b4-5a18445b4b7e">
<img width="960" alt="image" src="https://github.com/afcj8/todolist/assets/102259875/4bf9f838-b3e3-4746-84e9-24985a72c0bd">
<img width="959" alt="image" src="https://github.com/afcj8/todolist/assets/102259875/21bde2c2-91d2-4465-becd-e55ef02ea7a7">

<h2>🚀 Tecnologias</h2>

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

<h2>🛠️ Manual do Desenvolvedor</h2>

1. Clone o repositório:
   ```bash
   git clone https://github.com/afcj8/todolist.git
   ```

2. Verifique se o Node está instalado em sua máquina:
   ```bash
   node --version
   ```

3. Navegue até o diretório clonado:
   ```bash
   cd todolist
   ```

4. Instale as dependências:
   ```bash
   npm install
   ```

5. Inicie o servidor:
   ```bash
   ng serve
   ```

6. Abra outro terminal e navegue até o diretório para iniciar o json-server:
   ```bash
   json-server --watch db/db.json
   ```
   
7. Abra o navegador com a seguinte url:
   ```bash
   http://localhost:4200/
   ```
