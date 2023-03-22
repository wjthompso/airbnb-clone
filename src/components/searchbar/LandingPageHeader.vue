<template>
    <nav class="header-container">
        <!-- <img :src="icon" alt="icon"> -->
        <div class="unexpanded-header">
            <airbnb-logo></airbnb-logo>
            <booking-header-options @click="expandBookingOptions"></booking-header-options>
            <profile-notification-button></profile-notification-button>
        </div>
        <form v-if="showBookingDetails" @submit.prevent action="/" method="get" class="search-form">
            <div class="search-form-container">
                <div class="search-option where-search" tabindex="-1">
                    <h3>Where</h3>
                    <input type="text" name="where" id="where" class="search-option-input" placeholder="Search destinations">
                </div>
                <div class="search-option check-in-date-search" tabindex="-1">
                    <h3>Check in</h3>
                    <input type="text" name="when-start" id="where-start" class="search-option-input" placeholder="Add dates">
                </div>
                <div class="search-option check-out-date-search" tabindex="-1">
                    <h3>Check out</h3>
                    <input type="text" name="when-end" id="when-end" class="search-option-input" placeholder="Add dates">
                </div>
                <div class="search-option who-guests-number-search" tabindex="-1">
                    <div class="who-guests-number-search-input">
                        <h3 focusable="false">Who</h3>
                        <input type="text" name="when-end" id="when-end" class="search-option-input" placeholder="Add guests">
                    </div>
                    <button @mousemove="hoverHighlight" class="submit-search-options">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                        <p focusable="false">Search</p>
                    </button>
                </div>
            </div>
        </form>
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

export default {
    name: "LandingPageHeader",
    components: {
        BookingHeaderOptions,
        AirbnbLogo,
        ProfileNotificationButton
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
        expandBookingOptions() {
            this.showBookingDetails = !this.showBookingDetails;
        },
        toggleActive(e) {
            e.target.classList.toggle('active');
            console.log(e.target);
            console.log(e.target.classList.contains('active'));
        },
        focusParent(e) {
            e.target.parentElement.focus();
            console.log(e.target.parentElement);
        },
        hoverHighlight(e) {
            let buttonContainer = e.target;

            // Check that the element raising the mouse over event is the button
            // and not the svg or p element inside the button
            if (e.target.tagName !== "BUTTON") {
                buttonContainer = e.target.parentElement;
            }

            const rect = buttonContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // set the position of the circle using CSS custom properties
            buttonContainer.style.setProperty("--highlight-x", `${x}px`);
            buttonContainer.style.setProperty("--highlight-y", `${y}px`);
            }
    },
    provide() {
        return {
            expandBookingOptions: this.expandBookingOptions
        }
    },
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

form.search-form {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-self: center;
    justify-self: center;
    width: 54rem;
    height: 5rem;
    background-color: rgb(235,235,235);
    border-radius: 100px;
    /* margin: 2rem 0; */
}

div.search-form-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

div.search-option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: calc(var(--FS-S));
    font-weight: 100;
    color: black;
    padding: 0rem 2rem;
}

/* Define widths for each of the four search options */
.search-form-container > .search-option:nth-child(1) {
    width: 30%;
}

.search-form-container > .search-option:nth-child(2) {
    width: 20%;
}

.search-form-container > .search-option:nth-child(3) {
    width: 20%;
}

.search-form-container > .search-option:nth-child(4) {
    padding-left: 2rem;
    /* padding-right: 1rem; */
    width: 30%;
}

div.search-option.who-guests-number-search {
    display: grid;
    grid-template: 1fr / 1.5fr 2.5fr;
    padding: 0rem 0rem;
    justify-content: center;
    align-items: flex-start;
}

div.who-guests-number-search div.who-guests-number-search-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    /* padding-left: 2rem; */
}

input#when-end {
    width: 100%;
}

button.submit-search-options {
    display: flex;
    flex-direction: row;
    position: relative;
    background-image: linear-gradient(to right, rgb(228 29 84), rgb(206, 17, 71));
    font-size: calc(var(--FS-S));
    border-radius: 100px;
    font-weight: 100;
    color: white;
    padding: 1rem 1rem;
    /* margin-right: 2.5rem; */
    justify-self: center;
    align-self: center;
}

button.submit-search-options::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  opacity: 0;
  background: radial-gradient(
    50px circle at var(--highlight-x) var(--highlight-y),
    rgba(210, 146, 34, 0.796) 0%,
    transparent 100%
  );
    border-radius: inherit;
    z-index: 2;
}

button.submit-search-options:hover::before {
  opacity: 1;
}

button.submit-search-options:not(:hover)::before {
  transition: opacity 0.8s ease;
}


button.submit-search-options p {
    font-size: var(--FS);
    font-weight: 600;
    margin-left: 0.3rem;
    z-index: 3;
}

button.submit-search-options svg {
    justify-self: center;
    align-self: center;
    z-index: 3;
}

/* div.search-option:focus */
/* div.search-option:active, */
/* div.search-option.active */
div.search-option:focus-within,
div.search-option:focus {
    outline: none;
    background-color: white;
    border-radius: 100px;
    /* Create a box shadow underneath the div */
    box-shadow: 4px 4px 20px 10px rgba(97, 97, 97, 0.25);
}

div.search-option:not(:focus-within):hover {
    background-color: rgba(157, 157, 157, 0.711);
    border-radius: 100px;
}

div.search-option h1 {
    text-align: left;
}

input.search-option-input {
    border: none;
    background-color: transparent;
    font-size: calc(var(--FS-S));
    font-weight: 600;
    color: black;
}

input.search-option-input:focus {
    outline: none;
    border: none;
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

.search-box-form {
    /* background-color: lightgray; */
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