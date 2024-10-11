<script setup>
    const {data, error} = await useFetch('/api/photo')
console.log(error)
    if(!data){
        throw createError({ statusCode: 500, message: "The seems to be a problem" })
    }

    console.log(data)
</script>

<template>
    <header>
        <div>
            <Searchbar />
        </div>
    </header>
</template>

<style lang="scss">
body{
    margin: 0;
}
header {
    width: 100%;
    height: 300px;

    background-color: #DDE3EA;

    div {
        max-width: 1024px;
        padding: 0 1rem;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>