import { getAllLessons } from '../../../js/api/lesson.js'
import { getLessonsLearned } from '../../../js/api/student.js'

export default async (studentId) => {
  try {
    let lessonItem = ''
    const lessonData = await getAllLessons()
    const studentLessons = getLessonsLearned(studentId)
    const studentLessonIds = studentLessons.map((lesson) => lesson.LessonId)

    lessonData.forEach((data) => {
      if (data && studentLessonIds.includes(data._ID)) {
        lessonItem += `
          <div
          class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div class="m-2 overflow-hidden rounded-md">
              <div class="absolute m-2">
                <p
                  class="rounded-md bg-white/30 px-3 py-2 text-md font-semibold tracking-wider text-black backdrop-blur-md"
                >
                  ${data.Tag}
                </p>
              </div>
              <img
                src="${data.Image.url}"
                alt=""
                class="w-full"
              />
            </div>
            <div class="p-4">
              <h5
                class="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased"
              >
                ${data.Title}
              </h5>
              <p
                class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
              >
                ${data.Short_description}
              </p>
            </div>
            <div class="flexBetween p-6 pt-0">
              <div>
                <p class="text-xl font-semibold">$ 300</p>
              </div>
              <button
                class="btn btn_indigo"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
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
