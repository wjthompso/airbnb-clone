<template>
    <div class="booking-options-parent-container">
        <div class="booking-options-container">
            <a href="#" class="booking-option">Anywhere</a>
            <span class="booking-option-separator">|</span>
            <a href="#" class="booking-option">Any week</a>
            <span class="booking-option-separator">|</span>
            <a href="#" class="booking-option add-guests">Add guests</a>
            <div class="svg-container">
                <svg fill="#000000" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 490.4 490.4" xml:space="preserve">
                    <g>
                        <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
                            s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
                            M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"/>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookingHeaderOptions',
    data() {
        return {
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
    }
}
</script>

<style scoped>

div.booking-options-parent-container {
    display: flex;
    align-content: center;
    justify-content: center;
    /* height: 100%; */
}

.booking-options-container {
  display: inline-flex;
  margin-left: 30px;
  vertical-align: middle;
  margin-left: 1rem;
  background-color: white;
  border: 1px solid rgb(203, 203, 203);
  box-shadow: 2px 2px 4px rgba(77, 77, 77, 0.4);
  border-radius: 10rem;
  line-height: 3.5;
  padding: 0rem 1.5rem;
}

a.booking-option {
  display: inline-block;
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: #484848;
  text-decoration: none;
}

a.add-guests {
    color: rgb(136, 136, 136);
    font-weight: 400;
}

.booking-option:hover {
  text-decoration: none;
}

.booking-option-separator {
  display: inline-block;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #484848;
}


div.svg-container {
  display: flex;
  align-items: center;
  background-color: #ff385c;
  border-radius: 50%;
  color: white;
  margin: 10px 0px;
  padding: 5px;
}

svg#Capa_1 {
  align-items: center;
  padding: 6px;
  height: 14px;
  width: 14px;
  box-sizing: content-box;
}

svg path {
    fill: white;
    /* Make the width of the strokes a little larger*/
    
}
</style>