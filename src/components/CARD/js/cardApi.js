import { CARD_LIST } from '../../../js/fake-api.js'

const getAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CARD_LIST)
    }, 250)
  })
}

export default {
  getAll,
}
