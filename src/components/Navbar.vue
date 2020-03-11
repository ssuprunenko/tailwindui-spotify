<template>
  <div class="relative z-10 flex flex-shrink-0 h-16 bg-gray-900 shadow">
    <button class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden">
      <svg
        class="w-6 h-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </button>

    <div class="flex justify-between flex-1 px-4">
      <div class="flex items-center flex-1">
        <!-- Back -->
        <a href="#" class="mr-4 text-white" @click.prevent="$router.back()">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>

        <!-- Forward -->
        <a href="#" class="mr-4 text-gray-600" @click.prevent="$router.forward()">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>

        <!-- Search -->
        <div class="flex ml-4">
          <div class="relative w-full text-gray-500">
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              id="search_field"
              class="block w-full h-full py-2 pl-12 pr-3 text-sm text-gray-900 placeholder-gray-500 rounded-full focus:outline-none"
              placeholder="Search"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center ml-4 md:ml-6">
      <div class="relative ml-3">
        <div>
          <button class="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:shadow-outline">
            <img
              class="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            >
          </button>
        </div>
        <div class="absolute right-0 hidden w-48 mt-2 origin-top-right rounded-md shadow-lg">
          <div class="py-1 bg-white rounded-md shadow-xs">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
