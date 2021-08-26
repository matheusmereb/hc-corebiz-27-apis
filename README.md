# O que isto faz? 
Identifica o cadastro de um cliente na base externa via API e se o cliente existir, realiza a alteração no parâmetro tipo para `prospect`.

- Automação identificando pedidos com status `order-created`
- Consulta de pedido através do `orderId` para captura do e-mail
- Validação de cliente através de api externa utilizando `ExternalClient`
- Alteração de parâmetro tipo para `prospect`

# Links úteis
[Using and creating clients](https://developers.vtex.com/vtex-developer-docs/docs/how-to-use-and-create-clients-on-vtex-io)

[Events Example](https://github.com/vtex-apps/events-example/)

[VTEX IO API Client for Node](https://github.com/vtex/node-vtex-api)

[Receiving Order Notifications](https://developers.vtex.com/vtex-developer-docs/docs/how-to-receive-order-notifications-on-vtex-io)

[Orders Feed Example](https://github.com/vtex-apps/orders-feed-example)

[Client network socket disconnected error](https://github.com/vtex-apps/store-discussion/issues/377)

