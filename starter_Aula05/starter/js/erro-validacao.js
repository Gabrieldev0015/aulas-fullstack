
class ErroValidacao extends Error {
  constructor(mensagem, campo) {
    // TODO (Aula 05):
    // 1. Chame super(mensagem) — isso é OBRIGATÓRIO em toda classe que
    //    estende outra (aqui, Error) e deve ser a primeira linha do
    //    construtor, antes de usar `this`.
    // 2. Defina this.name = "ErroValidacao" (por padrão, herdaria o
    //    nome genérico "Error").
    // 3. Guarde o parâmetro `campo` em this.campo.
    super(mensagem); //chama o constructor da classe pai
    this.name = "ErroValidacao" // this representa o objeto atual
    this.campo = campo
    // throw lança erro
    //instanceof - verifico de qual classe o objeto veio
  }
}
