<template>
<form action="POST">
    <input type="text" placeholder="Nome noticia" v-model="name">
    <input type="text" placeholder="Descricao" v-model="description">
    <input type="text" placeholder="Imagem" v-model="image">
    <button type="submit" @click.prevent="sendData">Enviar</button>
</form>
</template>

<script setup>
import { ref } from 'vue';
let name = ref('');
let description = ref('');
let image = ref('');

async function sendData(e) {

    await fetch(`http://localhost:3000/noticias/${name.value}/${description.value}/${image.value}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name.value, description: description.value, image: image.value })
    })
}
</script>

<style scoped>

</style>
