<template>
      <div class="image-card">
        <div class="image-carousel-container">
            <button class="listing-card-save-button" type="button">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 30px; width: 30px; overflow: visible;">
                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
            </button>
            <button class="carousel-button" id="prevButton" @click="previous">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
            </button>
            <div class="carousel-images">
            <img src="https://via.placeholder.com/300x300?text=Image+1" alt="Image 1">
            <img src="https://via.placeholder.com/300x300?text=Image+2" alt="Image 2">
            <img src="https://via.placeholder.com/300x300?text=Image+3" alt="Image 3">
            <img src="https://via.placeholder.com/300x300?text=Image+4" alt="Image 4">
            <img src="https://via.placeholder.com/300x300?text=Image+5" alt="Image 5">
            <img src="https://via.placeholder.com/300x300?text=Image+6" alt="Image 6">
            <img src="https://via.placeholder.com/300x300?text=Image+7" alt="Image 7">
            <img src="https://via.placeholder.com/300x300?text=Image+8" alt="Image 8">
            <img src="https://via.placeholder.com/300x300?text=Image+9" alt="Image 9">
            <img src="https://via.placeholder.com/300x300?text=Image+10" alt="Image 10">
            <img src="https://via.placeholder.com/300x300?text=Image+11" alt="Image 11">
            </div>
            <button class="carousel-button" id="nextButton" @click="next"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></button>

            <div class="nav-indicator-carousel-window">
                <div class="nav-indicator-carousel-track">
                    <!-- Number of nav-indicator-carousel-items must match number of carousel-images -->
                    <div class="nav-indicator-carousel-item" id="1"> </div>
                    <div class="nav-indicator-carousel-item" id="2"> </div>
                    <div class="nav-indicator-carousel-item" id="3"> </div>
                    <div class="nav-indicator-carousel-item" id="4"> </div>
                    <div class="nav-indicator-carousel-item" id="5"> </div>
                    <div class="nav-indicator-carousel-item" id="6"> </div>
                    <div class="nav-indicator-carousel-item" id="7"> </div>
                    <div class="nav-indicator-carousel-item" id="8"> </div>
                    <div class="nav-indicator-carousel-item" id="9"> </div>
                    <div class="nav-indicator-carousel-item" id="10"> </div>
                    <div class="nav-indicator-carousel-item" id="11"> </div>
                </div>
            </div>

        </div>
        <div class="property-information">
            <h3 class="city-state">Malibu, California</h3>
            <div class="distance-away">76 miles away</div>
            <div class="dates-available">Apr 15 - 20</div>
            <div class="price"><span id="price">$1,230</span> night</div>
            <div class="star-rating">
                <span class="su0q88m dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: inline-block; height: 12px; width: 12px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg></span>
                5.0
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PropertyImageCarouselCard',
    data() {
        return {
            currentImageIndex: 0,
        }
    },
    mounted() {
            const carouselImages = document.querySelector('.carousel-images');
            const imageCount = carouselImages.children.length;
            console.log(imageCount);

            // Set the width of the carousel track to number of * width of the .nav-indicator-carousel-item
            const navCarouselTrack = document.querySelector('.nav-indicator-carousel-track');
            const navCarouselItems = document.querySelectorAll('.nav-indicator-carousel-item');
            const navCarouselItemCount = navCarouselTrack.children.length;
            // Get the width of the carousel item, including margins
            const carouselItemWidth = this.getFullWidth(navCarouselItems[1]);

            // Set the width of the carousel track to the number of items times the width of a carousel item, including margins
            navCarouselTrack.style.width = `${navCarouselItemCount * carouselItemWidth}px`;

            // Set the initial nav indicator to active
            navCarouselItems[0].classList.add('active');
            navCarouselItems[3].classList.add("near-edge");
            navCarouselItems[4].classList.add("edge");
    },
    methods: {
        getFullWidth(element) {
            // Including the margins
            // offsetWidth includes border, padding, and content
            // width only includes content
            const computedStyle = window.getComputedStyle(element);
            const width = element.offsetWidth;
            const marginLeft = parseFloat(computedStyle.marginLeft);
            const marginRight = parseFloat(computedStyle.marginRight);
            return width + marginLeft + marginRight;
        },
        previous() {
                const carouselImages = document.querySelector('.carousel-images');
                const imageCount = carouselImages.children.length;
                console.log(imageCount);

                // Set the width of the carousel track to number of * width of the .nav-indicator-carousel-item
                const navCarouselTrack = document.querySelector('.nav-indicator-carousel-track');
                const navCarouselItems = document.querySelectorAll('.nav-indicator-carousel-item');
                const navCarouselItemCount = navCarouselTrack.children.length;
                // Get the width of the carousel item, including margins
                const carouselItemWidth = this.getFullWidth(navCarouselItems[1]);

                // Set the width of the carousel track to the number of items times the width of a carousel item, including margins
                navCarouselTrack.style.width = `${navCarouselItemCount * carouselItemWidth}px`;

                // This is the logic for the image carousel
                if (this.currentImageIndex === 0) {
                    return;
                }
                this.currentImageIndex--;
                carouselImages.style.transition = 'transform 0.4s ease-in-out';
                carouselImages.style.transform = `translateX(-${this.currentImageIndex * 100}%)`;

                // This is the logic for the nav indicator carousel
                navCarouselItems[this.currentImageIndex+1].classList.remove('active');
                navCarouselItems[this.currentImageIndex].classList.remove("edge", "near-edge");
                navCarouselItems[this.currentImageIndex].classList.add('active');

                if (this.currentImageIndex > 2 && this.currentImageIndex < imageCount -2) {
                    navCarouselTrack.style.transform = `translateX(-${(this.currentImageIndex - 2) * carouselItemWidth}px)`;
                    navCarouselItems[this.currentImageIndex+2].classList.add("edge");
                    navCarouselItems[this.currentImageIndex+1].classList.remove("edge", "near-edge");
                    navCarouselItems[this.currentImageIndex-1].classList.remove("edge", "near-edge");
                    navCarouselItems[this.currentImageIndex-2].classList.add("edge");
                } else if (this.currentImageIndex == 2) {
                    navCarouselTrack.style.transform = `translateX(-${(this.currentImageIndex - 2) * carouselItemWidth}px)`;
                    navCarouselItems[this.currentImageIndex-2].classList.remove("edge", "near-edge");
                    navCarouselItems[this.currentImageIndex-1].classList.remove("edge", "near-edge");
                    navCarouselItems[this.currentImageIndex+1].classList.add("near-edge");
                    navCarouselItems[this.currentImageIndex+2].classList.add("edge");
                }
        },
        next() {
            const carouselImages = document.querySelector('.carousel-images');
                const imageCount = carouselImages.children.length;
                console.log(imageCount);

                // Set the width of the carousel track to number of * width of the .nav-indicator-carousel-item
                const navCarouselTrack = document.querySelector('.nav-indicator-carousel-track');
                const navCarouselItems = document.querySelectorAll('.nav-indicator-carousel-item');
                const navCarouselItemCount = navCarouselTrack.children.length;
                // Get the width of the carousel item, including margins
                const carouselItemWidth = this.getFullWidth(navCarouselItems[1]);

                // Set the width of the carousel track to the number of items times the width of a carousel item, including margins
                navCarouselTrack.style.width = `${navCarouselItemCount * carouselItemWidth}px`;

                        // This is the logic for the image carousel
                if (this.currentImageIndex === imageCount-1) {
                    return;
                }
                this.currentImageIndex++;
                carouselImages.style.transition = 'transform 0.4s ease-in-out';
                carouselImages.style.transform = `translateX(-${this.currentImageIndex * 100}%)`;

                // This is the logic for the nav indicator carousel
                navCarouselItems[this.currentImageIndex-1].classList.remove('active');
                navCarouselItems[this.currentImageIndex].classList.remove("edge", "near-edge");
                navCarouselItems[this.currentImageIndex].classList.add('active');

                if (this.currentImageIndex > 2 && this.currentImageIndex < imageCount -3) {
                    navCarouselTrack.style.transform = `translateX(-${(this.currentImageIndex - 2) * carouselItemWidth}px)`;
                    navCarouselItems[this.currentImageIndex+2].classList.add("edge");
                    navCarouselItems[this.currentImageIndex+1].classList.remove("edge", "near-edge");
                    navCarouselItems[this.currentImageIndex-1].classList.remove("edge", "near-edge");
                    navCarouselItems[this.currentImageIndex-2].classList.add("edge");
                } else if (this.currentImageIndex == imageCount - 3) {
                    navCarouselTrack.style.transform = `translateX(-${(this.currentImageIndex - 2) * carouselItemWidth}px)`;
                    navCarouselItems[this.currentImageIndex+2].classList.remove("edge", "near-edge");
                    navCarouselItems[this.currentImageIndex+1].classList.remove("edge", "near-edge");
                    navCarouselItems[this.currentImageIndex-1].classList.add("near-edge");
                    navCarouselItems[this.currentImageIndex-2].classList.add("edge");
                }

        }
    },

    watch: {

    }
}
</script>

