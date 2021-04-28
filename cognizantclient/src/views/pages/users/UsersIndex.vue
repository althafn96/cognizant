<template>
    <div style="min-height: 75vh" class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
                <!--begin::Page title-->
                <div class="d-flex align-items-center me-3">
                    <!--begin::Title-->
                    <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">Users</h1>
                    <!--end::Title-->
                    <!--begin::Separator-->
                    <span class="h-20px border-gray-200 border-start mx-4"></span>
                    <!--end::Separator-->
                    <!--begin::Breadcrumb-->
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <router-link :to="{ name: 'Dashboard' }" class="text-muted text-hover-primary">Dashboard</router-link>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">Users</li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-dark">User Listing</li>
                        <!--end::Item-->
                    </ul>
                    <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
                <!--begin::Actions-->
                <div class="d-flex align-items-center py-1">
                    <!--begin::Wrapper-->
                    <!--begin::Button-->
                    <router-link :to="{ name: 'Create User' }" class="btn btn-sm btn-primary" id="kt_toolbar_primary_button">Create User</router-link>
                    <!--end::Button-->
                </div>
                <!--end::Actions-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container">
                <!--begin::Card-->
                <div class="card">
                    <!--begin::Card header-->
                    <div class="card-header border-0 pt-6">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <!--begin::Search-->
                            <div class="d-flex align-items-center position-relative my-1">
                                <!--begin::Svg Icon | path: icons/stockholm/General/Search.svg-->
                                <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                            <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero" />
                                        </g>
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                                <input type="text" data-kt-user-table-filter="search" class="form-control form-control-solid w-250px ps-15" placeholder="Search Users" />
                            </div>
                            <!--end::Search-->
                        </div>
                        <!--begin::Card title-->
                        <!--begin::Card toolbar-->
                        <div class="card-toolbar">
                            <!--begin::Toolbar-->
                            <div ref="kt_customer_toolbar_base" class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                <!--begin::Filter-->
                                <button @click="closeModal" type="button" class="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                                <!--begin::Svg Icon | path: icons/stockholm/Text/Filter.svg-->
                                <span class="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <path d="M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z" fill="#000000" />
                                        </g>
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->Filter</button>
                                <!--begin::Menu 1-->
                                <div class="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                                    <!--begin::Header-->
                                    <div class="px-7 py-5">
                                        <div class="fs-4 text-dark fw-bolder">Filter Options</div>
                                    </div>
                                    <!--end::Header-->
                                    <!--begin::Separator-->
                                    <div class="separator border-gray-200"></div>
                                    <!--end::Separator-->
                                    <!--begin::Content-->
                                    <div class="px-7 py-5">
                                        <!--begin::Input group-->
                                        <div class="mb-10">
                                            <!--begin::Label-->
                                            <label class="form-label fs-5 fw-bold mb-3">Role:</label>
                                            <!--end::Label-->
                                            <!--begin::Input-->
                                            <select class="form-select form-select-solid fw-bolder select2" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="role">
                                                <option></option>
                                                <option value="Super Admin">Super Admin</option>
                                                <option value="Staff">Staff</option>
                                            </select>
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->
                                        <!--begin::Actions-->
                                        <div class="d-flex justify-content-end">
                                            <button type="reset" class="btn btn-white btn-active-light-primary me-2" data-kt-menu-dismiss="true" ref="kt_table_filter_reset" data-kt-user-table-filter="reset">Reset</button>
                                            <button type="submit" class="btn btn-primary" data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                                        </div>
                                        <!--end::Actions-->
                                    </div>
                                    <!--end::Content-->
                                </div>
                                <!--end::Menu 1-->
                                <!--end::Filter-->
                                <!--begin::Export-->
                                <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_users_export_modal">
                                <!--begin::Svg Icon | path: icons/stockholm/Files/Export.svg-->
                                <span class="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <path d="M17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 L18,6 C20.209139,6 22,7.790861 22,10 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,9.99305689 C2,7.7839179 3.790861,5.99305689 6,5.99305689 L7.00000482,5.99305689 C7.55228957,5.99305689 8.00000482,6.44077214 8.00000482,6.99305689 C8.00000482,7.54534164 7.55228957,7.99305689 7.00000482,7.99305689 L6,7.99305689 C4.8954305,7.99305689 4,8.88848739 4,9.99305689 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,10 C20,8.8954305 19.1045695,8 18,8 L17,8 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                            <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 8.000000) scale(1, -1) rotate(-180.000000) translate(-12.000000, -8.000000)" x="11" y="2" width="2" height="12" rx="1" />
                                            <path d="M12,2.58578644 L14.2928932,0.292893219 C14.6834175,-0.0976310729 15.3165825,-0.0976310729 15.7071068,0.292893219 C16.0976311,0.683417511 16.0976311,1.31658249 15.7071068,1.70710678 L12.7071068,4.70710678 C12.3165825,5.09763107 11.6834175,5.09763107 11.2928932,4.70710678 L8.29289322,1.70710678 C7.90236893,1.31658249 7.90236893,0.683417511 8.29289322,0.292893219 C8.68341751,-0.0976310729 9.31658249,-0.0976310729 9.70710678,0.292893219 L12,2.58578644 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 2.500000) scale(1, -1) translate(-12.000000, -2.500000)" />
                                        </g>
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                                Export </button>
                                <!--end::Export-->

                            </div>
                            <!--end::Toolbar-->
                            <!--begin::Group actions-->
                            <div ref="kt_customer_toolbar_selected" class="d-flex justify-content-end align-items-center d-none" data-kt-user-table-toolbar="selected">
                                <div class="fw-bolder me-5">
                                <span ref="kt_customer_toolbar_selected_count" class="me-2" data-kt-user-table-select="selected_count"></span>Selected</div>
                                <a href="#" class="btn btn-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                                <!--begin::Svg Icon | path: icons/stockholm/Navigation/Angle-down.svg-->
                                <span class="svg-icon svg-icon-5 m-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24" />
                                            <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)" />
                                        </g>
                                    </svg>
                                </span>
                                <!--end::Svg Icon--></a>
                                <!--begin::Menu-->
                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <a ref="kt_edit_selected" class="menu-link px-3" data-kt-user-table-select="edit_selected">Edit</a>
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <a ref="kt_delete_selected" class="menu-link px-3" data-kt-user-table-select="delete_selected">Delete</a>
                                    </div>
                                    <!--end::Menu item-->
                                </div>
                                <!--end::Menu-->
                            </div>
                            <!--end::Group actions-->
                        </div>
                        <!--end::Card toolbar-->
                    </div>
                    <!--end::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body pt-0">
                        <!--begin::Table-->
                        <table ref="kt_users_table" class="table align-middle table-row-dashed fs-6 gy-5" id="kt_users_table">
                            <!--begin::Table head-->
                            <thead>
                                <!--begin::Table row-->
                                <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                    <th class="w-10px pe-2">
                                        <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                            <input class="form-check-input" type="checkbox" ref="kt_input_checkbox" data-kt-check="true" data-kt-check-target="#kt_users_table .form-check-input" value="1" />
                                        </div>
                                    </th>
                                    <th class="min-w-125px">User</th>
                                    <th class="min-w-125px">Role</th>
                                    <th class="min-w-125px">Mobile</th>
                                    <th class="min-w-125px">Status</th>
                                </tr>
                                <!--end::Table row-->
                            </thead>
                            <!--end::Table head-->
                            <!--begin::Table body-->
                            <tbody class="fw-bold text-gray-600">
                            </tbody>
                            <!--end::Table body-->
                        </table>
                        <!--end::Table-->
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Card-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
</template>

