export async function someStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const { clients: { lead } } = ctx
  const clienteDados = { "TableName": "clientes", "Item":   { "clienteId": "e15c3f92-edf9-4f9a-a20b-b93b2617e5a5", "email": email, "nome": name, "telefone": phone } };
  const data = await lead.createLead(clienteDados)
  console.log(data);
  
  await next()
}
