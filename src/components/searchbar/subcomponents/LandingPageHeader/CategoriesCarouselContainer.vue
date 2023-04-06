<template>
    
    <div class="category-filter-bar-container">
        <categories-carousel></categories-carousel>
        <filters-button v-if="!mobileView" @click="toggleFilterModal"></filters-button>
    </div>
    <filters-modal v-if="filterModal" @close-modal="toggleFilterModal"></filters-modal>
</template>


<script>
import CategoriesCarousel from './CategoriesCarousel.vue';
import FiltersButton from '@/components/ui/FiltersButton.vue';
import FiltersModal from '@/components/ui/FiltersModal.vue';

export default {
    name: "CategoriesCarouselContainer",
    components: {
        CategoriesCarousel,
        FiltersButton,
        FiltersModal
    },
    data() {
        return {
            filterModal: false,
            mobileView: false
        }
    },
    mounted() {
        window.addEventListener('resize', this.checkForMobileView)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkForMobileView)
    },
    methods: {
        checkForMobileView() {
            // Get the value of the CSS variable --mobile-view
            let mobileView = getComputedStyle(document.documentElement).getPropertyValue('--mobile-view');
            mobileView = parseInt(mobileView);
            if (window.innerWidth <= mobileView) {
                this.mobileView = true
            } else {
                this.mobileView = false
            }
        },
        toggleFilterModal() {
            this.filterModal = !this.filterModal
        }
    }
}
</script>

<style scoped>
div.category-filter-bar-container {
    position: fixed;
    top: 5rem;
    display: flex;
    justify-content: space-between;
    padding: 0rem var(--page-margin);
    padding-left: calc(var(--page-margin) - 1rem);
    padding-top: 0rem;
    align-items: center;
    height: 8rem;
    width: 100%;
    text-align: left;
    /* border-bottom: 0.1rem solid lightgray; */
    background-color: white;
    z-index: 2;
}

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
}

button.open-filters-modal-btn svg,
button.open-filters-modal-btn span {
    vertical-align: middle;
    display: inline-block;
}

button.radio-icon {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    color: rgb(106, 106, 106);
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
}

button.radio-icon p {
    margin: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
}

button.radio-icon:focus-within,
button.radio-icon:hover p,
button.radio-icon:hover {
    text-decoration: underline;
    text-underline-offset: 1.6rem;
    text-decoration-thickness: 0.2rem;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
}

img {
    display: inline-block;
    margin-left: 0.4rem;
    margin-right: 0.2rem;
    margin-bottom: 0rem;
    margin-top: 0.2rem;
    height: 2em;
    width: 2em;
    background-color: transparent;
}
</style>