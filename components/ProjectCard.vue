<template>
  <div class="project-card group">
    <div class="overflow-hidden rounded-t-lg">
      <NuxtImg
          :src="project.image"
          :alt="project.title"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-6 border border-t-0 border-gray-200 rounded-b-lg">
      <h3 class="text-xl font-bold mb-2 text-gray-900">{{ project.title }}</h3>
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
      <NuxtLink
          v-if="project.link"
          :to="project.link"
          class="mt-4 inline-block text-blue-600 hover:underline"
      >
        Ver proyecto →
      </NuxtLink>
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

<style>
.project-card {
  transition: all 0.3s ease;
}
.project-card:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transform: translateY(-4px);
}
</style>