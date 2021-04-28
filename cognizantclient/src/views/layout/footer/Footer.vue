<template>
    <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
        <!--begin::Container-->
        <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
            <!--begin::Copyright-->
            <div class="text-dark order-2 order-md-1">
                <span class="text-muted fw-bold me-1">{{ year }}©</span>
                <a href="http://cognizant.pragicts.com" target="_blank" class="text-gray-800 text-hover-primary">Cognizant</a>
            </div>
            <!--end::Copyright-->
            <!--begin::Menu-->
            <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                <li class="menu-item">
                    <a href="#" onclick="return false;" class="menu-link px-2">v1.0</a>
                </li>
                <li class="menu-item">
                    <a href="https://pragicts.com" target="_blank" class="menu-link px-2">Engineered by PragICTS</a>
                </li>
            </ul>
            <!--end::Menu-->
        </div>
        <!--end::Container-->
    </div>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            year : new Date().getFullYear()
        }
    }
}
</script>
