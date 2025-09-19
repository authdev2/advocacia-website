<template>
  <section>
    <HeaderTitle
      :title="$t('percurso.title')"
      :title2="$t('percurso.title2')"
      :description="$t('percurso.description')"
    />

    <div class="container-percurso container-limited">
      <div class="box-percuso">
        <div
          v-for="percurso in percursos"
          :key="percurso.title"
          class="box"
        >
          <div class="conector">
            <span />
          </div>
          <div class="data">
            <span>{{ percurso.title }}</span>
          </div>
          <div class="description">
            <p>{{ percurso.description }}</p>
          </div>
        </div>
      </div>

      <div class="linha-percurso" />

      <div class="box-percuso">
        <div
          v-for="percursoRight in percursosRight"
          :key="percursoRight.title"
          class="box"
        >
          <div class="data">
            <span>{{ percursoRight.title }}</span>
          </div>
          <div class="description">
            <p>{{ percursoRight.description }}</p>
          </div>
          <div class="conector-right">
            <span />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const percursos = [
  {
    title: '2005',
    description: t('percurso.formacao')
  },
  {
    title: '2005',
    description: t('percurso.formacao')
  },
  {
    title: '2005',
    description: t('percurso.formacao')
  },
  {
    title: '2005',
    description: t('percurso.formacao')
  }

];

const percursosRight = [
  {
    title: '2005',
    description: t('percurso.formacao')
  },

  {
    title: '2005',
    description: t('percurso.formacao')
  },

  {
    title: '2005',
    description: t('percurso.formacao')
  }
];
</script>

<style scoped>


.container-percurso {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(20px, 5vw, 70px);
  max-width: 1400px;
  margin: 0 auto;
  padding-left: clamp(10px, 2vw, 2rem);
  padding-right: clamp(10px, 2vw, 2rem);
  margin-top: 100px;
}

.box-percuso {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 5vw, 70px);
}

.linha-percurso {
  width: 3px;
  height: clamp(600px, 80vw, 1000px);
  background-color: var(--cor-branca);
}

.box-percuso .box {
  background-color: var(--cor-fundo);
  padding: clamp(20px, 4vw, 50px);
  border-radius: 20px;
  position: relative;
  border: 1px solid var(--cor-cinza-claro-escuro);
  margin-left: clamp(20px, 4vw, 60px);
  margin-right: clamp(20px, 4vw, 60px);
  transform: skew(-10deg);
}

.box-percuso .box .conector {
  width: clamp(40px, 6vw, 80px);
  height: 4px;
  background-color: var(--cor-branca);
  position: absolute;
  top: 50%;
  left: clamp(200px, 30vw, 440px);
  display: flex;
  align-items: center;
}

.box-percuso .box .conector span {
  width: clamp(6px, 1vw, 10px);
  height: clamp(6px, 1vw, 10px);
  background-color: var(--cor-branca);
  border-radius: 50%;
  position: absolute;
  left: 0;
}

.box-percuso .box .conector-right {
  width: clamp(40px, 6vw, 80px);
  height: 4px;
  background-color: var(--cor-branca);
  position: absolute;
  top: 50%;
  right: clamp(200px, 30vw, 440px);
  display: flex;
  align-items: center;
}

.box-percuso .box .conector-right span {
  width: clamp(6px, 1vw, 10px);
  height: clamp(6px, 1vw, 10px);
  border-radius: 50%;
  position: absolute;
  background-color: var(--cor-branca);
  right: 0;
}

.data span {
  font-size: clamp(18px, 2.5vw, 25px);
  font-weight: 800;
}

@media (max-width: 1000px) {
  .container-percurso {
    flex-direction: column;
    gap: 40px;
  }

  .linha-percurso {
    width: 100%;
    height: 3px;
  }

  .box-percuso {
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .box-percuso .box {
    margin: 0;
    transform: none;
    min-width: 250px;
    flex: 1;
  }

  .box-percuso .box .conector,
  .box-percuso .box .conector-right {
    display: none;
  }
}
</style>
