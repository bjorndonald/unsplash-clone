<script setup lang="ts">
import 'primeicons/primeicons.css';

const onSubmit = (submitEvent: Event) => {
    const form = submitEvent.target as HTMLFormElement;
    const formData = new FormData(form);
    window.location.href = "/?search=" + formData.get("searchText")
}

</script>

<template>
    <form @submit.prevent="onSubmit">
        <i class="icon pi pi-search"></i>
        <input placeholder="Search for photo" type="text" name="searchText" id="searchText">
    </form>
</template>

<style lang="scss" scoped>
form {
    background-color: white;
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 0px 16px 16px;
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
        height: 100%;
        font-size: 16px;
        outline: none;
        background-color: transparent;
        flex-grow: 1;

    }
}
</style>
