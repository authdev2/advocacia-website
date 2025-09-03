<template>

    <HeaderTitle title="Feedback de" title2="clientes" description="Clientes que nos escolheram para resolver os seus problemas" />
    <div class="feedback-container">
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
                        <img :src="feedback.image" alt="">
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
        description: 'O dr. Joao Alves foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'João Silva',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem2,
        show: true,
    },
    {
        description: 'O dr. Joao Alves foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Ana Maria',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem3,
        show: true,
    },

    {
        description: 'O dr. Joao Alves foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Mario Marques',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem4,
        show: true,
    },

    {
        description: 'O dr. Joao Alves foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Carla Silva',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem5,
        show: false,
    },

    {
        description: 'O dr. Joao Alves foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Ana Maria',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem6,
        show: false,
    },

    {
            description: 'O dr. Joao Alves foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Carlos Santos',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem2,
        show: false,
    },

])

function avancarFeedback() {
    feedbacks.slice(0, 3).forEach((feedback) => {
        feedback.show = false;
    })

    feedbacks.slice(3, feedbacks.length).forEach((feedback) => {
        feedback.show = true;
    })

}


function retrocederFeedback() {
    feedbacks.slice(0, 3).forEach((feedback) => {
        feedback.show = true;
    })

    feedbacks.slice(3, feedbacks.length).forEach((feedback) => {
        feedback.show = false;
    })
}

</script>

<style scoped>
.arrow-button {
    border: none;
    cursor: pointer;
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

.feedback-box-content{
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