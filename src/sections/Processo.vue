<template>
    <HeaderTitle title="O meu" title2="processo" description="Como trabalho e qual o meu processo!" />
    <div class="processo">
        <div class="box" v-for="(etapa, index) in etapas" :key="etapa.numero">

            <div class="content-processo">
                <div class="info-processo">
                    <h3>{{ etapa.title }}</h3>
                    <p>
                        {{ etapa.description }}
                    </p>
                </div>
            </div>

            <div class="step-circle">
                <div class="circle-number">
                    <span class="number">{{ index + 1 }}</span>
                </div>
                <div class="step-label">
                    <span>Etapa</span>
                </div>
            </div>

        </div>
    </div>
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

.processo {
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
    margin-top: 80px;
    padding-bottom: 80px;
    align-items: center;
}

.content-processo {
    border: 1px solid var(--cor-cinza-claro-escuro);
    border-radius: 0 15px 15px 0;
    padding: 35px;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    max-width: 500px;
    background: rgba(132, 146, 141, 0.02);
}

.box:nth-child(2) .content-processo {
    border-radius: 15px 0 0 15px;
}

.box:nth-child(2) .step-circle {
    border-radius: 0 12px 12px 0;
}

.box {
    display: flex;
    justify-content: center;
    /* width: 100%; */
    min-width: 450px;
    flex: 1;
}

.box:nth-child(1),
.box:nth-child(3) {
    flex-direction: row-reverse;
}

.info-processo h3 {
    font-size: 22px;
    margin-bottom: 15px;
    color: var(--cor-branca);
}

.info-processo p {
    font-size: 16px;
    color: var(--cor-cinza);
    max-width: 650px;
    line-height: 1.6;
}

.step-circle {
    padding: 20px;
    border-radius: 12px 0px 0 12px;
    background: linear-gradient(135deg, var(--cor-primaria), #6b7c6f);
    color: var(--cor-branco);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 120px;
    position: relative;
    transition: all 0.3s ease;
}


.circle-number {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--cor-branca);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.number {
    font-size: 24px;
    font-weight: 700;
    color: var(--cor-primaria);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.step-label span {
    font-size: 14px;
    color: var(--cor-branca);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

@media (max-width: 768px) {
    .processo {
        gap: 60px;
        margin-top: 60px;
        padding-bottom: 60px;
    }

    .content-processo {
        padding: 25px;
    }

    .step-circle {
        padding: 15px;
        min-width: 100px;
    }
    
    .circle-number {
        width: 50px;
        height: 50px;
    }
    
    .number {
        font-size: 20px;
    }
    
    .step-label span {
        font-size: 12px;
    }

    .box{
        min-width: 100%;
    }
}
</style>
