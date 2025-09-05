<template>
  <div id="area-atuacao" class="area-atuacao container-limited">

    <HeaderTitle title="Áreas de" title2="Atuação" description="Assessoria jurídica especializada com um escritório que entende cada detalhe do seu processo" />

    <div class="box-container">

      <div class="box" v-for="(area, index) in areas" :key="area.title">
        <div class="icon-ultrapassado">
          <component :is="area.icon"></component>
        </div>
        <div class="title-box">
          <h3>{{ area.title }}</h3>
          <p>
            {{ area.description }}
          </p>
          <button class="btn-saber-mais" @click="openModal(index)">{{ area.button }}
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <div class="close-btn" @click="closeModal">
        <button class="close-btn" @click="closeModal">×</button>
      </div>
      
      <div class="modal-header">
        <h3>{{ areas[index].modal[0].title }}</h3>
      </div>

      <div class="description-container">
        <p class="modal-description">{{ areas[index].modal[0].description }}</p>
      </div>

      <div class="process">
        <h3>Processo</h3>
        <div class="process-steps">
          <div class="step" v-for="(step, index) in areas[index].modal[0].process.steps" :key="index">
            <span>{{ step }}</span>
            <span class="duration">{{ areas[index].modal[0].process.duration }}</span>
          </div>
        </div>
      </div>

      <div class="faq">
        <h3>Perguntas Frequentes</h3>
        <div class="faq-item" v-for="(item, index) in areas[index].modal[0].faq" :key="index">
          <details>
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>

      <div class="contacto">
        <h3>Contacto</h3>
        <div class="container">
          <div class="left">
            <div class="contacto-item-phone">
              <span>Telemovel: {{ areas[index].modal[0].contact.phone }}</span>
            </div>
            <div class="contacto-item-whatsapp">
              <button>
                <a :href="areas[index].modal[0].contact.whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Contactar via WhatsApp">
                  <WhatsappIcon />
                  WhatsApp
                </a>
              </button>
            </div>
          </div>

          <div class="right">
            <img src="../assets/mainpageImage.webp" alt="Foto do advogado">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script setup>
import HeaderTitle from '../components/HeaderTitle.vue'
import Location from '../components/Icons/Location.vue'
import RightArrow from '../components/Icons/RightArrow.vue'
import WhatsappIcon from '../components/Icons/Whatsapp.vue'
import { ref } from 'vue';
let showModal = ref(false);
const areas = [
  {
    title: 'Nacionalidade Portuguesa',
    description: 'Processos de aquisição de nacionalidade portuguesa, naturalização e reconhecimento de nacionalidade.',
    button: 'Saber mais',
    icon: Location,
    modal: [
     {
      title: 'Nacionalidade Portuguesa',
      description: 'Especializamo-nos em todos os processos de nacionalidade portuguesa, incluindo aquisição por descendência, casamento, naturalização e reconhecimento. Acompanhamos todo o processo desde a análise de documentos até à obtenção do certificado de nacionalidade.',
      process: {
        steps: ['Análise de documentos', 'Preparação da candidatura', 'Submissão ao IRN', 'Acompanhamento do processo'],
        duration: '6-12 meses'
      },
      contact: {
        phone: '+351 912 345 678',
        whatsapp: 'https://wa.me/912345678'
      },
      faq: [
        {
          question: 'Quanto tempo demora o processo?',
          answer: 'Entre 6 a 12 meses, dependendo da complexidade do caso'
        },
        {
          question: 'Que documentos preciso?',
          answer: 'Certidão de nascimento, comprovativo de residência e certificado de português'
        }
      ]
     }
    ]
  },
  {
    title: 'Direito do Trabalho',
    description: 'Defesa dos direitos dos trabalhadores, resolução de conflitos laborais e questões de despedimento.',
    button: 'Saber mais',
    icon: Location,
    modal: [
     {
      title: 'Direito do Trabalho',
      description: 'Representamos trabalhadores em questões de direito laboral, incluindo despedimentos, acidentes de trabalho, horas extraordinárias, férias, subsídios e resolução de conflitos com empregadores. Garantimos a proteção dos seus direitos laborais.',
      process: {
        steps: ['Análise do caso', 'Negociação com empregador', 'Preparação de documentos', 'Representação em tribunal'],
        duration: '1-6 meses'
      },
      contact: {
        phone: '+351 912 345 678',
        whatsapp: 'https://wa.me/351912345678'
      },
      faq: [
        {
          question: 'Posso ser despedido sem justa causa?',
          answer: 'Não, o despedimento deve ter justa causa ou ser por extinção do posto de trabalho'
        },
        {
          question: 'Tenho direito a indemnização?',
          answer: 'Sim, dependendo do tipo de despedimento e tempo de serviço'
        }
      ]
     }
    ]
  },
  {
    title: 'Direito Civil',
    description: 'Contratos, responsabilidade civil, direito da família, sucessões e propriedade.',
    button: 'Saber mais',
    icon: Location,
    modal: [
     {
      title: 'Direito Civil',
      description: 'Oferecemos assistência jurídica em direito civil, cobrindo contratos, responsabilidade civil, direito da família (divórcios, regulação de responsabilidades parentais), sucessões, propriedade e outros assuntos civis.',
      process: {
        steps: ['Consulta inicial', 'Análise jurídica', 'Preparação de documentos', 'Negociação ou processo judicial'],
        duration: '2-8 meses'
      },
      contact: {
        phone: '+351 912 345 678',
        whatsapp: 'https://wa.me/351912345678'
      },
      faq: [
        {
          question: 'Como funciona o divórcio?',
          answer: 'Pode ser por mútuo acordo ou litigioso, com diferentes procedimentos'
        },
        {
          question: 'Quem herda os bens?',
          answer: 'Depende da existência de testamento e da ordem legal de sucessão'
        }
      ]
     }
    ]
  },
  {
    title: 'Direito Comercial',
    description: 'Constituição de empresas, contratos comerciais e resolução de disputas empresariais.',
    button: 'Saber mais',
    icon: Location,
    modal: [
     {
      title: 'Direito Comercial',
      description: 'Assistência jurídica para empresas, incluindo constituição de sociedades, contratos comerciais, propriedade intelectual, resolução de disputas comerciais e assessoria em questões empresariais.',
      process: {
        steps: ['Consulta empresarial', 'Análise de necessidades', 'Preparação de documentos', 'Acompanhamento legal'],
        duration: '1-4 meses'
      },
      contact: {
        phone: '+351 912 345 678',
        whatsapp: 'https://wa.me/351912345678'
      },
      faq: [
        {
          question: 'Que tipo de sociedade escolher?',
          answer: 'Depende do número de sócios, capital e responsabilidade desejada'
        },
        {
          question: 'Preciso de contabilista?',
          answer: 'Sim, é obrigatório para todas as sociedades comerciais'
        }
      ]
     }
    ]
  },
  {
    title: 'Direito Penal',
    description: 'Defesa criminal, representação em processos penais e proteção de direitos fundamentais.',
    button: 'Saber mais',
    icon: Location,
    modal: [
     {
      title: 'Direito Penal',
      description: 'Defesa criminal especializada, representando clientes em processos penais com dedicação e experiência. Trabalhamos para garantir que os seus direitos sejam protegidos em todas as fases do processo criminal.',
      process: {
        steps: ['Consulta urgente', 'Análise do processo', 'Preparação da defesa', 'Representação em tribunal'],
        duration: '3-12 meses'
      },
      contact: {
        phone: '+351 912 345 678',
        whatsapp: 'https://wa.me/351912345678'
      },
      faq: [
        {
          question: 'Tenho direito a advogado?',
          answer: 'Sim, é um direito fundamental em qualquer processo penal'
        },
        {
          question: 'Posso ser preso preventivamente?',
          answer: 'Só em casos específicos e com fundamentação adequada'
        }
      ]
     }
    ]
  },
  {
    title: 'Direito Administrativo',
    description: 'Recursos administrativos, contencioso administrativo e questões com a administração pública.',
    button: 'Saber mais',
    icon: Location,
    modal: [
     {
      title: 'Direito Administrativo',
      description: 'Especializamo-nos em direito administrativo, representando clientes em questões com a administração pública, incluindo recursos administrativos, contencioso administrativo e defesa de direitos perante entidades públicas.',
      process: {
        steps: ['Análise do ato administrativo', 'Preparação do recurso', 'Submissão à entidade', 'Acompanhamento do processo'],
        duration: '4-18 meses'
      },
      contact: {
        phone: '+351 912 345 678',
        whatsapp: 'https://wa.me/351912345678'
      },
      faq: [
        {
          question: 'Posso recorrer de qualquer decisão?',
          answer: 'Sim, desde que respeite os prazos e formalidades legais'
        },
        {
          question: 'Quanto tempo tenho para recorrer?',
          answer: 'Geralmente 15 dias úteis, mas varia consoante o tipo de ato'
        }
      ]
     }
    ]
  },
]

