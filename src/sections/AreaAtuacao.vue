<template>
  <section id="area-atuacao" class="area-atuacao container-limited">

    <HeaderTitle :title="$t('areaAtuacao.title')" :title2="$t('areaAtuacao.title2')" :description="$t('areaAtuacao.description')" />

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
          <button class="btn-saber-mais" @click="openModal(index)">{{ $t('areaAtuacao.saberMais') }}
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  </section>
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
        <h3>{{ $t('areaAtuacao.processo') }}</h3>
        <div class="process-steps">
          <div class="step" v-for="(step, index) in areas[index].modal[0].process.steps" :key="index">
            <span>{{ step }}</span>
            <span class="duration">{{ areas[index].modal[0].process.duration }}</span>
          </div>
        </div>
      </div>

      <div class="faq">
        <h3>{{ $t('areaAtuacao.perguntasFrequentes') }}</h3>
        <div class="faq-item" v-for="(item, index) in areas[index].modal[0].faq" :key="index">
          <details>
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>

      <div class="contacto">
        <h3>{{ $t('areaAtuacao.contacto') }}</h3>
        <div class="container">
          <div class="left">
            <div class="contacto-item-phone">
              <span>{{ $t('areaAtuacao.telemovel') }} {{ areas[index].modal[0].contact.phone }}</span>
            </div>
            <div class="contacto-item-whatsapp">
              <button>
                <a :href="areas[index].modal[0].contact.whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Contactar via WhatsApp">
                  <WhatsappIcon />
                  {{ $t('areaAtuacao.whatsapp') }}
                </a>
              </button>
            </div>
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
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
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
  flex: 1;
  min-width: 400px;
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
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 20px;
}

.modal-content {
  background: var(--cor-fundo);
  border-radius: 16px;
  max-width: 1500px;
  max-height: 90vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--cor-primaria) var(--cor-fundo);
  position: relative;
  border: 1px solid var(--cor-cinza-escuro);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
}

.close-btn button {
  background: var(--cor-cinza-escuro);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: var(--cor-branca);
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.close-btn button:hover {
  background: var(--cor-primaria);
}

.modal-header {
  padding: 40px 40px 20px;
  border-bottom: 1px solid var(--cor-cinza-escuro);
}

.modal-header h3 {
  font-size: 2rem;
  color: var(--cor-branca);
  margin: 0;
  font-weight: 700;
}

.description-container {
  padding: 30px 40px;
  border-bottom: 1px solid var(--cor-cinza-escuro);
}

.modal-description {
  color: var(--cor-cinza);
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.process {
  padding: 30px 40px;
  border-bottom: 1px solid var(--cor-cinza-escuro);
}

.process h3 {
  color: var(--cor-branca);
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  font-weight: 600;
}

.process-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
}

.step {
  background: var(--cor-fundo);
  border: 1px solid var(--cor-cinza-escuro);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.step .duration {
  color: var(--cor-primaria);
  font-weight: 600;
  font-size: 0.85rem;
}

.faq {
  padding: 30px 40px;
  border-bottom: 1px solid var(--cor-cinza-escuro);
}

.faq h3 {
  color: var(--cor-branca);
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  font-weight: 600;
}

.faq-item {
  margin-bottom: 15px;
}

.faq-item details {
  background: var(--cor-fundo);
  border: 1px solid var(--cor-cinza-escuro);
  border-radius: 8px;
  overflow: hidden;
}

.faq-item summary {
  padding: 20px;
  color: var(--cor-branca);
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  position: relative;
  background: var(--cor-fundo);
  transition: background 0.3s ease;
}

.faq-item summary:hover {
  background: var(--cor-cinza-escuro);
}

.faq-item summary::after {
  content: '+';
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: var(--cor-primaria);
}

.faq-item details[open] summary::after {
  content: '−';
}

.faq-item details p {
  padding: 0 20px 20px;
  color: var(--cor-cinza);
}

.contacto {
  padding: 30px 40px;
}

.contacto h3 {
  color: var(--cor-branca);
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  font-weight: 600;
  text-align: center;
}

.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.contacto-item-phone {
  min-width: 200px;
  background: var(--cor-fundo);
  border: 1px solid var(--cor-cinza-escuro);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.contacto-item-phone span {
  color: var(--cor-branca);
  font-weight: 500;
}

.contacto-item-whatsapp {
  min-width: 200px;
}

.contacto-item-whatsapp button {
  width: 100%;
  padding: 15px 20px;
  background: var(--cor-verde);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.contacto-item-whatsapp button a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  color: white;
}

.left{
  width: 100%;
}

@media (max-width: 1000px) {

  .area-atuacao h2 {
    font-size: 30px;
  }

  .area-atuacao .description span {
    font-size: 15px;
  }

  .step{
    text-align: center;
  }
}

</style>