<style scoped>

    body {
            font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
        }

    /* Classes for the listing card */

    .image-card {
        display: inline-block;
        margin-left: 1rem;
        margin-top: 1rem;
    }

    .property-information {
        position: relative;
        width: 300px;
    }

    .property-information h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 10px 0px;
        margin-bottom: 3px;
        text-align: left;
    }

    .distance-away,
    .dates-available {
        font-size: 1.2rem;
        text-align: left;
        /* font-weight: 400; */
        color: gray;
    }

    .dates-available {
        margin-bottom: 10px;
    }

    .price {
        text-align: left;
        font-size: 1.2rem;
        font-weight: 400;
    }
    #price {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 10px 0px;
    }


    .star-rating {
        position: absolute;
        top: 2px;
        right: 0px;
        font-size: 1rem;
    }

    /* Classes for the image carousel and its control buttons */
    .image-carousel-container {
      position: relative;
      width: 300px;
      height: 300px;
      overflow: hidden;
      border-radius: 15px;
    }

    .carousel-images {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease-in-out;
    }

    .carousel-images img {
      width: 300px;
      height: 300px;
    }

    .carousel-button#nextButton {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        right: 5px;
        height: 2rem;
        width: 2rem;
        background-color: rgba(255, 255, 255, 0.7);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        padding: 5px;
        transform: translateY(-50%);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    .carousel-button#nextButton:hover {
        background-color: rgba(255, 255, 255, 0.9);
        opacity: 1;
    }

    .carousel-button#prevButton {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 10px;
        background-color: rgba(255, 255, 255, 0.7);
        height: 2rem;
        width: 2rem;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        padding: 5px;
        transform: translateY(-50%);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    .image-carousel-container:hover .carousel-button#prevButton,
    .image-carousel-container:hover .carousel-button#nextButton {
        background-color: rgba(255, 255, 255, 0.9);
        opacity: 1;
    }

    /* End of classes for the image carousel */

    /* Classes for the heart icon in the top right hand corner */

    .listing-card-save-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        padding: 5px;
        z-index: 1;
        transition: transform 0.2s ease;
    }

    .listing-card-save-button:active {
        transform: scale(0.85);
    }

    .listing-card-save-button svg {
        height: 2rem;
        width: 2rem;
        fill: rgba(0, 0, 0, 0.413);
        stroke: white;
        stroke-width: 1.5;
        color: black;
    }

    /* End of classes for the heart icon in the top right hand corner */

    /* Classes for the little dots at the bottom of the image carousel */

    .nav-indicator-carousel-window {
        position: absolute;
        background-color: transparent;
        bottom: 10px;
        left: 35%;
        z-index: 1;
        width: 30%;
        height: 10%;
        overflow-x: hidden;
    }

    .nav-indicator-carousel-track {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        transition: transform 0.2s ease-in-out;
        /* width: 100%; */
    }

    .nav-indicator-carousel-item {
        display: flex;
        align-self: center;
        width: 8px;
        min-width: 8px;
        max-width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.687);
        margin-left: 5px;
        margin-right: 5px;
        box-sizing: border-box;
        transition: background-color 0.2 ease;
    }

    .nav-indicator-carousel-item.active {
        transform: scale(1.2);
        background-color: rgb(255, 255, 255);
    }

    .nav-indicator-carousel-item.edge {
        transform: scale(0.7);
    }

    .nav-indicator-carousel-item.near-edge {
        transform: scale(0.85);
    }

    /* End of classes for the little dots at the bottom of the image carousel */
</style>