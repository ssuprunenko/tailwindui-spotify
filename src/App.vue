<template>
  <div id="app" class="font-sans">
    <div class="flex h-screen overflow-hidden bg-gray-900">
      <Sidebar />

      <div class="flex flex-col flex-1 w-0 overflow-hidden">
        <Navbar />

        <main class="relative z-0 flex-1 py-6 overflow-y-auto focus:outline-none" tabindex="0">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style src="./assets/styles/index.css"></style>
