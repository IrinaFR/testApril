<template lang="pug">
.card
  .personImg
    img(:src="person.image")
  .card-body
    .card-title {{person.name}}
    div
      span.smallText.blueColor {{person.species}}
      span.smallText.greyColor.ms-2 {{person.gender}}
    p.statusLife(:class="person.status") {{person.status}}
    div
      nuxt-link.btn.btn-outline-dark.w-100(:to="'/person/'+person.id") Перейти
</template>

<script>
  export default {
    props: {
      person: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss">

</style>