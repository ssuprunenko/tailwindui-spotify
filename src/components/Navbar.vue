<template>
  <div class="relative z-10 flex flex-shrink-0 h-16 bg-gray-900 shadow">
    <!-- button class="text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden">
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
    </button -->

    <div class="flex justify-between flex-1">
      <div class="flex items-center flex-1">
        <!-- Back -->
        <a
          href=""
          class="mr-4"
          :class="[canGoBack ? 'text-white' : 'text-gray-400 cursor-not-allowed']"
          title="Go back"
          @click.prevent="goBack"
        >
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
        <a
          href=""
          class="mr-4"
          :class="[canGoForward ? 'text-white' : 'text-gray-400 cursor-not-allowed']"
          title="Go forward"
          @click.prevent="goForward"
        >
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
        <div class="relative text-gray-500">
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

    <div class="flex items-center ml-4 md:ml-6">
      <div v-click-outside="closeUserMenu" class="relative ml-3">
        <div>
          <button
            class="flex items-center max-w-xs p-1 text-sm text-white bg-black rounded-full hover:bg-gray-800 md:pr-2 focus:outline-none focus:bg-gray-800"
            @click="toggleUserMenu"
          >
            <img
              class="w-6 h-6 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Tom Cook"
            >
            <p class="hidden ml-2 text-xs font-medium leading-5 text-white md:block">
              Tom Cook
            </p>
            <svg v-if="open" viewBox="0 0 20 20" fill="currentColor" class="hidden w-5 h-5 ml-2 md:block">
              <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            <svg v-else viewBox="0 0 20 20" fill="currentColor" class="hidden w-5 h-5 ml-2 md:block">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div v-show="open" class="absolute right-0 min-w-full mt-2 origin-top-right rounded-md shadow-lg">
          <div class="bg-gray-800 rounded-md shadow-xs">
            <div>
              <router-link
                to="/settings"
                class="block px-5 py-1 text-sm leading-loose text-gray-300 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:text-gray-200 focus:bg-gray-700"
              >
                Settings
              </router-link>
              <a
                href="https://github.com/ssuprunenko/tailwindui-spotify"
                class="block px-5 py-1 text-sm leading-loose text-gray-300 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:text-gray-200 focus:bg-gray-700"
                target="_blank"
              >
                Source Code
              </a>
            </div>
            <div class="border-t border-gray-700" />
            <div>
              <a
                href="#"
                class="block px-5 py-1 text-sm leading-loose text-gray-300 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:text-gray-200 focus:bg-gray-700"
              >Log out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      canGoBack: false,
      canGoForward: false
    }
  },
  created () {
    document.addEventListener('keydown', this.onEscape)
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', this.onEscape)
    })

    this.$router.afterEach((_to, _from) => {
      this.canGoBack = this.$routerHistory.hasPrevious()
      this.canGoForward = this.$routerHistory.hasForward()
    })
  },
  methods: {
    toggleUserMenu () {
      this.open = !this.open
    },
    closeUserMenu () {
      this.open = false
    },
    onEscape (e) {
      if (this.open && e.keyCode === 27) {
        this.closeUserMenu()
      }
    },
    goBack () {
      if (this.canGoBack) {
        this.$router.back()
      }
    },
    goForward () {
      if (this.canGoForward) {
        this.$router.forward()
      }
    }
  }
}
</script>
