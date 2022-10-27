<template lang="pug">
.container
  .catalogList.row.g-2(v-if="result.length")
    .col-6.col-md-4.col-lg-3(v-for="person in result")
      AprilUserCard(:person="person")
  .text-center(v-else)
    h3 Персонажей нет
  .paginaton
    AprilAdditionalPagination(@changePage="$_april_pages_search_key_toFind" :lengthPages="lengthPages")
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  data(){
    return{
      result: [],
      currentPage: 1,
      lengthPages: 1,
    }
  },
  components: {
    'AprilUserCard': defineAsyncComponent(() => import('@/components/AprilUserCard')),
    'AprilAdditionalPagination': defineAsyncComponent(() => import('@/components/additional/AprilAdditionalPagination'))
  },
  created() {
    if(this.$route.params.key){
      this.$_april_pages_search_key_toFind(this.currentPage)
    } else {
      this.$router.replace('/')
    }
  },
  methods: {
    async $_april_pages_search_key_toFind(number){
      const res = await this.$store.getters['server/requestApi']('GET', 'character/?page=' + number + this.$route.params.key, {})
      if(res){
        this.lengthPages = res.info.pages
        this.result = res.results
      }
    }
  }
}
</script>