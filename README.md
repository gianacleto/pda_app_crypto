# Cryptoge

App de análise e comparação de cripomoedas
### Como testar ?
- Ir na pasta do projeto clonado: `$ cd pda_app_crypto`
- Ir na pasta do projeto do Cryptoge: `cd Cryptoge`
- rodar o comando `npm install` para instalar as depedências 
- Abrir um novo terminal no mesmo diretório e rodar `npx run-react start`
- Em um outro terminal abrir no mesmo diretório e rodar `npx run-react run-android`

É interessante um dispositivo real conectado para melhor experiência


### Implementações 

O ponto base da avaliação foi seguir os seguintes pré-requisitos:

- Consumir algum recurso do firebase (Authenticaton por exemplo)[https://firebase.google.com/docs/auth]
- Consumir alguma api relacionada ao projeto (com retrofit)[https://square.github.io/retrofit/][https://github.com/public-apis/public-apis]
- Implementar uma forma de monetização [https://firebase.google.com/docs/admob]
- Publicação na loja Google Play (na conta de aluno)[https://play.google.com/console]

#### Recursos do Firebash - Authentication ✅

A proposta do app exige, no mínimo, uma estrutura de cadastros de usuários e de uma estrutura de autenticação. Pensando nisso, para que fosse possível gerar a funcionalidade de login, foi utilizado o recurso do Firebase, o Authentication. Nele foram feitas todas as configurações necessárias na plataforma e também a instalação, configuração e implementação dos pacotes para a utilização no app. Com a facilidade dos social logins na atualidade, foram implementados também o login no app através de uma conta Google. Abaixo algumas evidências sobre a configuração do Authentication e tela utilizando social login:

<img src="https://user-images.githubusercontent.com/33101169/118346484-3d744180-b512-11eb-945a-094b6efbde88.png" width="200" align="center">

![image](https://user-images.githubusercontent.com/33101169/118346462-fbe39680-b511-11eb-9ef4-10694baacadd.png)
![image](https://user-images.githubusercontent.com/33101169/118346475-1b7abf00-b512-11eb-9980-e8ac2001926f.png)


#### Consumo de API's. Cryptomoedas - Coincap ✅

Com a ideia inicial de ser um aplicativo com análises de criptomoedas, foi escolhido a utilização de uma api que retornasse os dados necessários para informar o valor atual das maiores moedas. Com isso, dentre várias possibilidades, foi escolhido a utilizado da api da `Coincap`. Com isso, para o consumo dessa api, também foi utilizado a biblioteca `AXIOS` para o consumo, tratamento e retorno dessas informações. O resultado final ficou no resumo das "Moedas da Semana", onde essa view nos retorna as moedas da base da Coinbase:

<img src="https://user-images.githubusercontent.com/33101169/118346626-3e59a300-b513-11eb-811d-b53e62aa0eca.gif" width="200" align="center">

#### Monetização - Admob ❌
Como estratégia de monetização foi pensadono Admob, pela facilidade de ferramentas já no universo do Firebase. Com isso foram criados todas as configurações necessárias para a implementação da monetização no app:
![image](https://user-images.githubusercontent.com/33101169/118346706-b922be00-b513-11eb-81c6-e26096e53efd.png)
Porém existe um bug no pacote mais atual do Admob que impossibilida a utilização do mesmo em apps feitos com React Native, que foi a opção escolhida. A funcionalidade não foi implementada por completo.

#### Publicação Google Play ❌
Não foi possível implementar a funcionalidade por conta da demora da resolução do problema anterior de monetização 



