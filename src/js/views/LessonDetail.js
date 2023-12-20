import AbstractView from './AbstractView.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Lesson by id')
  }

  async getHtml() {
    console.log(this.params.id)
    return `
      <h1>Lesson by id</h1>
    `
  }
}
