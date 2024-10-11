<template>

    <div class="error">
        <p>{{ error.statusCode }}</p>
        <p>Oops.</p>
        <p>{{ error.message }}</p>
    </div>

</template>

<script setup>
defineProps(['error'])
</script>

<style lang="scss" scoped>
.error {
    max-width: 576px;
    margin: 0 auto;
    text-align: center;
    margin-top: 28px;

    p:first-child {
        margin-top: 28px;
        font-size: larger;
        font-weight: bold;
    }

    p:nth-child(2) {
        margin-top: 28px;
        font-size: large;

    }

    p:last-child {
        margin-top: 28px;
    }
}
</style>