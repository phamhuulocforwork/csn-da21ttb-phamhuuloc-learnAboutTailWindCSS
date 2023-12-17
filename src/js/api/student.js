const STUDENT = [
  {
    _ID: 1,
    User_ID: 1,
    Student_ID_No: 1001,
    First_name: 'John',
    Last_name: 'Doe',
  },
  {
    _ID: 2,
    User_ID: 2,
    Student_ID_No: 1002,
    First_name: 'Jane',
    Last_name: 'Smith',
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

export {
  getAllStudents,
  getStudentByID,
  addStudent,
  updateStudent,
  deleteStudent,
}
