<template>
    <section id="processo" class="processo-section">
        <HeaderTitle title="O meu" title2="processo" description="Como trabalho e qual o meu processo!" />
        <div class="processo-container container-limited">
            <div class="processo-timeline">
                <div class="timeline-item" v-for="(etapa, index) in etapas" :key="etapa.numero">
                    <div class="timeline-content">
                        <div class="step-number">
                            <span>{{ index + 1 }}</span>
                        </div>
                        <div class="step-info">
                            <h3>{{ etapa.title }}</h3>
                            <p>{{ etapa.description }}</p>
                        </div>
                    </div>
                    <div class="timeline-connector" v-if="etapas.length - 1 !== index"></div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import HeaderTitle from '../components/HeaderTitle.vue'
const etapas = [

    {
        title: 'Primeira consulta',
        description: 'Iniciamos com uma reunião personalizada para cornpreender profundarnente o seu caso e estabelecer uma relação de confiança',
        numero: 'Etapa 01',
    },
    {
        title: 'Análise',
        description: 'Nesta etapa, realizamos uma análise detalhada do seu caso, identificando os pontos mais importantes e as possíveis estratégias para a sua defesa',
        numero: 'Etapa 02',
    },
    {
        title: 'Execução',
        description: 'Nesta etapa, executamos as estratégias definidas, garantindo que todas as ações necessárias sejam realizadas para a defesa do seu caso',
        numero: 'Etapa 03',
    }
]

</script>

<style scoped>
.processo-section {
    padding: 100px 0;
    background: var(--cor-fundo);
}

.processo-container {
    margin-top: 80px;
}

.processo-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline-item {
    position: relative;
    margin-bottom: 60px;
}

.timeline-content {
    display: flex;
    align-items: center;
    gap: 30px;
    background: rgba(132, 146, 141, 0.05);
    border: 1px solid var(--cor-cinza-claro-escuro);
    border-radius: 15px;
    padding: 40px;
    transition: all 0.3s ease;
    position: relative;
}

.step-number {
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--cor-cinza-claro-escuro);
    position: relative;
    background: var(--cor-data-noticia);
}

.step-number span {
    font-size: 28px;
    font-weight: 700;
    color: var(--cor-branca);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.step-info {
    flex: 1;
}

.step-info h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--cor-branca);
    margin-bottom: 15px;
    line-height: 1.3;
}

.step-info p {
    font-size: 16px;
    color: var(--cor-cinza);
    line-height: 1.6;
    margin: 0;
}

.timeline-connector {
    position: absolute;
    left: 50%;
    top: 100%;
    width: 2px;
    height: 60px;
    background-color: var(--cor-branca);
    z-index: 1;
}

.timeline-connector::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: var(--cor-branca);
    border-radius: 50%;
}
</style>
