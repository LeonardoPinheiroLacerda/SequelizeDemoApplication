# SEQUELIZE DEMO APPLICATION

Aplicação para prática de ORM com sequelize.

O banco utilizado para essa aplicação é o mesmo banco do repositório [taskmanager](https://github.com/LeonardoPinheiroLacerda/TaskManager), vizualize o diagrama [aqui](https://dbdiagram.io/d/62362e4ebed6183873c38a3f).

###### Obs: As colunas createdAt, updatedAt e deletedAt serão incluidas em todas as tabelas (com a exceção da coluna team_people que não irá conter a coluna deteledAt).

## ORM

No diretório ``src/database/models`` irei demonstrar como fazer o mapeamento objeto relacional (ORM) do diagrama previamente introduzido, o qual contém diversas associações entre tabelas, logo é um ótimo exemplo da flexibilidade do sequelize nesse quesito.


## Services

No diretório ``src/services`` irei demonstrar como realizar algumas operações basicas com sequelize em algumas tabelas.
