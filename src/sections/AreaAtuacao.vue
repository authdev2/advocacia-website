<template>
  <div id="area-atuacao" class="area-atuacao">

    <HeaderTitle title="Áreas de" title2="Atuação" description="Assessoria jurídica especializada com um escritório que entende cada detalhe do seu processo" />

    <div class="box-container">

      <div class="box" v-for="area in areas" :key="area.title">
        <div class="icon-ultrapassado">
          <component :is="area.icon"></component>
        </div>
        <div class="title-box">
          <h3>{{ area.title }}</h3>
          <p>
            {{ area.description }}
          </p>
          <button class="btn-saber-mais">{{ area.button }}
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import HeaderTitle from '../components/HeaderTitle.vue'
import Location from '../components/Icons/Location.vue'
import RightArrow from '../components/Icons/RightArrow.vue'
const areas = [
  {
    title: 'Nacionalidade Portuguesa',
    description: 'Tratamento de casos de nacionalidade portuguesa, inscrições de naturalização e demónio de nacionalidade.',
    button: 'Saber mais',
    icon: Location
  },
  {
    title: 'Nacionalidade Portuguesa',
    description: 'Tratamento de casos de nacionalidade portuguesa, inscrições de naturalização e demónio de nacionalidade.',
    button: 'Saber mais',
    icon: Location
  },
  {
    title: 'Nacionalidade Portuguesa',
    description: 'Tratamento de casos de nacionalidade portuguesa, inscrições de naturalização e demónio de nacionalidade.',
    button: 'Saber mais',
    icon: Location
  },
  {
    title: 'Nacionalidade Portuguesa',
    description: 'Tratamento de casos de nacionalidade portuguesa, inscrições de naturalização e demónio de nacionalidade.',
    button: 'Saber mais',
    icon: Location
  },
  {
    title: 'Nacionalidade Portuguesa',
    description: 'Tratamento de casos de nacionalidade portuguesa, inscrições de naturalização e demónio de nacionalidade.',
    button: 'Saber mais',
    icon: Location
  },
  {
    title: 'Nacionalidade Portuguesa',
    description: 'Tratamento de casos de nacionalidade portuguesa, inscrições de naturalização e demónio de nacionalidade.',
    button: 'Saber mais',
    icon: Location
  },
]
</script>

<style scoped>
.area-atuacao {
  padding: 100px 0;
}

.area-atuacao h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
}

.area-atuacao .text-green {
  color: var(--cor-primaria);
  font-weight: 600;
  letter-spacing: 0.05rem;
}

.area-atuacao .description {
  font-size: 20px;
  color: var(--cor-cinza);
  background: var(--cor-gradiante);
  padding: 10px;
  transform: skew(-20deg);
}

.area-atuacao .description span {
  margin-left: 20px;
}

.box-container {
  padding-top: 130px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.box-container .box {
  color: var(--cor-branca);
  height: 300px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  background-color: var(--cor-fundo);
  border: 1px solid var(--cor-cinza-claro-escuro);
}

.box-container .box .icon-ultrapassado {
  background-color: var(--cor-primaria);
  width: 100px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  background: linear-gradient(to right, #505050, #84928D);
}

.box-container .box .icon-ultrapassado svg {
  width: 30px;
  height: 30px;
}

.title-box h3 {
  margin-top: 40px;
}

.title-box p {
  margin-top: 20px;
  color: var(--cor-cinza);
  max-width: 300px;
}

.title-box button {
  padding: 10px 40px;
  color: var(--cor-branca);
  background-color: var(--cor-primaria);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
}

.title-box button:hover {
  background-color: var(--cor-footer);
  transition: all 0.3s ease;
  border: 1px solid var(--cor-cinza-claro-escuro);
}

.btn-saber-mais {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1000px) {
  .box-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .area-atuacao h2 {
    font-size: 30px;
  }

  .area-atuacao .description span {
    font-size: 15px;
  }
}
</style>
