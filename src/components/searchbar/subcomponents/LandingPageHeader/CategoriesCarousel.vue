<template>
    <div class="carousel-window">
        <div class="previous-button-fade disappear">
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

// Keep track of window width
// Keep track of the current slide (window)
// Keep track of the number of slides that are potentially visible
// Keep track of the number of slides that are actually visible

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
                {
                    id: 18,
                    name: "Play",
                    image: require("@/assets/"+"bowling-ball.jpg")
                },
                {
                    id: 19,
                    name: "Castle",
                    image: require("@/assets/"+"castle.jpg")
                },
                {
                    id: 20,
                    name: "Mansion",
                    image: require("@/assets/"+"mansions.jpg")
                },
                {
                    id: 21,
                    name: "Play",
                    image: require("@/assets/"+"bowling-ball.jpg")
                },
                {
                    id: 22,
                    name: "Castle",
                    image: require("@/assets/"+"castle.jpg")
                },
                {
                    id: 23,
                    name: "Mansion",
                    image: require("@/assets/"+"mansions.jpg")
                },
                {
                    id: 24,
                    name: "Play",
                    image: require("@/assets/"+"bowling-ball.jpg")
                },
                {
                    id: 25,
                    name: "Castle",
                    image: require("@/assets/"+"castle.jpg")
                },
            ],
            iconsToLeft: 0,
            carouselAverageItemWidth: 0,
            oldWindowWidth: 0,
            oldMaxWindowWidth: 0,
            alreadyExpanded: false
        }
    },
    mounted() {
        const carouselItems = document.querySelectorAll('.carousel-track button.radio-icon');
        const carouselTrack = document.querySelector('.carousel-track');
        
        for (let i = 0; i < carouselItems.length; i++) {
            this.carouselAverageItemWidth += carouselItems[i].getBoundingClientRect().width;
            let style = getComputedStyle(carouselItems[i]);
            style = getComputedStyle(carouselItems[0]);
            const marginLeft = parseInt(style.marginLeft);
            const marginRight = parseInt(style.marginRight);
            this.carouselAverageItemWidth += marginLeft + marginRight;
        }

        this.carouselAverageItemWidth = this.carouselAverageItemWidth / carouselItems.length;

        console.log(this.carouselAverageItemWidth);
        carouselTrack.style.width = (this.carouselAverageItemWidth * carouselItems.length) + 'px';

        // Get current window width
        this.oldWindowWidth = window.innerWidth;
        this.oldMaxWindowWidth = window.innerWidth;

        // Add window resize listener
        window.addEventListener('resize', this.handleResize);
    },

    methods: {
        handleResize() {
            let changeInWindowWidth = window.innerWidth - this.oldWindowWidth;
            this.oldWindowWidth = window.innerWidth;
            if (changeInWindowWidth < 0) {
                const nextButton = document.querySelector('.next-button-fade');
                nextButton.classList.remove('disappear');
            }
            if (changeInWindowWidth > 0 && window.innerWidth > this.oldMaxWindowWidth) {

                this.oldMaxWindowWidth = window.innerWidth;
                let newIconsToLeft = this.iconsToLeft - (changeInWindowWidth / this.carouselAverageItemWidth);
                if (newIconsToLeft < 0) {
                    newIconsToLeft = 0;
                }
                this.iconsToLeft = newIconsToLeft;
            } else {
                return;
            }

            const carouselTrack = document.querySelector('.carousel-track');
            carouselTrack.classList.add('temporarily-remove-transition');
            carouselTrack.style.transform = 'translateX(-' + this.iconsToLeft*this.carouselAverageItemWidth + 'px)';
            setInterval(() => {
                carouselTrack.classList.remove('temporarily-remove-transition');
            }, 100);
        },
        slideRight() {
            const carouselTrack = document.querySelector('.carousel-track');
            const carouselWindow = document.querySelector('.carousel-window');
            const carouselTrackWidth = carouselTrack.getBoundingClientRect().width;
            const carouselWindowWidth = carouselWindow.getBoundingClientRect().width;

            let halfWindowWidth = Math.floor(carouselWindowWidth/(2*this.carouselAverageItemWidth));
            let remainingWidthInIconUnits = (carouselTrackWidth - this.iconsToLeft*this.carouselAverageItemWidth - carouselWindowWidth) / this.carouselAverageItemWidth;

            const nextButton = document.querySelector('.next-button-fade');
            const previousButton = document.querySelector('.previous-button-fade');
            if (remainingWidthInIconUnits < halfWindowWidth) {
                this.iconsToLeft += remainingWidthInIconUnits;
                // Hide the next button/right arrow
                nextButton.classList.add('disappear');
                previousButton.classList.remove('disappear');
            } else {
                this.iconsToLeft += halfWindowWidth;
                nextButton.classList.remove('disappear');
                previousButton.classList.remove('disappear');
            }

            carouselTrack.style.transform = 'translateX(-' + this.iconsToLeft*this.carouselAverageItemWidth + 'px)';
            this.oldMaxWindowWidth = window.innerWidth;
        },
        slideLeft() {
            const carouselTrack = document.querySelector('.carousel-track');
            const carouselWindow = document.querySelector('.carousel-window');
            const carouselWindowWidth = carouselWindow.getBoundingClientRect().width;

            let halfWindowWidth = Math.floor(carouselWindowWidth/(2*this.carouselAverageItemWidth));

            console.log("halfWindowWidth: " + halfWindowWidth);

            // let marginalIncrease = Math.min(halfWindowWidth, remainingWidthInIconUnits);
            const previousButton = document.querySelector('.previous-button-fade');
            const nextButton = document.querySelector('.next-button-fade');
            if (this.iconsToLeft < halfWindowWidth) {
                this.iconsToLeft = 0;
                // Hide the next button/right arrow
                previousButton.classList.add('disappear');
                nextButton.classList.remove('disappear');
            } else {
                this.iconsToLeft -= halfWindowWidth;
                previousButton.classList.remove('disappear');
                nextButton.classList.remove('disappear');
            }

            console.log("iconsToLeft: " + this.iconsToLeft);

            carouselTrack.style.transform = 'translateX(-' + this.iconsToLeft*this.carouselAverageItemWidth + 'px)';
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

::-webkit-scrollbar {
        display: none;
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
    transition: transform 0.3s ease-in-out;
}

div.carousel-track.temporarily-remove-transition {
    transition: none;
}

button.radio-icon {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    color: rgb(0, 0, 0);
    /* color: rgb(0, 0, 0); */
    opacity: 0.65;
    transition: opacity 0.2s ease-in-out;
    margin: 0rem 1rem;
    cursor: pointer;
}

/* button.radio-icon:first-child {
    margin-left: 0rem;
} */

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
    font-weight: 500;
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
    transition: opacity 0.5s ease-in-out;
}

.disappear {
    opacity: 0;
    pointer-events: none;
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
    transition: opacity 0.1s ease-in-out;
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