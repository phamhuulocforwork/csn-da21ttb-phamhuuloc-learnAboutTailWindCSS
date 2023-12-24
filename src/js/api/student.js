const STUDENT = [
  {
    _id: 1,
    user_id: 2,
    student_id_No: 1002,
    first_name: 'Jane',
    last_name: 'Smith',
    lessonsLearned: [
      {
        lessonId: 1,
        processing: 42,
      },
      {
        lessonId: 2,
        processing: 54,
      },
    ],
  },
]

const getAllStudents = () => {
  return STUDENT
}

const getStudentByID = (id) => {
  return STUDENT.find((student) => student._id === id)
}

const addStudent = (newStudent) => {
  STUDENT.push(newStudent)
  return newStudent
}

const updateStudent = (id, updatedStudent) => {
  const index = STUDENT.findIndex((student) => student._id === id)
  if (index !== -1) {
    STUDENT[index] = { ...STUDENT[index], ...updatedStudent }
    return STUDENT[index]
  }
  return null
}

const deleteStudent = (id) => {
  const index = STUDENT.findIndex((student) => student._id === id)
  if (index !== -1) {
    const deletedStudent = STUDENT.splice(index, 1)
    return deletedStudent[0]
  }
  return null
}

const getLessonsLearned = (id) => {
  const student = STUDENT.find((student) => student._id === id)
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
