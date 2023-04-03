<template>
    <landing-page-header></landing-page-header>
    <landing-page-body></landing-page-body>
</template>

<script>
import LandingPageHeader from "../components/searchbar/LandingPageHeader.vue";
import LandingPageBody from "../components/searchbar/LandingPageBody.vue";

export default {
    name: "LandingPage",
    components: {
        LandingPageHeader,
        LandingPageBody
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