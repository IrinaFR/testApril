<template lang="pug">
.paginationMain
  nav
    ul.pagination
      li.page-item.page-link(@click="$_april_additional_pagination_changePage('back')" :class="{disabled:currentPage===1}") Назад
      li.page-item.page-link(v-for="page in lengthPages" :class="{active:page===currentPage}" @click="$_april_additional_pagination_changePage(page)") {{page}}
      li.page-item.page-link(@click="$_april_additional_pagination_changePage('next')" :class="{disabled:currentPage===lengthPages}") Вперёд
</template>

<script>
export default {
  emits: ['changePage'],
  props: {
    lengthPages: Number,
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    $_april_additional_pagination_changePage(type){
      if(type==='back') this.currentPage--
        else if(type==='next') this.currentPage++
        else this.currentPage = type
      this.$emit('changePage', this.currentPage)
    }
  }
}
</script>
