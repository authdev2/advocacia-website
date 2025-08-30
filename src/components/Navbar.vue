<template>
    <nav>
        <div class="left">
            <div class="logo">
                <img src="../assets/logo.webp" alt="logo"></img>
            </div>
            <div class="links">
                <a href="#">Inicio</a>
                <a href="#">Area de Atuação</a>
                <a href="#">O meu percurso</a>
                <a href="#">Quem sou</a>
                <a href="#">Processo</a>
            </div>
        </div>
        <div class="right">
            <img src="../assets/svg/telephone.svg" alt="Icone de telefone">
            <span>+351 912 345 678</span>
        </div>

        <div class="mobile-menu">
            <button @click="toggleMenu"><i class="fa-solid fa-bars"></i></button>

        </div>
    </nav>
    <div class="links-mobile" v-if="menuOpen">
        <a href="#">Inicio</a>
        <a href="#">Area de Atuação</a>
        <a href="#">O meu percurso</a>
        <a href="#">Quem sou</a>
        <a href="#">Processo</a>

    </div>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--cor-gradiante);
    padding: 15px;
    border-radius: 10px;
    transition: all 0.3s ease;
}

nav .left,
nav .right {
    display: flex;
    align-items: center;
    gap: 10px;
}

nav .left .links a {
    text-decoration: none;
    margin-left: 30px;
    padding: 10px;
    color: var(--cor-branca);
    font-size: 16px;
    transition: all 0.8s ease;
}

nav .left .links a:hover {
    background-color: var(--cor-branca);
    border-radius: 7px;
    color: var(--cor-preta);
}

nav .left .logo img {
    width: 30px;
    height: 30px;
}

nav .right img {
    width: 20px;
    height: 20px;
}

nav .mobile-menu {
    display: none;
}

.mobile-menu button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: var(--cor-branca);
    transition: all 0.3s ease;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.links-mobile{
    width: 100%;
    background: var(--cor-gradiante);
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.links-mobile a {
    text-decoration: none;
    color: var(--cor-branca);
    font-size: 16px;
    padding: 10px;
    transition: all 0.3s ease;
    border-radius: 10px;
   
}


@media (max-width: 1000px) {
    nav .mobile-menu {
        display: block;
    }

    nav .links,
    nav .right {
        display: none;
    }
}

@media (max-width: 1600px) {
    nav {
        padding: 10px 50px;
    }


}
</style>

<script setup>
import { ref } from 'vue';
let menuOpen = ref(false);
function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}
</script>