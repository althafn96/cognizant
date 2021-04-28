<template>
    <div style="min-height: 100vh" class="d-flex flex-column flex-root">
        <!--begin::Authentication - Sign-in -->
        <div class="d-flex flex-column flex-lg-row flex-column-fluid">
            <!--begin::Aside-->
            <div class="d-flex flex-column flex-lg-row-auto w-xl-900px" style="background-color: #ED2039">
                <!--begin::Illustration-->
                <div class="d-flex flex-row-fluid bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-size-lg-auto bgi-position-y-bottom min-h-100px min-h-lg-350px" :style="{ backgroundImage: `url(${config.loginAside.image})` }"></div>
                <!--end::Illustration-->
            </div>
            <!--begin::Aside-->
            <!--begin::Body-->
            <div class="d-flex flex-column flex-lg-row-fluid py-10">
                <!--begin::Content-->
                <div class="d-flex flex-center flex-column flex-column-fluid">
                    <!--begin::Wrapper-->
                    <div class="w-lg-500px p-10 p-lg-15 mx-auto">

                        <!--begin::Form-->
                        <router-view />
                        <!--end::Form-->
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--end::Content-->
                <!--begin::Footer-->
                <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                    <!--begin::Links-->
                    <div class="d-flex flex-center fw-bold fs-6">
                        <span class="mr-1">2021© {{config.name}}. Engineered by</span>
                        <a href="http://pragicts.com" class="text-primary text-hover-primary px-2" target="_blank">PragICTS</a>
                    </div>
                    <!--end::Links-->
                </div>
                <!--end::Footer-->
            </div>
            <!--end::Body-->
        </div>
        <!--end::Authentication - Sign-in-->
    </div>
</template>

<script>
import config from '@/config/app.config.json'

export default {
    name: 'Auth',

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
