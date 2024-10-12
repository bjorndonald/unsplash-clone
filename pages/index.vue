<script setup>
import { reactive } from 'vue'

const route = useRoute()

const { data, status, error } = await useFetch('/api/photo?search=' + route.query.search ?? "")
if (!!error.value) {
    throw createError({ statusCode: 500, message: "The seems to be a problem" })
}

</script>

<template>

    <header>
        <div>
            <Searchbar v-if="status === 'success' && !route.query.search" />
            <h1 v-if="status === 'pending'">Searching for <span>“{{ route.query.search }}”</span>
            </h1>
            <h1 v-if="status === 'success' && !!route.query.search">Search Results for <span>“{{ route.query.search
                    }}”</span>
            </h1>
        </div>
    </header>
    <div class="content">
        <Loading v-if="status === 'pending'" />
        <PhotoGrid v-if="status === 'success'" :photos="data.results" />
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
}

header {
    width: 100%;
    height: 240px;

    background-color: #DDE3EA;

    h1 {
        width: 100%;
        text-align: center;
        font-family: "roboto";
        font-size: 40px;
        line-height: 1.2;
        font-weight: 500;
        color: #25385D;

        span {
            color: #6C7B8F;
        }
    }

    @media (min-width: 1024px) {
        h1 {
            text-align: left;
        }
    }

    div {
        
        width: 100%;

        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 768px) {
        div {
            
            max-width: 768px;
        }
    }

    @media (min-width: 1025px) {
        div {
            padding: 0 1rem;
            max-width: 1024px;
        }
    }
}

.content{
    padding-bottom: 2rem;
}
</style>