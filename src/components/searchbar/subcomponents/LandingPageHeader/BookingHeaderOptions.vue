<template>
    <div class="booking-options-parent-container">
        <div class="booking-options-container">
            <div href="#" class="booking-option" id="1"><span>Anywhere</span></div>
            <div class="booking-option-separator"></div>
            <div href="#" class="booking-option booking-option-no-wrap" id="2"><span>Any week</span></div>
            <div class="booking-option-separator"></div>
            <div href="#" class="booking-option add-guests booking-option-min-width" id="3"><span>Add guests</span></div>
            <div class="svg-container">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
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
    height: 3rem;
    box-sizing: border-box;
    overflow: hidden;
}

.booking-options-container {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    flex-shrink: 1;
    /* flex-wrap: nowrap; */
    margin-left: 30px;
    vertical-align: middle;
    margin-left: 1rem;
    background-color: white;
    border: 1px solid rgb(203, 203, 203);
    box-shadow: 1px 1px 2px rgba(77, 77, 77, 0.2);
    border-radius: 10rem;
    line-height: 3.5;
    padding: 0rem;
    padding-left: 1.5rem;
    padding-right: 0.5rem;
    min-width: 0;
}

div.booking-option {
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


div.svg-container {
  display: flex;
  align-self: center;
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

svg#Capa_1 {
  align-items: center;
  padding: 4px;
  height: 16px;
  width: 16px;
  box-sizing: content-box;
}

svg path {
    display: flex;
    stroke-width: 6px;
    /* transform: scale(0.8); */
    /* fill: white; */
    /* Make the width of the strokes a little larger*/
    /* filter: drop-shadow(0 0 1px white) drop-shadow(0 0 1px white) drop-shadow(0 0 1px white); */

    
}
</style>