<template>
  <main class="container mx-auto px-6 py-12">
    <section class="text-center mb-16">
      <h1 class="text-5xl font-bold mb-4">Hola, soy Fabian</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Desarrollador web apasionado por crear soluciones digitales impactantes.
      </p>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-8">Proyectos Destacados</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "E-commerce",
    description: "Tienda online con carrito de compras",
    tags: ["Vue", "Node.js"],
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "Blog Personal",
    description: "Plataforma de artículos técnicos",
    tags: ["Nuxt", "Tailwind"],
    image: "/project2.jpg"
  }
]
</script>