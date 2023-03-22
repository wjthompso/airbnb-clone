<template>
    <button>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><g fill="none" fill-rule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
        <img class="fnky2vc dir dir-ltr" src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" alt="">
        <div class="notification-badge">1</div>
    </button>
</template>

<style scoped>

button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center flex-end;
    border: 1px solid lightgray;
    margin-right: 1rem;
    padding: 0.3rem 0.4rem;
    border-radius: 50px;
    background-color: white;
    transform: scale(1.2);
}

svg {
    transform: scale(0.8);
}

button img {
    margin: 0;
    margin-left: 0.5rem;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
}

button .notification-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(1.3rem, -0.7rem);
    height: 0.7rem;
    width: 0.7rem;
    background-color: red;
    border-radius: 50%;
    border: .8px solid white;
    color: white;
    font-size: 0.5rem;
}
</style>