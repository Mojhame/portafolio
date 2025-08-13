<template>
  <nav :class="{ scrolled }">
    <div>
      <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          active-class="active"
      >
        {{ link.name }}
      </NuxtLink>

      <button @click="toggleDarkMode" class="theme-toggle">
        <i v-if="!isDark" class="pi pi-moon"></i>
        <i v-else class="pi pi-sun"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Sobre mí', path: '/about' }
]

const isDark = ref(false)
const scrolled = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  }
}

const onScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!localStorage.getItem('color-theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
