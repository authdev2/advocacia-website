<template>
      <div class="title-processo">
    <h2>O meu <span class="text-green">processo</span></h2>
    <div class="description">
      <span>Como trabalho e qual o meu processo!</span>
    </div>
  </div>
    <div class="processo">
        <div class="box" v-for="(etapa, index) in etapas" :key="etapa.numero">

            <div class="content-processo">
                <div class="info-processo">
                    <h3>{{ etapa.title }}</h3>
                    <p>
                        {{ etapa.description }}
                    </p>
                </div>
                <div class="etapa-number">
                    <span>{{ index + 1 }}</span>
                </div>
            </div>

            <div class="icon">
                <span> {{ index + 1 }} - Etapa</span>

            </div>

        </div>
    </div>
</template>


<script setup>

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

.title-processo h2 {
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
}
.title-processo .text-green {
  color: var(--cor-primaria);
  font-weight: 600;
  letter-spacing: 0.05rem;
}
.title-processo .description {
  font-size: 20px;
  color: var(--cor-cinza);
  background: var(--cor-gradiante);
  padding: 10px;
  transform: skew(-20deg);
}

.title-processo .description span {
  margin-left: 20px;
}
.processo {
    display: flex;
    flex-direction: column;
    gap: 100px;
    height: 100vh;
    margin-top: 100px;
}

.content-processo {
    border: 1px solid var(--cor-cinza-claro-escuro);
    border-radius: 10px;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    max-width: 1000px;
}

.box {
    display: flex;
    justify-content: space-between;
}

.box:nth-child(1), .box:nth-child(3) {
    flex-direction: row-reverse;
}

.info-processo h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.info-processo p {
    font-size: 16px;
    color: var(--cor-cinza);
    max-width: 700px;
}


.icon {
    padding: 50px;
    transform: skew(-10deg);
    border-radius: 10px;
    background-color: var(--cor-primaria);
    color: var(--cor-branco);
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon span {
    font-size: 20px;
    color: white;
    font-weight: 600;
}

.etapa-number span{
    background-color: #464646;
    padding: 10px;
    border-radius: 10px;
}

@media (max-width: 1000px) {
    .icon {
    transform: none;
}
}

</style>
