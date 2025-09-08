<template>
    <div class="noticias-container container-limited">
        <HeaderTitle title="Últimas" title2="Notícias"
            description="Mantenha-se atualizado com as últimas novidades jurídicas e informações relevantes" />


        <div class="container-noticias">
            <div class="box" v-for="news in allNews" :key="news.id">
                <div class="image">
                    <img :src="news.imagemNoticia" alt="Lei de Processo Civil">
                </div>
                <div class="content">
                    <h3>{{ news.nomeNoticia }}</h3>
                    <p>{{ news.descricaoNoticia }}</p>
                </div>
            </div>

        </div>

        <div class="see-more">
            <button class="btn-ver-mais">Ver mais</button>
        </div>

    </div>
</template>
<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import { ref, onMounted } from 'vue';
let allNews = ref([]);

function getNews() {
    fetch('http://localhost:3000/noticias/')
        .then(response => response.json())
        .then(data => {
            allNews.value = data.result;
        })
}

onMounted(() => {
    getNews();
})
</script>

<style scoped>
.noticias-container {
    padding: 80px 0;
}

.container-noticias {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
}

.box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    flex: 1;
    border: 1px solid var(--cor-cinza-escuro);
    border-radius: 12px;
    padding: 20px;
    min-width: 300px;
    background: var(--cor-fundo);
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.box:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    border-color: var(--cor-primaria);
}

.image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 15px;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.box:hover .image img {
    transform: scale(1.05);
}

.content h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--cor-branca);
    margin-bottom: 10px;
}

.content p {
    color: var(--cor-cinza);
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.see-more{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.btn-ver-mais{
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    margin-top: 20px;
    background: var(--cor-primaria);
    color: var(--cor-branca);
}

.btn-ver-mais:hover{
    background: var(--cor-footer);
    transition: all 0.3s ease;
    border: 1px solid var(--cor-cinza-escuro);
}
</style>
