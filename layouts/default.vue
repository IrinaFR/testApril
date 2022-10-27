<template lang="pug">
#app
  header
    AprilHeader
  main
    nuxt
</template>

<script>
  import AprilHeader from '@/components/AprilHeader'
  export default {
    components: {
      AprilHeader,
    }
  }
</script>