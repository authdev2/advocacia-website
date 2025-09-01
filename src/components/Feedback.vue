<template>
    <div id="feedback" class="feedback">
        <h2>Feedback <span class="text-green">de clientes</span></h2>
        <div class="description">
            <span>Clientes que nos escolheram para resolver os seus problemas</span>
        </div>
    </div>
    <div class="feedback-container">
        <div class="feedback-box" v-for="feedback in feedbacks" :key="feedback.name">

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
                            <img src="../assets/svg/star.svg" alt="teste">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import PessoaImagem from '../assets/imagem-pessoa.webp'
const feedbacks = [
    {
        description: 'A dr. Elisa foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'João Silva',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem,
    },
    {
        description: 'A dr. Elisa foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Ana Maria',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem,
    },

    {
        description: 'A dr. Elisa foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Mario Marques',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem,
    },

    {
        description: 'A dr. Elisa foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Carla Silva',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem,
    },

    {
        description: 'A dr. Elisa foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Ana Maria',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem,
    },

    {
        description: 'A dr. Elisa foi uma profissional incrível. Ela me ajudou a resolver um problema complexo e foi muito profissional.',
        name: 'Carlos Santos',
        ajudante: 'Processo Judicial',
        rating: 5,
        image: PessoaImagem,
    },

]


</script>

<style scoped>
.feedback h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
}

.active-feedback {
    opacity: 0.8;
    background-color: var(--cor-gradiante);
    transform: scale(1.05);
}

.feedback .text-green {
    color: var(--cor-primaria);
    font-weight: 600;
    letter-spacing: 0.05rem;
}

.feedback .description {
    font-size: 20px;
    color: var(--cor-cinza);
    background: var(--cor-gradiante);
    padding: 10px;
    transform: skew(-20deg);
}

.feedback .description span {
    margin-left: 20px;
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
    background-color: var(--cor-footer);
    padding: 20px;
    border-radius: 20px;
    border: 1px solid var(--cor-cinza-claro-escuro);
    flex: 1;
    min-width: 350px;
    transition: all 0.3s ease;
}

.feedback-box:hover {
    opacity: 1;
}

.rating-container {
    display: flex;
    gap: 5px;
}

.rating img {
    width: 15px;
    height: 15px;
}

.image img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
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