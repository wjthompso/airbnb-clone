<template>
    <div class="test-body">

        <property-image-carousel-card v-for="idx in 19" :key="idx" :image-location-array="imageLocationArray"></property-image-carousel-card>
        <!-- <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card> -->
    </div>
</template>

<script>
import PropertyImageCarouselCard from './subcomponents/LandingPageBody/PropertyImageCarouselCard.vue';

export default {
    name: "LandingPageBody",
    components: {
        PropertyImageCarouselCard
    },
    data() {
        return {
            imageLocationArray: [
                {
                    id: 1,
                    // Placeholder image
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp")
                },
                {
                    id: 2,
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp")
                },
                {
                    id: 3,
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp")
                },
                {
                    id: 4,
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp")
                },
                {
                    id: 5,
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp")
                },
            ]
        }
    },
    created() {
        this.imageLocationArray = [];

        // Get all of the images in the assets/malibu_california folder and push them to the imageLocationArray
        const imageContext = require.context('@/assets/malibu_california', true, /\.(png|jpe?g|svg|webp)$/);
        let i = 0;
        imageContext.keys().forEach((key) => {
            const image = imageContext(key);
            this.imageLocationArray.push({
            id: i,
            imageLocation: image
            });
            i++;
        });
        console.log("imageLocationArray: ");
        console.log(this.imageLocationArray);

    },
}

</script>

<style>
div.test-body {
    width: 100%;
    position: absolute;
    top: 12.5rem;
}

div.test-block {
    width: 50%;
    height: 100px;
    background-color: red;
    margin: 10px 0;
}

</style>