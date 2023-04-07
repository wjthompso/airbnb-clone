<template>

        <div class="wrapper-container-for-box-shadow">
            <div class="booking-options-parent-container" @click="fireExpandHeaderEvent">
                <div class="booking-options-container">
                    <div href="#" class="booking-option" id="1"><span>Anywhere</span></div>
                    <div class="booking-option-separator"></div>
                    <div href="#" class="booking-option booking-option-no-wrap" id="2"><span>Any week</span></div>
                    <div class="booking-option-separator"></div>
                    <div href="#" class="booking-option add-guests booking-option-min-width" id="3"><span>Add guests</span></div>
                    <div class="svg-container-desktop">
                        <svg 
                            viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" 
                            aria-hidden="true" 
                            role="presentation" 
                            focusable="false" 
                            style="display: block; stroke: currentcolor; overflow: visible;">
                                <g fill="none">
                                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                                    </path>
                                </g>
                        </svg>
                    </div>
                </div>
                <div class="svg-container-mobile">
                    <svg 
                        viewBox="0 0 32 32" 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" 
                        role="presentation" 
                        focusable="false" 
                        style="display: block; stroke: currentcolor; overflow: visible;">
                            <g fill="none">
                                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                                </path>
                            </g>
                    </svg>
                </div>
            </div>
        <filters-button v-if="mobileView" @click="toggleFilterModal"></filters-button>
        <filters-modal v-if="filterModal" @close-modal="toggleFilterModal"></filters-modal>
        </div>
</template>

<script>
import FiltersButton from '@/components/ui/FiltersButton.vue'
import FiltersModal from '@/components/ui/FiltersModal.vue'

