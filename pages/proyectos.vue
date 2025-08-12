<template>
  <main class="container mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-12">Mis Proyectos</h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
          v-for="project in allProjects"
          :key="project.id"
          :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const allProjects = [
  // Aquí tu lista completa de proyectos
]
</script>