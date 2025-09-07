<template>
    <div class="error-message">
        <span>{{ errorMessage }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    errorMessage: String,
    
})
</script>

<style scoped>
.error-message {
    color: #ef4444;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding: 10px;
    background: rgba(239, 68, 68, 0.1);
    border-radius: 6px;
    border: 1px solid rgba(239, 68, 68, 0.2);
}

.success-message {
    color: #10b981;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding: 10px;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 6px;
    border: 1px solid rgba(16, 185, 129, 0.2);
}
</style>