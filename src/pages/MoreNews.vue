<template>
    <Navbar />
    <div class="more-news-container container-limited">
        <div class="header">
            <h1>Todas as Notícias</h1>
            <p>Mantenha-se atualizado com as últimas notícias e atualizações legais</p>
        </div>
        
        <div class="box-container">
            <article class="box" v-for="news in allNews" :key="news.id">
                <div class="image">
                    <img v-lazy="news.imagemNoticia" alt="Imagem da notícia">
                </div>
                <div class="content">
                    <h3>{{ news.nomeNoticia ? news.nomeNoticia.slice(0, 50) : 'Notícia sem nome' }}...</h3>
                    <p>{{ news.descricaoNoticia ? news.descricaoNoticia.slice(0, 100) : 'Notícia sem descrição' }}...</p>

                    <div class="news-date">
                        <DateIcon />
                        {{ news.data.slice(0, 10) }}
                    </div>
                </div>
                <div class="btn-container">

                    <router-link :to="`/noticia/${news.id}`" target="_blank" class="btn-ver-mais">
                        Ver mais
                        <span class="arrow">→</span>
                    </router-link>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { ref, onMounted } from 'vue';
import DateIcon from '../components/Icons/Date.vue';
let allNews = ref([]);
async function getAllNews(){
    let response = await fetch('http://localhost:3000/noticias');
    let data = await response.json();
    allNews.value = data.result;
} 

onMounted(() => {
    getAllNews();
});
</script>

<style scoped>
.more-news-container {
    padding: 80px 0;
    min-height: 100vh;
    background: var(--cor-fundo);
}

.header {
    text-align: center;
    margin-bottom: 60px;
}

.header h1 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--cor-texto);
    margin-bottom: 20px;
}

.header p {
    font-size: 1.25rem;
    color: var(--cor-cinza);
    max-width: 600px;
    margin: 0 auto;
}

.box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 50px;
}

.box {
    display: flex;
    flex-direction: column;
        background: var(--cor-fundo);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    flex: 1;
    min-width: 300px;
}

.box:hover {
    transform: translateY(-8px);
    border-color: var(--cor-primaria);
}

.image {
    width: 100%;
    height: 220px;
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

.content {
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--cor-texto);
}

.content p {
    font-size: 1rem;
    color: var(--cor-cinza);
}

.btn-container {
    padding: 0 25px 25px;
    margin-top: auto;
}

.btn-ver-mais {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    color: var(--cor-branca);
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    width: 100%;
    text-decoration: none;
    justify-content: center;
}

.btn-ver-mais:hover {
    background: var(--cor-primaria-escura);
    transform: translateY(-2px);
}

.arrow {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
}

.news-date {
    color: var(--cor-primaria);
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 12px;
    width: 150px;
    opacity: 0.9;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 4px 12px;
    background: var(--cor-data-noticia);
    border-radius: 20px;
    border: 1px solid var(--cor-data-noticia);
    transition: all 0.3s ease;
    justify-content: center;
}
</style>