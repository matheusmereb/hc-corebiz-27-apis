export async function someStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const { clients: { lead, pedido } } = ctx

  // GET pedido API VTEX OMS
  const validateOrder = await pedido.getPedido({ idOrder: ctx.body.orderId })
 
  const userid = validateOrder.clientProfileData.userProfileId
  const email = validateOrder.clientProfileData.email
  const nome = validateOrder.clientProfileData.firstName + " " + validateOrder.clientProfileData.lastName
  const telefone = validateOrder.clientProfileData.phone

  // GET dados API AWS
  const clienteInfos = await lead.getLead({ email: email })

  // PUT  dados API AWS
  if (clienteInfos) {
    const clienteDados = { "TableName": "clientes", "Item": { "clienteId": userid, "email": email, "nome": nome, "telefone": telefone } };
    const clienteAtualizado = await lead.updateLead({email: email}, {clienteDados})
    console.log(clienteAtualizado)
  }
  await next()
}
