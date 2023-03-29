<template>
    <div class="carousel-window">
        <div class="previous-button-fade">
                <button class="previous-carousel-btn" @click="slideLeft">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                </button>
        </div>
        <div class="carousel-track">
            <button v-for="category in categoriesData" class="radio-icon" :key="category.id">
                <img class="filter-image" :src="category.image" alt="">
                <p>{{category.name}}</p>
            </button>
        </div>
        <div class="next-button-fade">
                <button class="next-carousel-btn" @click="slideRight">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
                </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoriesCarousel",
    data() {
        return {
            categoriesData: [
                {
                    id: 1,
                    name: "Play",
                    image: require("@/assets/"+"bowling-ball.jpg")
                },
                {
                    id: 2,
                    name: "Castle",
                    image: require("@/assets/"+"castle.jpg")
                },
                {
                    id: 3,
                    name: "Mansion",
                    image: require("@/assets/"+"mansions.jpg")
                },
                {
                    id: 4,
                    name: "Play",
                    image: require("@/assets/"+"bowling-ball.jpg")
                },
                {
                    id: 5,
                    name: "Castle",
                    image: require("@/assets/"+"castle.jpg")
                },
                {
                    id: 6,
                    name: "Mansion",
                    image: require("@/assets/"+"mansions.jpg")
                },
                {
                    id: 7,
                    name: "Play",
                    image: require("@/assets/"+"bowling-ball.jpg")
                },
                {
                    id: 8,
                    name: "Castle",
                    image: require("@/assets/"+"castle.jpg")
                },
                {
                    id: 9,
                    name: "Mansion",
                    image: require("@/assets/"+"mansions.jpg")
                },
                {
                    id: 10,
                    name: "Play",
                    image: require("@/assets/"+"bowling-ball.jpg")
                },
                {
                    id: 11,
                    name: "Castle",
                    image: require("@/assets/"+"castle.jpg")
                },
                {
                    id: 12,
                    name: "Mansion",
                    image: require("@/assets/"+"mansions.jpg")
                },
                {
                    id: 13,
                    name: "Play",
                    image: require("@/assets/"+"bowling-ball.jpg")
                },
                {
                    id: 14,
                    name: "Castle",
                    image: require("@/assets/"+"castle.jpg")
                },
                {
                    id: 15,
                    name: "Mansion",
                    image: require("@/assets/"+"mansions.jpg")
                },
                {
                    id: 16,
                    name: "Play",
                    image: require("@/assets/"+"bowling-ball.jpg")
                },
                {
                    id: 17,
                    name: "Castle",
                    image: require("@/assets/"+"castle.jpg")
                },
            ],
            slideIdx: 0
        }
    },
    mounted() {
        // Calculate the width of each carousel item, then calculate the width of the carousel track
        // and set the width of the carousel track to the width of all the carousel items
        const carouselItems = document.querySelectorAll('.carousel-track button');
        const carouselTrack = document.querySelector('.carousel-track');
        const carouselItemWidth = carouselItems[0].getBoundingClientRect().width;
        carouselTrack.style.width = (carouselItemWidth * carouselItems.length) + 'px';
    },
    methods: {
        slideRight() {
            this.slideIdx += 1;
            const carouselTrack = document.querySelector('.carousel-track');
            const carouselWidth = carouselTrack.getBoundingClientRect().width;
            carouselTrack.style.transform = 'translateX(-' + (carouselWidth/2)*this.slideIdx + 'px)';
        },
        slideLeft() {
            this.slideIdx -= 1;
            const carouselTrack = document.querySelector('.carousel-track');
            const carouselWidth = carouselTrack.getBoundingClientRect().width;
            carouselTrack.style.transform = 'translateX(-' + (carouselWidth/2)*this.slideIdx + 'px)';
        }
    }
}
</script>

<style scoped>

.carousel-window {
    display: flex;
    position: relative;
    flex-direction: row;
    /* align-items: center;
    justify-content: center; */
    height: 100%;
    width: calc(100% - 6rem);
    overflow: hidden;
}

.carousel-track {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-around; */
    height: 100%;
    width: 100%;
    /* Have overflow go to the right */
    
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    transition: transform 0.5s ease-in-out;
}

button.radio-icon {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    color: rgb(106, 106, 106);
    /* color: rgb(0, 0, 0); */
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
    margin: 0rem 1rem;
    cursor: pointer;
}

button.radio-icon p {
    margin: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
}

button.radio-icon:focus-within,
button.radio-icon:hover p,
button.radio-icon:hover {
    text-decoration: underline;
    text-underline-offset: 1.6rem;
    text-decoration-thickness: 0.2rem;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
}

img {
    display: inline-block;
    margin-left: 0.4rem;
    margin-right: 0.2rem;
    margin-bottom: 0rem;
    margin-top: 0.2rem;
    height: 2em;
    width: 2em;
    background-color: transparent;
}

.left-to-right-fade-background {
    position: absolute;
    right: 0;
    height: 100%;
    width: 3rem;
    background:  rgba(255, 255, 255, 1);
    z-index: 1;
}

.right-to-left-fade-background {
    position: absolute;
    left: 0;
    height: 100%;
    width: 3rem;
    background: rgba(255, 255, 255, 1);
    z-index: 1;
}

div.previous-button-fade,
div.next-button-fade {
    display: flex;
    position: absolute;
    right: 0;
    flex-direction: column;
    height: 100%;
    width: 3rem;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 1;
}

div.previous-button-fade {
    right: unset;
    left: 0;
}

div.previous-button-fade::after,
div.next-button-fade::before {
    content: "";
    position: absolute;
    top: 0;
    right: 3rem;
    bottom: 0;
    width: 2rem;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1));
    z-index: 0;
}

div.previous-button-fade::after {
    right: unset;
    left: 3rem;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1));
}

button.previous-carousel-btn,
button.next-carousel-btn {
    display: flex;
    position: absolute;
    right: 0;
    flex-direction: column;
    height: 2rem;
    width: 2rem;
    background-color: white;
    border: 1px solid rgb(158, 158, 158);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgb(0, 0, 0);
    /* opacity: 0.5; */
    transition: opacity 0.2s ease-in-out;
    /* margin: 0rem 1rem; */
    z-index: 2;
    margin-right: 1rem;
}

button.previous-carousel-btn {
    left: 0;
    right: unset;
    margin-left: 1rem;
    margin-right: 0rem;
}

/* button.previous-carousel-btn {
    left: 0;
} */
</style>