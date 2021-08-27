# Integraçao API AWS
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## O que isto faz?

Identifica o cadastro de um cliente na base externa via API e se o cliente existir, realiza a alteração no parâmetro tipo para `prospect`.

1. Evento é disparado quando o pedido informado através do `vtex.orders-broadcast` se encontra com status `order-created`
2. Consulta o pedido através do `orderId` para captura do e-mail utilizando API VTEX
3. Valida o email cliente através de api externa utilizando `ExternalClient`
4. Se existir o cadastro é comunicado a alteração do parâmetro tipo para `prospect`

## Dependências
- AWS API Externa
  
## Estrutura de Componentes VTEX IO 
- [API manipulador de evento (node)](#)
- [Estrutura de dados (GraphQL)](#aplicarURL)
- [Admin (React)](https://github.com/willamys/wgfa7-admin-vtex-io)
- [Doc API AWS - Leads Hiring Coders](/docs/Doc%20API%20-%20Leads%20Hiring%20Coders.postman_collection.json)

## Links úteis
- [Using and creating clients](https://developers.vtex.com/vtex-developer-docs/docs/how-to-use-and-create-clients-on-vtex-io)
- [Events Example](https://github.com/vtex-apps/events-example/)
- [VTEX IO API Client for Node](https://github.com/vtex/node-vtex-api)
- [Receiving Order Notifications](https://developers.vtex.com/vtex-developer-docs/docs/how-to-receive-order-notifications-on-vtex-io)
- [Orders Feed Example](https://github.com/vtex-apps/orders-feed-example)
- [Client network socket disconnected error](https://github.com/vtex-apps/store-discussion/issues/377)
- [Configurações Manifest.json](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-manifest#settingsschema)
- [Exemplo de settings shcema "Parametrizar o app" (Configurações Manifest.json)](https://github.com/vtex-apps/carrier-hubs-examples/blob/main/carrier-notifier-example/manifest.json)

# Colaboradores ✨
<table>
  <tr>
    <td align="center"><a href="https://github.com/brunotda"><img src="https://avatars0.githubusercontent.com/u/15007670?v=4" width="100px;" alt=""/><br /><sub><b>Bruno Araujo</b></sub></a></td>
    <td align="center"><a href="https://github.com/brendoll"><img src="https://avatars0.githubusercontent.com/u/5557733?v=4" width="100px;" alt=""/><br /><sub><b>Hyago Brendoll</b></sub></a></td>
    <td align="center"><a href="https://github.com/marim77"><img src="https://avatars0.githubusercontent.com/u/87247438?v=4" width="100px;" alt=""/><br /><sub><b>Mari Marques</b></sub></a></td>
    <td align="center"><a href="https://github.com/matheusmereb"><img src="https://avatars0.githubusercontent.com/u/79163839?v=4" width="100px;" alt=""/><br /><sub><b>Matheus Mereb</b></sub></a></td>
    <td align="center"><a href="https://github.com/melissareboucas"><img src="https://avatars0.githubusercontent.com/u/86539553?v=4" width="100px;" alt=""/><br /><sub><b>Melissa Viana</b></sub></a></td>
     <td align="center"><a href="https://github.com/sergiofdf"><img src="https://avatars0.githubusercontent.com/u/84455399?v=4" width="100px;" alt=""/><br /><sub><b>Sérgio Filho</b></sub></a></td>
    <td align="center"><a href="https://github.com/kyothiago"><img src="https://avatars0.githubusercontent.com/u/20112201?v=4" width="100px;" alt=""/><br /><sub><b>Thiago Almeida</b></sub></a></td>
    <td align="center"><a href="https://github.com/vanzacher"><img src="https://avatars0.githubusercontent.com/u/60407938?v=4" width="100px;" alt=""/><br /><sub><b>Vanderlei Zacher</b></sub></a></td>
    <td align="center"><a href="https://github.com/VanessaOrmonde"><img src="https://avatars0.githubusercontent.com/u/74844964?v=4" width="100px;" alt=""/><br /><sub><b>Vanessa Ormonde</b></sub></a></td>
    <td align="center"><a href="https://github.com/willamys"><img src="https://avatars0.githubusercontent.com/u/1679148?v=4" width="100px;" alt=""/><br /><sub><b>Willamys Araújo</b></sub></a></td>
  </tr>
</table>