<script setup lang="ts">

const { height } = defineProps<{
    height: number
}>()

</script>

<template>
    <div :style="{height: height+'px'}" class="skeleton">
        <div></div>
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
.skeleton {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding: 0 1rem 0 1rem;
    gap: 4px;

    div:first-child {
        width: 200px;
        background-color: #E7E7E7;
        height: 16px;
    }

    div:last-child {
        width: 140px;
        background-color: #E7E7E7;
        height: 16px;
    }
}
</style>