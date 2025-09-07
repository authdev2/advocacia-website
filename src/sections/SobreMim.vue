<template>
  <div id="quem-sou" class="sobre-mim-container">
    <HeaderTitle title="Quem" title2="sou" description="O meu compromisso com a excelência" />
    <div class="container">
      <div class="left-container">
        <img src="../assets/sobre-mim/sobreMimImg.webp" alt="Imagem de João Alves" />
      </div>

      <div class="right-container">
        <h3>
          O meu compromisso com a <span class="text-green">excelência</span>
        </h3>
        <p>
          Como advogado dedicado, o meu objetivo é proporcionar aos meus
          clientes uma representação jurídica de qualidade, baseada na
          transparência, honestidade e compromisso com os seus interesses. Com
          uma vasta experiência em diversas áreas do direito, especialmente em
          nacionalidade portuguesa e direito civil, trabalho incansavelmente
          para garantir que cada caso seja tratado com a atenção e dedicação que
          merece. Acredito que o sucesso de um advogado não se mede apenas pelos
          casos ganhos, mas pela confiança e satisfação dos clientes que
          represento. Por isso, mantenho-me sempre atualizado com as últimas
          mudanças na legislação para oferecer o melhor serviço possível.Tentar
          novamenteO Claude pode cometer erros. Confira sempre as respostas.
        </p>

        <div class="box-compromissos">
          <div class="box" v-for="compromisso in compromissos" :key="compromisso.title">
            <component :is="compromisso.icon"></component>
            <h4>{{ compromisso.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderTitle from '../components/HeaderTitle.vue'
import Trust from '../components/Icons/Trust.vue'
import Honest from '../components/Icons/Honest.vue'
import Idea from '../components/Icons/Idea.vue'
import Appointment from '../components/Icons/Appointment.vue'

const compromissos = [
  {
    icon: Trust,
    title: 'Transparência',
  },
  {
    icon: Honest,
    title: 'Honestidade',
  },

  {
    icon: Idea,
    title: 'Inovação',
  },

  {
    icon: Appointment,
    title: 'Dedicação',
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