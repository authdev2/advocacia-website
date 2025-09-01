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

            <div class="icon">
                <span> {{ index + 1 }} - Etapa</span>

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

.box:nth-child(2) .icon {
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

.icon {
    padding: 45px 35px;
    border-radius: 12px 0px 0 12px;
    ;
    background-color: var(--cor-primaria);
    color: var(--cor-branco);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}


.icon span {
    font-size: 18px;
    color: white;
    font-weight: 600;
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

    .icon {
        padding: 35px 25px;
    }

    .box{
        min-width: 100%;
    }
}
</style>
