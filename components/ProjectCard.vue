<template>
  <NuxtLink
      :to="project.link"
      class="project-card group"
  >
    <div class="h-48 overflow-hidden">
      <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      >
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-gray-400 mb-4">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>