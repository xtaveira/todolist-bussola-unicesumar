Utilizando o template para uma API Rest fornecido em <https://github.com/TI-UNICESUMAR/2024-programacao-III-ADSIS5S/tree/main/11-03-2024>
Desenvolva um aplicativo para gerenciamento de tarefas.

check-list:
[x] - Entender a atividade, isso envolve ver a atividade
[x] - Instalar as dependências
[x] - Opcional - Criar um dockerfile e um docker-compose.yml pra criar o container do banco escolhido
[x] - Criar as entidades
[x] - Da um check se o servidor está funcionando
[x] - Criar a service para a entidade escolhida, e fazer o CRUD
[x] - Fazer a controller
[x] - Criar as rotas no arquivo de rotas
[] - Testar as rotas
[] - Partir para as rotas com regra de negócio

Entidades:

Usuário:
Atributos: ID, nome de usuário, peso, senha, e-mail.

Tasks:
Atributos: ID, título, descrição, data de criação, data de conclusão, tipo, categoria (opcional), status (pendente, em andamento, concluída), e usuário associado.

Categoria:
Atributos: ID, nome, cor (para identificação visual).

Tasks:

[x] - Rota para criação de uma nova tarefa.
[x] - Rota para listar todas as tarefas de um usuário.
[x] - Rota para obter detalhes de uma tarefa específica.
[x] - Rota para atualizar uma tarefa existente.
[x] - Rota para excluir uma tarefa.

Categorias:

[x] - Rota para criação de uma nova categoria.
[x] - Rota para listar todas as categorias de um usuário.
[x] - Rota para obter detalhes de uma categoria específica.
[x] - Rota para atualizar uma categoria existente.
[x] - Rota para excluir uma categoria.

Funcionalidades Adicionais utilizando Métodos de Array:

[x] - Rota para filtrar tarefas por categoria.
[x] - Rota para listar tarefas concluídas.
[x] - Rota para listar tarefas pendentes.
[] - Rota para listar tarefas que vencem em um determinado período.
[] - Rota para contar o número total de tarefas de um usuário.
[] - Rota para encontrar a tarefa mais recente de um usuário.

Funcionalidades com Métodos de Array:

[] - Rota para encontrar a tarefa mais antiga de um usuário.
[] - conclusão das tarefas.
[] - Rota para encontrar a tarefa com a descrição mais longa.

Observação:
Estas rotas podem ser implementadas utilizando os métodos .map, .filter, .resume, .some e outros métodos de manipulação de array para alcançar as funcionalidades desejadas, agregando complexidade média a difícil ao projeto.
