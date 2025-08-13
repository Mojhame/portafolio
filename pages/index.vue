<template>
  <div>
    <section class="home-hero">
      <div class="hero-content">
        <h1>
          Hola, soy <span>Fabian</span>
        </h1>
        <p>
          Desarrollador web especializado en crear experiencias digitales
          <strong>impactantes</strong> y funcionales que generan valor.
        </p>
        <div class="hero-buttons">
          <NuxtLink to="/proyectos" class="btn-primary">
            Ver mis proyectos
          </NuxtLink>
          <NuxtLink to="/contacto" class="btn-secondary">
            Contactar
          </NuxtLink>
        </div>
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </div>
    </section>

    <section class="projects">
      <div class="projects-header">
        <h2>🚀 Proyectos Destacados</h2>
        <p>Una selección de trabajos que reflejan mi estilo y experiencia</p>
      </div>

      <div class="projects-grid">
        <div class="project-card">
          <img src="/" alt="Proyecto 1">
          <h3>Nombre del Proyecto</h3>
          <p>Descripción breve del proyecto para dar contexto rápido.</p>
        </div>
        <div class="project-card">
          <img src="/" alt="Proyecto 2">
          <h3>Nombre del Proyecto</h3>
          <p>Descripción breve del proyecto para dar contexto rápido.</p>
        </div>
      </div>
    </section>

  </div>
</template>