let index = ref(0);

function openModal(indexArray) {
  showModal.value = true;
  index.value = indexArray;
  console.log(index.value);
}

function closeModal() {
  showModal.value = false;
}
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

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  height: 100vh;
  background: var(--cor-footer);
  left: 50%;  
  
  transform: translateX(-50%);
  overflow-y: auto;
  scrollbar-width:thin;
  z-index: 5;
  padding: 20px;
}

.modal-content{
  position: relative;
}

.close-btn button{
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--cor-primaria);
  border-radius: 10px;
  padding: 10px;
  color: var(--cor-branca);
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
}

.modal-header{
  padding: 20px;
  background: var(--cor-gradiante);
  border-radius: 10px;
}

.description-container{
  border: 1px solid var(--cor-cinza-claro-escuro);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

.process h3{
  text-align: center;
  margin-top: 20px;
}

.process-steps{
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
  
}

.step{
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: 1px solid var(--cor-cinza-claro-escuro);
  height: 100px;
  flex-direction: column;
  padding: 20px;
}

.step .duration{
  color: var(--cor-primaria);
}

.faq h3{
  text-align: center;
  margin-top: 20px;
}

.faq-item{
  width: 100%;
  background: var(--cor-gradiante);
  padding: 20px;
  margin-top: 20px;
}

.faq-item details p{
  width: 100%;
  background: var(--cor-footer);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 100px;
}

.container .right img{
  width: 400px;
  height: 300px;

  border-radius: 10px;
}

.contacto h3{
  text-align: center;
  margin-top: 20px;
}

.contacto-item-phone{
  border: 1px solid var(--cor-cinza-claro-escuro);
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
}

.contacto-item-whatsapp button{
  padding: 10px 40px;
  color: var(--cor-branca);
  background-color: var(--cor-primaria);
  border-radius: 20px;
  border: none;
  margin-top: 20px;
  width: 100%;
}

.contacto-item-whatsapp button a{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  color: var(--cor-branca);
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

  .step{
    text-align: center;
  }

  .container{
    flex-direction: column;
  }

  .container .right img{
    width: 100%;
    height: 100%;
  }
}
</style>