export default {
    name: 'BookingHeaderOptions',
    emits: ['expand-header'],
    components: {
        FiltersButton,
        FiltersModal
    },
    data() {
        return {
            mobileView: false,
            filterModal: false,
            bookingOptions: [
                {
                    name: 'Anywhere',
                    link: '#'
                },
                {
                    name: 'Any week',
                    link: '#'
                },
                {
                    name: 'Add guests',
                    link: '#'
                }
            ]
        }
    },
    mounted() {
        let mobileView = getComputedStyle(document.documentElement).getPropertyValue('--mobile-view')
            mobileView = parseInt(mobileView);
            if (window.innerWidth <= mobileView) {
                this.mobileView = true
            } else {
                this.mobileView = false
            }
        window.addEventListener('resize', this.checkForMobileView)
    },
    methods: {
        checkForMobileView() {
            // Get the value of the SCSS variable $mobile-view
            let mobileView = getComputedStyle(document.documentElement).getPropertyValue('--mobile-view')
            mobileView = parseInt(mobileView);
            if (window.innerWidth <= mobileView) {
                this.mobileView = true
            } else {
                this.mobileView = false
            }
        },
        toggleFilterModal() {
            this.filterModal = !this.filterModal
        },
        fireExpandHeaderEvent() {
            this.$emit('expand-header')
        }
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkForMobileView)
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

--root {
    --mobile-view: #{$mobile-view};
}

@media only screen and (max-width: $mobile-view) {
    div.wrapper-container-for-box-shadow {
        /* grid-column: 2; */
        position: relative;
        display: flex;
        flex-shrink: 1;
        align-content: flex-end;
        justify-content: flex-end;
        height: 65px;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 1;
        min-width: 0;
        border: 1px solid rgb(203, 203, 203);
        box-shadow: 1px 2px 4px rgba(77, 77, 77, 0.2);
        border-radius: 10rem;
        width: 100%;
    }

    div.svg-container-desktop {
        display: none;
    }
    div.svg-container-mobile {
        position: absolute;
        left: 0;
        top: 0.5rem;
        display: flex;
        align-self: center;
        justify-self: center;
        justify-self: center;
        align-items: center;
        justify-content: center;
        /* background-color: #ff385c; */
        border-radius: 50%;
        color: white;
        /* margin: 10px 0px; */
        margin-left: 0.5rem;
        aspect-ratio: 1/1;
        /* transform: scale(1.3); */
        padding: 0.75rem;
        }

    svg {
        display: flex;
        align-items: center;
        /* padding: 4px; */
        height: 20px;
        width: 20px;
        box-sizing: content-box;
        stroke-width: 4.5;
        }

    svg path {
        display: flex;
        stroke-width: 4px;
        stroke: rgb(70, 70, 70);
        /* transform: scale(0.8); */
        /* fill: white; */
        /* Make the width of the strokes a little larger*/
        /* filter: drop-shadow(0 0 1px white) drop-shadow(0 0 1px white) drop-shadow(0 0 1px white); */    
    }

    div.booking-option-separator {
        display: none;
    }

    div.booking-options-parent-container {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-right: 2rem;
        height: 100%;
        font-size: 0.9rem;
        width: 60%;
        /* border: 1px solid blue; */
    }

    div.booking-options-container {
        /* border: 1px solid red; */
        position: absolute;
        left: 3.5rem;
        top: 0.75rem;
    }

    /* Select the booking-option with id = "1"  */
    div.booking-option:first-child {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.1rem;
    }

    div.booking-option.booking-option-no-wrap,
    div.booking-option.booking-option-no-wrap::after {
        content: " • Add Guests";
        font-size: 0.8rem;
        color: rgb(153, 153, 153);
    }

    div.booking-option.add-guests.booking-option-min-width {
        display: none;
    }

    
}

@media only screen and (min-width: calc(#{$mobile-view} + 1px)) {

    div.wrapper-container-for-box-shadow {
        /* grid-column: 2; */
        position: relative;
        display: flex;
        flex-shrink: 1;
        align-content: center;
        justify-content: center;
        height: 3rem;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 1;
        min-width: 0;
        margin-left: 1.5rem;
        border: 1px solid rgb(203, 203, 203);
        box-shadow: 1px 2px 4px rgba(77, 77, 77, 0.2);
        border-radius: 10rem; 
        /* width: 100%; */
    }

    div.booking-options-parent-container {
        /* grid-column: 2; */
        position: relative;
        display: flex;
        flex-shrink: 1;
        align-content: center;
        align-items: center;
        justify-content: center;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
        /* width: 100%; */
    }

    .booking-options-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* flex-shrink: 1; */
        height: 100%;
        /* flex-wrap: nowrap; */
        margin-left: 30px;
        vertical-align: middle;
        margin-left: 1rem;
        background-color: white;
        /* border: 1px solid rgb(203, 203, 203); */
        /* box-shadow: 1px 1px 2px rgba(77, 77, 77, 0.2); */
        border-radius: 10rem;
        line-height: 3.5;
        padding: 0rem;
        padding-left: 0.2rem;
        padding-right: 0.5rem;
        min-width: 0;
    }

    div.text-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
    }

    div.booking-option {
        align-self: center;
        display: inline;
        margin-right: 10px;
        font-size: 0.9rem;
        font-weight: 500;
        color: #000000;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        text-align: inherit;
    }

    .booking-option-no-wrap {
        /* white-space: nowrap; */
    }

    .booking-option-min-width {
        white-space: nowrap;
        min-width: 0;
        flex-shrink: 1;
    }

    .booking-option-no-wrap span {
        white-space: nowrap;
    }


    div.add-guests {
        color: rgb(136, 136, 136);
        font-weight: 400;
    }

    .booking-option:hover {
    text-decoration: none;
    }

    .booking-option-separator {
    display: flex;
    align-self: center;
    height: 55%;
    width: 1px;
    background-color: rgb(203, 203, 203);
    margin-right: 0.8rem;
    margin-left: 0.4rem;
    font-size: 14px;
    font-weight: 600;
    color: #484848;
    }

    .invisible-one {
        margin: 0;
        opacity: 0;
    }

    div.svg-container-mobile {
        display: none;
    }

    div.svg-container-desktop {
    display: flex;
    align-self: center;
    justify-self: center;
    align-items: center;
    justify-content: center;
    background-color: #ff385c;
    border-radius: 50%;
    color: white;
    margin: 10px 0px;
    margin-left: 0.5rem;
    aspect-ratio: 1/1;
    /* transform: scale(1.3); */
    padding: 0.75rem;
    }

    svg {
    align-items: center;
    /* padding: 4px; */
    box-sizing: content-box;
    height: 12px;
    width: 12px;
    stroke-width: 5.33333;
    }

    svg path {
        display: flex;
        stroke-width: 6px;
        /* transform: scale(0.8); */
        /* fill: white; */
        /* Make the width of the strokes a little larger*/
        /* filter: drop-shadow(0 0 1px white) drop-shadow(0 0 1px white) drop-shadow(0 0 1px white); */    
    }
}

</style>