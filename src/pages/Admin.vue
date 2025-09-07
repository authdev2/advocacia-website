<template>
    <div class="container-limited" v-if="logged === 'LoginAceite'">
        <header>
            <div class="left">
                <h1>Painel de Administração</h1>
            </div>
            <div class="right">
                <button @click="logout">Sair</button>
            </div>
        </header>

        <h2>Gestão de Notícias</h2>

        <div class="box-container">
            <div class="box">
                <div class="icon">
                    <User />
                </div>
                <h3>Adicionar Notícia</h3>
            </div>
            <div class="box">
                <div class="icon">
                    <User />
                </div>
                <h3>Atualizar Notícia</h3>
            </div>

            <div class="box">
                <div class="icon">
                    <User />
                </div>
                <h3>Eliminar Notícia</h3>
            </div>
        </div>

        <h2>Gestão de Utilizadores</h2>

        <div class="box-container">
            <div class="box" @click="addUserModal = true">
                <div class="icon">
                    <User />
                </div>
                <h3>Adicionar Utilizador</h3>
            </div>
            <div class="box" @click="getAllUsers">
                <div class="icon">
                    <User />
                </div>
                <h3>Atualizar Utilizador</h3>
            </div>
            <div class="box" @click="deleteUserModal = true">
                <div class="icon">
                    <User />
                </div>
                <h3>Eliminar Utilizador</h3>
            </div>
        </div>

        <ModalAdmin :isOpen="addUserModal" :title="'Adicionar Utilizador'">
            <template #content>
                <form action="">
                    <input type="email" placeholder="Digite o email" v-model="userModal.email"></input>
                    <input type="password" placeholder="Digite a senha" v-model="userModal.password"></input>
                    <ErrorMessage :errorMessage="userModal.errorText" v-if="errorMessage" />
                    <button type="submit" @click.prevent="addUser">Adicionar</button>
                    <button type="button" @click="addUserModal = false">Cancelar</button>
                </form>
            </template>
        </ModalAdmin>

        <ModalAdmin :isOpen="updateUserModal" :title="'Atualizar Utilizador'">
            <template #content>
                <div class="user-container">
                    <div class="user" v-for="user in allUsers" :key="user.email">
                        <span>{{ user.email }}</span>
                    </div>
                </div>
            </template>
        </ModalAdmin>

        <ModalAdmin :isOpen="deleteUserModal" :title="'Eliminar Utilizador'">
            <template #content>
                <form action="">
                    <input type="email" placeholder="Digite o email" v-model="userModal.email"></input>
                    <ErrorMessage :errorMessage="userModal.errorText" v-if="errorMessage" />
                    <button type="submit" @click.prevent="deleteUser">Eliminar</button>
                    <button type="button" @click="deleteUserModal = false">Cancelar</button>
                </form>
            </template>
        </ModalAdmin>

    </div>
    <div class="no-permission" v-else>
        <h1>Não tem permissão para acessar esta página!</h1>
        <a href="/">Voltar para a pagina inicial</a>
    </div>


</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import ErrorMessage from '../components/ErrorMessage.vue';
import User from '../components/Icons/User.vue';
import ModalAdmin from '../components/ModalAdmin.vue';
let logged = localStorage.getItem('token');
let addUserModal = ref(false);
let deleteUserModal = ref(false);
let updateUserModal = ref(false);
const router = useRouter();
let errorMessage = ref(false);
let userModal = reactive({
    email: '',
    password: '',
    errorText: ''
});

let allUsers = ref([]);

function logout() {
    localStorage.removeItem('token');
    router.push('/');
}

