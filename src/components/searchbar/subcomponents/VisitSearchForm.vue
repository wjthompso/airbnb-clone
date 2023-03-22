<template>
    <form @submit.prevent action="/" method="get" class="search-form">
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

</style>