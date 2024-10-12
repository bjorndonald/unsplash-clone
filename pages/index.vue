<script setup>
const route = useRoute()

const { data, error } = await useFetch('/api/photo?search=' + route.query.search ?? "")
if (!!error.value) {
    throw createError({ statusCode: 500, message: "The seems to be a problem" })
}

</script>

<template>
    <header>
        <div>
            <Searchbar v-if="!route.query.search" />
            <h1 v-if="!!route.query.search">Search Results for <span>"{{ route.query.search }}"</span>
            </h1>
        </div>
    </header>
    <div class="content">
        <div class="grids">
            <div class="photo-grid">
                <Photo :photo="data.results[0]" />
                <Photo v-for="photo in data.results.filter((x, i) => (i + 1) % 4 === 0)" :photo="photo" />
            </div>
            <div class="photo-grid">
                <Photo :photo="data.results[1]" />
                <Photo v-for="photo in data.results.filter((x, i) => (i + 1) % 5 === 0)" :photo="photo" />
            </div>
            <div class="photo-grid">
                <Photo :photo="data.results[2]" />
                <Photo v-for="photo in data.results.filter((x, i) => (i + 1) % 6 === 0)" :photo="photo" />
            </div>
        </div>

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

    h1{
        width: 100%;
        text-align: left;
        font-family: "roboto";
        font-size: 40px;
        line-height: 1.2;
        font-weight: 700;
        color: #25385D;

        span{
            color: #6C7B8F;
        }
    }

    div {
        padding: 0 1rem;
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

        @media (min-width: 1024px) {
            div {
                max-width: 1024px;
            }
        }
}



.content {
    .grids {
        max-width: 835px;
        margin: -40px auto 0 auto;
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr;

        .photo-grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
    }

    @media (min-width: 768px) {
        .grids {
            grid-template-columns: 1fr 1fr;
        }
    }

        @media (min-width: 1024px) {
            .grids {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
}
</style>