export async function someStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const { clients: { lead, pedido } } = ctx

  // GET pedido API VTEX OMS
  const validateOrder = await pedido.getPedido({ idOrder: ctx.body.orderId })
  const userid = validateOrder.clientProfileData.userProfileId

  // GET email API VTEX MASTERDATA V1
  //const emailOrder = await pedido.getEmail({ userId: userid})
  const emailSplit = validateOrder.clientProfileData.email
  const emailOrder = emailSplit.split("-");
  console.log(emailOrder);

  // Salvar pametros
  const email = emailOrder[0];
  const nome = validateOrder.clientProfileData.firstName + " " + validateOrder.clientProfileData.lastName;
  const telefone = validateOrder.clientProfileData.phone;
  console.log(validateOrder);

  // GET dados API AWS
  const clienteInfos = await lead.getLead({ email: email })
  console.log(clienteInfos);

  // PUT  dados API AWS
  if (clienteInfos.lenght && validateOrder.lenght) {
    const clienteDados = { "TableName": "clientes", "Item": { "clienteId": userid, "email": email, "nome": nome, "telefone": telefone } };
    const clienteAtualizado = await lead.updateLead(email, clienteDados)
    console.log(clienteAtualizado);
  }

  await next()
}
