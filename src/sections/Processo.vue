<template>
  <section
    id="processo"
    class="processo-section"
  >
    <HeaderTitle
      :title="$t('processo.title')"
      :title2="$t('processo.title2')"
      :description="$t('processo.description')"
    />
    <div class="processo-container container-limited">
      <div class="processo-timeline">
        <div
          v-for="(etapa, index) in etapas"
          :key="etapa.numero"
          class="timeline-item"
        >
          <div class="timeline-content">
            <div class="step-number">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="step-info">
              <h3>{{ etapa.title }}</h3>
              <p>{{ etapa.description }}</p>
            </div>
          </div>
          <div
            v-if="etapas.length - 1 !== index"
            class="timeline-connector"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const etapas = [

  {
    title: t('processo.etapas.0.title'),
    description: t('processo.etapas.0.description'),
    numero: 'Etapa 01'
  },
  {
    title: t('processo.etapas.1.title'),
    description: t('processo.etapas.1.description'),
    numero: 'Etapa 02'
  },
  {
    title: t('processo.etapas.2.title'),
    description: t('processo.etapas.2.description'),
    numero: 'Etapa 03'
  }
];

</script>

<style scoped>
.processo-section {
    padding: 100px 0;
    background: var(--cor-fundo);
}

.processo-container {
    margin-top: 80px;
}

.processo-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline-item {
    position: relative;
    margin-bottom: 60px;
}

.timeline-content {
    display: flex;
    align-items: center;
    gap: 30px;
    background: rgba(132, 146, 141, 0.05);
    border: 1px solid var(--cor-cinza-claro-escuro);
    border-radius: 15px;
    padding: 40px;
    transition: all 0.3s ease;
    position: relative;
}

.step-number {
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--cor-cinza-claro-escuro);
    position: relative;
    background: var(--cor-data-noticia);
    background: linear-gradient(to right, #505050, #84928D);
}

.step-number span {
    font-size: 28px;
    font-weight: 700;
    color: var(--cor-branca);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.step-info {
    flex: 1;
}

.step-info h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--cor-branca);
    margin-bottom: 15px;
    line-height: 1.3;
}

.step-info p {
    font-size: 16px;
    color: var(--cor-cinza);
    line-height: 1.6;
    margin: 0;
}

.timeline-connector {
    position: absolute;
    left: 50%;
    top: 100%;
    width: 2px;
    height: 60px;
    background-color: var(--cor-branca);
    z-index: 1;
}

.timeline-connector::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: var(--cor-branca);
    border-radius: 50%;
}
</style>
