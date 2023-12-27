import AbstractView from './AbstractView.js'
import { getLessonByID } from '../api/lesson.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
  }

  async getHtml() {
    const student = JSON.parse(localStorage.getItem('user'))
    const id = Number(this.params.id)
    const lesson = getLessonByID(id)
    this.setTitle('Certificate of ' + lesson.title)

    return `
      <div class="bg-white/30 backdrop-blur-sm dark:bg-gray-900/10">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a   href="/" class="flex items-center mb-16 text-2xl font-semibold text-gray-900 dark:text-white">
              <svg id="L.title, lesson.yer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100" height="61.8" viewBox="0 0 50 30.9" >
                <path class="fill-[#181818] dark:fill-slate-50" d="m13.01,5.54l2.29,3.62-10.77,6.29,10.77,6.17-2.37,3.73L0,17.32v-3.72L13.01,5.54Z"/>
                <path class="fill-[#181818] dark:fill-slate-50" d="m37.02,5.54l12.98,8.03v3.75l-12.93,8.03-2.37-3.57,10.79-6.34-10.79-6.14,2.32-3.77Z"/>
                <polygon class="fill-[#fcb017]" points="32.44 6.54 28.67 0 22.13 3.77 24.96 8.68 17.56 25.99 20.39 30.9 25.29 28.07 27.54 9.37 32.44 6.54"/>
              </svg>
              <p class="text-5xl ml-6">KingManCode</p>
            </a>
            <h1 class="pb-8 text-6xl font-bold capitalize text-gray-900 dark:text-white">${lesson.title}</h1>
            <h2 class="pb-8 text-3xl font-bold capitalize text-gray-900 dark:text-white">Certificate</h2>
            <p class="pb-8 text-xl text-gray-900 font-semibold dark:text-slate-200">awarded to</p>
            <p class="pb-8 text-4xl font-extrabold capitalize text-rose-500 dark:text-rose-500">${student.name}</p>
            <p class="pb-8 text-xl text-gray-900 font-semibold dark:text-slate-200">for completing <strong class="text-indigo-500">${lesson.title}</strong> course.</p>
            <a href="/" class="text-gray-900 dark:text-white underline cursor-pointer">Back to home</a>
        </div>
      </div>
    `
  }
}
