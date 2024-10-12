<script setup lang="ts">
import type Photo from '~/types/photo';

const { photos } = defineProps<{
    photos: Photo[]
}>()

const state = reactive<{photo: Photo | null}>({
    photo: null
})

const openModal = (photo: Photo) => {
    state.photo = photo
}
</script>

<template>
    <PhotoModal :photo="state.photo" @closeModal="state.photo = null" v-if="!!state.photo" />
    <div class="grids">
        <div class="photo-grid">
            <Photo :photo="photos[0]" @openModal="openModal" />
            <Photo @openModal="openModal" v-for="photo in photos.filter((x, i) => (i + 1) % 4 === 0)"
                :photo="photo" />
        </div>
        <div class="photo-grid">
            <Photo :photo="photos[1]" @openModal="openModal" />
            <Photo v-for="photo in photos.filter((x, i) => (i + 1) % 5 === 0)" :photo="photo"
                @openModal="openModal" />
        </div>
        <div class="photo-grid">
            <Photo :photo="photos[2]" @openModal="openModal" />
            <Photo v-for="photo in photos.filter((x, i) => (i + 1) % 6 === 0)" :photo="photo"
                @openModal="openModal" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
        .grids {
            width: 100%;
            max-width: 425px;
            margin: -40px auto 0 auto;
            display: grid;
            gap: 2rem;
            
            grid-template-columns: 1fr;
    
            .photo-grid {
                padding: 0 1rem;
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
        }
    
        @media (min-width: 768px) {
            .grids {
                max-width: 625px;
                grid-template-columns: 1fr 1fr;
            }
        }
    
        @media (min-width: 1024px) {
            .grids {
                max-width: 924px;
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
</style>