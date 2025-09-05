<template>
    <nav id="inicio" class="container-limited">
        <div class="left">
            <div class="logo">
                <h1> <a href="#inicio"> João Alves</a></h1>
            </div>
            <div class="links">
                <a href="#area-atuacao">Area de Atuação</a>
                <a href="#quem-sou">Quem sou</a>
                <a href="#processo">Processo</a>
            </div>
        </div>
        <div class="right">
            <button class="theme-toggle" @click="toggleTheme">
                <span v-if="isDark">
                    <Sunshine />
                </span>
                <span v-else>
                    <Moon />
                </span>
            </button>
            <PhoneIcon />
            <span>+351 912 345 678</span>
        </div>

        <div class="mobile-menu">
            <button @click="toggleMenu">
                <Menu v-if="!menuOpen" />
                <Close v-else />
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
    margin-left: 20px;
    padding: 10px;
    color: var(--cor-cinza);
    font-size: 16px;
    transition: all 0.8s ease;
}

nav .left .links a:hover {
    background-color: var(--cor-branca);
    border-radius: 7px;
    color: var(--cor-preta);
}

nav .left .logo h1 {
    font-size: 23px;
    color: var(--cor-branca);
    letter-spacing: 0.1rem;
    font-family: 'Quintessential', cursive;
    font-weight: 400;
  font-style: normal;

}


nav .left .logo h1 a{
    text-decoration: none;
    color: var(--cor-branca);
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

.mobile-menu button img,
.mobile-menu button svg {
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

.links-mobile a:hover {
    color: var(--cor-preta);
    background-color: var(--cor-branca);
}

.right{
    display: flex;
    align-items: center;
    gap: 20px;
}

.theme-toggle{
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--cor-branca);
    transition: all 0.3s ease;
    margin-right: 20px;

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
import { ref, onMounted } from 'vue';
import PhoneIcon from './Icons/Telephone.vue';
import Sunshine from './Icons/Sunshine.vue';
import Moon from './Icons/Moon.vue';
import Menu from './Icons/Menu.vue';
import Close from './Icons/Close.vue';

let menuOpen = ref(false);

function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}

let isDark = ref(true);
let themeChoose;
function toggleTheme() {
    isDark.value = !isDark.value;
    themeChoose = isDark.value ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', themeChoose);
    localStorage.setItem('theme', themeChoose);
}

onMounted(() => {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
})
</script>