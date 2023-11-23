import { SIDEBAR_LIST } from './fake-api.js'

const getAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(SIDEBAR_LIST)
    }, 250)
  })
}

export default {
  getAll,
}
