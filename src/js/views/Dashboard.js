import AbstractView from './AbstractView.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Dashboard')
  }

  async getHtml() {
    return `
    <div class="flex justify-center gap-2">
      <div
        class="w-full max-w-sm rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-6"
      >
        <div class="flex justify-between">
          <div>
            <h5
              class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white"
            >
              32.4k
            </h5>
            <p
              class="text-base font-normal text-gray-500 dark:text-gray-400"
            >
              Users this week
            </p>
          </div>
          <div
            class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500"
          >
            12%
            <svg
              class="ms-1 h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
          </div>
        </div>
        <div id="area-chart"></div>
        <div
          class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center justify-between pt-5">
            <!-- Button -->
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="lastDaysdropdown"
              data-dropdown-placement="bottom"
              class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              type="button"
            >
              Last 7 days
              <svg
                class="m-2.5 ms-1.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="lastDaysdropdown"
              class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Yesterday</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Today</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 7 days</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 30 days</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 90 days</a
                  >
                </li>
              </ul>
            </div>
            <a
              href="#"
              class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-blue-600 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-blue-500 dark:focus:ring-gray-700"
            >
              Users Report
              <svg
                class="ms-1.5 h-2.5 w-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div
        class="w-full max-w-sm rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-6"
      >
        <div class="mb-5 flex justify-between">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h5
                class="mb-2 inline-flex items-center font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                Clicks
                <svg
                  data-popover-target="clicks-info"
                  data-popover-placement="bottom"
                  class="ms-1 h-3 w-3 cursor-pointer text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                  />
                </svg>
                <div
                  data-popover
                  id="clicks-info"
                  role="tooltip"
                  class="invisible absolute z-10 inline-block w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  <div class="space-y-2 p-3">
                    <h3
                      class="font-semibold text-gray-900 dark:text-white"
                    >
                      Clicks growth - Incremental
                    </h3>
                    <p>
                      Report helps navigate cumulative growth of
                      community activities. Ideally, the chart should
                      have a growing trend, as stagnating chart
                      signifies a significant decrease of community
                      activity.
                    </p>
                    <h3
                      class="font-semibold text-gray-900 dark:text-white"
                    >
                      Calculation
                    </h3>
                    <p>
                      For each date bucket, the all-time volume of
                      activities is calculated. This means that
                      activities in period n contain all activities up
                      to period n, plus the activities generated by
                      your community in period.
                    </p>
                    <a
                      href="#"
                      class="flex items-center font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500 dark:hover:text-blue-600"
                      >Read more
                      <svg
                        class="ms-1.5 h-2 w-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        /></svg
                    ></a>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </h5>
              <p
                class="text-2xl font-bold leading-none text-gray-900 dark:text-white"
              >
                42,3k
              </p>
            </div>
            <div>
              <h5
                class="mb-2 inline-flex items-center font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                CPC
                <svg
                  data-popover-target="cpc-info"
                  data-popover-placement="bottom"
                  class="ms-1 h-3 w-3 cursor-pointer text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                  />
                </svg>
                <div
                  data-popover
                  id="cpc-info"
                  role="tooltip"
                  class="invisible absolute z-10 inline-block w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  <div class="space-y-2 p-3">
                    <h3
                      class="font-semibold text-gray-900 dark:text-white"
                    >
                      CPC growth - Incremental
                    </h3>
                    <p>
                      Report helps navigate cumulative growth of
                      community activities. Ideally, the chart should
                      have a growing trend, as stagnating chart
                      signifies a significant decrease of community
                      activity.
                    </p>
                    <h3
                      class="font-semibold text-gray-900 dark:text-white"
                    >
                      Calculation
                    </h3>
                    <p>
                      For each date bucket, the all-time volume of
                      activities is calculated. This means that
                      activities in period n contain all activities up
                      to period n, plus the activities generated by
                      your community in period.
                    </p>
                    <a
                      href="#"
                      class="flex items-center font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500 dark:hover:text-blue-600"
                      >Read more
                      <svg
                        class="ms-1.5 h-2 w-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        /></svg
                    ></a>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </h5>
              <p
                class="text-2xl font-bold leading-none text-gray-900 dark:text-white"
              >
                $5.40
              </p>
            </div>
          </div>
          <div>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="lastDaysdropdown"
              data-dropdown-placement="bottom"
              type="button"
              class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Last week
              <svg
                class="ms-2.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="lastDaysdropdown"
              class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Yesterday</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Today</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 7 days</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 30 days</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 90 days</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="line-chart"></div>
        <div
          class="mt-2.5 grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"
        >
          <div class="pt-5">
            <a
              href="#"
              class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="me-2 h-3.5 w-3.5 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path
                  d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z"
                />
                <path
                  d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                />
              </svg>
              View full report
            </a>
          </div>
        </div>
      </div>

      <div
        class="w-full max-w-sm rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-6"
      >
        <div
          class="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700"
        >
          <div class="flex items-center">
            <div
              class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              <svg
                class="h-6 w-6 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 19"
              >
                <path
                  d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
                />
                <path
                  d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"
                />
              </svg>
            </div>
            <div>
              <h5
                class="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white"
              >
                3.4k
              </h5>
              <p
                class="text-sm font-normal text-gray-500 dark:text-gray-400"
              >
                Leads generated per week
              </p>
            </div>
          </div>
          <div>
            <span
              class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
            >
              <svg
                class="me-1.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13V1m0 0L1 5m4-4 4 4"
                />
              </svg>
              42.5%
            </span>
          </div>
        </div>

        <div class="grid grid-cols-2">
          <dl class="flex items-center">
            <dt
              class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              Money spent:
            </dt>
            <dd
              class="text-sm font-semibold text-gray-900 dark:text-white"
            >
              $3,232
            </dd>
          </dl>
          <dl class="flex items-center justify-end">
            <dt
              class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              Conversion rate:
            </dt>
            <dd
              class="text-sm font-semibold text-gray-900 dark:text-white"
            >
              1.2%
            </dd>
          </dl>
        </div>

        <div id="column-chart"></div>
        <div
          class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center justify-between pt-5">
            <!-- Button -->
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="lastDaysdropdown"
              data-dropdown-placement="bottom"
              class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              type="button"
            >
              Last 7 days
              <svg
                class="m-2.5 ms-1.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="lastDaysdropdown"
              class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Yesterday</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Today</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 7 days</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 30 days</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 90 days</a
                  >
                </li>
              </ul>
            </div>
            <a
              href="#"
              class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-blue-600 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-blue-500 dark:focus:ring-gray-700"
            >
              Leads Report
              <svg
                class="ms-1.5 h-2.5 w-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
