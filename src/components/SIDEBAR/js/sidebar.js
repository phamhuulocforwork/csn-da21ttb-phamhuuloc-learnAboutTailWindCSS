import sidebarItem from './sidebarItem.js'

export default async () => {
  const sidebarItemContent = await sidebarItem()
  return `
    <div 
      class="x-btn block md:hidden dark:text-slate-50 absolute p-2 right-0 cursor-pointer"
      onclick="sidebarToggle()"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <div class="p-6 flexCenter">
      <a href="/" class="flexCenter gap-4">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="50" height="30.9" viewBox="0 0 50 30.9" >
        <path class="fill-[#181818] dark:fill-slate-50" d="m13.01,5.54l2.29,3.62-10.77,6.29,10.77,6.17-2.37,3.73L0,17.32v-3.72L13.01,5.54Z"/>
        <path class="fill-[#181818] dark:fill-slate-50" d="m37.02,5.54l12.98,8.03v3.75l-12.93,8.03-2.37-3.57,10.79-6.34-10.79-6.14,2.32-3.77Z"/>
        <polygon class="fill-[#fcb017]" points="32.44 6.54 28.67 0 22.13 3.77 24.96 8.68 17.56 25.99 20.39 30.9 25.29 28.07 27.54 9.37 32.44 6.54"/>
      </svg>
        <span class="font-semibold text-lg dark:text-slate-50">KM CODE</span>
      </a>
    </div>
    <hr class="text-gray-600 my-0"/>
    <div class="h-full flex w-56 flex-col z-30">
      <div class="flex flex-col overflow-auto bg-white">
        <div class="flex flex-col w-full">
          ${sidebarItemContent}
        </div>
      </div>

      <hr>

      <div class="flexCenter gap-4 my-2">
        <a href="/sign-in" class="signInBtn" data-link>
          <button type="button" class="btn btn_primary">Sign in</button>
        </a>
        <a href="/" class="signOutBtn hidden" data-link>
          <button type="button" onclick="signOut()" class="btn btn_primary">Sign out</button>
        </a>
        <div
          class="relative flex  cursor-pointer select-none items-center justify-center rounded-md transition-all duration-200 ease-linear"
        >
          <input
            id="themeToggle"
            type="checkbox"
            class="absolute block cursor-pointer appearance-none"
          />
          <label
            for="themeToggle"
            class="sun cursor-pointer dark:text-slate-50"
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
            class="moon cursor-pointer dark:text-slate-50"
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
      </div>
    </div>
        
  `
}
