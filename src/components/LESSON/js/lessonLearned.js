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
        console.log(student.lessonsLearned[index].processing)
        lessonItem += `
          <div
          class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
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
                class="block font-sans mb-2 text-base font-light leading-relaxed text-inherit antialiased"
              >
                ${data.short_description}
              </p>
              <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-primary-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: ${student.lessonsLearned[index].processing}%"> ${student.lessonsLearned[index].processing}%</div>
              </div>
            </div>
            <div class="flexBetween p-6 pt-0">
              <button
                class="btn btn_primary"
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
