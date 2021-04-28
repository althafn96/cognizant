<template>

    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">

        <Loader v-bind:logo="loaderLogo"></Loader>
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
            <!--begin::Aside-->
            <Aside />
            <!--end::Aside-->
            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <!--begin::Header-->
                <Header />
                <!--end::Header-->
                <!--begin::Content-->
                <router-view />
                <!--end::Content-->
                <!--begin::Footer-->
                <Footer />
                <!--end::Footer-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
        <!--begin::Drawers-->
		<!--begin::Activities drawer-->
        <Activities />
		<!--end::Activities drawer-->
        <!--end::Drawers-->
		<!--begin::Scrolltop-->
        <ScrollTop />
		<!--end::Scrolltop-->
    </div>
    <!--end::Root-->
</template>

<script>
import config from '@/config/app.config.json'

import Aside from '@/views/layout/aside/Aside.vue'
import Header from '@/views/layout/header/Header.vue'
import Footer from '@/views/layout/footer/Footer.vue'
import Loader from "@/views/content/Loader.vue"
import Activities from "@/views/drawers/Activities.vue"
import ScrollTop from "@/views/extras/ScrollTop.vue"

export default {
    name: 'Layout',

    components: {
        Aside,
        Header,
        Footer,
        Loader,
        Activities,
        ScrollTop
    },

    data() {
        return {
            config
        }
    },

    mounted() {
        // Simulate the delay page loading
        setTimeout(() => {
        // Remove page loader after some time
            document.body.classList.remove("page-loading")
        }, 2000);
    },

    computed: {

        loaderLogo() {
            return process.env.BASE_URL + this.config.loader.logo;
        },
    }
}
</script>
