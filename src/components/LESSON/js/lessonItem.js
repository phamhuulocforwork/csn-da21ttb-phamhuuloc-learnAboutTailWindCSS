import { getAllLessons } from '../../../js/api/lesson.js'

export default async () => {
  try {
    let lessonItem = ''
    const lessonData = await getAllLessons()
    lessonData.forEach((data) => {
      if (data) {
        lessonItem += `
          <div
          class="relative flex flex-col rounded-xl bg-white dark:bg-gray-700 bg-clip-border text-gray-700 dark:text-slate-200 shadow-md"
          >
            <div class="m-2 overflow-hidden rounded-md">
              <div class="absolute m-2">
                <p
                  class="rounded-md bg-white/30 px-3 py-2 text-md font-semibold tracking-wider text-black backdrop-blur-md"
                >
                  ${data.tag}
                </p>
              </div>
              <img
                src="${data.image.url}"
                alt=""
                class="w-full"
              />
            </div>
            <div class="p-4">
              <h5
                class="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased"
              >
                ${data.title}
              </h5>
              <p
                class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
              >
                ${data.short_description}
              </p>
            </div>
            <div class="flexBetween p-6 pt-0">
              <a href="/courses/${data._id}" data-link>
                <button
                  class="btn btn_primary"
                  type="button"
                  data-ripple-light="true"
                >
                  Read More
                </button>
              </a>
            </div>
          </div>
          `
      }
    })
    return lessonItem
  } catch (error) {
    console.log('Fail to get sidebar: ', error)
  }
}
