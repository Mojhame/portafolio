<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>