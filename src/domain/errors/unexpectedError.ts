export class UnexpectedError extends Error {
  constructor() {
    super('Deu ruim!')
    this.name = 'UnexpectedError'
  }
}
