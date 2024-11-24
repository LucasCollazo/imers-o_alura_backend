# Projeto Back-End da Imersão Alura

Este pojeto foi uma realização do evento, Imersão Back-End da Alura. Trata-se de uma api que salva dados de descrição, texto alt, url do arquivo de imagem, em banco de dados do MongoDB, tem intengração com o Google Gemini para gerar uma descrição automatizada da imagem.

## Tecnologias

* NodeJs
* Express
* Multer
* MongDB
* API Google Gemini
* DotEnv
* Cors

## Mais sobre

Esta api gera uma JSON para manipulação Fron-End dos dados contidos no banco de dados. No evento foi usado em uma aplicação web semelhante ao instagram.

Foi meu primeiro contado com um pouco de back-end.

## Variaveis de Ambiente (arquivo .env)

Para caso de clone deste código deixo aqui o que é necessário para uso dele!

Crie o arquivo .env na raiz do projeto e nele coloque as variaves de ambiente.

STRING_CONNECT = seu_link_de_acesso_do_mongoDB
GEMINI_API_KEY = sua chave da api do google gemini
