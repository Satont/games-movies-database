<script lang="ts" setup>
import { ROUTER_PATHS } from '@src/libs/router/router-paths'
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'
import { SOCIAL_LINKS } from './constants/social-links'

const title = useTitle()

onMounted(() => title.value = 'le-xot.ru')
</script>

<template>
  <div class="container">
    <h4 class="title">
      Ссылочки Лешота
    </h4>
    <div class="container__items">
      <img
        class="logo"
        src="/images/lexot.jpg"
        alt="Пажилой енот на своей даче под Рублевкой"
      >
      <div class="buttons">
        <a
          v-for="link in SOCIAL_LINKS"
          :key="link.name"
          :style="{ backgroundColor: link.color }"
          class="button"
          :href="link.url"
          target="_blank"
        >
          <component
            :is="link.icon"
            class="button__logo"
            size="32px"
          />
          <span class="button_text">{{ link.name }}</span>
        </a>
      </div>
      <router-link :to="ROUTER_PATHS.dbQueue" class="button button--large">
        Кладовка Лешота
      </router-link>
    </div>
  </div>
</template>

<style scoped>
button {
  display: block;
  border: none;
  color: inherit;
  cursor: pointer;
}

.container {
  font-family: "Comfortaa", sans-serif;
  background-color: rgb(24 24 28);
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  color: #ffffff;
}

.container__items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 25rem;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
}

.logo {
  border-radius: 2rem;
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 2px solid #ffffff3e;
  /* fix pixelation */
  overflow-clip-margin: unset;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.button {
  min-height: 52px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  fill: #ffffff;
  padding: 0.5rem 1rem;
  background: #209852;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  text-align: center;
  border-radius: 0.5rem;
  border: 2px solid #ffffff3e;
}

.button:hover {
  filter: brightness(85%);
}

.button--large {
  width: 100%;
}

.button_text {
  font-size: 1rem;
  text-align: center;
}

@media (max-width: 600px) {
  .container {
    padding: 2rem;
  }

  .container__items {
    gap: 0.5rem;
    max-width: 100%;
  }

  .title {
    font-size: 1.5rem;
  }

  .logo {
    border-radius: 1rem;
  }

  .buttons {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .button {
    min-height: 52px;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    fill: #ffffff;
    padding: 0.5rem 1rem;
    background: #209852;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.025em;
    text-align: center;
    border-radius: 0.5rem;
    border: 2px solid #ffffff3e;
  }

  .button_text {
    font-size: 0.875rem;
  }
}
</style>
