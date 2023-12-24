const USER = [
  {
    _id: 1,
    username: 'admin',
    password: '123',
    email: 'admin@gmail.com',
    permissions: 'admin',
    lessonsLearned: [],
  },
  {
    _id: 2,
    username: 'billpham',
    password: '123',
    email: 'billpham@gmail.com',
    permissions: 'student',
    lessonsLearned: [
      {
        lessonId: 1,
        processing: 42,
      },
    ],
  },
]

const getAllUsers = () => {
  return USER
}

const getUserByID = (id) => {
  return USER.find((user) => user._id === id)
}

const addUser = (newUser) => {
  USER.push(newUser)
  return newUser
}

const updateUser = (id, updatedUser) => {
  const index = USER.findIndex((user) => user._ID === id)
  if (index !== -1) {
    USER[index] = { ...USER[index], ...updatedUser }
    return USER[index]
  }
  return null
}

const deleteUser = (id) => {
  const index = USER.findIndex((user) => user._id === id)
  if (index !== -1) {
    const deletedUser = USER.splice(index, 1)
    return deletedUser[0]
  }
  return null
}

const getCurrentUserPermissions = (username) => {
  const user = USER.find((user) => user.username === username)
  return user ? user.permissions : null
}

export {
  getAllUsers,
  getUserByID,
  addUser,
  updateUser,
  deleteUser,
  getCurrentUserPermissions,
}
