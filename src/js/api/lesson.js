const LESSONS = [
  {
    _id: 1,
    category_id: 1,
    title: 'Introduction to JavaScript',
    tag: 'JavaScript',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://picsum.photos/350/200',
      type: 'image/png',
    },
    short_description: 'Et est incididunt ad in dolore in.',
  },
]

const getAllLessons = () => {
  return LESSONS
}

const getLessonByID = (id) => {
  return LESSONS.find((lesson) => lesson._id === id)
}

const addLesson = (newLesson) => {
  LESSONS.push(newLesson)
  return newLesson
}

const updateLesson = (id, updatedLesson) => {
  const index = LESSONS.findIndex((lesson) => lesson._id === id)
  if (index !== -1) {
    LESSONS[index] = { ...LESSONS[index], ...updatedLesson }
    return LESSONS[index]
  }
  return null
}

const deleteLesson = (id) => {
  const index = LESSONS.findIndex((lesson) => lesson._id === id)
  if (index !== -1) {
    const deletedLesson = LESSONS.splice(index, 1)
    return deletedLesson[0]
  }
  return null
}

export { getAllLessons, getLessonByID, addLesson, updateLesson, deleteLesson }
