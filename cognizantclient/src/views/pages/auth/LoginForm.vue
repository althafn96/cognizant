<template>
    <form ref="kt_sign_in_form" class="form w-100" novalidate="novalidate" id="kt_sign_in_form" @submit.prevent="login">
        <!--begin::Heading-->>
        <div class="text-center mb-10">
            <a href="#" onclick="return false;">
                <img :src="config.loader.logo" class="h-80px" alt="" />
            </a>
        </div>
        <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">Sign In</h1>
            <!--end::Title-->
        </div>
        <!--begin::Heading-->
        <!--begin::Input group-->
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="form-label fs-6 fw-bolder text-dark">Email</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input autofocus v-model="formData.email" class="form-control form-control-lg form-control-solid" type="text" name="email" autocomplete="off" />
            <!--end::Input-->
        </div>
        <!--end::Input group-->
        <!--begin::Input group-->
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="form-label fs-6 fw-bolder text-dark">Password</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input v-model="formData.password" class="form-control form-control-lg form-control-solid" type="password" name="password" autocomplete="off" />
            <!--end::Input-->
        </div>
        <!--end::Input group-->
        <!--begin::Actions-->
        <div class="text-left">
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack mb-2">
                <!--begin::Submit button-->
                <button ref="kt_sign_in_submit" type="submit" id="kt_sign_in_submit" class="btn btn-lg btn-primary fw-bolder me-3 my-2">
                    <span class="indicator-label">Sign In</span>
                    <span class="indicator-progress">Please wait...
                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                </button>
                <!--end::Submit button-->
                <!--begin::Link-->
                <router-link :to="{ name: 'Forgot Password' }" class="link-primary fs-6 fw-bolder">Forgot Password ?</router-link>
                <!--end::Link-->
            </div>
            <!--end::Wrapper-->

        </div>
        <!--end::Actions-->
    </form>
</template>

<script>
import config from '@/config/app.config.json'
import Swal from 'sweetalert2'

import formValidation from '@/assets/plugins/formvalidation/dist/es6/core/Core';
// FormValidation plugins
import Trigger from '@/assets/plugins/formvalidation/dist/es6/plugins/Trigger';
import Bootstrap5 from '@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap5';

import { mapActions } from 'vuex'

export default {
    name: 'LoginForm',

    data() {
        return {
            config,
            form : '',
            submitBtn : '',
            formData: {
                email: '',
                password: ''
            }
        }
    },

    mounted() {
        this.form = this.$refs.kt_sign_in_form
        this.submitBtn = this.$refs.kt_sign_in_submit

        this.handleForm()
    },

    methods: {
        handleForm(e) {
            // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
            const validator = formValidation(
                this.form,
                {
                    fields: {
                        'email': {
                            validators: {
                                notEmpty: {
                                    message: 'Email address is required'
                                },
                                emailAddress: {
                                    message: 'The value is not a valid email address'
                                }
                            }
                        },
                        'password': {
                            validators: {
                                notEmpty: {
                                    message: 'The password is required'
                                },
                                callback: {
                                    message: 'Please enter valid password',
                                    callback: function(input) {
                                        if (input.value.length > 0) {
                                            return _validatePassword();
                                        }
                                    }
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new Trigger(),
                        bootstrap: new Bootstrap5({
                            rowSelector: '.fv-row',
                            eleInvalidClass: '',
                            eleValidClass: ''
                        })
                    }
                }
            );

            // Handle form submit
            this.submitBtn.addEventListener('click', (e) => {
                // Prevent button default action
                e.preventDefault();

                // Validate form
                validator.validate().then((status) => {
                    if (status == 'Valid') {

                        this.login()

                    } else {
                        // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/

                        this.$swal({
                            icon: 'error',
                            title: 'Sorry, looks like there are some errors detected,<br/>please try again.',
                        })
                    }
                });
            });
        },

        ...mapActions({
            loginAction: 'auth/login'
        }),

        async login() {
            // Show loading indication
            this.submitBtn.setAttribute('data-kt-indicator', 'on');

            // Disable button to avoid multiple click
            this.submitBtn.disabled = true;

            try {
                await this.loginAction(this.formData)

                this.$swal({
                    icon: 'success',
                    title: 'logged in successfully',
                })

                this.$router.replace({ name: 'Dashboard' })
            } catch (e) {
                // Hide loading indication
                this.submitBtn.removeAttribute('data-kt-indicator');

                // Enable button
                this.submitBtn.disabled = false;

                if (e.response.status === 422 || e.response.status === 401) {

                    if(e.response.status === 401) {
                        this.$swal({
                            icon: 'error',
                            title: 'Invalid credentials',
                        })
                    } else {
                        this.$swal({
                            icon: 'error',
                            title: 'Sorry, looks like there are some errors detected,<br/>please try again.',
                        })
                    }
                }
            }
        }
    },
}
</script>
