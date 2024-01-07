const LESSONS = [
  {
    _id: 1,
    title: 'Introduction to JavaScript',
    tag: 'javascript',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/CBWnBi-awSA/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 2,
    title: 'Harvard CS50',
    tag: 'Harvard',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/8mAITcNt710/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 3,
    title: 'Learn Python',
    tag: 'Python',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/rfscVS0vtbw/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 4,
    title: 'Data Science Journey',
    tag: 'Data Science',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/ua-CiDNNj30/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 5,
    title: 'AutoCAD for Beginners',
    tag: 'AutoCAD',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/VtLXKU1PpRU/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 6,
    title: 'Mastering CSS',
    tag: 'CSS',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/OXGznpKZ_sA/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 7,
    title: 'Introduction to Linux',
    tag: 'Linux',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/sWbUDq4S6Y8/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 8,
    title: 'Machine Learning',
    tag: 'Machine Learning',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/i_LwzRVP7bg/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 9,
    title: 'HTML Full Course',
    tag: 'HTML',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/pQN-pnXPaVg/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 10,
    title: 'Java Programming',
    tag: 'java',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/A74TOX803D0/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 11,
    title: 'Learn JavaScript',
    tag: 'javascript',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/PkZNo7MFNFg/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 12,
    title: 'Algorithms & Data Structures',
    tag: 'Algorithms',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/8hly31xKli0/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 13,
    title: 'C++ Tutorial',
    tag: 'C++',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/vLnPwxZdW4Y/0.jpg',
      type: 'image/png',
    },
  },
  {
    _id: 14,
    title: 'C# Tutorial',
    tag: 'C#',
    image: {
      _id: 0,
      width: 350,
      height: 200,
      url: 'https://img.youtube.com/vi/GhQdlIFylQ8/0.jpg',
      type: 'image/png',
    },
  },
]

const getAllLessons = () => {
  return LESSONS
}

const getLessonByID = (id) => {
  return LESSONS.find((lesson) => lesson._id === id)
}

const getLessonsByTag = (tag) => {
  return LESSONS.filter(
    (lesson) => lesson.tag.toLowerCase() === tag.toLowerCase(),
  )
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

export {
  getAllLessons,
  getLessonByID,
  getLessonsByTag,
  addLesson,
  updateLesson,
  deleteLesson,
}
