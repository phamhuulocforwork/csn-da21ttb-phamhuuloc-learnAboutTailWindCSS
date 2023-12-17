const USER = [
  {
    _ID: 1,
    Username: 'admin',
    Password: '123',
    Email: 'admin@gmail.com',
    Permissions: 'admin',
  },
  {
    _ID: 2,
    Username: 'billpham',
    Password: '123',
    Email: 'billpham@gmail.com',
    Permissions: 'student',
  },
]

const getAllUsers = () => {
  return USER
}

const getUserByID = (id) => {
  return USER.find((user) => user._ID === id)
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
  const index = USER.findIndex((user) => user._ID === id)
  if (index !== -1) {
    const deletedUser = USER.splice(index, 1)
    return deletedUser[0]
  }
  return null
}

export { getAllUsers, getUserByID, addUser, updateUser, deleteUser }
