<template>  
    <div class="container-limited">
        <h1>Details</h1>

        <div class="container-details">

            <div class="all-info" v-for="detail in allDetails" :key="detail.id">

                <h2>{{ detail.nomeNoticia }}</h2>
                <p>{{ detail.descricaoNoticia }}</p>
                <img :src="detail.imagemNoticia" alt="Imagem da notícia">

            </div>

        </div>

    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
const route = useRoute();
const id = route.params.id;
let allDetails = ref([]);
async function getDetails() {
    try {
        let response = await fetch(`http://localhost:3000/noticias/${id}`);
        let data = await response.json();
        allDetails.value = data.result;
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getDetails();
});
</script>