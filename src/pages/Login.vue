<template>
    <Navbar />
    <div class="login-container container-limited">
        <div class="right">
            <div class="title">
                <h2>Sistema de Gestão</h2>
                <p>Acesso exclusivo para administradores</p>
            </div>
            <form action="POST" @submit.prevent="Login">
                <div class="form-container">
                    <div class="input-email">
                        <input type="email" placeholder="Digite o teu email" required v-model="email">

                        <div class="text">
                            <span>Qual é o seu email?</span>
                        </div>

                    </div>
                    <div class="input-password">
                        <input type="password" placeholder="Digite a tua senha" required v-model="password">
                        <div class="text">
                            <span>Qual é a sua senha?</span>
                        </div>
                    </div>
                    <div class="error-message" v-if="errorMessage">
                        <ErrorMessage :errorMessage="errorMessageText" />
                    </div>

                    <div class="contact-support">
                        <span>Não tem acesso? Contacte o <a href="https://wa.me/351912345678">suporte</a></span>
                    </div>
                    <button type="submit" @click.prevent="Login">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import ErrorMessage from '../components/ErrorMessage.vue';
import { ref } from 'vue';
let email = ref('');
let password = ref('');
import { useRouter } from 'vue-router';
const router = useRouter();
let errorMessage = ref(false);
let errorMessageText = ref('');

function validadeEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

}

async function Login() {

    if (!validadeEmail(email.value)) {
        errorMessage.value = true;
        errorMessageText.value = 'Por favor, insira um email válido';
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        });
        const data = await response.json();
        console.log(data.token);
        if (data.success) {
            router.push('/admin');
            localStorage.setItem('token', "LoginAceite");
        }
    } catch (error) {
        console.log("Api esta a falhar");
    }
}
</script>

<style scoped>
.title {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input-email {
    position: relative;
}

.input-password {
    position: relative;
}

.input-email .text {
    position: absolute;
    top: -15px;
    left: 20px;
    font-size: 16px;
    color: var(--cor-cinza);
    font-size: 12px;
    background: var(--cor-fundo);
    padding: 5px;
}

.input-password .text {
    position: absolute;
    top: -15px;
    left: 20px;
    font-size: 16px;
    color: var(--cor-cinza);
    font-size: 12px;
    background: var(--cor-fundo);
    padding: 5px;
}

.title p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--cor-cinza);
    font-weight: 600;
    letter-spacing: 0.05rem;
    max-width: 600px;
    margin-bottom: 20px;
}

.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70dvh;
    margin-top: 100px;
    border-radius: 10px;
    border: 1px solid var(--cor-cinza-escuro);
    padding: 20px;
}

.left img {
    width: 700px;
    height: 600px;
    object-fit: cover;
}

.form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-container input {
    width: 600px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--cor-cinza-escuro);
    background: transparent;
    padding: 25px;
    color: var(--cor-branca);
}

.form-container button {
    width: 600px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--cor-cinza-escuro);
    padding: 10px;
    color: var(--cor-branca);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.05rem;
    background: var(--cor-gradiante);
    border: none;
}

.form-container button:hover {
    background: var(--cor-cinza-escuro);
}

.error-message span {
    color: var(--cor-vermelha);
}

.contact-support span a {
    text-decoration: none;
    color: var(--cor-primaria);
    font-weight: 600;
    letter-spacing: 0.05rem;
    font-size: 16px;
}
</style>
