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
    <div id="signInBtn" class="md:flexCenter hidden gap-4">
      <a href="/sign-in" data-link>
        <button type="button" class="btn btn_primary">Sign in</button>
      </a>
      <a href="/sign-up" data-link>
        <button type="button" class="btn btn_primary">Sign up</button>
      </a>
    </div>
    <div id="signOutBtn" class="hidden gap-4">
      <a href="/" data-link>
        <button type="button" onclick="signOut()" class="btn btn_primary">Sign out</button>
      </a>
    </div>
  `
}
