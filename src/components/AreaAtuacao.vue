<template>
  <div class="area-atuacao">
    <h2>Áreas de <span class="text-green">Atuação</span></h2>
    <div class="description">
      <span
        >Assessoria jurídica especializada com um escritório que entende cada
        detalhe do seu processo</span
      >
    </div>

    <div class="box-container">
      <div class="box">
        <div class="icon-ultrapassado">
          <i class="fa-solid fa-location-dot" style="color: #ffffff"></i>
        </div>
        <div class="title-box">
          <h3>Nacionalidade Portuguesa</h3>
          <p>
            Tratamento de casos de nacionalidade portuguesa, inscrições de
            naturalização e demónio de nacionalidade.
          </p>
          <button>Saber mais</button>
        </div>
      </div>

      <div class="box">
        <div class="icon-ultrapassado">
          <i class="fa-solid fa-location-dot" style="color: #ffffff"></i>
        </div>
        <div class="title-box">
          <h3>Nacionalidade Portuguesa</h3>
          <p>
            Tratamento de casos de nacionalidade portuguesa, inscrições de
            naturalização e demónio de nacionalidade.
          </p>
          <button>Saber mais</button>
        </div>
      </div>

      <div class="box">
        <div class="icon-ultrapassado">
          <i class="fa-solid fa-location-dot" style="color: #ffffff"></i>
        </div>
        <div class="title-box">
          <h3>Nacionalidade Portuguesa</h3>
          <p>
            Tratamento de casos de nacionalidade portuguesa, inscrições de
            naturalização e demónio de nacionalidade.
          </p>
          <button>Saber mais</button>
        </div>
      </div>

      <div class="box">
        <div class="icon-ultrapassado">
          <i class="fa-solid fa-location-dot" style="color: #ffffff"></i>
        </div>
        <div class="title-box">
          <h3>Nacionalidade Portuguesa</h3>
          <p>
            Tratamento de casos de nacionalidade portuguesa, inscrições de
            naturalização e demónio de nacionalidade.
          </p>
          <button>Saber mais</button>
        </div>
      </div>

      <div class="box">
        <div class="icon-ultrapassado">
          <i class="fa-solid fa-location-dot" style="color: #ffffff"></i>
        </div>
        <div class="title-box">
          <h3>Nacionalidade Portuguesa</h3>
          <p>
            Tratamento de casos de nacionalidade portuguesa, inscrições de
            naturalização e demónio de nacionalidade.
          </p>
          <button>Saber mais</button>
        </div>
      </div>

      <div class="box">
        <div class="icon-ultrapassado">
          <i class="fa-solid fa-location-dot" style="color: #ffffff"></i>
        </div>
        <div class="title-box">
          <h3>Nacionalidade Portuguesa</h3>
          <p>
            Tratamento de casos de nacionalidade portuguesa, inscrições de
            naturalização e demónio de nacionalidade.
          </p>
          <button>Saber mais</button>
        </div>
      </div>
    </div>
  </div>
</template>

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
  grid-template-columns: repeat(3, 475px);
}

.box-container .box {
  background-color: var(--cor-cinza-claro);
  color: var(--cor-preta);
  width: 450px;
  height: 250px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.box-container .box .icon-ultrapassado {
    background-color: var(--cor-primaria);
    width: 100px;
    height: 70px;
    display: flex
;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
}

.box-container .box .icon-ultrapassado i {
  font-size: 30px;
}

.title-box h3 {
  margin-top: 40px;
}

.title-box p {
  margin-top: 20px;
  color: var(--cor-cinza-escuro);
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
</style>
