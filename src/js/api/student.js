const STUDENT = [
  {
    _ID: 1,
    User_ID: 2,
    Student_ID_No: 1002,
    First_name: 'Jane',
    Last_name: 'Smith',
    LessonsLearned: [
      {
        LessonId: 1,
        Processing: 42,
      },
      {
        LessonId: 2,
        Processing: 54,
      },
    ],
  },
]

const getAllStudents = () => {
  return STUDENT
}

const getStudentByID = (id) => {
  return STUDENT.find((student) => student._ID === id)
}

const addStudent = (newStudent) => {
  STUDENT.push(newStudent)
  return newStudent
}

const updateStudent = (id, updatedStudent) => {
  const index = STUDENT.findIndex((student) => student._ID === id)
  if (index !== -1) {
    STUDENT[index] = { ...STUDENT[index], ...updatedStudent }
    return STUDENT[index]
  }
  return null
}

const deleteStudent = (id) => {
  const index = STUDENT.findIndex((student) => student._ID === id)
  if (index !== -1) {
    const deletedStudent = STUDENT.splice(index, 1)
    return deletedStudent[0]
  }
  return null
}

const getLessonsLearned = (id) => {
  const student = STUDENT.find((student) => student._ID === id)
  return student ? student.LessonsLearned : null
}

export {
  getAllStudents,
  getStudentByID,
  addStudent,
  updateStudent,
  deleteStudent,
  getLessonsLearned,
}
