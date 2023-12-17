const LESSONS = [
  {
    _ID: 1,
    Title: 'Introduction to JavaScript',
    Tag: 'JavaScript',
    Image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://picsum.photos/350/200',
      type: 'image/png',
    },
    Short_description: 'Et est incididunt ad in dolore in.',
    Description: 'This lesson covers basic JavaScript concepts.',
    Category_ID: 1,
  },
  {
    _ID: 2,
    Title: 'Arrays in JavaScript',
    Tag: 'JavaScript',
    Image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://picsum.photos/350/200',
      type: 'image/png',
    },
    Short_description: 'Et est incididunt ad in dolore in.',
    Description: 'This lesson explains arrays in JavaScript.',
    Category_ID: 2,
  },
  {
    _ID: 3,
    Title: 'Objects in HTML',
    Tag: 'HTML',
    Image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://picsum.photos/350/200',
      type: 'image/png',
    },
    Short_description: 'This lesson learn about HTML.',
    Description: 'This lesson learn about HTML.',
    Category_ID: 3,
  },
  {
    _ID: 4,
    Title: 'Objects in CSS',
    Tag: 'CSS',
    Image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://picsum.photos/350/200',
      type: 'image/png',
    },
    Short_description: 'This lesson learn about CSS.',
    Description: 'This lesson learn about CSS.',
    Category_ID: 3,
  },
]

const getAllLessons = () => {
  return LESSONS
}

const getLessonByID = (id) => {
  return LESSONS.find((lesson) => lesson._ID === id)
}

const addLesson = (newLesson) => {
  LESSONS.push(newLesson)
  return newLesson
}

const updateLesson = (id, updatedLesson) => {
  const index = LESSONS.findIndex((lesson) => lesson._ID === id)
  if (index !== -1) {
    LESSONS[index] = { ...LESSONS[index], ...updatedLesson }
    return LESSONS[index]
  }
  return null
}

const deleteLesson = (id) => {
  const index = LESSONS.findIndex((lesson) => lesson._ID === id)
  if (index !== -1) {
    const deletedLesson = LESSONS.splice(index, 1)
    return deletedLesson[0]
  }
  return null
}

export { getAllLessons, getLessonByID, addLesson, updateLesson, deleteLesson }
