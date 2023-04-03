<template>
    <div class="alternative-experiences-header">
            <div class="text-wrapper">
                <p tabindex="1">Stays</p>
            </div>
            <div class="text-wrapper">
                <p tabindex="2">Experiences</p>
            </div>
            <div class="text-wrapper">
                <p tabindex="3">Online Experiences</p>
            </div>
    </div>
</template>

<script>

export default {
    name: "StaysExperiencesHeader"
}
</script>

<style scoped>
div.alternative-experiences-header {
    display: flex;
    justify-content: space-around;
    align-self: center;
    justify-self: center;
    align-items: center;
    width: 55%;
    height: 100%;
    padding: 0rem 6rem;
    box-sizing: border-box;
}

div.alternative-experiences-header p {
    position: relative;
    font-size: 1.2rem;
    font-weight: 600;
    padding-right: 1rem;
    color: rgb(34, 34, 34);
    cursor: pointer;
    overflow-x: hidden;
    /* No wrap */
    /* white-space: nowrap; */
}

div.alternative-experiences-header div.text-wrapper p {
    padding-right: 0rem;
}

div.text-wrapper {
    position: relative;
    width: auto;
}

div.text-wrapper:hover p {
    color: rgb(104, 104, 104);
}

div.text-wrapper::after {
    position: absolute;
    content: "";
    transition: width 0.2s ease, left 0.2s ease, transform 0.2s ease;
    width: 0%;
    height: 0.01rem;
    border: 0.09rem solid rgb(34, 34, 34);
    left: 50%;
    top: 150%;
    transform: scaleX(0);
}

div.text-wrapper:focus-within::after,
div.text-wrapper:hover::after {
    width: 100%;
    left: 0;
    transform: scaleX(1);
    opacity: 1;
}

div.text-wrapper:hover::after {
    border-color: rgb(104, 104, 104);
}
</style>