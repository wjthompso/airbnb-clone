<template>
    <div class="search-by-region-dropdown">
        <div class="grid-item-1">
            <h2>Search by region</h2>
        </div>
        <div class="general-location-map-options-grid">
            <div class="grid-item-2">
                <div class="grid-container">
                    <img src="@/assets/whole-globe.jpg" alt="" class="whole-globe-option">
                <h3>I'm flexible</h3>
                </div>
            </div>
            <div class="grid-item-3">
                <img src="@/assets/europe.webp" alt="" class="whole-globe-option">
                <h3>Europe</h3>
            </div>
            <div class="grid-item-4">
                <img src="@/assets/mexico.webp" alt="" class="whole-globe-option">
                <h3>Mexico</h3>
            </div>
            <div class="grid-item-5">
                <img src="@/assets/south-america.webp" alt="" class="whole-globe-option">
                <h3>South America</h3>
            </div>
            <div class="grid-item-6">
                <img src="@/assets/italy.webp" alt="" class="whole-globe-option">
                <h3>Italy</h3>
            </div>
            <div class="grid-item-7">
                <img src="@/assets/australia.webp" alt="" class="whole-globe-option">
                <h3>Australia</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WhereDropDown"
}
</script>

<style scoped>

.search-option:not(:focus-within) .search-by-region-dropdown {
    display: none;
}

/* Styling dropdown menus */
.search-option:focus-within .search-by-region-dropdown {
    /* display: grid;
    grid-template: 1fr 3fr 3fr / 1fr 1fr;
    column-gap: 1rem;
    row-gap: 2rem; */
    display: flex;
    flex-direction: column;
    padding: 3rem;
    padding-top: 0;
    padding-bottom: 2rem;
    position: absolute;
    top: 115%;
    left: 0;
    width: 31rem;
    height: 29rem;
    border-radius: 32px;
    z-index: 5;
    background-color: white;
    /* border: 0.1px solid rgb(182, 182, 182); */
    transition: all 0.2s ease;
    opacity: 1;
    /* Don't let items bleed through */
}

.general-location-map-options-grid {
    display: grid;
    align-self: flex-end;
    /* justify-self: flex-end; */
    grid-template: 1fr 1fr / 1fr 1fr 1fr;
    column-gap: 1rem;
    row-gap: 2rem;
    height: 70%;
    width: 100%;
}

.grid-item-1 {
    display: flex;
    /* grid-row: 1 / 2;
    grid-column: 1 / 2; */
    height: 5rem;
    /* border: 1px solid black; */
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
}

.grid-item-2,
.grid-item-3,
.grid-item-4,
.grid-item-5 {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* height: 100%; */
}

.grid-item-2 {
    /* grid-row: 1 / 2;
    grid-column: 1 / 2; */
    /* height: 100%; */
    /* border: 1px solid black; */
}

.grid-item-3 {
    /* grid-row: 1 / 2;
    grid-column: 2 / 3; */
    /* height: 100%; */
    /* border: 1px solid black; */
}

.grid-item-4 {
    /* grid-row: 2 / 3;
    grid-column: 1 / 2; */
    /* height: 100%; */
    /* border: 1px solid black; */
}

.grid-item-5 {
    /* grid-row: 2 / 3;
    grid-column: 2 / 3; */
    /* height: 100%; */
    /* border: 1px solid black; */
}

h2 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0px;
    padding: 0px;
    /* text-align: center; */
}

h3 {
    font-size: 14px;
    font-weight: 400;
    margin: 0px;
    margin-top: 0.5rem;
    padding: 0px;
    /* text-align: center; */
}

.grid-container {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: 100%;
    width: 100%;
}

img.whole-globe-option {
    width: 100%;
    /* height: 80%; */
    /* object-fit: cover; */
    /* padding-bottom: 100%; */
    margin: 0px;
    border-radius: 6%;
    border: 1.4px solid rgb(183, 183, 183);
    transition: all 0.1s ease;
}

img.whole-globe-option:hover {
    border-color: rgb(105, 105, 168);
}

img.whole-globe-option:active {
    transform: scale(0.95);
    border-color: rgb(105, 105, 168);
}

</style>