import AbstractView from './AbstractView.js'
import sidebar from '../../components/SIDEBAR/js/sidebar.js'

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle('Home')
  }

  async getHtml() {
    const sidebarContent = await sidebar()
    return `
      <div class="container bg-white">
        <div class="flex">
          <!-- sidebar -->
          <div
            class="fixed z-30 hidden h-full flex-col border bg-white md:static md:flex md:h-auto"
          >
            ${sidebarContent}
          </div>
          <div class="inset-y-0 w-full border-b bg-white">
            <!-- navbar -->
            <header
              class="flexBetween z-30 gap-4 bg-white p-4 shadow-sm"
            >
              <!-- mobile sidebar -->
              <div class="barButton block cursor-pointer md:hidden">
                <img src="./assets/icons/bars.svg" class="w-6" />
              </div>
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                  <input
                    type="text"
                    id="simple-search"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Search branch name..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="ms-2 rounded-lg border border-indigo-700 bg-indigo-700 p-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </form>
              <!-- button -->
              <div class="md:flexCenter hidden gap-4">
                <button type="button" class="btn btn_indigo">Sign in</button>
                <button type="button" class="btn btn_indigo">Sign up</button>
              </div>
            </header>
            <!-- main content -->
            <main id="main" class="p-6"></main>
          </div>
        </div>
      </div>
    `
  }
}
