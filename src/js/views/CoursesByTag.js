import AbstractView from './AbstractView.js'
import lessonTag from '../../components/LESSON/js/lessonTag.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle(this.params.tag)
  }

  async getHtml() {
    const tagName = String(this.params.tag)
    const lessonItemContent = await lessonTag(tagName)
    return `
      <div class="flex items-center justify-center py-1 md:py-2 flex-wrap">
        <a href="/courses" data-link class="text-gray-900 border border-slate-300  hover:border-primary-600 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">All categories</a>
        <a href="/tag/javascript" data-link class="text-gray-900 border border-slate-300 hover:border-primary-600 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">JavaScript</a>
        <a href="/tag/harvard" data-link class="text-gray-900 border border-slate-300 hover:border-primary-600 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Harvard</a>
        <a href="/tag/python" data-link class="text-gray-900 border border-slate-300 hover:border-primary-600 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Python</a>
        <a href="/tag/data-science" data-link class="text-gray-900 border border-slate-300 hover:border-primary-600 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Data Science</a>
        <a href="/tag/autocad" data-link class="text-gray-900 border border-slate-300 hover:border-primary-600 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">AutoCAD</a>
        <a href="/tag/css" data-link class="text-gray-900 border border-slate-300 hover:border-primary-600 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">CSS</a>
        <a href="/tag/linux" data-link class="text-gray-900 border border-slate-300 hover:border-primary-600 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">LINUX</a>
      </div>
      <div
      class="cardContainer sm:gird-cols-1 grid gap-4 bg-white dark:bg-gray-800 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
      >
        ${lessonItemContent}
      </div>
    `
  }
}
