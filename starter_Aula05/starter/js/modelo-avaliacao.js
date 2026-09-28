class Avaliacao {
  constructor(id, nota, comentario, lugar, usuario) {
    if (!Number.isInteger(nota) || nota <1 || nota >5) {
      throw new ErroValidacao("a nota deve ser de 0 a 5.");
    }
    if (comentario !=="string" || comentario.trim().lenght < 3) {
      throw new ErroValidacao("É obrigatório adicionar algum comentário com pelo menos 3 caracteres", "comentario");
    }
    if (!(lugar instanceof Lugar)) {
      throw new ErroValidacao("A avaliação deve estar associada a um lugar valido", "lugar");
    }
    if (!(usuario instanceof Usuario)) {
      throw new ErroValidacao("Você deve utilizar seu usuario existente", "usuario");   
    }

    this.id = id
    this.nota = nota
    this.comentario = comentario.trim()
    this.lugar = lugar
    this.usuario = usuario
  }
}
