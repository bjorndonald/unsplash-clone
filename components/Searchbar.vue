<script setup lang="ts">
import 'primeicons/primeicons.css';
import { ref } from 'vue';

const searchText = ref("");
</script>

<template>
    <form>
        <i class="icon pi pi-search"></i>
        <input type="text" name="searchText" id="searchText">
    </form>
</template>

<style lang="scss" scoped>
form {
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 0px 16px 12px;
    border-radius: 5px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    box-shadow: 0;

    i {
        color: #333333;
        font-size: small;
    }

    input {
        appearance: none;
        border: none;
        outline: none;
        background-color: transparent;
        flex-grow: 1;

    }
}
</style>
