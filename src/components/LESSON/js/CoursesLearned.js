import { getAllLessons } from '../../../js/api/lesson.js'

export default async () => {
  try {
    let lessonItem = ''
    const lessonData = await getAllLessons()
    const student = JSON.parse(localStorage.getItem('user'))
    const studentLessonIds = student.lessonsLearned.map(
      (lesson) => lesson.lessonId,
    )

    lessonData.forEach((data, index) => {
      if (data && studentLessonIds.includes(data._id)) {
        lessonItem += `
          <div
          class="relative flex flex-col rounded-xl bg-white dark:bg-gray-700 bg-clip-border text-gray-700 dark:text-slate-200 shadow-md"
          >
            <div class="m-2 overflow-hidden rounded-md">
              <div class="absolute m-2">
                <p
                  class="rounded-md bg-white/30 px-3 uppercase py-1.5 text-sm font-semibold tracking-wider text-slate-50 backdrop-blur-md"
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
            <div class="px-4">
              <h5
                class="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased"
              >
                ${data.title}
              </h5>
              <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-primary-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: ${student.lessonsLearned[index].processing}%"> ${student.lessonsLearned[index].processing}%</div>
              </div>
            </div>
            <div class="flexBetween p-4 pt-4">
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
