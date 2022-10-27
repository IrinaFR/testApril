<template lang="pug">
AprilIndex
</template>

<script>
import Vue, {defineAsyncComponent} from 'vue'
export default Vue.extend({
  name: 'IndexPage',
  components: {

    'AprilIndex': defineAsyncComponent(() => import('@/components/AprilIndex')),
  },
})
</script>
