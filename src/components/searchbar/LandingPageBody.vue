<template>
    <div class="test-body">
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <property-image-carousel-card></property-image-carousel-card>
        <div class="test-block">1</div>
        <div class="test-block">2</div>
        <div class="test-block">3</div>
        <div class="test-block">4</div>
        <div class="test-block">5</div>
        <div class="test-block">6</div>
        <div class="test-block">7</div>
        <div class="test-block">8</div>
        <div class="test-block">9</div>
        <div class="test-block">10</div>
        <div class="test-block">11</div>
        <div class="test-block">12</div>
        <div class="test-block">13</div>
        <div class="test-block">14</div>
        <div class="test-block">15</div>
        <div class="test-block">16</div>
    </div>
</template>

<script>
import PropertyImageCarouselCard from './subcomponents/LandingPageBody/PropertyImageCarouselCard.vue';

export default {
    name: "LandingPageBody",
    components: {
        PropertyImageCarouselCard
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