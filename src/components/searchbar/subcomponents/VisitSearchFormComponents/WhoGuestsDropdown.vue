<template>
    <div class="checkin-checkout-dropdown"></div>
</template>

<script>
export default {
    name: "WhoGuestsDropdown"
}
</script>

<style>
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
</style>