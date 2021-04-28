<template>
    <router-view/>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
</template>

<style>
    @import "assets/plugins/global/plugins.bundle.css";
    @import "assets/css/style.bundle.css";


    .colored-toast.swal2-icon-success {
        background-color: #1BC5BD !important;
        border-color: #1BC5BD !important;
    }

    .colored-toast.swal2-icon-error {
        background-color: #F64E60 !important;
        border-color: #F64E60 !important;
    }

    .colored-toast.swal2-icon-warning {
        background-color: #FFA800 !important;
        border-color: #FFA800 !important;
    }

    .colored-toast.swal2-icon-info {
        background-color: #8950FC !important;
        border-color: #8950FC !important;
    }

    .colored-toast.swal2-icon-question {
        background-color: #F3F6F9 !important;
        border-color: #F3F6F9 !important;
        color: #7E8299 !7E8299;
    }

    .colored-toast .swal2-title {
        color: white;
    }

    .colored-toast .swal2-close {
        color: white;
    }

    .colored-toast .swal2-content {
        color: white;
    }
</style>

<script>

import KTApp from '@/assets/js/layout/app'


export default {
    name: 'App',

    mounted() {
        KTApp.init()

        //  [App.vue specific] When App.vue is finish loading finish the progress bar
        this.$Progress.finish();
    },

    beforeCreate() {
        //  [App.vue specific] When App.vue is first loaded start the progress bar
        this.$Progress.start();
        //  hook the progress bar to start before we move router-view
        this.$router.beforeEach((to, from, next) => {
            //  does the page we want to go to have a meta.progress object
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress;
                // parse meta tags
                this.$Progress.parseMeta(meta);
            }
            //  start the progress bar
            this.$Progress.start();
            //  continue to next page
            next();
        });
        //  hook the progress bar to finish after we've finished moving router-view
        this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish();
        });
    },
}
</script>
