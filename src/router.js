// This is where we're going to define the information for all of our routes.
// Import VueRouter
import { createWebHistory, createRouter } from 'vue-router';
import LandingPage from './pages/LandingPage.vue';
import PropertyListing from './pages/PropertyListing.vue';
import NotFound from './pages/404NotFound.vue';

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
        },
        {
            path: '/:catchAll(.*)',
            component: NotFound
        }
    ]
});

// Export the router
export default router;