<template>
    <div class="grids">
        <div class="photo-grid">
            <Skeleton :height="400" />
            <Skeleton :height="600" />
        </div>
        <div class="photo-grid">
            <Skeleton :height="600" />
            <Skeleton :height="600" />
        </div>
        <div class="photo-grid">
            <Skeleton :height="500" />
            <Skeleton :height="700" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grids {
    width: 100%;
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