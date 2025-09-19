<template>
  <div
    v-if="logged === 'LoginAceite'"
    class="container-limited"
  >
    <header>
      <div class="left">
        <h1>{{ $t('admin.painelAdministracao') }}</h1>
      </div>
      <div class="right">
        <button @click="logout">
          {{ $t('admin.sair') }}
        </button>
      </div>
    </header>

    <h2>{{ $t('admin.gestaoNoticias') }}</h2>

    <div class="box-container">
      <div
        class="box"
        @click="addNewsModal = true"
      >
        <div class="icon">
          <User />
        </div>
        <h3>{{ $t('admin.adicionarNoticia') }}</h3>
      </div>
      <div
        class="box"
        @click="updateNewsModal = true"
      >
        <div class="icon">
          <User />
        </div>
        <h3>{{ $t('admin.atualizarNoticia') }}</h3>
      </div>

      <div
        class="box"
        @click="deleteNewsModal = true"
      >
        <div class="icon">
          <User />
        </div>
        <h3>{{ $t('admin.eliminarNoticia') }}</h3>
      </div>
    </div>

    <h2>{{ $t('admin.gestaoUtilizadores') }}</h2>

    <div class="box-container">
      <div
        class="box"
        @click="addUserModal = true"
      >
        <div class="icon">
          <User />
        </div>
        <h3>{{ $t('admin.adicionarUtilizador') }}</h3>
      </div>
      <div
        class="box"
        @click="getAllUsers"
      >
        <div class="icon">
          <User />
        </div>
        <h3>{{ $t('admin.atualizarUtilizador') }}</h3>
      </div>
      <div
        class="box"
        @click="deleteUserModal = true"
      >
        <div class="icon">
          <User />
        </div>
        <h3>{{ $t('admin.eliminarUtilizador') }}</h3>
      </div>
    </div>

    <ModalAdmin
      :is-open="addUserModal"
      :title="$t('admin.adicionarUtilizador')"
      @close="addUserModal = false"
    >
      <template #content>
        <form action="">
          <input
            v-model="userModal.email"
            type="email"
            :placeholder="$t('admin.digiteEmail')"
          />
          <input
            v-model="userModal.password"
            type="password"
            :placeholder="$t('admin.digiteSenha')"
          />
          <ErrorMessage
            v-if="errorMessage"
            :error-message="userModal.errorText"
          />
          <button
            type="submit"
            @click.prevent="addUser"
          >
            {{ $t('admin.adicionar') }}
          </button>
          <button
            type="button"
            @click="addUserModal = false"
          >
            {{ $t('admin.cancelar') }}
          </button>
        </form>
      </template>
    </ModalAdmin>

    <ModalAdmin
      :is-open="updateUserModal"
      :title="'Atualizar Utilizador'"
      @close="updateUserModal = false"
    >
      <template #content>
        <div class="user-container">
          <div
            v-for="user in allUsers"
            :key="user.email"
            class="user"
          >
            <details>
              <summary>{{ user.email }}</summary>
              <form action="">
                <span>Novo email:</span>
                <input
                  v-model="newEmail"
                  type="email"
                />
                <button @click="updateUser(user.email, newEmail)">
                  Atualizar email
                </button>
              </form>
            </details>
          </div>
        </div>
      </template>
    </ModalAdmin>

    <ModalAdmin
      :is-open="deleteUserModal"
      :title="'Eliminar Utilizador'"
      @close="deleteUserModal = false"
    >
      <template #content>
        <form action="">
          <input
            v-model="userModal.email"
            type="email"
            placeholder="Digite o email"
          />
          <ErrorMessage
            v-if="errorMessage"
            :error-message="userModal.errorText"
          />
          <button
            type="submit"
            @click.prevent="deleteUser"
          >
            Eliminar
          </button>
          <button
            type="button"
            @click="deleteUserModal = false"
          >
            Cancelar
          </button>
        </form>
      </template>
    </ModalAdmin>

    <ModalAdmin
      :is-open="addNewsModal"
      :title="'Adicionar Notícia'"
      @close="addNewsModal = false"
    >
      <template #content>
        <form action="">
          <input
            v-model="newsModal.title"
            type="text"
            placeholder="Digite o titulo"
          />
          <input
            v-model="newsModal.description"
            type="text"
            placeholder="Digite a descricao"
          />
          <input
            v-model="newsModal.image"
            type="text"
            placeholder="Digite a imagem"
          />
          <ErrorMessage
            v-if="errorMessage"
            :error-message="newsModal.errorText"
          />

          <button
            type="submit"
            @click.prevent="addNews"
          >
            Adicionar
          </button>
          <button
            type="button"
            @click="addNewsModal = false"
          >
            Cancelar
          </button>
        </form>
      </template>
    </ModalAdmin>


    <ModalAdmin
      :is-open="updateNewsModal"
      :title="'Atualizar Notícia'"
      @close="updateNewsModal = false"
    >
      <template #content>
        <div class="container-news">
          <details
            v-for="news in allNews"
            :key="news.id"
          >
            <summary>{{ news.nomeNoticia }}</summary>
            <div class="container-news-details">
              <h3>{{ news.nomeNoticia }}</h3>
              <p>{{ news.descricaoNoticia }}</p>
              <img
                :src="news.imagemNoticia"
                alt="Imagem da notícia"
              />

              <div class="update-news">
                <form action="">
                  <input
                    v-model="novoNomeNoticia"
                    type="text"
                    placeholder="Digite o novo nome da notícia"
                  />
                  <input
                    v-model="novoDescricaoNoticia"
                    type="text"
                    placeholder="Digite a nova descrição da notícia"
                  />
                  <input
                    v-model="novoImagemNoticia"
                    type="text"
                    placeholder="Digite a nova imagem da notícia"
                  />
                  <button
                    type="submit"
                    @click="updateNews(novoNomeNoticia, novoDescricaoNoticia, novoImagemNoticia, news.id)"
                  >
                    Atualizar
                  </button>
                </form>
              </div>
            </div>
          </details>
        </div>
      </template>
    </ModalAdmin>

    <ModalAdmin
      :is-open="deleteNewsModal"
      :title="'Eliminar Notícia'"
      @close="deleteNewsModal = false"
    >
      <template #content>
        <div class="container-news">
          <details
            v-for="news in allNews"
            :key="news.id"
          >
            <summary>{{ news.nomeNoticia }}</summary>
            <div class="container-news-details">
              <h3>{{ news.nomeNoticia }}</h3>
              <p>{{ news.descricaoNoticia }}</p>
              <img
                v-lazy="news.imagemNoticia"
                alt="Imagem da notícia"
              />
              <div class="btn-delete">
                <button @click="deleteNews(news.nomeNoticia)">
                  Eliminar
                </button>
              </div>
            </div>
          </details>
        </div>
      </template>
    </ModalAdmin>
  </div>
  <div
    v-else
    class="no-permission"
  >
    <h1>{{ $t('admin.semPermissao') }}</h1>
    <a href="/">{{ $t('admin.voltarInicio') }}</a>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';
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

