export default async () => {
  return `
    <div
    class="barButton block cursor-pointer md:hidden"
    onclick="sidebarToggle()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
    <form class="flex items-center">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <input
          type="text"
          id="simple-search"
          class="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
          placeholder="Search branch name..."
          required
        />
      </div>
      <button
        type="submit"
        class="border-primary-700 bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 ms-2 rounded-lg border p-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
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
    
    <div>
      <div class="md:flexCenter gap-4">
      <div
        class="relative flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-md bg-primary-700 transition-all duration-200 ease-linear hover:bg-primary-800"
      >
        <input
          id="themeToggle"
          type="checkbox"
          class="absolute block cursor-pointer appearance-none"
        />
        <label
          for="themeToggle"
          class="sun cursor-pointer text-slate-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </label>
        <label
          for="themeToggle"
          class="moon cursor-pointer text-slate-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </label>
      </div>
        <a href="/sign-in" class="signInBtn md:block hidden" data-link>
          <button type="button" class="btn btn_primary">Sign in</button>
        </a>
        <a href="/sign-up" class="signInBtn md:block hidden" data-link>
          <button type="button" class="btn btn_primary">Sign up</button>
        </a>
        <a href="/" class="signOutBtn hidden" data-link>
          <button type="button" onclick="signOut()" class="btn btn_primary">Sign out</button>
        </a>
      </div>
    </div>
  `
}
