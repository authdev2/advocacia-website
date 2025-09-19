<template>  
  <Navbar />
  <div class="container-limited">
    <div class="container-details">
      <div
        v-for="detail in allDetails"
        :key="detail.id"
        class="all-info"
      >
        <h2>{{ detail.nomeNoticia }}</h2>
        <p>{{ detail.descricaoNoticia }}</p>
        <img :src="detail.imagemNoticia" alt="Imagem da notícia" />
      </div>

      <div class="right-noticias">
        <h2>{{ $t('noticias.noticiasRelacionadas') }}</h2>
        <div class="noticias-container">
          <div
            v-for="noticia in allNoticias"
            :key="noticia.id"
            class="noticia"
          >
            <img :src="noticia.imagemNoticia" alt="Imagem da notícia" />
            <div class="content">
              <h3>{{ noticia.nomeNoticia }}</h3>
            </div>
            <router-link
              :to="`/noticia/${noticia.id}`"
              class="custom-link"
              target="_blank"
            >
              {{ $t('noticias.verMais') }}
            </router-link>
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
    flex-wrap: wrap;
}

.all-info {
    flex: 2;
    flex-wrap: wrap;
}

.all-info h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--cor-branca);
    margin-bottom: 30px;
    line-height: 1.2;
}

.all-info p {
    font-size: 1.1rem;
    color: var(--cor-cinza);
    margin-bottom: 40px;
}

.all-info img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 16px;
    margin-bottom: 40px;
    background: var(--cor-cinza-escuro);
}

.right-noticias {
    flex: 2;
    position: sticky;
    top: 100px;
}

.right-noticias h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--cor-branca);
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--cor-primaria);
}

.noticias-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
    max-height: 700px;
    scrollbar-color: var(--cor-primaria) var(--cor-fundo);
    scrollbar-width: thin;
    padding-right: 10px;
}

.noticia {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border-radius: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
    border-bottom: 1px solid var(--cor-cinza-escuro);
}

.noticia img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.content h3 {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--cor-branca);
    overflow: hidden;
    line-height: 1.4;
}

.custom-link{
    text-decoration: none;
    color: var(--cor-branca);
    font-size: 17px;
    padding: 10px 20px;
    background-color: var(--cor-primaria);
    text-align: center;
    border-radius: 10px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.custom-link:hover {
    background-color: var(--cor-footer);
    transition: all 0.3s ease;
}
</style>
