import AbstractView from './AbstractView.js'
import lessonLearned from '../../components/LESSON/js/lessonLearned.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('MyCourses')
  }

  async getHtml() {
    const lessonItemContent = await lessonLearned(2)
    return `
      <div
      class="cardContainer sm:gird-cols-1 grid gap-4 bg-white md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
      >
        ${lessonItemContent}
      </div>
    `
  }
}
