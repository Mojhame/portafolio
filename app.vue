<!-- app.vue -->
<template>
  <div>
    <Header  />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import 'primeicons/primeicons.css'

</script>