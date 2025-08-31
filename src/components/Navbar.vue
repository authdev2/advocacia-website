<template>
    <nav>
        <div class="left">
            <div class="logo">
                <img src="../assets/logo.webp" alt="logo"></img>
            </div>
            <div class="links">
                <a href="#inicio">Inicio</a>
                <a href="#area-atuacao">Area de Atuação</a>
                <a href="#percurso">O meu percurso</a>
                <a href="#quem-sou">Quem sou</a>
                <a href="#processo">Processo</a>
                <a href="#feedback">Feedback</a>
            </div>
        </div>      
        <div class="right">
            <img src="../assets/svg/telephone.svg" alt="Icone de telefone">
            <span>+351 912 345 678</span>
        </div>

        <div class="mobile-menu">
            <button @click="toggleMenu">
                <img :src="image" alt="Icone de menu">
            </button>

        </div>
    </nav>
    <div class="links-mobile" v-if="menuOpen">
        <a href="#inicio">Inicio</a>
        <a href="#area-atuacao">Area de Atuação</a>
        <a href="#percurso">O meu percurso</a>
        <a href="#quem-sou">Quem sou</a>
        <a href="#processo">Processo</a>
        <a href="#feedback">Feedback</a>
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

.mobile-menu button:hover {
    transform: rotate(360deg);
    transition: all 0.3s ease;
}

.mobile-menu button img {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
}

.links-mobile {
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
import menu from '../assets/svg/menu.svg';
import close from '../assets/svg/close.svg';
let menuOpen = ref(false);
let image = ref(menu);
function toggleMenu() {
    menuOpen.value = !menuOpen.value;

    if (menuOpen.value) {
        image.value = close;
    } else {
        image.value = menu;
    }
}
</script>