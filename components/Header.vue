<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4">
      <nav class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-gray-900">TuNombre</NuxtLink>
        <div class="flex space-x-6">
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