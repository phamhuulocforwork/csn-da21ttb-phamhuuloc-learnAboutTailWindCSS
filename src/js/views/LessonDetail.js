import AbstractView from './AbstractView.js'
import { getLessonByID } from '../api/lesson.js'
import { getLessonDetailByID } from '../api/lessonDetail.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Lesson by id')
  }

  async getHtml() {
    const id = Number(this.params.id)
    const lesson = getLessonByID(id)
    const lessonsDetail = getLessonDetailByID(id)
    // console.log(lessonsDetail)

    let content = ''
    let contentTable = ''
    lessonsDetail.article.forEach((data) => {
      content += `
        <h2 id="${data.title}">${data.title}</h2>
        ${data.content}
      `
      contentTable += `
        <li class="flex border-gray-400 pl-2 text-base hover:border-l-2">
          <a href="#${data.title}" class="text-slate-500">${data.title}</a>
        </li>
      `
    })

    let comment = ''
    lessonsDetail.comments.forEach((data) => {
      comment += `
        <article class="rounded-lg bg-white p-6 text-base dark:bg-gray-900">
          <div class="mb-2 flex items-center justify-between">
            <div class="flex items-center">
              <p
                class="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-slate-50"
              >
                <img
                  class="mr-2 h-6 w-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="${data.userName}"
                />
                ${data.userName}
              </p>
              <p class="text-sm text-gray-600 dark:text-slate-500">
                <time>${data.date}</time>
              </p>
            </div>
            <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              class="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-slate-500 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                class="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path
                  d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
                />
              </svg>
              <span class="sr-only">Comment settings</span>
            </button>
          </div>
          <p class="text-gray-500 dark:text-slate-500">
            ${data.comment}
          </p>
          <div class="mt-4 flex items-center space-x-4">
            <button
              type="button"
              class="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-slate-500"
            >
              <svg
                class="mr-1.5 h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Reply
            </button>
          </div>
        </article>
      `
    })

    let lessonDetailContent = ''
    if (lessonsDetail) {
      lessonDetailContent += `
        <div
          class="section no-scrollbar grid grid-cols-1 gap-4 overflow-auto lg:grid-cols-2"
        >
          <div class="overflow-hidden rounded-xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/${lessonsDetail.youtube_id}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="relative">
            <h1
              class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-slate-50 lg:mb-6 lg:text-4xl"
            >
              ${lesson.title}
            </h1>
            <p class="lead text-lg dark:text-slate-500">
              ${lessonsDetail.lead}
            </p>
            <button class="btn btn_rose section absolute right-0 mx-6">
              Get now &#8594;
            </button>
          </div>
        </div>
        <hr />
        <div id="lessonContent" class="section grid grid-cols-4">
          <div class="col-span-4 overflow-auto border-r-2 dark:border-gray-700 lg:col-span-3">
            <article
              class="prose md:prose-2xl prose-h2:text-2xl prose-h2:dark:text-slate-50 prose-p:text-lg prose-p:dark:text-slate-500 prose-a:text-lg prose-a:font-semibold prose-a:text-rose-600 prose-a:no-underline prose-strong:text-lg prose-strong:text-primary-700 prose-li:text-lg prose-li:dark:text-slate-500
              prose-pre:dark:bg-gray-700"
            >
              ${content}
            </article>
          </div>
          
          <div class="ml-2 hidden p-2 lg:col-span-1 lg:block">
            <div>
              <span class="text-md font-semibold uppercase dark:text-slate-50">on this lesson</span>
              <ul class="space-y-3">
                ${contentTable}
              </ul>
            </div>
          </div>
        </div>
        
        <hr />
        
        ${comment}
        
        <div class="section">
          <form>
            <div
              class="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-900 dark:bg-gray-900"
            >
              <div class="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea
                  id="comment"
                  rows="2"
                  class="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-slate-500 dark:placeholder-gray-400"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <div
                class="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600"
              >
                <button
                  type="submit"
                  class="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-bold text-slate-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 dark:text-slate-50"
                >
                  Post comment
                </button>
                <div class="flex space-x-1 ps-0 rtl:space-x-reverse sm:ps-2">
                  <button
                    type="button"
                    class="inline-flex cursor-pointer items-center justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-500 dark:hover:bg-gray-600 dark:hover:text-slate-500"
                  >
                    <svg
                      class="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 12 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                      />
                    </svg>
                    <span class="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex cursor-pointer items-center justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-500 dark:hover:bg-gray-600 dark:hover:text-slate-500"
                  >
                    <svg
                      class="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path
                        d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                      />
                    </svg>
                    <span class="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex cursor-pointer items-center justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-500 dark:hover:bg-gray-600 dark:hover:text-slate-500"
                  >
                    <svg
                      class="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                      />
                    </svg>
                    <span class="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p class="ms-auto text-xs text-gray-500 dark:text-slate-500">
            Remember, contributions to this topic should follow our
            <a href="#" class="text-primary-600 hover:underline dark:text-primary-500"
              >Community Guidelines</a
            >.
          </p>
        </div>
      `
    }
    return lessonDetailContent
  }
}
