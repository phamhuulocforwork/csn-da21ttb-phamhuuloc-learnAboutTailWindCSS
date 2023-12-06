import cardApi from './cardApi.js'

const cardLoader = () => {
  try {
    const main = document.querySelector('.main')
    if (main) {
      main.innerHTML = `
        <div
        class="cardContainer bg-white flex-1 grid sm:gird-cols-2 lg:gird-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6"
        >
      `
      getCardItem()
    }
  } catch {
    console.log('Fail to load card: ', error)
  }
}

const getCardItem = async () => {
  try {
    const cardData = await cardApi.getAll()
    cardData.forEach((data) => {
      const cardContainer = document.querySelector('.cardContainer')
      if (cardContainer) {
        cardContainer.innerHTML += `
          <div
          class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div class="m-2 rounded-md overflow-hidden">
              <img
                src="${data.image[0].url}"
                alt=""
                class="w-full"
              />
            </div>
            <div class="p-4">
              <h5
                class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
              >
                Card title
              </h5>
              <p
                class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
              >
                ${data.short_description}
              </p>
            </div>
            <div class="p-6 pt-0">
              <button
                class="btn btn_indigo"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </div>
          </div>
        `
      }
    })
  } catch (error) {
    console.log('Fail to get card: ', error)
  }
}

export default { cardLoader, getCardItem }
