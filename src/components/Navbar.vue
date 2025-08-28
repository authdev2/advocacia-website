<template>
    <nav>
        <div class="left">
            <div class="logo">
                <img src="../assets/logo.png" alt="logo"></img>
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
    </nav>
</template>

<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #84928D;
        padding: 15px;
        border-radius: 10px;
    }

    nav .left, nav .right{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    nav .left .links a{
        text-decoration: none;
        margin-left: 30px;
        padding: 10px;
        color: white;
        font-size: 16px;
    }

    nav .left .logo img{
        width: 30px;
        height: 30px;
    }

    nav .right img{
        width: 20px;
        height: 20px;
    }
</style>