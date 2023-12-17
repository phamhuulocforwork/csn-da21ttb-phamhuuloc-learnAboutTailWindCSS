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
      <div class="p-5 flexCenter">
        <img src="./public/logo.svg" alt="logo" />
      </div>
      <hr class=" text-gray-600" />
      <div class="h-full flex w-56 flex-col z-30">
        <div class="flex flex-col overflow-auto bg-white">
          <div class="flex flex-col w-full">
            ${sidebarItemContent}
          </div>
        </div>
      </div>
   `
}
