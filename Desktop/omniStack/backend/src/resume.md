 
### Rota/recurso 

Request: guarda todos os dados que vem atraves da requisição do usuário
Response: retorna uma resposta ao usuário

*****
Métodos HTTP:
GET: Buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação
DELETE: Deletar uma informação

**** 
## Tipos de parâmetros:

Query: parametros nomeados enviados na rota após o "?" (filtros, paginação)
        http://localhost:3333/users?page=2&nome=Priscila 
Route Params: parametros utilizados para identificar recursos
    /users/:id
        /users/1
Request Body: Corpo da requisição, utlizado para criar ou alterar recursos


## Nodemon: reinicialização automatica do servidor
npm install nodemon -D
scripts:
    "start": "nodemon index.js"


## Bancos de Dados:
* SQL: MySQL, SQLite, PostgreSQL, Oracle, ...
* NoSQL: MongoDB, CouchDB, ...  

Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
    KNEX.js
    npm install knex

### Entidades 
    ONG
    Caso (incident)

## Funcionalidades das entidades
    Login de ONG
    Logout
    Cadastro de ONG
    Cadastro de novo caso
    Deletar casos
    Listar casos específicos da ONG 
    Listar todos os casos
    Entrar em contato com a ONG 


## migrations do knex.js
    histórico do banco de dados 