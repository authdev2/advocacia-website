<template>
  <div class="main-page-container container-limited">
    <div class="left">
      <div class="container-seguranca">
        <div class="container-box">
          <div class="box">
            <LockIcon />
            <span>Segurança</span>
          </div>
          <div class="box">
            <ShieldIcon />
            <span>Lealdade</span>
          </div>
        </div>

        <div class="title">
          <h1>Defendemos os teus <span>direitos</span></h1>
        </div>
        <div class="description">
          <p>
            Não deixes que questões legais complexas te causem stress desnecessário. Contacta-nos hoje mesmo para uma
            consulta inicial. A tua tranquilidade é a nossa prioridade.
          </p>
        </div>

        <div class="btn-whatsapp">
          <a href="https://wa.me/351912345678" target="_blank" rel="noopener noreferrer" aria-label="Contactar via WhatsApp">
            <button type="button">
              <WhatsappIcon />
              Fale no WhatsApp!
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="right">
      <img v-lazy="mainImg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

import LockIcon from '../components/Icons/Lock.vue';
import ShieldIcon from '../components/Icons/Shield.vue';
import WhatsappIcon from '../components/Icons/Whatsapp.vue';
import mainImg from '../assets/mainPageImg.webp'

function changeLanguage(lang) {
  locale.value = lang
}

</script>

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
  border-radius: 30px;
}

.btn-whatsapp button {
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

.btn-whatsapp a{
  text-decoration: none;
}

@media (max-width: 1600px) {


  .main-page-container{
    height: 85dvh;
  }
  .container-seguranca .box {
    font-size: .8rem;
  }
  .container-seguranca .title h1{
    font-size: 2.3rem;
  }

  .container-seguranca .description p{
    font-size: 1.1rem;
  }

  .btn-whatsapp button{
    font-size: 1rem;
  }
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