let novoNomeNoticia = ref('');
let novoDescricaoNoticia = ref('');
let novoImagemNoticia = ref('');

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
  try {
    const response = await fetch('http://localhost:3000/login/create', {
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
  try {
    let response = await fetch('http://localhost:3000/login/delete', {
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
  } catch (error) {
    console.log(error);
  }
}


async function getAllUsers() {
  updateUserModal.value = true;
  try {
    let response = await fetch('http://localhost:3000/login/users');
    let data = await response.json();
    allUsers.value = data.result;

  } catch (error) {
    console.log(error);
  }
}

async function updateUser(email, newEmail) {
  try {
    let response = await fetch('http://localhost:3000/login/update', {
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
  } catch (error) {
    console.log(error);
  }
}

function RestoreObject() {
  newsModal.title = '';
  newsModal.description = '';
  newsModal.image = '';
}

async function addNews() {

  if (!newsModal.image.includes('http')) {
    errorMessage.value = true;
    newsModal.errorText = 'Por favor, insira uma imagem válida';
    return;
  }

  try {
    let response = await fetch('http://localhost:3000/noticias/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: newsModal.title, description: newsModal.description, image: newsModal.image })
    });
    let data = await response.json();
    if (data.success) {
      errorMessage.value = true;
      newsModal.errorText = 'Notícia adicionada com sucesso';
      RestoreObject();
    } else {
      errorMessage.value = true;
      newsModal.errorText = 'Erro ao adicionar notícia';
      RestoreObject();
    }
  } catch (error) {
    console.log(error);
  }
}

async function GetAllNews() {
  try {

    let response = await fetch('http://localhost:3000/noticias/six');
    let data = await response.json();
    allNews.value = data.result;

  } catch (error) {
    console.log(error);
  }
}

async function deleteNews(nomeNoticia) {
  try {
    let response = await fetch('http://localhost:3000/noticias/delete', {
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


async function updateNews(novoNomeNoticia, novoDescricaoNoticia, novoImagemNoticia, id) {
  try {
    let response = await fetch('http://localhost:3000/noticias/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newNomeNoticia: novoNomeNoticia, newDescricaoNoticia: novoDescricaoNoticia, newImagemNoticia: novoImagemNoticia, id: id })
    });
    let data = await response.json();
    if (data.success) {
      errorMessage.value = true;
      newsModal.errorText = 'Notícia atualizada com sucesso';
    } else {
      errorMessage.value = true;
      newsModal.errorText = 'Erro ao atualizar notícia';
    }
  } catch (error) {
    console.log(error);
  }
}


onMounted(() => {
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
    margin-bottom: 10px;
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
    margin-top: 10px;
}

.btn-delete {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.btn-delete {
    margin-bottom: 20px;
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