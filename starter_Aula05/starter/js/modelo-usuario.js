class Usuario {
  constructor(id, nome, email, senhaHash) {
   if(typeof nome !== "string" || nome.trim.length < 2){
    throw new ErroValidacao("Nome é obrigatório", "nome");
   }
   if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[\s@]+$/.test(email)) {
    throw new ErroValidacao("Email invalido", "email");
   }
   if (typeof senhaHash !=="string" || senhaHash.trim().length === 0) {
    throw new ErroValidacao("SenhaHash é obrigatório ( a senha em texto puro, nunca, jamais, em hipótese alguma deve ser armazenada em texto puro", "senhaHash");
   }
   this.id = id
   this.nome = nome.trim()
   this.email = email.trim().toLocaleLowerCase()
   //toLocalelowercase deixa minusculo o texto

  }
}
