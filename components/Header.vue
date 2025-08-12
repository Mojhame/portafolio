<!-- En tu Header.vue -->
<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <nav class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <NuxtLink to="/" class="text-xl font-bold text-gray-900">Fabian</NuxtLink>
        <div class="flex gap-4 sm:gap-6">
          <NuxtLink
              v-for="link in links"
              :key="link.path"
              :to="link.path"
              class="text-gray-600 hover:text-primary transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
const links = [
  { path: '/', label: 'Inicio' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/about', label: 'Sobre mí' }
]
</script>