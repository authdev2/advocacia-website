<template>
  <div class="title-percurso">
    <h2>O meu <span class="text-green">percurso</span></h2>
    <div class="description">
      <span>Perceba um pouco do meu percuso e onde eu estudei!</span>
    </div>
  </div>
  <div class="container-percurso">
    <div class="box-percuso">
      <div class="box">
        <div class="conector">
          <span></span>
        </div>
        <div class="data">
          <span>2005</span>
        </div>
        <div class="description">
          <p>Formado em Direito pela Universidade X</p>
        </div>
      </div>

      <div class="box">
        <div class="conector">
          <span></span>
        </div>
        <div class="data">
          <span>2005</span>
        </div>
        <div class="description">
          <p>Formado em Direito pela Universidade X</p>
        </div>
      </div>

      <div class="box">
        <div class="conector">
          <span></span>
        </div>
        <div class="data">
          <span>2005</span>
        </div>
        <div class="description">
          <p>Formado em Direito pela Universidade X</p>
        </div>
      </div>

      <div class="box">
        <div class="conector">
          <span></span>
        </div>
        <div class="data">
          <span>2005</span>
        </div>
        <div class="description">
          <p>Formado em Direito pela Universidade X</p>
        </div>
      </div>
    </div>

    <div class="linha-percurso"></div>

    <div class="box-percuso">
      <div class="box">
        <div class="data">
          <span>2005</span>
        </div>
        <div class="description">
          <p>Formado em Direito pela Universidade X</p>
        </div>
        <div class="conector-right">
          <span></span>
        </div>
      </div>

      <div class="box">
        <div class="data">
          <span>2005</span>
        </div>
        <div class="description">
          <p>Formado em Direito pela Universidade X</p>
        </div>
        <div class="conector-right">
          <span></span>
        </div>
      </div>

      <div class="box">
        <div class="data">
          <span>2005</span>
        </div>
        <div class="description">
          <p>Formado em Direito pela Universidade X</p>
        </div>
        <div class="conector-right">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-percurso {
  margin-bottom: 100px;
}

.title-percurso h2 {
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
}
.title-percurso .text-green {
  color: var(--cor-primaria);
  font-weight: 600;
  letter-spacing: 0.05rem;
}
.title-percurso .description {
  font-size: 20px;
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
  gap: 70px;
}

.box-percuso {
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.linha-percurso {
  width: 3px;
  height: 1000px;
  background-color: var(--cor-branca);
}

.box-percuso .box {
    background-color: var(--cor-fundo);
    padding: 50px;
    border-radius: 20px;
    position: relative;
    border: 1px solid var(--cor-cinza-claro-escuro);
    margin-left: 60px;
    margin-right: 60px;
    transform: skew(-10deg);
}

.box-percuso .box .conector {
  width: 80px;
  height: 4px;
  background-color: var(--cor-branca);
  position: absolute;
  top: 50%;
  left: 440px;
  display: flex;
  align-items: center;
}

.box-percuso .box .conector span {
  width: 10px;
  height: 10px;
  background-color: var(--cor-branca);
  border-radius: 50%;
  position: absolute;
  left: 0;
}

.box-percuso .box .conector-right {
  width: 80px;
  height: 4px;
  background-color: var(--cor-branca);
  position: absolute;
  top: 50%;
  right: 440px;
  display: flex;
  align-items: center;
}

.box-percuso .box .conector-right span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  background-color: var(--cor-branca);
  right: 0;
}

.data span {
  font-size: 25px;
  font-weight: 800;
  color: #E6EDEA;
}
</style>
