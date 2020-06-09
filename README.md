<p align="center">
  <img src="https://github.com/bprofiro/gofinances/blob/master/frontend/src/assets/logo.svg" />
</p>

<p align="center">
  <img src=" https://github.com/bprofiro/assets/blob/master/In%C3%ADcio.png" />
</p>

## Sobre o Projeto

  Esse projeto foi desenvolvido durante o Bootcamp GoStack, organizada pela Rocketseat.

  O GoFinances é um aplicativo de controle financeiro que permite ao usuário a importação de registros financeiros em um arquivo .csv e retorna as entradas, saídas e total acumulado que o usuário possui depois de cada transação.
  
  Ele possui duas páginas, o Dashboard, para listar as transações, as entradas saídas e total e a página de importação.

  A aplicação guarda no banco de dados as transações já feitas e as retorna de forma visual e agradável ao usuário final, além de não permitir a realização de uma transação de saída cujo o valor ultrapassa o valor em caixa.


## Tecnologias:
  Muitas ferramentas foram utilizadas para o seu desenvolvimento. Entre elas estão:

- Node
- React
  - React Icons
  - React Dropzone
  - React Dom
  - React Router Dom
- Postgres
- Docker
- TypeORM
- Date-fns
- Styled Components
- Express
- CORS
- Axios
- Multer
- ESlint
- Prettier

## Ambiente de Desenvolvimento

  Para rodar essa aplicação em sua máquina, você precisará de um ambiente NodeJs básico instalado.

**Clonando o repositório:**

```
$ git clone https://github.com/bprofiro/gofinances/.git
```

### Instalando:

**Back-End**

- Digite `npm install` na pasta `backend` para instalar todas as dependências;
- Digite `npm run dev:server` para rodar o servidor;

**Front-End** 

- Digite `npm install` na pasta `frontend` para instalar todas as dependências;
- Digite `npm start` para rodar o projeto;
