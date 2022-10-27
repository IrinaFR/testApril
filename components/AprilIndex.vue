<template lang="pug">
.container
  .catalogList.row.g-2(v-if="characters.length")
    .col-6.col-md-4.col-lg-3(v-for="person in characters")
      AprilUserCard(:person="person")
  .text-center(v-else)
    h3 Персонажей нет
  .paginaton
    AprilAdditionalPagination(@changePage="$_april_index_loadCatalog" :lengthPages="lengthPages")

</template>

<script>
  import { defineAsyncComponent } from 'vue'
  export default {
    data() {
      return {
        currentPage: 1,
        lengthPages: 1,
        characters: [],
      }
    },
    components: {
      'AprilUserCard': defineAsyncComponent(() => import('@/components/AprilUserCard')),
      'AprilAdditionalPagination': defineAsyncComponent(() => import('@/components/additional/AprilAdditionalPagination'))
    },
    mounted() {
      this.$_april_index_loadCatalog(this.currentPage)
    },
    methods: {
      async $_april_index_loadCatalog(number){
        const res = await this.$store.getters['server/requestApi']('GET', 'character/?page=' + number, {})
        if(res){
          this.lengthPages = res.info.pages
          this.characters = res.results
        }
      }
    }
  }
</script>

<style lang="scss">
.paginaton{
  margin: 50px 0;
}
</style>
