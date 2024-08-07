<template>
    <div class="body-with-cards">
        <property-image-carousel-card
            v-for="idx in 20"
            :key="idx"
            :image-location-array="imageLocationArray"
            id="1"
        ></property-image-carousel-card>
        <!-- <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card> -->
    </div>
</template>

<script>
import PropertyImageCarouselCard from "./subcomponents/LandingPageBody/PropertyImageCarouselCard.vue";

export default {
    name: "LandingPageBody",
    components: {
        PropertyImageCarouselCard,
    },
    data() {
        return {
            imageLocationArray: [
                {
                    id: 1,
                    // Placeholder image
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp"),
                },
                {
                    id: 2,
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp"),
                },
                {
                    id: 3,
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp"),
                },
                {
                    id: 4,
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp"),
                },
                {
                    id: 5,
                    imageLocation: require("@/assets/malibu_california/malibu_california_1.webp"),
                },
            ],
        };
    },
    created() {
        this.imageLocationArray = [];

        // Get all of the images in the assets/malibu_california folder and push them to the imageLocationArray
        const imageContext = require.context(
            "@/assets/malibu_california",
            true,
            /\.(png|jpe?g|svg|webp)$/
        );
        let i = 0;
        imageContext.keys().forEach((key) => {
            const image = imageContext(key);
            this.imageLocationArray.push({
                id: i,
                imageLocation: image,
            });
            i++;
        });
    },
};
</script>

<style>
div.body-with-cards {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: absolute;
    padding: 0 var(--page-margin);
    padding-left: calc(var(--page-margin) - 1rem);
    top: 12.5rem;
}

div.test-block {
    width: 50%;
    height: 100px;
    background-color: red;
    margin: 10px 0;
}
</style>
