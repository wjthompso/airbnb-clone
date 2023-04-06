<template>
        <button class="open-filters-modal-btn" @click="toggleFilterModal">
            <svg class="open-fiters-modal-btn-svg" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill:currentColor" aria-hidden="true" role="presentation" focusable="false"><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
        <span class="open-filters-modal-btn-spn">Filters</span>
    </button>
</template>

<script>
export default {
    name: "FiltersButton",
}
</script>

<style scoped lang="scss">
@import "@/scss/variables.scss";

@media only screen and (max-width: $mobile-view) {
    button.open-filters-modal-btn {
    display: flex;
    align-self: center;
    justify-self: center;
    // position: absolute;
    right: 0.6rem;
    top: 0.5rem;
    /* align-items: center; */
    background-color: white;
    border: 0.5px solid rgb(196, 196, 196);
    border-radius: 50%;
    padding: 0.5rem;
    font-size: calc(var(--FS-S));
    font-weight: 600;
    color: black;
    cursor: pointer;
    margin-right: 0.5rem;
    // width: 6rem;
}

    button.open-filters-modal-btn svg {
        // margin-right: 0.5rem;
        height:18px;
        width:18px;
        stroke-width: 5px;
    }
    button.open-filters-modal-btn span {
        display: none;
    }
}

@media only screen and (min-width: calc($mobile-view + 1px)) {
    button.open-filters-modal-btn {
    display: inline-block;
    /* align-items: center; */
    background-color: white;
    border: 0.5px solid rgb(196, 196, 196);
    border-radius: 0.75rem;
    padding: 1rem;
    font-size: calc(var(--FS-S));
    font-weight: 600;
    color: black;
    cursor: pointer;
    width: 6rem;
}

    button.open-filters-modal-btn svg {
        margin-right: 0.5rem;
        height:14px;
        width:14px
}

    button.open-filters-modal-btn svg,
    button.open-filters-modal-btn span {
        vertical-align: middle;
        display: inline-block;
    }
}
</style>