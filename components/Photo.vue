<script setup lang="ts">
import 'primeicons/primeicons.css';
import type Photo from '~/types/photo';

const { photo } = defineProps<{
    photo: Photo
}>()

const { data, error } = await useFetch<Photo>('/api/photo/' + photo.id)
if (!!error.value) {
    throw createError({ statusCode: 500, message: "The seems to be a problem" })
}

</script>

<template>
    <div class="photo">
        <div :style="{ width: '100%', aspectRatio: photo.width / photo.height }"></div>
        <NuxtImg v-if="!!data" class="img" loading="lazy" :style="{ aspectRatio: photo.width / photo.height }"
            :src="photo.urls.regular" />
        <div v-if="!data" class="skeleton">
            <div></div>
            <div></div>
        </div>
        <div v-if="!!data" class="overlay">
            <h4 v-if="!!data">{{ photo.user.name }}</h4>
            <h6 v-if="!!data">{{ !!data?.location?.city ? data?.location?.city + "," : "" }}{{ " " +
                (data?.location?.country ?? "") }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.photo {
    width: 100%;
    background-color: #F6F6F6;
    position: relative;
    height: min-content;
    overflow: hidden;
    border-radius: 0.5rem;

    img {
        transition: .3s;
    }

    .placeholder {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        z-index: 3;
    }

    .skeleton {
        width: 100%;
        height: 100%;
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

    .overlay {
        position: absolute;

        color: white;
        display: flex;
        background: rgb(0, 0, 0);
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 69%, rgba(0, 0, 0, 0.6503195028011204) 100%);
        justify-content: flex-end;
        flex-direction: column;
        padding: 0 1rem 0 1rem;
        gap: 2px;
        //  transition: color .1s ease-in-out, opacity .1s ease-in-out;

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;

        h4 {
            margin: 0;
            font-family: "roboto";
            font-size: 15px;
            line-height: 20px;
        }

        h6 {
            margin: 0 0 1rem 0;
            font-family: "roboto";
            font-size: 12px;
            line-height: 1.3333333333;
        }
    }
}
</style>
