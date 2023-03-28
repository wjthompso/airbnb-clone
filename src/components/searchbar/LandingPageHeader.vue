<template>
    <nav class="header-container">
        <!-- <img :src="icon" alt="icon"> -->
        <div class="unexpanded-header">
            <airbnb-logo></airbnb-logo>
            <booking-header-options @click="toggleShowBookingOptions"></booking-header-options>
            <profile-notification-button></profile-notification-button>
        </div>
        <visit-search-form v-if="showBookingDetails"></visit-search-form>
    </nav>
    <categories-carousel></categories-carousel>
    <div class="results-body">
        <div class="float-left-column"></div>
        <div class="float-right-column"></div>
        <h1 class="this-is-english">Header</h1>
        <p>This is all in english so no need to translate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis omnis ipsa aliquam ullam veniam ipsam voluptatem delectus repellendus in, nemo sint facere tempore quas, magni doloremque optio exercitationem amet.</p>
    </div>
</template>

<script>
import BookingHeaderOptions from './subcomponents/BookingHeaderOptions.vue'
import AirbnbLogo from './subcomponents/AirbnbLogo.vue'
import ProfileNotificationButton from './subcomponents/ProfileNotificationButton.vue';
import VisitSearchForm from './subcomponents/VisitSearchForm.vue';
import CategoriesCarousel from './subcomponents/CategoriesCarousel.vue';


export default {
    name: "LandingPageHeader",
    components: {
        BookingHeaderOptions,
        AirbnbLogo,
        ProfileNotificationButton,
        VisitSearchForm,
        CategoriesCarousel
    },
    data() {
        return {
            // filterModal: false,
            showBookingDetails: false
        }
    },
    watch: {
        showBookingDetails() {
            if (this.showBookingDetails) {
                document.querySelector('.header-container').classList.add('expanded');
            } else {
                document.querySelector('.header-container').classList.remove('expanded');
            }
        }
    },
    methods: {
        // toggleFilterModal() {
        //     this.filterModal = !this.filterModal;
        // },
        toggleShowBookingOptions() {
            this.showBookingDetails = !this.showBookingDetails;
        }
    }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

nav.header-container {
    display: flex;
    justify-content: space-between;
    padding: 0rem 6rem;
    /* padding-top: 2rem; */
    align-items: center;
    height: 5rem;
    width: 100%;
    text-align: left;
    border-bottom: 0.05rem solid lightgray;
    background-color: white;
    box-sizing: border-box;
    position: relative;
    z-index: 2;

}

nav.header-container.expanded {
    height: 12rem;
    max-height: 14rem;
    display: grid;
    width: 100%;
    grid-template: 5rem 1fr / 1fr;
    flex-wrap: wrap;
    box-sizing: border-box;
}

div.unexpanded-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

div.results-body {
    position: absolute;
    top: 13rem;
}

div.search-box-container {
    margin-right: 1rem;
}

input.search-box {
    border: 1px solid black;
}

div.float-left-column {
    background-color: rgb(255, 255, 255);
    float: left;
    right: 0;
    height: 100vh;
    width: 6rem;
    border-right: 1px solid lightgray;
}

div.float-right-column {
    background-color: rgb(255, 255, 255);
    float: right;
    right: 0;
    height: 100vh;
    width: 6rem;
    margin-left: 2rem;
    border-left: 1px solid lightgray;
}
</style>