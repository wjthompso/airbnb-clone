<template>
    <div>
        <div class="filter-modal-background" @click="fireCloseModalEvent"></div>
        <div class="filter-modal">
                <button class="close-filter-modal-btn" @click="fireCloseModalEvent">X</button>
                <p>This is all going to be filtering logic.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FiltersModal",
    emits: ['close-modal'],
    methods: {
        fireCloseModalEvent() {
            this.$emit('close-modal')
        }
    }    
}

</script>

<style scoped>

div.filter-modal-background {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.658);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 3;
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
    z-index: 4;
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