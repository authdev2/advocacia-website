<template>
    <div class="modal" v-if="props.isOpen">
        <div class="create-user">
            <h1>{{ props.title }}</h1>
            <button @click="closeModal">
                X
            </button>
        </div>

        <slot name="content"></slot>

    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    title: String,
    isOpen: Boolean,
})

const emit = defineEmits(
    ['close']
)

function closeModal() {
    emit('close')
}

</script>

<style scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background: var(--cor-fundo);
    border: 1px solid var(--cor-cinza-escuro);
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    max-height: 800px;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--cor-primaria) var(--cor-fundo);
}

.create-user {
    padding: 30px;
    background: var(--cor-gradiante);
    border-radius: 12px 12px 0 0;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.create-user button {
    background: var(--cor-cinza-escuro);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: var(--cor-branca);
}

.create-user button:hover {
    background: var(--cor-primaria);
}

.create-user h1 {
    color: var(--cor-branca);
    font-size: 1.5rem;
    margin: 0;
    font-weight: 600;
}
</style>