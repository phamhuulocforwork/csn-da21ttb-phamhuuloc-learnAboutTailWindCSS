import AbstractView from './AbstractView.js'
import lessonItem from '../../components/LESSON/js/lessonItem.js'

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle('Category')
  }

  async getHtml() {
    const lessonItemContent = await lessonItem()
    return `
      <div
      class="cardContainer sm:gird-cols-1 grid gap-4 bg-white md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
      >
        ${lessonItemContent}
      </div>
    `
  }
}
