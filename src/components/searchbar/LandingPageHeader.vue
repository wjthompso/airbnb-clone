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
    <div class="category-filter-bar-container">
        ContentB
        <button class="open-filters-modal-btn" @click="toggleFilterModal">
            Filters
        </button>
    </div>
    <div v-if="filterModal">
        <div class="filter-modal-background" @click="toggleFilterModal">
        </div>
        <div class="filter-modal">
                <button class="close-filter-modal-btn" @click="toggleFilterModal">X</button>
                <p>This is all going to be filtering logic.</p>
            </div>
    </div>
    <div class="float-left-column"></div>
    <div class="float-right-column"></div>
    <h1 class="this-is-english">This is in English!</h1>
    <p>This is all in english so no need to translate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis omnis ipsa aliquam ullam veniam ipsam voluptatem delectus repellendus in, nemo sint facere tempore quas, magni doloremque optio exercitationem amet.</p>
</template>

<script>
import BookingHeaderOptions from './subcomponents/BookingHeaderOptions.vue'
import AirbnbLogo from './subcomponents/AirbnbLogo.vue'
import ProfileNotificationButton from './subcomponents/ProfileNotificationButton.vue';
import VisitSearchForm from './subcomponents/VisitSearchForm.vue';

export default {
    name: "LandingPageHeader",
    components: {
        BookingHeaderOptions,
        AirbnbLogo,
        ProfileNotificationButton,
        VisitSearchForm
    },
    data() {
        return {
            filterModal: false,
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
        toggleFilterModal() {
            this.filterModal = !this.filterModal;
        },
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
    /* padding: 2rem; */
    align-items: center;
    height: 5rem;
    width: 100%;
    text-align: left;
    border-bottom: 0.05rem solid lightgray;
    box-sizing: border-box;

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

div.category-filter-bar-container {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    align-items: center;
    height: 6rem;
    max-width: 100%;
    text-align: left;
    border-bottom: 0.1rem solid lightgray;
}

button.open-filters-modal-btn {
    background-color: white;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: calc(var(--FS-S));
    font-weight: 600;
    color: black;
    cursor: pointer;
}


img {
    display: inline-block;
    margin-left: 0.4rem;
    margin-right: 0.2rem;
    margin-bottom: 0rem;
    margin-top: 0.2rem;
    height: 1em;
    width: 1em;
}


div.search-box-container {
    margin-right: 1rem;
}

input.search-box {
    border: 1px solid black;
}

div.float-left-column {
    background-color: black;
    float: left;
    right: 0;
    height: 100vh;
    width: 20vw;
}

div.float-right-column {
    background-color: black;
    float: right;
    right: 0;
    height: 100vh;
    width: 20vw;
    margin-left: 2rem;
}

div.filter-modal-background {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.658);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
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
    z-index: 2;
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