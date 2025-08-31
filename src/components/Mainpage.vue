<template>
  <div class="main-page-container">
    <div class="left">
      <div class="container-seguranca">
        <div class="container-box">
          <div class="box">
            <img src="../assets/svg/padlock.svg" alt="" />
            <span>Segurança</span>
          </div>
          <div class="box">
            <img src="../assets/svg/trust.svg" alt="" />
            <span>Lealdade</span>
          </div>
        </div>

        <div class="title">
          <h1>Defendemos os teus <span>direitos</span></h1>
        </div>
        <div class="description">
          <p>
            Não deixes que questões legais complexas te causem stress desnecessário. Contacta-nos hoje mesmo para uma consulta inicial. A tua tranquilidade é a nossa prioridade.
          </p>
        </div>

        <div class="btn-whatsapp">
          <button>
            <img src="../assets/svg/whatsapp.svg" alt="">
            Fale no WhatsApp!</button>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../assets/mainpageImage.webp" alt="" />
    </div>
  </div>

  <div class="custom-shape-divider-bottom-1756387658">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        class="shape-fill"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.main-page-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90dvh;
  gap: 4rem;
  max-width: 1400px;
}

.main-page-container .left .container-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.container-seguranca .box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px 20px;
  background-color: var(--cor-primaria);
  border-radius: 50px;
  font-weight: 600;
  font-size: 15px;
  color: var(--cor-branca);
  transition: all 0.3s ease;
}

.main-page-container .left .container-seguranca .box img {
  width: 24px;
  height: 24px;
}

.container-seguranca .box span {
  letter-spacing: 0.08rem;
}

.container-seguranca .box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(132, 146, 141, 0.3);
}

.container-seguranca .title {
  max-width: 500px;
  margin-bottom: 1.5rem;
}

.container-seguranca .title h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.container-seguranca .title span {
  color: var(--cor-primaria);
}

.container-seguranca .description {
  max-width: 450px;
  margin-bottom: 2rem;
}

.container-seguranca .description p {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--cor-cinza);
  margin: 0;
}

.right img {
  width: clamp(300px, 40vw, 600px);
  height: auto;                         
  max-width: 100%;                       
}
.custom-shape-divider-bottom-1756387658 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1756387658 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 80px;
}

.custom-shape-divider-bottom-1756387658 .shape-fill {
  fill: var(--cor-primaria);
}

.btn-whatsapp button{
  padding: 10px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 18px;
  color: var(--cor-branca);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 20px;
  border: none;
  cursor: pointer;
  background: var(--cor-gradiante);
}

.btn-whatsapp button img{
  width: 25px;
  height: 25px;
}

@media (max-width: 1000px) {


  .container-seguranca .box {
    padding: 5px 10px;
}

  .custom-shape-divider-bottom-1756387658 {
    display: none;
  }

  .main-page-container {
    flex-direction: column;
    height: auto;
    gap: 3rem;
    padding: 4rem 2rem;
  }
  
  .container-seguranca .title h1 {
    font-size: 2.8rem;
  }
  
  .container-seguranca .description p {
    font-size: 1.1rem;
  }
  
  .right img {
    width: 450px;
    height: 300px;
  }
}

</style>
