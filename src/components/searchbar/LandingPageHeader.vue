<template>
    <nav class="header-container">
        <!-- <img :src="icon" alt="icon"> -->
        <div class="unexpanded-header">
            <airbnb-logo></airbnb-logo>
            <booking-header-options v-if="!showBookingDetails" @click="toggleShowBookingOptions"></booking-header-options>
            <stays-experiences-header v-else></stays-experiences-header>
            <profile-notification-button></profile-notification-button>
        </div>
        <transition name="visit-search-form-transform" @after-leave="handleTransitionLeave">
            <visit-search-form v-if="showBookingDetails"></visit-search-form>
        </transition>
    </nav>
    <div v-if="showBookingDetails" class="background-grayout-for-booking-details" @click="toggleShowBookingOptions"></div>
    <categories-carousel-container></categories-carousel-container>
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
import CategoriesCarouselContainer from './subcomponents/CategoriesCarouselContainer.vue';
import StaysExperiencesHeader from './subcomponents/StaysExperiencesHeader.vue';


export default {
    name: "LandingPageHeader",
    components: {
        BookingHeaderOptions,
        AirbnbLogo,
        ProfileNotificationButton,
        VisitSearchForm,
        CategoriesCarouselContainer,
        StaysExperiencesHeader
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
            } 
            // Wait for the "after-leave" transition event to fire before removing the expanded class
        }
    },
    methods: {
        toggleShowBookingOptions() {
            this.showBookingDetails = !this.showBookingDetails;
        },
        handleTransitionLeave() {
            document.querySelector('.header-container').classList.remove('expanded');
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
    height: auto;
    min-height: 5rem;
    max-height: 11rem;
    width: 100%;
    text-align: left;
    border-bottom: 0.05rem solid lightgray;
    background-color: white;
    box-sizing: border-box;
    position: relative;
    z-index: 3;
}

nav.header-container.expanded {
    height: 11rem;
    max-height: 11rem;
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

/* Classes for transition visit-search-form-transform */

.visit-search-form-transform-enter-from, .visit-search-form-transform-leave-to {
    opacity: 0;
    transform: translateY(-100%) scale(0.5);
}

.visit-search-form-transform-enter-active, .visit-search-form-transform-leave-active {
    transition: opacity 0.1s ease, transform 0.1s ease;
    opacity: 0.5;
    transform: translateY(-50%) scale(0.5);
}

.visit-search-form-transform-enter-to, .visit-search-form-transform-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

/* End of classes for transition */

div.background-grayout-for-booking-details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
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