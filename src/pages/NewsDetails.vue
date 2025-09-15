<template>  
        <Navbar />
    <div class="container-limited">
        <div class="container-details">

            <div class="all-info" v-for="detail in allDetails" :key="detail.id">

                <h2>{{ detail.nomeNoticia }}</h2>
                <p>{{ detail.descricaoNoticia }}</p>
                <img :src="detail.imagemNoticia" alt="Imagem da notícia">
            </div>

            <div class="right-noticias">
                <h2>Notícias relacionadas</h2>
                <div class="noticias-container">
                    <div class="noticia" v-for="noticia in allNoticias" :key="noticia.id">
                        <img :src="noticia.imagemNoticia" alt="Imagem da notícia">
                        <div class="content">
                            <h3>{{ noticia.nomeNoticia }}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <router-link to="/">Voltar</router-link> -->

        </div>

    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
const route = useRoute();
const id = route.params.id;
let allDetails = ref([]);
let allNoticias = ref([]);
async function getDetails() {
    try {
        let response = await fetch(`http://localhost:3000/noticias/${id}`);
        let data = await response.json();
        allDetails.value = data.result;
    } catch (error) {
        console.log(error);
    }
}


async function get6News() {
    try {
        let response = await fetch('http://localhost:3000/noticias/six');
        let data = await response.json();
        allNoticias.value = data.result;
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getDetails();
    get6News();
});
</script>

<style scoped>
.container-details {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    margin-top: 80px;
    padding: 0 20px;
}

.all-info {
    flex: 2;
    background: var(--cor-fundo);
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--cor-cinza-escuro);
}

.all-info h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--cor-branca);
    margin-bottom: 25px;
    line-height: 1.2;
}

.all-info p {
    font-size: 1.1rem;
    color: var(--cor-cinza);
    margin-bottom: 30px;
}

.all-info img {
    width: 100%;
    height: 700px;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid var(--cor-cinza-escuro);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    margin-bottom: 30px;
}

.right-noticias {
    flex: 1;
    background: var(--cor-fundo);
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--cor-cinza-escuro);
}

.right-noticias h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--cor-branca);
    margin-bottom: 25px;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--cor-primaria);
}

.noticias-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.noticia {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border: 1px solid var(--cor-cinza-escuro);
    border-radius: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
    border-color: var(--cor-primaria);
}

.noticia img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid var(--cor-cinza-claro);
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.content h3 {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--cor-branca);
    overflow: hidden;
}
</style>
