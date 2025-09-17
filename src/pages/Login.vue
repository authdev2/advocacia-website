<template>
    <Navbar />
    <div class="login-container container-limited">
        <div class="right">
            <div class="title">
                <h2>{{ $t('login.sistemaGestao') }}</h2>
                <p>{{ $t('login.acessoExclusivo') }}</p>
            </div>
            <form action="POST" @submit.prevent="Login">
                <div class="form-container">
                    <div class="input-email">
                        <input type="email" :placeholder="$t('login.digiteEmail')" required v-model="email">

                        <div class="text">
                            <span>{{ $t('login.qualEmail') }}</span>
                        </div>

                    </div>
                    <div class="input-password">
                        <input type="password" :placeholder="$t('login.digiteSenha')" required v-model="password">
                        <div class="text">
                            <span>{{ $t('login.qualSenha') }}</span>
                        </div>
                    </div>
                    <div class="error-message" v-if="errorMessage">
                        <ErrorMessage :errorMessage="errorMessageText" />
                    </div>

                    <div class="contact-support">
                        <span>{{ $t('login.naoTemAcesso') }} <a href="https://wa.me/351912345678">{{ $t('login.suporte') }}</a></span>
                    </div>
                    <button type="submit" @click.prevent="Login">{{ $t('login.login') }}</button>
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

.input-email, .input-password {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

@media (max-width: 768px) {
    .login-container {
        margin-top: 60px;
        padding: 15px;
        height: 60dvh;
    }
    
    .form-container input,
    .form-container button {
        width: 400px;
        height: 45px;
    }
    
    .form-container input {
        padding: 20px;
    }
    
    .title h2 {
        font-size: 24px;
    }
    
    .title p {
        font-size: 14px;
        max-width: 400px;
    }
}

@media (max-width: 480px) {
    .login-container {
        margin-top: 40px;
        padding: 10px;
        height: 50dvh;
        border: none;
    }
    
    .form-container {
        gap: 15px;
    }
    
    .form-container input,
    .form-container button {
        width: 100%;
        max-width: 350px;
        height: 50px;
    }
    
    .form-container input {
        padding: 15px;
        font-size: 16px;
    }
    
    .form-container button {
        font-size: 14px;
        height: 50px;
    }
    
    .title h2 {
        font-size: 20px;
    }
    
    .title p {
        font-size: 12px;
        max-width: 300px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
    .input-email .text,
    .input-password .text {
        font-size: 10px;
        left: 15px;
        top: -12px;
    }
    
    .contact-support span {
        font-size: 12px;
    }
    
    .contact-support span a {
        font-size: 12px;
    }
}

</style>


