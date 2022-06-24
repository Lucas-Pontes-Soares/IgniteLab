# Primeira Aula

* Criar arquivo
npm create vite@latest: É uma ferramenta de construção que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos web modernos, possui servidor. 

* npm install: instalar todas as dependencias
* npm i tailwindcss postcss autoprefixer -D 
* npm tailwindcss init -p

* tailwind, permite fazer toda a estilização em classes, chamando de interface declarativa

* baixar extensões GraphQL, PostCSS, Tailwind CSS

* CMS = Content Management System
* CMS -> 
É um software executado no navegador permite que você crie, gerencie e modifique um website e seu conteúdo sem a necessidade de conhecimento de programação.

    Assim sendo, ele possui uma interface gráfica para ajudar no gerenciamento de todos os aspectos do seu site. Você pode criar e editar conteúdos, adicionar imagens e vídeos, e montar o layout do site. WordPress, Magento, e Drupal são alguns dos CMS mais populares do mercado.

* Traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (temas)
* Headless CMS (GRaphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL)
* React que consome essa API do CMS
* Assim a nossa aplicação vai fazer chamadas à API, buscando informações e exibindo para o usuario

# GraphQL
* Query / mutation
querry = buscar dados
mutation = criar, alterar, deletar dados

* Overfating = back-end retorna mais coisas que o front precisa
* Underfating = o back não retorna todas as infromações que precisamos no front

* GraphQL é o front que passa para o back quais informações ele precisa, o back se adapta conforme os dados que o front precisa

* npm i @apollo/client graphql