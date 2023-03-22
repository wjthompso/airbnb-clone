<template>
    <landing-page-header></landing-page-header>
</template>

<script>
import LandingPageHeader from "../components/searchbar/LandingPageHeader.vue";

export default {
    name: "LandingPage",
    components: {
        LandingPageHeader
    },
    data() {
        return {
            icon: 123
        }
    }
}
</script>

<style scoped>

</style>