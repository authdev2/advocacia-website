<template>
  <div class="sobre-mim-container">
    <h2>Sobre <span class="text-green">Mim</span></h2>
    <div class="description">
      <span
        >O meu compromisso com a excelência</span
      >
    </div>
    <div class="container">
      <div class="left-container">
        <img src="../assets/sobre-mim/image.webp" alt="Minha imagem" />
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
                <img :src="compromisso.img" alt="">
                <h4>{{ compromisso.title }}</h4>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import trust from '../assets/svg/trust.svg'
import honest from '../assets/svg/honest.svg'
import idea from '../assets/svg/idea.svg'
import appointment from '../assets/svg/appointment.svg'

const compromissos = [
    {
        img: trust,
        title: 'Transparência',
    },
    {
        img: honest,
        title: 'Honestidade',
    },
    
    {
        img: idea,
        title: 'Inovação',
    },
    
    {
        img: appointment,
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

}

.sobre-mim-container h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
}
.sobre-mim-container .text-green {
  color: var(--cor-primaria);
  font-weight: 600;
  letter-spacing: 0.05rem;
}
.sobre-mim-container .description {
  font-size: 20px;
  color: var(--cor-cinza);
  background: var(--cor-gradiante);
  padding: 10px;
  transform: skew(-20deg);
  margin-bottom: 100px;
}

.sobre-mim-container .description span {
  margin-left: 20px;
}

.right-container{
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
  word-wrap: break-word; /* Quebra palavras longas se necessário */
  overflow-wrap: break-word; /* Suporte para navegadores mais antigos */
}

.box-compromissos{
    display: flex;
    gap: 20px;
}

.box-compromissos .box{
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
    margin-top: 70px;
    border: 1px solid var(--cor-cinza-claro-escuro);
}

.box-compromissos .box img{
    width: 30px;
    height: 30px;
}

.left-container {
  flex-shrink: 0; /* Não permite que a imagem encolha */
}

.left-container img{
  width: clamp(300px, 40vw, 400px);
  height: auto;                         
}


@media (max-width: 1000px) {
  .sobre-mim-container .container {
    flex-direction: column;       
    gap: 40px; /* Reduz o gap em telas menores */
  }

  .right-container {
    max-width: 100%; /* Em telas menores, usa toda a largura disponível */
  }

  .box-compromissos {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
