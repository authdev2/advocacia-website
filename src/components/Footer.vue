<template>
  <footer>
    <div class="container">
      <div class="top">
        <div class="coluna">
          <a href="">Inicio</a>
          <a href="">Area de Atuação</a>
          <a href="">O meu percurso</a>
          <a href="">Quem sou</a>
          <a href="">Processo</a>
        </div>

        <div class="coluna">
          <a href="">Inicio</a>
          <a href="">Area de Atuação</a>
          <a href="">O meu percurso</a>
          <a href="">Quem sou</a>
          <a href="">Processo</a>
        </div>

        <div class="coluna">
          <a href="">Inicio</a>
          <a href="">Area de Atuação</a>
          <a href="">O meu percurso</a>
          <a href="">Quem sou</a>
          <a href="">Processo</a>
        </div>
      </div>

      <div class="bottom">
        <span>@2025 - Todos os direitos reservados</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 30px ;
  background-color: var(--cor-footer);

  position: absolute;
  left: 0;
  width: 100%;
  
}

.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0 0 0;
  background-color: var(--cor-gradiante);
  border-radius: 10px;
  margin-bottom: 20px;
}

.coluna {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.coluna a {
  color: var(--cor-cinza);
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 0.05rem;
}

.coluna a:hover {
  color: var(--cor-primaria);
}

.bottom span{
    color: var(--cor-cinza);
    font-size: 14px;
    letter-spacing: 0.05rem;
    display: flex;
  justify-content: center;
  padding: 20px 0 0 0;

}
</style>
