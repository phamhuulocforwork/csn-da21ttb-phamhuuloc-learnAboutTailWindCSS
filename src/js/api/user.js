const USER = [
  {
    _id: 1,
    username: 'admin',
    name: 'admin',
    password: '123',
    email: 'admin@gmail.com',
    permissions: 'admin',
    lessonsLearned: [],
  },
  {
    _id: 2,
    username: 'billpham',
    name: 'Pham Huu Loc',
    password: '123',
    email: 'billpham@gmail.com',
    permissions: 'student',
    lessonsLearned: [
      {
        lessonId: 1,
        processing: 33,
      },
      {
        lessonId: 2,
        processing: 100,
      },
      {
        lessonId: 3,
        processing: 74,
      },
      {
        lessonId: 4,
        processing: 50,
      },
      {
        lessonId: 5,
        processing: 44,
      },
      {
        lessonId: 6,
        processing: 47,
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
