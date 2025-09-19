<template>
  <div class="healder-title container-limited">
    <h2>{{ title }} <span class="text-green">{{ title2 }}</span></h2>
    <div class="description">
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  title2: String
});
</script>

<style scoped>

.healder-title {
    padding: 100px 0;
}

.healder-title h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
}

.healder-title .text-green {
    color: var(--cor-primaria);
    font-weight: 600;
    letter-spacing: 0.05rem;
}

.healder-title .description {
    font-size: 20px;
    color: var(--cor-cinza);
    background: var(--cor-gradiante);
    padding: 10px;
    transform: skew(-20deg);
}

.healder-title .description span {
    margin-left: 20px;
}
</style>