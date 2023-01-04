# cashforce

Processo seletivo CashForce

_________________________________________________________________________
 
 #  Instruções para Iniciação da API

1 - Crie uma pasta de sua preferencia abra-a com o terminal

comando para clonar o repositorio:
git clone https://github.com/mauvleal/cashforce
__________________________________________________________________________
2 - Entre no backend do repositorio

   cd CashForce/backend
Instale as dependencias e rode a aplicação / observar o mysql

comando para instalação dos pacotes e inicialização (neste caso estamos utilizando o docker para criar um container mysql)
   npm install
  
   docker-compose up -D (caso seja necessario ha um arquivo .env.example - altere para .env e substitua a senha para alguma de sua preferencia)
  
   npm start / npm run dev
  
  A tabela criada podera ser verificada no mysql WorkBench ou APP de sua preferencia
__________________________________________________________________________

3 - Entre no frontend com o backend rodando em segundo plano (preferencialmente outro Terminal)

  cd CashForce/frontend
Instale as dependencias e rode a aplicação

comando para instalação dos pacotes e inicialização
  npm i && npm start
 __________________________________________________________________________
 
4 - Caso a Api frontend não tenha inicializado automaticamente:
localhost:3000

5 - Abrirá a pagina genérica - clicando  no meu lateral " Notas Fiscais" abrirá as NFs

____________________________________________________________________________________________________

Atualizações nas quais trabalharei em breve

Complementar requisições para puxar o sacado e cedente - assim como implementar a saída do botão para abrir um pop-up com informações do cedente

Faze a aplicação e Vue.js

cionar uma página de LOGIN/REGISTER

