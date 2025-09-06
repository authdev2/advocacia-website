<template>
        <Navbar />
    <Mainpage />
    <AreaAtuacao />
    <Percuso />
    <SobreMim />
    <Processo />
    <Feedback />
    <Footer />

</template>

<script setup>

import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'));
const Mainpage = defineAsyncComponent(() => import('../sections/Mainpage.vue'));
const AreaAtuacao = defineAsyncComponent(() => import('../sections/AreaAtuacao.vue'));
const Percuso = defineAsyncComponent(() => import('../sections/Percuso.vue'));
const SobreMim = defineAsyncComponent(() => import('../sections/SobreMim.vue'));
const Footer = defineAsyncComponent(() => import('../components/Footer.vue'));
const Processo = defineAsyncComponent(() => import('../sections/Processo.vue'));
const Feedback = defineAsyncComponent(() => import('../sections/Feedback.vue'));

</script>