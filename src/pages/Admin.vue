<template>
    <div v-if="logged === 'LoginAceite'">
        <Navbar />
        <h1>Admin</h1>
    </div>
    <div class="no-permission" v-else>
        <h1>Não tem permissão para acessar esta página!</h1>
        <a href="/">Voltar para a pagina inicial</a>
    </div>
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';
    const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'));

    let logged = localStorage.getItem('token');
</script>

<style scoped>
.no-permission{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 90dvh;
}

.no-permission a{
    text-decoration: none;
    color: var(--cor-primaria);
    font-weight: 600;
    letter-spacing: 0.05rem;
    font-size: 20px;
}
</style>