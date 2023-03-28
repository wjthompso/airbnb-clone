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
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/bowling-ball.jpg" alt="">
            <p>Play</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/castle.jpg" alt="">
            <p>Castle</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/mansions.jpg" alt="">
            <p>Mansion</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/bowling-ball.jpg" alt="">
            <p>Play</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/castle.jpg" alt="">
            <p>Castle</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/mansions.jpg" alt="">
            <p>Mansion</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/bowling-ball.jpg" alt="">
            <p>Play</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/castle.jpg" alt="">
            <p>Castle</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/mansions.jpg" alt="">
            <p>Mansion</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/bowling-ball.jpg" alt="">
            <p>Play</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/castle.jpg" alt="">
            <p>Castle</p>
        </button>
        <button class="radio-icon">
            <img class="filter-image" src="@/assets/mansions.jpg" alt="">
            <p>Mansion</p>
        </button>
        <button class="open-filters-modal-btn" @click="toggleFilterModal">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;height:14px;width:14px;fill:currentColor" aria-hidden="true" role="presentation" focusable="false"><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
            <span class="open-filters-modal-btn-spn"> Filters</span>
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

div.category-filter-bar-container {
    position: absolute;
    top: 5rem;
    display: flex;
    justify-content: space-between;
    padding: 0rem 6rem;
    padding-top: 2rem;
    align-items: center;
    height: 8rem;
    width: 100%;
    text-align: left;
    border-bottom: 0.1rem solid lightgray;
}

button.open-filters-modal-btn {
    display: inline-block;
    /* align-items: center; */
    background-color: white;
    border: 1px solid black;
    border-radius: 0.5rem;
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

div.results-body {
    position: absolute;
    top: 13rem;
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

/* button.radio-icon:hover::after {
    align-self: flex-end;
    justify-self: flex-end;
    position: relative;
    bottom: 0;
    content: "";
    width: 100%;
    height: 0.5rem;
    background-color: black;
} */

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