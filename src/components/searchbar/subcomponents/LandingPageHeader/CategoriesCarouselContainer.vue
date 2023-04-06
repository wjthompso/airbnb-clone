<template>
    
    <div class="category-filter-bar-container">
        <categories-carousel></categories-carousel>
        <filters-button v-if="!mobileView"></filters-button>
    </div>
        <div v-if="filterModal">
        <div class="filter-modal-background" @click="toggleFilterModal">
        </div>
        <div class="filter-modal">
                <button class="close-filter-modal-btn" @click="toggleFilterModal">X</button>
                <p>This is all going to be filtering logic.</p>
            </div>
    </div>
</template>


<script>
import CategoriesCarousel from './CategoriesCarousel.vue';
import FiltersButton from '@/components/ui/FiltersButton.vue';

export default {
    name: "CategoriesCarouselContainer",
    components: {
        CategoriesCarousel,
        FiltersButton
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

div.filter-modal-background {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.658);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 3;
}

div.filter-modal {
    display: grid;
    grid-template: 2 / 1;
    position: fixed;
    top: 10%;
    left: 10%;
    height: 80%;
    width: 80%;
    background-color: white;
    border-radius: 1rem;
    /* transform: translate(-50%, -50%); */
    z-index: 4;
}

button.close-filter-modal-btn {
    display: flex;
    background-color: white;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: calc(var(--FS-S));
    font-weight: 600;
    color: black;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    justify-self: flex-end;
    margin: 1rem;
}
</style>