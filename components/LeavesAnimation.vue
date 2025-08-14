<template>
  <div id="leaves">
    <i v-for="n in 15" :key="n" :style="getLeafStyle(n)"></i>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Función para generar estilos dinámicos para cada hoja
const getLeafStyle = (index) => {
  const randomX = Math.random() * 100 // Posición horizontal inicial aleatoria (0-100%)
  const randomDelay = Math.random() * 5 // Retardo aleatorio (0-5s)
  const randomEndX = -200 - (Math.random() * 800) // Posición final aleatoria hacia la izquierda

  return {
    '--start-x': `${randomX}%`,
    '--end-x': `${randomEndX}px`,
    '--delay': `${randomDelay}s`,
    'left': `${randomX}%`,
    'animation-delay': `${randomDelay}s`
  }
}
</script>

<style scoped>
/* Leaf animations */
#leaves {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

#leaves i {
  display: inline-block;
  position: absolute;
  width: 30px;
  height: 23px;
  background: linear-gradient(to bottom right, #309900, #005600);
  transform: skew(20deg) rotate(180deg);
  border-radius: 5% 40% 70%;
  box-shadow: inset 0px 0px 1px #222;
  border: 1px solid #333;
  z-index: 1;
  animation: falling 5s infinite;
  opacity: 0.7;
  top: -50px;
}

/* Variaciones de tamaño y forma para diferentes hojas */
#leaves i:nth-of-type(2n+1) {
  width: 16px;
  height: 11px;
  opacity: 0.5;
}

#leaves i:nth-of-type(3n+2) {
  width: 23px;
  height: 17px;
  opacity: 0.3;
}

/* Estilos para los pseudoelementos */
#leaves i:before {
  position: absolute;
  content: '';
  top: 17px;
  right: 1px;
  height: 5px;
  width: 7px;
  transform: rotate(49deg);
  border-radius: 0% 15% 15% 0%;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
  border-left: 0px solid #222;
  border-right: 1px solid #222;
  background: linear-gradient(to right, rgba(0,100,0,1), #005600);
  z-index: 1;
}

#leaves i:after {
  content: '';
  height: 17px;
  width: 2px;
  background: linear-gradient(to right, rgba(0,0,0,.15), rgba(0,0,0,0));
  display: block;
  transform: rotate(125deg);
  position: absolute;
  left: 12px;
  top: 0px;
  border-radius: 50%;
}

/* Ajustes para hojas más pequeñas */
#leaves i:nth-of-type(2n+1):before {
  width: 4px;
  height: 3px;
  top: 7px;
  right: 0px;
}

#leaves i:nth-of-type(2n+1):after {
  width: 2px;
  height: 6px;
  left: 5px;
  top: 1px;
}

#leaves i:nth-of-type(3n+2):before {
  height: 4px;
  width: 4px;
  top: 12px;
  right: 1px;
}

#leaves i:nth-of-type(3n+2):after {
  height: 10px;
  width: 2px;
  top: 1px;
  left: 8px;
}

/* Variaciones de color */
#leaves i:nth-of-type(2n+2) {
  background: linear-gradient(to bottom right, #5e9900, #2b5600);
}

#leaves i:nth-of-type(4n+1) {
  background: linear-gradient(to bottom right, #990, #564500);
}

/* Animación principal */
@keyframes falling {
  0% {
    transform:
        translate3d(0, 0, 0)
        rotate(0deg);
  }
  100% {
    transform:
        translate3d(var(--end-x), 700px, 0)
        rotate(90deg);
    opacity: 0;
  }
}

/* Variaciones de animación */
#leaves i:nth-of-type(3n) {
  animation-name: falling2;
}

#leaves i:nth-of-type(5n) {
  animation-name: falling3;
}

@keyframes falling2 {
  0% {
    transform:
        translate3d(0, 0, 0)
        rotate(-20deg);
  }
  100% {
    transform:
        translate3d(calc(var(--end-x) * 1.2), 640px, 0)
        rotate(-70deg);
    opacity: 0;
  }
}

@keyframes falling3 {
  0% {
    transform:
        translate3d(0, 0, 0)
        rotate(90deg);
  }
  100% {
    transform:
        translate3d(calc(var(--end-x) * 0.8), 680px, 0)
        rotate(0deg);
    opacity: 0;
  }
}
</style>