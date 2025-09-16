<template>
    <section class="noticias-container container-limited">
        <HeaderTitle title="Últimas" title2="Notícias"
            description="Mantenha-se atualizado com as últimas novidades jurídicas e informações relevantes" />


        <div class="container-noticias">


            <div class="error-message" v-if="errorText">
                <span>API está desligada ou alguma falha tecnica!</span>
            </div>


            <article class="box" v-for="news in allNews" :key="news.id">
                <div class="image">
                    <img :src="news.imagemNoticia" alt="Imagem da notícia">
                </div>
                <div class="content">
                    <h3>{{ news.nomeNoticia ? news.nomeNoticia.slice(0, 50) : 'Notícia sem nome' }}...</h3>
                    <p>{{ news.descricaoNoticia ? news.descricaoNoticia.slice(0, 100) : 'Notícia sem descrição' }}...
                    </p>
                    <div class="news-date">
                        <DateIcon />
                        {{ news.data.slice(0, 10) }}
                    </div>
                </div>
                <hr>

                <router-link :to="`/noticia/${news.id}`" class="custom-link" target="_blank">

                    Ver mais

                    <span class="arrow">→</span>
                </router-link>
            </article>

        </div>
        <div class="see-more" v-if="allNews.length > 5">
            <button class="btn-ver-mais" @click="moreNews">Ver mais</button>
        </div>

    </section>
</template>
<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import DateIcon from '../components/Icons/Date.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
let allNews = ref([]);
let errorText = ref(false)
async function getNews() {
    try {
        let response = await fetch('http://localhost:3000/noticias/six')
        let data = await response.json();
        allNews.value = data.result;
        console.log(allNews.value[0].data.slice(0, 10));
    } catch (error) {
        console.log(error);
        errorText.value = true
    }
}

function moreNews() {
    router.push('/more-news');
}

onMounted(() => {
    setTimeout(() => {
        getNews();
    }, 100);
})
</script>

<style scoped>
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
    padding: 20px;
    min-width: 300px;
    background: var(--cor-fundo);
    transition: all 0.3s ease;
    overflow: hidden;
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
    background: var(--cor-cinza-escuro);
    position: relative;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    display: block;
}

.box:hover .image img {
    transform: scale(1.05);
}

.content h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--cor-branca);
    margin-bottom: 10px;
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

.content p {
    color: var(--cor-cinza);
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.see-more {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.btn-ver-mais {
    padding: 15px 50px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    margin-top: 20px;
    background: var(--cor-primaria);
    color: var(--cor-branca);
}

.btn-ver-mais:hover {
    background: var(--cor-footer);
    transition: all 0.3s ease;
    border: 1px solid var(--cor-cinza-escuro);
}

hr {
    border: none;
    height: 1px;
    background-color: var(--cor-cinza-escuro);
}

.custom-link {
    text-decoration: none;
    color: var(--cor-cinza);
    font-size: 17px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 10px;
    font-weight: 600;
    transition: all 0.3s ease;
    background-color: var(--cor-footer);
}

.custom-link:hover {
    transition: all 0.3s ease;
    background-color: var(--cor-primaria);
}

.error-message{
    font-size: 30px;
    margin: 0 auto;
}
</style>
