<script setup lang="ts">
import type Photo from '~/types/photo';

const { photo } = defineProps<{
    photo: Photo
}>()
const emit = defineEmits(['closeModal'])

</script>

<template>
    <div class="modal">
        <div class="modal-inner">
            <div @click="emit('closeModal')" class="backdrop"></div>
            <div class="modal-body">
                <a @click="emit('closeModal')" class="modal-close">
                    <i class="icon pi pi-times"></i>
                </a>
                <div class="modal-content">
                    <NuxtImg class="img" loading="lazy" :style="{ aspectRatio: photo.width / photo.height }"
                        :src="photo.urls.regular" />
                    <div class="info">
                        <h4>{{ photo.user.name }}</h4>
                        <h6>{{ !!photo?.location?.city ? photo?.location?.city + "," : "" }}{{ " " +
                            (photo?.location?.country ?? "") }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    z-index: 1000;
    
    .modal-inner {
        position: relative;
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.25);
    }

    .modal-body {
        padding: 5rem 0;
        width: 100%;
        max-width: 425px;
        position: relative;

        .modal-close {
            cursor: pointer;
            position: absolute;
            top: 1rem;
            right: -4rem;
            
            color: white;
        }

        @media (min-width: 768px) {
            .modal-close {
                top: 2rem;
                right: -4rem;
            }
        }

        @media (min-width: 1024px) {
            .modal-close {
                top: 2rem;
                right: -4rem;
            }
        }

        .modal-content {
            width: 100%;
            position: relative;
            margin: 0 auto;
            overflow: hidden;
            border-radius: 8px;
            background-color: white;

            img {
                width: 100%;
                height: auto;
            }

            .info {
                padding-top: 1rem;
                padding-left: 2rem;
                padding-right: 2rem;
                padding-bottom: 1rem;
                display: flex;
                flex-direction: column;
                gap: 4px;

                h4 {
                    margin: 0;
                    font-family: "roboto";
                    font-size: 18px;
                    line-height: 20px;
                    color: #25385D;
                }

                h6 {
                    font-weight: 400;
                    margin: 0 0 1rem 0;
                    font-family: "roboto";
                    font-size: 14px;
                    color: #6C7B8F;
                    line-height: 1.3333333333;
                }
            }

        }
    }

        @media (min-width: 768px) {
            .modal-body {
                max-width: 464px;
            }
        }
    
        @media (min-width: 1024px) {
            .modal-body {
                max-width: 624px;
            }
        }
}
</style>