async function addUser() {

    try {
        if (userModal.email === '' || userModal.password === '') {
            errorMessage.value = true;
            userModal.errorText = 'Por favor, preencha todos os campos';
            return;
        }
        if (!userModal.email.includes('@') || !userModal.email.includes('.')) {
            errorMessage.value = true;
            userModal.errorText = 'Por favor, insira um email válido';
            return;
        }
        const response = await fetch(`http://localhost:3000/login/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userModal.email, password: userModal.password })
        });
        const data = await response.json();

        if (data.success) {
            errorMessage.value = true;
            userModal.errorText = 'Utilizador adicionado com sucesso';
            userModal.email = '';
            userModal.password = '';
        } else {
            errorMessage.value = true;
            userModal.errorText = 'Erro ao adicionar utilizador';
        }
    } catch (error) {
        console.log(error);
    }


}

async function deleteUser() {
    let response = await fetch(`http://localhost:3000/login/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: userModal.email })
    });
    let data = await response.json();
    if (data.success) {
        errorMessage.value = true;
        userModal.errorText = 'Utilizador eliminado com sucesso';
    } else {
        errorMessage.value = true;
        userModal.errorText = 'Erro ao eliminar utilizador';
    }
}


async function getAllUsers() {
    updateUserModal.value = true;
    console.log('getAllUsers');
    let response = await fetch(`http://localhost:3000/login/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();
    allUsers.value = data.result;
    console.log(allUsers.value);
}
</script>

<style scoped>
.no-permission {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    height: 90dvh;
    text-align: center;
}

.no-permission h1 {
    font-size: 2.5rem;
    color: var(--cor-branca);
    margin-bottom: 20px;
}

.no-permission a {
    text-decoration: none;
    color: var(--cor-primaria);
    font-weight: 600;
    font-size: 1.2rem;
    padding: 12px 24px;
    border: 2px solid var(--cor-primaria);
    border-radius: 8px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--cor-fundo);
    margin-bottom: 40px;
    border: 1px solid var(--cor-cinza-escuro);
    padding: 30px;
    border-radius: 12px;
}

header .left h1 {
    font-size: 2rem;
    color: var(--cor-branca);
    margin: 0;
    font-weight: 700;
}

.right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.right span {
    color: var(--cor-branca);
    font-size: 1.1rem;
    font-weight: 500;
}

.right button {
    padding: 10px 20px;
    background: transparent;
    border: 1px solid var(--cor-cinza-escuro);
    border-radius: 8px;
    cursor: pointer;
    color: var(--cor-branca);
    font-size: 14px;
    font-weight: 600;
}

.container-limited h2 {
    font-size: 1.8rem;
    color: var(--cor-branca);
    margin-bottom: 30px;
    font-weight: 600;
    border-bottom: 2px solid var(--cor-primaria);
    padding-bottom: 10px;
    display: inline-block;
}

.box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-bottom: 50px;
}

.box {
    border: 1px solid var(--cor-cinza-escuro);
    border-radius: 12px;
    padding: 30px;
    background: var(--cor-fundo);
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    min-height: 120px;
    flex: 1;
}

.box:hover {
    border-color: var(--cor-primaria);
}

.icon {
    width: 50px;
    height: 50px;
    background: var(--cor-primaria);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.box h3 {
    color: var(--cor-branca);
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
}


form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

form input {
    padding: 15px 20px;
    border: 1px solid var(--cor-cinza-escuro);
    border-radius: 8px;
    background: var(--cor-fundo);
    color: var(--cor-branca);
    font-size: 16px;
}

form input:focus {
    border-color: var(--cor-primaria);
}

form input::placeholder {
    color: var(--cor-cinza-claro);
}

form button {
    padding: 15px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    margin-top: 10px;
}

form button[type="submit"] {
    background: var(--cor-primaria);
    color: white;
}

form button[type="button"] {
    background: transparent;
    color: var(--cor-cinza-claro);
    border: 1px solid var(--cor-cinza-escuro);
}

.user{
    border: 1px solid var(--cor-cinza-escuro);
    padding: 15px;
}

@media (max-width: 768px) {

    header {
        flex-direction: column;
        gap: 20px;
    }

    .box-container {
        flex-direction: column;
    }
}
</style>