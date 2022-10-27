<template lang="pug">
nav.navbar.navbar-dark.bg-dark.navbar-expand-lg
  .container-fluid
    button.navbar-toggler(type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu")
      span.navbar-toggler-icon
    nuxt-link.navbar-brand(to="/") testApril
    .collapse.navbar-collapse#navbarMenu
      ul.navbar-nav.me-auto.mb-2.mb-lg-0
        li.nav-item
          nuxt-link.nav-link(to="/") Главная
      AprilAdditionalSearch
</template>

<script>
  import {defineAsyncComponent} from "vue";

  export default {
    components: {
      'AprilAdditionalSearch': defineAsyncComponent(() => import('@/components/additional/AprilAdditionalSearch'))
    }
  }
</script>