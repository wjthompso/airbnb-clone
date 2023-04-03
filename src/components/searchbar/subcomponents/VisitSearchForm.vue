<template>
    <form @submit.prevent action="/" method="get" class="search-form">
        <div class="search-form-container">
            <div @mouseenter="hideSibblingSeparators" 
                 @mouseleave="showSibblingSeparators"
                 @focusin="hideSibblingSeparators"
                 @blur="showSibblingSeparators"  class="search-option where-search" tabindex="-1">
                <h3>Where</h3>
                <input type="text" @blur="triggerParentsBlurEvent" name="where" id="where" class="search-option-input" placeholder="Search destinations">
                <where-drop-down></where-drop-down>
            </div>
            <div class="search-option-seperator"></div>
            <div @mouseenter="hideSibblingSeparators" 
                 @mouseleave="showSibblingSeparators"
                 @focusin="hideSibblingSeparators"
                 @blur="showSibblingSeparators" 
                 class="search-option check-in-date-search" 
                 tabindex="-1"
            >
                <h3>Check in</h3>
                <input type="text" @blur="toggleParentsAppearance" name="when-start" id="where-start" class="search-option-input" placeholder="Add dates">
                <check-in-dropdown></check-in-dropdown>
            </div>
            <div class="search-option-seperator"></div>
            <div @mouseenter="hideSibblingSeparators" 
                 @mouseleave="showSibblingSeparators"
                 @blur="showSibblingSeparators"
                 @focusin="hideSibblingSeparators"
                 class="search-option check-out-date-search" 
                 tabindex="-1">
                <h3>Check out</h3>
                <input type="text" @blur="toggleParentsAppearance" name="when-end" id="when-end" class="search-option-input" placeholder="Add dates">
                <check-out-dropdown></check-out-dropdown>
            </div>
            <div class="search-option-seperator"></div>
            <div @mouseenter="hideSibblingSeparators" 
                 @mouseleave="showSibblingSeparators"
                 @blur="showSibblingSeparators" 
                 @focusin="hideSibblingSeparators"
                 class="search-option who-guests-number-search" 
                 tabindex="-1"
            >
                <div class="who-guests-number-search-input">
                    <h3 focusable="false">Who</h3>
                    <input type="text" @blur="toggleParentsAppearance" name="when-end" id="when-end" class="search-option-input" placeholder="Add guests">
                </div>
                <button @mousemove="hoverHighlight" class="submit-search-options">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                    <p focusable="false">Search</p>
                </button>
                <who-guests-dropdown></who-guests-dropdown>
            </div>
        </div>
    </form>
</template>

<script>
import WhereDropDown from './VisitSearchFormComponents/WhereDropdown.vue';
import CheckInDropdown from './VisitSearchFormComponents/CheckInDropdown.vue';
import CheckOutDropdown from './VisitSearchFormComponents/CheckOutDropdown.vue';
import WhoGuestsDropdown from './VisitSearchFormComponents/WhoGuestsDropdown.vue';

export default {
    name: 'VisitSearchForm',
    components: {
        WhereDropDown,
        CheckInDropdown,
        CheckOutDropdown,
        WhoGuestsDropdown
    },
    mounted() {
 
        // Add window event listener for a blur event
        window.addEventListener('blur', this.showAllSeparators);
    },
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
        showAllSeparators() {
            setTimeout(function() {
                console.log("All separators are being shown.");
                let separators = document.querySelectorAll(".search-option-seperator");
                console.log(separators);
                for (let i = 0; i < separators.length; i++) {
                    separators[i].classList.remove("make-invisible");
                }
                console.log(separators);
                }, 50);
        },
        triggerParentsBlurEvent(e) {
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
            console.log("A blur event is being emitted.")
            parentElement.dispatchEvent(parentEvent);
            // parentEvent.target = parentElement;
        },
        showSibblingSeparators(e) {
            let currentElement = e.target;
            let previousElement = currentElement.previousElementSibling;
            let nextElement = currentElement.nextElementSibling;

            if (currentElement.matches(':focus-within')) {
                    return;
            }

                let prevPrevElement = previousElement?.previousElementSibling;
                let nextNextElement = nextElement?.nextElementSibling;

                // Toggle the make-invisible class on the appropriate separator element
                if (previousElement && previousElement.classList.contains("search-option-seperator") && !prevPrevElement?.matches(':focus-within')) {
                    previousElement.classList.remove("make-invisible");
                }
                if (nextElement && nextElement.classList.contains("search-option-seperator") && !nextNextElement?.matches(':focus-within')) {
                    nextElement.classList.remove("make-invisible");
                }
        },
        hideSibblingSeparators(e) {
            console.log("This is the event type that caused the hideSibblingSeparators method to be called: " + e.type);

            let currentElement = e.target;
            let previousElement = currentElement.previousElementSibling;
            let nextElement = currentElement.nextElementSibling;

                let prevPrevElement = previousElement?.previousElementSibling;
                let nextNextElement = nextElement?.nextElementSibling;

                if (previousElement && previousElement.classList.contains("search-option-seperator") && !prevPrevElement?.matches(':focus-within')) {
                    previousElement.classList.add("make-invisible");
                }
                if (nextElement && nextElement.classList.contains("search-option-seperator") && !nextNextElement?.matches(':focus-within')) {
                    nextElement.classList.add("make-invisible");
                }
            }, 
    }
}
</script>

<style scoped>
form.search-form {
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-self: center;
    width: 54rem;
    height: 5rem;
    background-color: rgb(255, 255, 255);
    border: 0.3px solid rgb(220, 220, 220);
    border-radius: 100px;
    margin-bottom: 1rem;
}

form.search-form:focus-within {
    background-color: rgb(233, 233, 239);
}

div.search-form-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    position: relative;
}

/* Define widths for each of the four search options */
.search-form-container > .search-option:nth-child(1) {
    width: 50%;
}

.search-form-container > .search-option:nth-child(2) {
    width: 15%;
}

.search-form-container > .search-option:nth-child(3) {
    width: 15%;
}

.search-form-container > .search-option:nth-child(4) {
    padding-left: 2rem;
    /* padding-right: 1rem; */
    width: 20%;
}

/* Seperator for between search options */
div.search-option:not(:focus-within) + div.search-option-seperator {
    width: 0.5px;
    height: 3rem;
    background-color: rgb(190, 190, 190);
    align-self: center;
    justify-self: center;
}

.make-invisible {
    opacity: 0;
}

/* End of seperator classes */

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

div.search-option:focus-within,
div.search-option:focus {
    transform: scaleY(1.02);
    outline: none;
    background-color: white;
    border-radius: 100px;
    height: 100%;
    /* Create a box shadow underneath the div */
    box-shadow: 0px 17px 15px 1px rgba(97, 97, 97, 0.25);
}

div.search-option:not(:focus-within):hover {
    background-color: rgba(209, 209, 209, 0.821);
    border-radius: 100px;
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

/* Class for the cool mouse radial gradient effect on the search button */
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

div.search-option h1 {
    text-align: left;
}

input#when-end {
    width: 100%;
}
</style>