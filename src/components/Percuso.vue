<template>
  <div class="title-percurso">
    <h2>O meu <span class="text-green">percurso</span></h2>
    <div class="description">
      <span>Perceba um pouco do meu percuso e onde eu estudei!</span>
    </div>
  </div>
  <div class="container-percurso">
    <div class="box-percuso">

      <div class="box" v-for="percurso in percursos" :key="percurso.title">
        <div class="conector">
          <span></span>
        </div>
        <div class="data">
          <span>{{ percurso.title }}</span>
        </div>
        <div class="description">
          <p>{{ percurso.description }}</p>
        </div>
      </div>

    </div>

    <div class="linha-percurso"></div>

    <div class="box-percuso">
      <div class="box" v-for="percursoRight in percursosRight" :key="percursoRight.title">
        <div class="data">
          <span>{{ percursoRight.title }}</span>
        </div>
        <div class="description">
          <p>{{ percursoRight.description }}</p>
        </div>
        <div class="conector-right">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const percursos = [
  {
    title: '2005',
    description: 'Formado em Direito pela Universidade X',
  },
  {
    title: '2005',
    description: 'Formado em Direito pela Universidade X',
  },
  {
    title: '2005',
    description: 'Formado em Direito pela Universidade X',
  },
  {
    title: '2005',
    description: 'Formado em Direito pela Universidade X',
  },
  
]

const percursosRight = [
  {
    title: '2005',
    description: 'Formado em Direito pela Universidade X',
  },
  
  {
    title: '2005',
    description: 'Formado em Direito pela Universidade X',
  },
  
  {
    title: '2005',
    description: 'Formado em Direito pela Universidade X',
  },
]
</script>

<style scoped>
.title-percurso {
  margin-bottom: clamp(60px, 8vw, 100px);
}

.title-percurso h2 {
  font-size: clamp(26px, 4vw, 40px);
  margin-bottom: 20px;
  text-align: center;
}
.title-percurso .text-green {
  color: var(--cor-primaria);
  font-weight: 600;
  letter-spacing: 0.05rem;
}
.title-percurso .description {
  font-size: clamp(14px, 2vw, 20px);
  color: var(--cor-cinza);
  background: var(--cor-gradiante);
  padding: 10px;
  transform: skew(-20deg);
}

.title-percurso .description span {
  margin-left: 20px;
}

.container-percurso {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(20px, 5vw, 70px);
  max-width: 1400px;
  margin: 0 auto;
  padding-left: clamp(10px, 2vw, 2rem);
  padding-right: clamp(10px, 2vw, 2rem);
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
  color: #E6EDEA;
}

@media (max-width: 1000px) {
  .container-percurso {
    flex-direction: column;
    gap: 40px;
  }
  
  .linha-percurso {
    width: 100%;
    height: 3px;
    order: -1;
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
  }
  
  .box-percuso .box .conector,
  .box-percuso .box .conector-right {
    display: none;
  }
}
</style>
