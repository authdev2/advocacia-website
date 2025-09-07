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
            <div class="box" @click="addNewsModal = true">
                <div class="icon">
                    <User />
                </div>
                <h3>Adicionar Notícia</h3>
            </div>
            <div class="box" @click="updateNewsModal = true">
                <div class="icon">
                    <User />
                </div>
                <h3>Atualizar Notícia</h3>
            </div>

            <div class="box" @click="deleteNewsModal = true">
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
                        <details>
                            <summary>{{ user.email }}</summary>
                            <form action="">
                                <span>Novo email:</span>
                                <input type="email" v-model="newEmail"></input>
                                <button @click="updateUser(user.email, newEmail)">Atualizar email</button>
                            </form>
                        </details>

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

        <ModalAdmin :isOpen="addNewsModal" :title="'Adicionar Notícia'">
            <template #content>
                <form action="">
                    <input type="text" placeholder="Digite o titulo" v-model="newsModal.title"></input>
                    <input type="text" placeholder="Digite a descricao" v-model="newsModal.description"></input>
                    <input type="text" placeholder="Digite a imagem" v-model="newsModal.image"></input>
                    <ErrorMessage :errorMessage="newsModal.errorText" v-if="errorMessage" />

                    <button type="submit" @click.prevent="addNews">Adicionar</button>
                    <button type="button" @click="addNewsModal = false">Cancelar</button>
                </form>
            </template>
        </ModalAdmin>


        <ModalAdmin :isOpen="updateNewsModal" :title="'Atualizar Notícia'">
            <template #content>
                <div class="container-news">
                    <details v-for="news in allNews" :key="news.id">
                        <summary>{{ news.nomeNoticia }}</summary>
                        <div class="container-news-details">
                            <h3>{{ news.nomeNoticia }}</h3>
                            <p>{{ news.descricaoNoticia }}</p>
                            <img :src="news.imagemNoticia" alt="Imagem da notícia">
                        </div>
                    </details>
                </div>


            </template>
        </ModalAdmin>

        <ModalAdmin :isOpen="deleteNewsModal" :title="'Eliminar Notícia'">
            <template #content>
                <div class="container-news">
                    <details v-for="news in allNews" :key="news.id">
                        <summary>{{ news.nomeNoticia }}</summary>
                        <div class="container-news-details">
                            <h3>{{ news.nomeNoticia }}</h3>
                            <p>{{ news.descricaoNoticia }}</p>
                            <img :src="news.imagemNoticia" alt="Imagem da notícia">
                            <div class="btn-delete">
                                <button @click="deleteNews(news.nomeNoticia)">Eliminar</button>
                            </div>
                        </div>
                    </details>
                </div>
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
import { ref, reactive, onMounted, watch } from 'vue';
const router = useRouter();
import ErrorMessage from '../components/ErrorMessage.vue';
import User from '../components/Icons/User.vue';
import ModalAdmin from '../components/ModalAdmin.vue';
let logged = localStorage.getItem('token');
let addUserModal = ref(false);
let deleteUserModal = ref(false);
let updateUserModal = ref(false);
let errorMessage = ref(false);
let allNews = ref([]);
let addNewsModal = ref(false);
let updateNewsModal = ref(false);
let deleteNewsModal = ref(false);

let userModal = reactive({
    email: '',
    password: '',
    errorText: ''
});

let newsModal = reactive({
    title: '',
    description: '',
    image: '',
    errorText: ''
});


let allUsers = ref([]);

let newEmail = ref('');

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

async function updateUser(email, newEmail) {
    let response = await fetch(`http://localhost:3000/login/update`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, newEmail: newEmail })
    });
    let data = await response.json();
    if (data.success) {
        errorMessage.value = true;
        userModal.errorText = 'Utilizador atualizado com sucesso';
    } else {
        errorMessage.value = true;
        userModal.errorText = 'Erro ao atualizar utilizador';
    }

    console.log(email, newEmail);
}

function RestoreObject() {
    newsModal.title = '';
    newsModal.description = '';
    newsModal.image = '';
}

async function addNews() {
    let response = await fetch(`http://localhost:3000/noticias/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: newsModal.title, description: newsModal.description, image: newsModal.image })
    });
    let data = await response.json();
    if (data.success) {
        console.log(data);
        errorMessage.value = true;
        newsModal.errorText = 'Notícia adicionada com sucesso';
        RestoreObject();
    } else {
        errorMessage.value = true;
        newsModal.errorText = 'Erro ao adicionar notícia';
        RestoreObject();
    }
}

async function GetAllNews() {
    let response = await fetch(`http://localhost:3000/noticias/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await response.json();
    allNews.value = data.result;
    console.log(allNews.value);
}

async function deleteNews(nomeNoticia) {
    try {
        let response = await fetch(`http://localhost:3000/noticias/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nomeNoticia: nomeNoticia })
        });
        let data = await response.json();
        if (data.success) {
            
            errorMessage.value = true;
            newsModal.errorText = 'Notícia eliminada com sucesso';
        } else {
            errorMessage.value = true;
            newsModal.errorText = 'Erro ao eliminar notícia';
        }
    } catch (error) {
        console.log(error);
    }
}


onMounted(() => {
    GetAllNews();
});

watch(allNews, () => {
    GetAllNews();
});
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

.user {
    border: 1px solid var(--cor-cinza-escuro);
    padding: 15px;
}

details {
    background: var(--cor-fundo);
    border: 1px solid var(--cor-cinza-escuro);
    border-radius: 8px;
    overflow: hidden;
}

summary {
    padding: 20px;
    color: var(--cor-branca);
    font-weight: 500;
    cursor: pointer;
    list-style: none;
    position: relative;
    background: var(--cor-fundo);
    transition: background 0.3s ease;
}

summary:hover {
    background: var(--cor-cinza-escuro);
}

summary::after {
    content: '+';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: var(--cor-primaria);
}

details[open] summary::after {
    content: '−';
}

.container-news {
    padding: 10px;
}

.container-news-details {
    padding: 0 30px;
}

.container-news-details img {
    width: 100%;
    max-width: 400px;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid var(--cor-cinza-escuro);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    display: block;
    margin: 0 auto 20px auto;
}
.btn-delete {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
.btn-delete button {
    padding: 15px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    margin-top: 10px;
    background: var(--cor-branca);
    color: var(--cor-preta);
    width: 100%;
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