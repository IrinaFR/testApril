<template lang="pug">
.container
  .personMain
    .personHead
      .personImg
        img(:src="person.image" :alt="person.name" v-if="person.image")
        .noImg(v-else) Нет фото
      .personInfo
        h3 {{person.name}}
          span.smallText.blueColor.ms-2 {{person.species}}
          span.smallText.greyColor.ms-2 {{person.gender}}
        hr
        p.personLocation Локация: {{person.location.name}}
        p.statusLife(:class="person.status") Статус: {{person.status}}
        p.dateStart Первое появление: {{new Date(person.created).toLocaleDateString()}}
        p.placeOrigin Происхождение: {{person.origin.name}}
    hr
    .personEpisodes

</template>

<script>
  export default{
    data(){
      return{
        person: {
          location: {
            name: '',
          },
          origin: {
            name: '',
          },
          status: '',

        }
      }
    },
    created() {
      this.$_april_pages_person_id_loadPerson()
    },
    methods: {
      async $_april_pages_person_id_loadPerson(){
        const res = await this.$store.getters['server/requestApi']('GET', 'character/'+this.$route.params.id, {})
        this.person = res
        console.log(res)
      }
    }
  }
</script>

<style lang="scss">
  hr{
    width: 100%;
  }
  .personHead{
    display: flex;
    .personImg{
      position: relative;
      width: 300px;
      height: 300px;
      overflow: hidden;
      border-radius: 12px;
      margin-right: 20px;
      img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        min-height: 100%;
      }
    }
    .personInfo{
      flex-grow: 1;
    }
  }
  @media(max-width: 768px){
    .personHead{
      display: block;
      .personInfo{
        margin: 20px 0;
      }
    }
  }
</style>