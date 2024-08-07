<template>
    <div class="carousel-window">
        <div class="previous-button-fade disappear">
            <button
                class="previous-carousel-btn"
                @click="slideLeft"
            >
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="
                        display: block;
                        fill: none;
                        height: 12px;
                        width: 12px;
                        stroke: currentcolor;
                        stroke-width: 5.33333;
                        overflow: visible;
                    "
                >
                    <g fill="none">
                        <path
                            d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
                        ></path>
                    </g>
                </svg>
            </button>
        </div>
        <div class="carousel-track">
            <button
                v-for="category in categoriesData"
                class="radio-icon"
                :key="category.id"
            >
                <img
                    class="filter-image"
                    :src="category.image"
                    alt=""
                />
                <p>{{ category.name }}</p>
            </button>
        </div>
        <div class="next-button-fade disappear">
            <button
                class="next-carousel-btn"
                @click="slideRight"
            >
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="
                        display: block;
                        fill: none;
                        height: 12px;
                        width: 12px;
                        stroke: currentcolor;
                        stroke-width: 5.33333;
                        overflow: visible;
                    "
                >
                    <g fill="none">
                        <path
                            d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"
                        ></path>
                    </g>
                </svg>
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
                    image: require("@/assets/" + "bowling-ball.jpg"),
                },
                {
                    id: 2,
                    name: "Castle",
                    image: require("@/assets/" + "castle.jpg"),
                },
                {
                    id: 3,
                    name: "Mansion",
                    image: require("@/assets/" + "mansions.jpg"),
                },
                {
                    id: 4,
                    name: "Play",
                    image: require("@/assets/" + "bowling-ball.jpg"),
                },
                {
                    id: 5,
                    name: "Castle",
                    image: require("@/assets/" + "castle.jpg"),
                },
                {
                    id: 6,
                    name: "Mansion",
                    image: require("@/assets/" + "mansions.jpg"),
                },
                {
                    id: 7,
                    name: "Play",
                    image: require("@/assets/" + "bowling-ball.jpg"),
                },
                {
                    id: 8,
                    name: "Castle",
                    image: require("@/assets/" + "castle.jpg"),
                },
                {
                    id: 9,
                    name: "Mansion",
                    image: require("@/assets/" + "mansions.jpg"),
                },
                {
                    id: 10,
                    name: "Play",
                    image: require("@/assets/" + "bowling-ball.jpg"),
                },
                {
                    id: 11,
                    name: "Castle",
                    image: require("@/assets/" + "castle.jpg"),
                },
                {
                    id: 12,
                    name: "Mansion",
                    image: require("@/assets/" + "mansions.jpg"),
                },
                {
                    id: 13,
                    name: "Play",
                    image: require("@/assets/" + "bowling-ball.jpg"),
                },
                {
                    id: 14,
                    name: "Castle",
                    image: require("@/assets/" + "castle.jpg"),
                },
                {
                    id: 15,
                    name: "Mansion",
                    image: require("@/assets/" + "mansions.jpg"),
                },
                {
                    id: 16,
                    name: "Play",
                    image: require("@/assets/" + "bowling-ball.jpg"),
                },
                {
                    id: 17,
                    name: "Castle",
                    image: require("@/assets/" + "castle.jpg"),
                },
                {
                    id: 18,
                    name: "Play",
                    image: require("@/assets/" + "bowling-ball.jpg"),
                },
                {
                    id: 19,
                    name: "Castle",
                    image: require("@/assets/" + "castle.jpg"),
                },
                {
                    id: 20,
                    name: "Mansion",
                    image: require("@/assets/" + "mansions.jpg"),
                },
                {
                    id: 21,
                    name: "Play",
                    image: require("@/assets/" + "bowling-ball.jpg"),
                },
                {
                    id: 22,
                    name: "Castle",
                    image: require("@/assets/" + "castle.jpg"),
                },
                {
                    id: 23,
                    name: "Mansion",
                    image: require("@/assets/" + "mansions.jpg"),
                },
                {
                    id: 24,
                    name: "Play",
                    image: require("@/assets/" + "bowling-ball.jpg"),
                },
                {
                    id: 25,
                    name: "Castle",
                    image: require("@/assets/" + "castle.jpg"),
                },
            ],
            iconsToLeft: 0,
            carouselAverageItemWidth: 0,
            oldWindowWidth: 0,
            oldMaxWindowWidth: 0,
            alreadyExpanded: false,
        };
    },
    mounted() {
        const carouselItems = document.querySelectorAll(
            ".carousel-track button.radio-icon"
        );
        const carouselTrack = document.querySelector(".carousel-track");

        for (let i = 0; i < carouselItems.length; i++) {
            this.carouselAverageItemWidth +=
                carouselItems[i].getBoundingClientRect().width;
            let style = getComputedStyle(carouselItems[i]);
            style = getComputedStyle(carouselItems[0]);
            const marginLeft = parseInt(style.marginLeft);
            const marginRight = parseInt(style.marginRight);
            this.carouselAverageItemWidth += marginLeft + marginRight;
        }

        this.carouselAverageItemWidth =
            this.carouselAverageItemWidth / carouselItems.length;

        carouselTrack.style.width =
            this.carouselAverageItemWidth * carouselItems.length + "px";

        // Get current window width
        this.oldWindowWidth = window.innerWidth;
        this.oldMaxWindowWidth = window.innerWidth;

        // Add window resize listener
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    },

    methods: {
        handleResize() {
            // Calculate the change in window width to determine if the window has been resized
            let changeInWindowWidth = window.innerWidth - this.oldWindowWidth;
            // Update the oldWindowWidth to the current window width
            this.oldWindowWidth = window.innerWidth;

            // If the window size is in the mobile view range, hide the buttons
            // Get the SCSS variable for the mobile view range
            const mobileViewRange = parseInt(
                getComputedStyle(document.documentElement).getPropertyValue(
                    "--mobile-view"
                )
            );
            const nextButton = document.querySelector(".next-button-fade");
            const prevButton = document.querySelector(".previous-button-fade");
            if (window.innerWidth < mobileViewRange) {
                prevButton.classList.add("disappear");
                nextButton.classList.add("disappear");
                return;
            } else {
                nextButton.classList.remove("disappear");
            }

            // If the window is shrinking
            if (changeInWindowWidth < 0) {
                // Ensure the 'next' button is visible by removing the 'disappear' class
                const nextButton = document.querySelector(".next-button-fade");
                nextButton.classList.remove("disappear");
            }

            // If the window is expanding and it's now wider than the previously recorded maximum width
            if (
                changeInWindowWidth > 0 &&
                window.innerWidth > this.oldMaxWindowWidth
            ) {
                // Update the old maximum window width to the current window width
                this.oldMaxWindowWidth = window.innerWidth;

                // Adjust the number of icons visible to the left of the carousel based on the new window width
                let newIconsToLeft =
                    this.iconsToLeft -
                    changeInWindowWidth / this.carouselAverageItemWidth;

                // Ensure the newIconsToLeft value doesn't become negative
                if (newIconsToLeft < 0) {
                    newIconsToLeft = 0;
                }

                // Update the iconsToLeft value with the new calculated value
                this.iconsToLeft = newIconsToLeft;
            } else {
                // If none of the above conditions are met, exit the function
                return;
            }

            // Temporarily disable the transition effect on the carousel track for smoother scrolling
            const carouselTrack = document.querySelector(".carousel-track");
            carouselTrack.classList.add("temporarily-remove-transition");

            // Scroll the carousel track to adjust its position based on the change in window width
            carouselTrack.scrollBy({
                left: -changeInWindowWidth,
                behavior: "smooth",
            });

            // After a 100ms delay, re-enable the transition effect on the carousel track
            setInterval(() => {
                carouselTrack.classList.remove("temporarily-remove-transition");
            }, 100);
        },

        slideRight() {
            // Get the carousel track, carousel window, and their widths
            const carouselTrack = document.querySelector(".carousel-track");
            const carouselWindow = document.querySelector(".carousel-window");
            const carouselTrackWidth = parseInt(carouselTrack.style.width);
            const carouselWindowWidth =
                carouselWindow.getBoundingClientRect().width;

            // Calculate half of the window width and the remaining width of the carousel in icon units
            let halfWindowWidth = Math.floor(
                carouselWindowWidth / (2 * this.carouselAverageItemWidth)
            );
            let remainingWidthInIconUnits =
                carouselTrackWidth -
                carouselTrack.scrollLeft -
                carouselWindowWidth;

            // Get the next and previous button elements
            const nextButton = document.querySelector(".next-button-fade");
            const previousButton = document.querySelector(
                ".previous-button-fade"
            );

            // If the remaining width in the carousel is less than half the window width
            if (remainingWidthInIconUnits < halfWindowWidth) {
                // Hide the next button/right arrow and show the previous button/left arrow
                nextButton.classList.add("disappear");
                previousButton.classList.remove("disappear");
            } else {
                // Update the iconsToLeft value and show both next and previous buttons
                this.iconsToLeft += halfWindowWidth;
                nextButton.classList.remove("disappear");
                previousButton.classList.remove("disappear");
            }

            // Scroll the carousel track to the right by the calculated width
            carouselTrack.scrollBy({
                top: 0,
                left: halfWindowWidth * this.carouselAverageItemWidth + 5,
                behavior: "smooth",
            });

            // Update the oldMaxWindowWidth to the current window width
            this.oldMaxWindowWidth = window.innerWidth;
        },
        slideLeft() {
            const carouselTrack = document.querySelector(".carousel-track");
            const carouselWindow = document.querySelector(".carousel-window");
            const carouselWindowWidth =
                carouselWindow.getBoundingClientRect().width;

            let halfWindowWidth = Math.floor(
                carouselWindowWidth / (2 * this.carouselAverageItemWidth)
            );
            const previousButton = document.querySelector(
                ".previous-button-fade"
            );
            const nextButton = document.querySelector(".next-button-fade");

            if (carouselTrack.scrollLeft < halfWindowWidth) {
                // Hide the previous button/ arrow
                previousButton.classList.add("disappear");
                nextButton.classList.remove("disappear");
            } else {
                // Show both the next button and the right button
                previousButton.classList.remove("disappear");
                nextButton.classList.remove("disappear");
            }

            carouselTrack.scrollBy({
                top: 0,
                left: -halfWindowWidth * this.carouselAverageItemWidth,
                behavior: "smooth",
            });

            this.oldMaxWindowWidth = window.innerWidth;
        },
    },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

:root {
    --mobile-view: $mobile-view;
}

@media only screen and (max-width: $mobile-view) {
    .carousel-window {
        display: flex;
        position: relative;
        flex-direction: row;
        /* align-items: center;
    justify-content: center; */
        height: 100%;
        width: calc(100%);
        overflow: hidden;
    }
}

@media only screen and (min-width: $mobile-view) {
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

    // scroll-snap-type: x mandatory;
    // scroll-behavior: smooth;
    // -webkit-overflow-scrolling: touch;
    transition: transform 0.3s ease-in-out;
    overflow: scroll;
    /* Make the scroll bar invisible */
    // scrollbar-width: none;
    // -ms-overflow-style: none;
    /* Make the scroll bar invisible on Google Chrome */
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
    background: rgba(255, 255, 255, 1);
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
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 1)
    );
    z-index: 0;
}

div.previous-button-fade::after {
    right: unset;
    left: 3rem;
    background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 1)
    );
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
