<template>
    <section>
        <HeaderTitle title="Feedback de" title2="clientes"
            description="Clientes que nos escolheram para resolver os seus problemas" />
        <div class="feedback-container container-limited">
        <button class="arrow-button" @click="retrocederFeedback">
            <LeftArrow />
        </button>
        <div :class="feedback.show ? 'feedback-box' : 'desactive-feedback'" v-for="feedback in feedbacks"
            :key="feedback.name">
            <div class="feedback-box-content" v-if="feedback.show">

                <div class="description">
                    <p>{{ feedback.description }}</p>
                </div>

                <div class="feedback-info">
                    <div class="image">
                        <img v-lazy="feedback.image" alt="">
                    </div>
                    <div class="info">
                        <h3>{{ feedback.name }}</h3>
                        <p>{{ feedback.ajudante }}</p>
                        <div class="rating-container">
                            <div class="rating" v-for="i in feedback.rating" :key="i">
                                <Star />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="arrow-button" @click="avancarFeedback">
            <RightArrow />
        </button>
        </div>
    </section>

</template>

<script setup>
import { reactive } from 'vue';
import PessoaImagem2 from '../assets/feedbacks/pessoa2.webp'
import PessoaImagem3 from '../assets/feedbacks/pessoa3.webp'
import PessoaImagem4 from '../assets/feedbacks/pessoa4.webp'
import PessoaImagem5 from '../assets/feedbacks/pessoa5.webp'
import PessoaImagem6 from '../assets/feedbacks/pessoa1.webp'
import HeaderTitle from '../components/HeaderTitle.vue'
import LeftArrow from '../components/Icons/LeftArrow.vue'
import RightArrow from '../components/Icons/RightArrow.vue'
import Star from '../components/Icons/Star.vue'



const feedbacks = reactive([
    {
        description: 'Excelente profissional! O Dr. João Alves conseguiu resolver o meu processo de nacionalidade portuguesa em tempo recorde. Comunicação clara e resultados excepcionais.',
        name: 'Maria Santos',
        ajudante: 'Nacionalidade Portuguesa',
        rating: 5,
        image: PessoaImagem2,
        show: true,
    },
    {
        description: 'Recomendo vivamente! Profissionalismo, dedicação e conhecimento técnico excepcional. Resolveu uma questão complexa de direito civil com sucesso.',
        name: 'António Ferreira',
        ajudante: 'Direito Civil',
        rating: 5,
        image: PessoaImagem3,
        show: true,
    },
    {
        description: 'Atendimento personalizado e resultados concretos. O Dr. João demonstrou grande competência na resolução do meu caso empresarial.',
        name: 'Carla Rodrigues',
        ajudante: 'Direito Empresarial',
        rating: 5,
        image: PessoaImagem4,
        show: true,
    },
    {
        description: 'Profissional de confiança! Transparência total no processo e comunicação regular. Resultado final superou as expectativas.',
        name: 'João Silva',
        ajudante: 'Direito do Trabalho',
        rating: 5,
        image: PessoaImagem5,
        show: false,
    },
    {
        description: 'Experiência muito positiva. O Dr. João mostrou grande conhecimento técnico e conseguiu resolver o meu caso de forma eficiente.',
        name: 'Ana Costa',
        ajudante: 'Direito Administrativo',
        rating: 5,
        image: PessoaImagem6,
        show: false,
    },
    {
        description: 'Serviço de excelência! Profissionalismo, pontualidade e resultados excepcionais. Recomendo sem hesitação.',
        name: 'Pedro Martins',
        ajudante: 'Direito Penal',
        rating: 5,
        image: PessoaImagem2,
        show: false,
    },
])

function Slice(n1, n2, boolean) {
    feedbacks.slice(n1, n2).forEach((feedback) => {
        feedback.show = boolean;
    })
}

function avancarFeedback() {
    Slice(0, 3, false);
    Slice(3, feedbacks.length, true);
}


function retrocederFeedback() {
    Slice(0, 3, true);
    Slice(3, feedbacks.length, false);
}


</script>

<style scoped>
.arrow-button {
    border: none;
    cursor: pointer;
    background: var(--cor-footer);
    padding: 10px;
    border-radius: 10px;
    color: var(--cor-branca);
    transition: all 0.3s ease;
    border: 1px solid var(--cor-cinza-escuro);
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow-button:hover {
    background: transparent;
}


.desactive-feedback {
    display: none;
}

.feedback-container {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 80px;
    margin-bottom: 100px;
    justify-content: center;
    margin-top: 50px;
}

.feedback-box {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid var(--cor-cinza-claro-escuro);
    flex: 1;
    min-width: 350px;
    height: 300px;
    transition: all 0.3s ease;
    border-top: 4px solid var(--cor-primaria);
}

.feedback-box:hover {
    opacity: 1;
}

.feedback-box-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 300px;

}

.rating-container {
    display: flex;
    gap: 5px;
}

.image img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--cor-primaria);
}

.feedback-info {
    display: flex;
    align-items: center;
    gap: 20px;
}

.description p {
    font-size: 16px;
    color: var(--cor-cinza);
    line-height: 1.6;
    margin-bottom: 10px;
}

.info p {
    font-size: 14px;
    color: var(--cor-cinza);
    margin-bottom: 5px;
}
</style>