<h2 style="color:#0ca84b"> Desafio CooperSystem Heygon Lago </h2>
Esse projeto é destinado ao desafio proposto para a Coopersystem com o objetivo de disputar uma vaga para desenvolvedor backend com nodejs
<br/>
<br/>
<h2 style="color:#0ca84b"> Setup </h2>
Algumas configurações devem ser executadas antes de rodar o projeto,
Essas configurações poderiam ser centralizadas em um .env para facilitar, mas para ganhar tempo eu achei melhor
informar os arquivos para alterar, tendo em vista que são poucos os passos.
<br/>
<br/>
<h2 style="color:#0ca84b"> Configurar ip do backend </h2>
No arquivos docker-compose.yml temos as configurações de como o docker deve criar os containers que servirão o projeto e suas respectivas portas de acesso, essas portas estão identificadas com a flag <strong>-ports</strong>, que podem ser alteradas de acordo com a nescessidade.
<br/>
<br/>
<h3 style="color:#0ca84b"> Postgres </h3>
A porta padrão para o Postgres é a <strong>5432</strong>, caso de algum conflito com alguma instância do postgres que já está em execução, essa porta pode ser alterada para por exemplo <strong>5433:5432</strong> onde 5433(porta que será acessada):5432(porta padrão dentro do container, que não pode ser alterado).
<br/>
<br/>
<h3 style="color:#0ca84b"> Nodejs </h3>
Seguindo a mesma ideia do Postgres, o nodejs também precisa reservar uma porta para acesso, atualmente estamos chamando a porta <strong>3002</strong> que pode ser alterado para por exemplo <strong>9001:3000</strong>.
<br/>
<br/>
<h3 style="color:#0ca84b"> React </h3>
Seguindo a mesma ideia dos anteriores, a porta do react pode ser alterado para por exemplo <strong>9001:80</strong>.
<br/>
<br/>
<h3 style="color:#0ca84b"> Rodando o projeto </h3>
Com as configurações das portas prontas, para rodar o projeto execute o comando:
<code>docker-compose -up -d</code>

Esse comando vai iniciar os containers do Postgres e criar o banco de dados, o Backend Nodejs e o Frontend React.

