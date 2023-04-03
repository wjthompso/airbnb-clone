<template>
    <div class="checkin-checkout-dropdown"></div>
</template>

<script>
export default {
    name: "CheckOutDropdown"
}
</script>

<style scoped>
.search-option:not(:focus-within) .checkin-checkout-dropdown {
    display: none;
}

/* Styling dropdown menus */
.search-option:focus-within .checkin-checkout-dropdown {
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
</style>