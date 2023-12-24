import sidebarItem from './sidebarItem.js'

export default async () => {
  const sidebarItemContent = await sidebarItem()
  return `
      <div 
        class="x-btn block md:hidden absolute p-2 right-0 cursor-pointer"
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
      </div>
      
   `
}
