<template>
    <form @submit.prevent action="/" method="get" class="search-form">
        <div class="search-form-container">
            <div @mouseenter="toggleSeparatorsApperance" @mouseleave="toggleSeparatorsApperance" @blur="toggleSeparatorsApperance"  class="search-option where-search" tabindex="-1">
                <h3>Where</h3>
                <input type="text" @blur="toggleParentsAppearance" name="where" id="where" class="search-option-input" placeholder="Search destinations">
                <div class="search-by-region-dropdown">
                    <div class="grid-item-1">
                        <h1>Search by region</h1>
                    </div>
                    <div class="grid-item-2">
                        <img src="@/assets/whole-globe.jpg" alt="" class="whole-globe-option">
                        <h3>I'm flexible</h3>
                    </div>
                    <div class="grid-item-3"></div>
                    <div class="grid-item-4"></div>
                    <div class="grid-item-5"></div>
                </div>
            </div>
            <div class="search-option-seperator"></div>
            <div @mouseenter="toggleSeparatorsApperance" @mouseleave="toggleSeparatorsApperance" @blur="toggleSeparatorsApperance" class="search-option check-in-date-search" tabindex="-1">
                <h3>Check in</h3>
                <input type="text" @blur="toggleParentsAppearance" name="when-start" id="where-start" class="search-option-input" placeholder="Add dates">
                <div class="checkin-checkout-dropdown"></div>
            </div>
            <div class="search-option-seperator"></div>
            <div @mouseenter="toggleSeparatorsApperance" @mouseleave="toggleSeparatorsApperance" @blur="toggleSeparatorsApperance" class="search-option check-out-date-search" tabindex="-1">
                <h3>Check out</h3>
                <input type="text" @blur="toggleParentsAppearance" name="when-end" id="when-end" class="search-option-input" placeholder="Add dates">
                <div class="checkin-checkout-dropdown"></div>
            </div>
            <div class="search-option-seperator"></div>
            <div @mouseenter="toggleSeparatorsApperance" @mouseleave="toggleSeparatorsApperance" @blur="toggleSeparatorsApperance" class="search-option who-guests-number-search" tabindex="-1">
                <div class="who-guests-number-search-input">
                    <h3 focusable="false">Who</h3>
                    <input type="text" @blur="toggleParentsAppearance" name="when-end" id="when-end" class="search-option-input" placeholder="Add guests">
                </div>
                <button @mousemove="hoverHighlight" class="submit-search-options">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                    <p focusable="false">Search</p>
                </button>
                <div class="checkin-checkout-dropdown"></div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'VisitSearchForm',
    methods: {
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
        },
        toggleParentsAppearance(e) {
            let eventType = e.type;
            console.log(eventType);
            let currentElement = e.target;
            let parentElement = currentElement.parentElement;

            // If the parentElement has the class name 'who-guests-number-search-input', then get the grandparent
            if (parentElement.classList.contains("who-guests-number-search-input")) {
                parentElement = parentElement.parentElement;
            }

            // Construct a new event object with the parent element as the target
            let parentEvent = new Event('blur');
            parentElement.dispatchEvent(parentEvent);
            // parentEvent.target = parentElement;
        },
        toggleSeparatorsApperance(e) {
            console.log("This is the incoming event", e);
            let eventType = e.type;
            console.log(eventType);
            let currentElement = e.target;
            let previousElement = currentElement.previousElementSibling;
            let nextElement = currentElement.nextElementSibling;

            // Check if the current element or its descendants are in focus
            if (currentElement.matches(':focus-within')) {
                return;
            }

            // Toggle the make-invisible class on the appropriate separator element
            if (previousElement && previousElement.classList.contains("search-option-seperator")) {
                previousElement.classList.toggle("make-invisible");
            }
            if (nextElement && nextElement.classList.contains("search-option-seperator")) {
                nextElement.classList.toggle("make-invisible");
            }
            }
    }
}
</script>

<style scoped>
form.search-form {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-self: center;
    justify-self: center;
    width: 54rem;
    height: 5rem;
    background-color: rgb(235,235,235);
    border: 0.5px solid rgb(190, 190, 190);
    border-radius: 100px;
    /* margin: 2rem 0; */
}

.make-invisible {
    opacity: 0;
}

div.search-option:not(:focus-within) + div.search-option-seperator {
    width: 0.5px;
    height: 3rem;
    background-color: rgb(190, 190, 190);
    align-self: center;
    justify-self: center;
}

div.search-form-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    position: relative;
}

div.search-option {
    display: flex;
    position: relative;
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
    padding-left: 2rem;
}

/* div.search-option.where-search::after,
div.search-option.check-in-date-search::after,
div.search-option.check-out-date-search::after {
    content: "";
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    border: 0.5px solid rgb(0, 0, 0);
    float: left;
} */

input#when-end {
    width: 100%;
}

button.submit-search-options {
    display: flex;
    flex-direction: row;
    position: relative;
    transform: translateX(30%);
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


.search-option:not(:focus-within) .checkin-checkout-dropdown,
.search-option:not(:focus-within) .search-by-region-dropdown {
    display: none;
}

/* Styling dropdown menus */
.search-option:focus-within .checkin-checkout-dropdown,
.search-option:focus-within .search-by-region-dropdown {
    display: grid;
    grid-template: 1fr 3fr 3fr / 1fr 1fr;
    padding: 2rem;
    position: absolute;
    top: 120%;
    left: 0;
    width: 200%;
    height: 600%;
    border-radius: 32px;
    z-index: 5;
    background-color: white;
    border: 0.1px solid rgb(182, 182, 182);
    transition: all 0.2s ease;
    opacity: 1;
}

.search-option.check-out-date-search,
.search-option.check-in-date-search {
    position: static;
}

.search-option:focus-within .checkin-checkout-dropdown {
    display: grid;
    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    height: 600%;
    border-radius: 32px;
    z-index: 5;
    background-color: white;
    border: 0.1px solid rgb(182, 182, 182);
    transition: all 0.2s ease;
}

.search-option.who-guests-number-search:focus-within .checkin-checkout-dropdown {
    display: grid;
    position: absolute;
    top: 120%;
    left: -40%;
    width: 140%;
    height: 600%;
    border-radius: 32px;
    z-index: 5;
    background-color: white;
    border: 0.1px solid rgb(182, 182, 182);
    transition: all 0.2s ease;
}

.grid-item-1 {
    display: flex;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    border: 1px solid black;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
}

img.whole-globe-option {
    height: 80%;
    width: 80%;
    margin: 0px;
    border-radius: 1rem;
}

img.whole-globe-option:hover {
    border: 1.5px solid rgb(86, 86, 179);
}

.grid-item-2 {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    border: 1px solid black;
}

.grid-item-3 {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    border: 1px solid black;
}

.grid-item-4 {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    border: 1px solid black;
}

.grid-item-5 {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    border: 1px solid black;
}


</style>