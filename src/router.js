// This is where we're going to define the information for all of our routes.
// Import VueRouter
import { createWebHistory, createRouter } from 'vue-router';
import LandingPage from './pages/LandingPage.vue';
import PropertyListing from './pages/PropertyListing.vue';


// Setup Vue Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage
        },
        {
            path: '/property/:id',
            component: PropertyListing
        }
    ]
});

// Export the router
export default router;