<style>
    @import '../../../assets/plugins/custom/datatables/datatables.bundle.css';

    table.dataTable.dtr-inline.collapsed>tbody>tr>td.dtr-control:before, table.dataTable.dtr-inline.collapsed>tbody>tr>th.dtr-control:before {
        background-color: #ED2039 !important;
        border: none;
        border-radius: 0;
        box-shadow: 0 0 0.2em #ED2039
    }
</style>

<script>

import '@/assets/plugins/custom/datatables/datatables.bundle'
import Swal from 'sweetalert2'
import moment from 'moment'
import $ from 'jquery'
import { Modal } from 'bootstrap'
import axios from 'axios'
import KTMenu from '@/assets/js/components/menu'

export default {
    name: 'UsersIndex',

    data() {
        return {
            datatable: '',
            filterRole: '',
            table: '',
            exportModal: ''
        }
    },

    mounted() {
        this.table = this.$refs.kt_users_table

        this.initUsersList()
        this.initToggleToolbar()
        this.handleSearchDatatable()
        this.handleFilterDatatable()
        this.handleDeleteRows()
        this.handleResetForm()

        this.exportModal = new Modal(this.$refs.kt_users_export_modal)

        var elements = document.querySelectorAll('[data-kt-menu="true"]');
        if ( elements && elements.length > 0 ) {
            for (var i = 0, len = elements.length; i < len; i++) {
                new KTMenu(elements[i]);
            }
        }
    },

    methods : {
        initUsersList() {
            // Set date data order
            const tableRows = this.table.querySelectorAll('tbody tr');

            // tableRows.forEach(row => {
            //     const dateRow = row.querySelectorAll('td')
            //     const realDate = moment(dateRow[5].innerHTML, "DD MMM YYYY, LT").format(); // select date from 5th column in table
            //     dateRow[5].setAttribute('data-order', realDate);
            // });

            // Init datatable --- more info on datatables: https://datatables.net/manual/
            this.datatable = $(this.table).DataTable({
                'info': false,
                'searchDelay': 500,
                'processing': true,
                'serverSide': true,
                'ajax': {
                    'url': axios.defaults.baseURL + '/api/datatable/users',
                    'xhrFields': {
                        withCredentials: true
                    },
                },
                'order': [],
                'columns': [
                    {data: 'id'},
                    {data: 'name'},
                    {data: 'role'},
                    {data: 'mobile'},
                    {data: 'status'}
                ],
                'columnDefs': [
                    {
                        targets: 0,
                        orderable: false,
                        searchable: false,
                        render: function(data, type, full, meta) {
                            return `
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" ref="kt_input_checkbox" value="`+full.id+`" />
                                </div>
                            `;
                        },
                    },
                    {
                        targets: -1,
                        orderable: false,
                        searchable: false,
                        render: function(data, type, full, meta) {
                            var status = {
                                1: {'title': 'Enabled', 'class': 'badge-light-success'},
                                2: {'title': 'Disabled', 'class': 'badge-light-danger'},
                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<div class="badge ' + status[data].class + '">' + status[data].title + '</div>';
                        },
                    }
                ]
            });

            // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
            this.datatable.on('draw', () => {
                this.initToggleToolbar();
                this.handleDeleteRows();
                this.toggleToolbars();
            });
        },

        // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
        handleSearchDatatable() {
            const filterSearch = document.querySelector('[data-kt-user-table-filter="search"]');
            filterSearch.addEventListener('keyup', (e) => {
                this.datatable.search(e.target.value).draw();
            });
        },

        // Filter Datatable
        handleFilterDatatable() {
             // Select filter options
            this.filterRole = $('[data-kt-user-table-filter="role"]');
            const filterButton = document.querySelector('[data-kt-user-table-filter="filter"]');

            // Filter datatable on submit
            filterButton.addEventListener('click', () => {
                // Get filter values
                const roleValue = this.filterRole.val()

                // Build filter string from filter options
                const filterString = roleValue

                // Filter datatable --- official docs reference: https://datatables.net/reference/api/search()
                this.datatable.column(2).search(roleValue).draw();
            });
        },

        // Delete customer
        handleDeleteRows() {
            // Select all delete buttons
            const deleteButtons = this.table.querySelectorAll('[data-kt-user-table-filter="delete_row"]');

            deleteButtons.forEach(d => {
                // Delete button on click
                d.addEventListener('click', (e) => {
                    e.preventDefault();

                    // Select parent row
                    const parent = e.target.closest('tr');

                    // Get customer name
                    const customerName = parent.querySelectorAll('td')[1].innerText;

                    // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
                    Swal.fire({
                        text: "Are you sure you want to delete " + customerName + "?",
                        icon: "warning",
                        showCancelButton: true,
                        buttonsStyling: false,
                        confirmButtonText: "Yes, delete!",
                        cancelButtonText: "No, cancel",
                        customClass: {
                            confirmButton: "btn fw-bold btn-danger",
                            cancelButton: "btn fw-bold btn-active-light-primary"
                        }
                    }).then((result) => {
                        if (result.value) {
                            Swal.fire({
                                text: "You have deleted " + customerName + "!.",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn fw-bold btn-primary",
                                }
                            }).then(() => {
                                // Remove current row
                                this.datatable.row($(parent)).remove().draw();
                            });
                        } else if (result.dismiss === 'cancel') {
                            Swal.fire({
                                text: customerName + " was not deleted.",
                                icon: "error",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn fw-bold btn-primary",
                                }
                            });
                        }
                    });
                })
            });
        },

        // Reset Filter
        handleResetForm() {
            // Select reset button
            const resetButton = this.$refs.kt_table_filter_reset

            // Reset datatable
            resetButton.addEventListener('click', () => {
                // Reset month
                this.filterRole.val(null).trigger('change');

                // Reset datatable --- official docs reference: https://datatables.net/reference/api/search()
                this.datatable.search('').draw();
            });
        },

        // Init toggle toolbar
        initToggleToolbar() {
            // Toggle selected action toolbar
            // Select all checkboxes
            const checkboxes = this.table.querySelectorAll('[type="checkbox"]')

            // Select elements
            const deleteSelected = document.querySelector('[data-kt-user-table-select="delete_selected"]')
            const editSelected = document.querySelector('[data-kt-user-table-select="edit_selected"]')

            // Toggle delete selected toolbar
            checkboxes.forEach(c => {
                // Checkbox on click event
                c.addEventListener('click', () => {
                    setTimeout(() => {
                        this.toggleToolbars();
                    }, 50);
                });
            });

            // Deleted selected rows
            deleteSelected.addEventListener('click', () => {
                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
                Swal.fire({
                    text: "Are you sure you want to delete selected users?",
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Yes, delete!",
                    cancelButtonText: "No, cancel",
                    customClass: {
                        confirmButton: "btn fw-bold btn-danger",
                        cancelButton: "btn fw-bold btn-active-light-primary"
                    }
                }).then((result) => {
                    if (result.value) {
                        Swal.fire({
                            text: "You have deleted all selected users!.",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        }).then(() => {
                            // Remove all selected users
                            checkboxes.forEach(c => {
                                if (c.checked) {
                                    this.datatable.row($(c.closest('tbody tr'))).remove().draw();
                                }
                            });

                            // Remove header checked box
                            const headerCheckbox = this.table.querySelectorAll('[type="checkbox"]')[0];
                            headerCheckbox.checked = false;
                        });
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: "Selected users was not deleted.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        });
                    }
                });
            });

            // edit selected rows
            editSelected.addEventListener('click', (e) => {
                checkboxes.forEach(c => {
                    if (c.checked) {
                        this.$router.push({ name: 'Edit User', params: { id: c.value } })
                    }
                });
            });
        },

        // Toggle toolbars
        toggleToolbars() {
            // Define variables
            const toolbarBase = this.$refs.kt_customer_toolbar_base
            const toolbarSelected = this.$refs.kt_customer_toolbar_selected
            const selectedCount = this.$refs.kt_customer_toolbar_selected_count

            // Select refreshed checkbox DOM elements
            const allCheckboxes = this.table.querySelectorAll('tbody [type="checkbox"]');

            const editSelected = document.querySelector('[data-kt-user-table-select="edit_selected"]')

            // Detect checkboxes state & count
            let checkedState = false;
            let count = 0;

            // Count checked boxes
            allCheckboxes.forEach(c => {
                if (c.checked) {
                    checkedState = true;
                    count++;
                }
            });

            // Toggle toolbars
            if (checkedState) {
                selectedCount.innerHTML = count;
                toolbarBase.classList.add('d-none');
                toolbarSelected.classList.remove('d-none');

                if(count > 1) {
                    editSelected.classList.add('d-none');
                } else {
                    editSelected.classList.remove('d-none');
                }
            } else {
                toolbarBase.classList.remove('d-none');
                toolbarSelected.classList.add('d-none');
            }
        },

        closeModal() {
            this.exportModal.hide()
        }

    }
}
</script>
