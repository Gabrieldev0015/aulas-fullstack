class Lugar {
  constructor(id, nome, categoria, cidade, descricao) {
   if(typeof nome !== "string" || nome.trim().length <2){
  throw new ErroValidacao("nome do lugar deve ter pelo menos 2 caracteres", "nome");
   }
   if (typeof categoria !== "string" || categoria.trim().length === 0) {
    throw new ErroValidacao(" categoria é obrigatória", "categoria");
   }
   if (typeof cidade !=="string" || cidade.trim().length === 0) {
    throw new ErroValidacao("É obrigatório inserir a cidade","cidade");
   }
   if (typeof descricao !=="string" || descricao.trim().length === 0) {
    throw new ErroValidacao("Descrição é obrigatória","descrição");
   }
   this.id = id 
   this.nome = nome.trim()
   this.categoria = categoria.trim()
   this.cidade = cidade.trim()
   this.descricao = descricao.trim()

  }
}
