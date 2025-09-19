<template>
  <div class="notfound-container">
    <h1>{{ $t('notfound.titulo') }}</h1>
    <p>{{ $t('notfound.mensagem') }}</p>
    <a href="/">{{ $t('notfound.voltarInicio') }}</a>
  </div>
</template>

<style scoped>
.notfound-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90dvh;
}

.notfound-container h1 {
    color: var(--cor-vermelha);
    font-size: 100px;
}

.notfound-container p {
    font-size: 40px;
}

.notfound-container a {
    font-size: 20px;
    color: var(--cor-primaria);
    text-decoration: none;
    border: 1px solid var(--cor-primaria);
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 40px;
}
</style>
