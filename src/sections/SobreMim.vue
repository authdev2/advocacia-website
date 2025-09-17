<template>
  <section id="quem-sou" class="sobre-mim-container">
    <HeaderTitle :title="$t('sobreMim.title')" :title2="$t('sobreMim.title2')" :description="$t('sobreMim.description')" />
    <div class="container">
      <div class="left-container">
        <img src="../assets/sobre-mim/sobreMimImg.webp" alt="Imagem de João Alves" />
      </div>

      <div class="right-container">
        <h3>
          {{ $t('sobreMim.compromissoTitle') }} <span class="text-green">{{ $t('sobreMim.excelencia') }}</span>
        </h3>
        <p>
          {{ $t('sobreMim.textoPrincipal') }}
        </p>

        <div class="box-compromissos">
          <div class="box" v-for="compromisso in compromissos" :key="compromisso.title">
            <component :is="compromisso.icon"></component>
            <h4>{{ compromisso.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderTitle from '../components/HeaderTitle.vue'
import Trust from '../components/Icons/Trust.vue'
import Honest from '../components/Icons/Honest.vue'
import Idea from '../components/Icons/Idea.vue'
import Appointment from '../components/Icons/Appointment.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const compromissos = [
  {
    icon: Trust,
    title: t('sobreMim.compromissos.transparencia'),
  },
  {
    icon: Honest,
    title: t('sobreMim.compromissos.honestidade'),
  },

  {
    icon: Idea,
    title: t('sobreMim.compromissos.inovacao'),
  },

  {
    icon: Appointment,
    title: t('sobreMim.compromissos.dedicacao'),
  },
]

</script>

<style scoped>
.sobre-mim-container {
  padding: 100px 0;
  max-width: 1400px;
  margin: 0 auto;
}

.sobre-mim-container .container {
  display: flex;
  justify-content: space-between;
  gap: 80px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 100px;

}

.right-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.right-container h3 {
  font-size: 35px;
}

.right-container p {
  font-size: clamp(16px, 2.5vw, 20px);
  color: var(--cor-cinza);
  margin-top: 20px;
  text-align: justify;
  max-width: 100%;
  line-height: 1.6;
  word-wrap: break-word;
  margin-bottom: 50px;
}

.box-compromissos {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}



.box-compromissos .box {
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 10px;
  width: 200px;
  width: clamp(100px, 20vw, 200px);
  height: 100px;
  border: 1px solid var(--cor-cinza-claro-escuro);
  flex-wrap: wrap;
}

@keyframes teste {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-2800px, 0);
  }
}

.left-container img {
  width: 100%;
  height: 500px;

}


@media (max-width: 1000px) {
  .sobre-mim-container .container {
    flex-direction: column;
    gap: 40px;
  }
}
</style>