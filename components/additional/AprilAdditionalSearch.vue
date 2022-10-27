<template lang="pug">
.d-flex
  .dropdown
    .filterSearch.form-select.me-2#dropdownFilter(data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false") Поиск
    .dropdown-menu(aria-labelledby="dropdownFilter")
      .form-group
        label.form-label(for="gender") Имя
        input.form-control(type="text" placeholder="Rick" v-model="filter.name")
      .form-group
        label.form-label(for="species") Вид
        input.form-control#species(type="text" placeholder="Alien" v-model="filter.species")
      .form-group
        label.form-label(for="gender") Пол
        select.form-select#gender(v-model="filter.gender")
          option(value="" selected) Выберите пол
          option(value="male") Мужчина
          option(value="female") Женщина
          option(value="genderless") Бесполый
          option(value="unknown") Неизвестно
      .form-group
        label.form-label(for="status") Статус
        select.form-select#status(v-model="filter.status")
          option(value="" selected) Выберите вид
          option(value="alive") Живой
          option(value="dead") Мёртвый
          option(value="unknown") Неизвестно
      button.btn.btn-primary.mt-2(@click="$_april_additional_search_toFind") Поиск
</template>

<script>

  export default {
    data(){
      return{
        filter: {
          name: '',
          species: '',
          gender: '',
          status: '',
        }
      }
    },
    methods: {
      $_april_additional_search_toFind(){
        let request = ''
        for(let param in this.filter){
          if(this.filter[param]){
            request += `&${param}=${this.filter[param]}`
          }
          this.filter[param] = ''
        }
        this.$router.push('/search/'+request)
      }
    }
  }
</script>

<style lang="scss">
  .filterSearch{
    width: 250px;
  }
  .dropdown-menu{
    padding: 20px;
  }
</style>