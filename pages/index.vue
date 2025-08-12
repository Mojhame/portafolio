<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 text-center">
      <div class="container mx-auto px-6">
        <h1 class="text-5xl font-bold mb-4">Hola, soy <span class="text-blue-600">Fabian</span></h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Desarrollador web especializado en crear experiencias digitales impactantes.
        </p>
        <NuxtLink to="/proyectos" class="btn-primary inline-block">
          Ver mis proyectos
        </NuxtLink>
      </div>
    </section>

    <!-- Proyectos Destacados -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="section-title">Proyectos Destacados</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
              v-for="project in featuredProjects"
              :key="project.id"
              :project="project"
          />
        </div>
      </div>
    </section>

    <!-- Habilidades -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="section-title">Mis Habilidades</h2>
        <div class="flex flex-wrap gap-4 justify-center">
          <div
              v-for="skill in skills"
              :key="skill"
              class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma de comercio electrónico con carrito de compras y pasarela de pago.",
    tags: ["Vue", "Nuxt", "Node.js"],
    image: "/images/project1.jpg"
  },
  {
    id: 2,
    title: "Blog Personal",
    description: "Sistema de gestión de contenido para artículos técnicos.",
    tags: ["Nuxt", "Tailwind", "Markdown"],
    image: "/images/project2.jpg"
  }
]

const skills = [
  'JavaScript', 'Vue.js', 'Nuxt.js',
  'Tailwind CSS', 'Node.js', 'Git',
  'Responsive Design', 'UI/UX'
]
</script>

<style scoped>
/* Elimina los @apply y usa clases directas */
.skill-badge {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgb(243 244 246);
  color: rgb(31 41 55);
  border-radius: 9999px;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.skill-badge:hover {
  background-color: rgb(219 234 254);
  color: rgb(30 64 175);
}
</style>
