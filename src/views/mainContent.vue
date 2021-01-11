<template>
  <v-container>
      <c-top-banner/>
      <div class="main-content pb-4">
          <c-menu/>
          <div class="search">
              <input type="text" class="search__input" placeholder="Название, кухня или блюдо">
          </div>
          <c-divider/>
          <div class="stock-wrapper">
            <stock/>
          </div>
          <c-divider/>
          <div class="catalog">
              <div class="catalog__title mb-6">Рядом с вами</div>
              <div class="catalog__list d-flex">
                  <div class="catalog__list-item" v-for="(item, index) in restarauntList" :key="index">
                    <c-product v-bind="item"/>
                  </div>
              </div>
                <div class="show-more d-flex align-center justify-space-around">
                    Показать еще
                </div>
          </div>
          
      </div>
  </v-container>
</template>

<script>
import stock from '@/views/stock'
export default {
    components:{
        stock
    },
    data(){
        return{
            restarauntList:[
                {
                    name: 'Zotman pizza',
                    image: '1.jpg',
                    rating: '4.7',
                    cost: 'low',
                    stock: false,
                },
                {
                    name: 'Zotman pizza',
                    image: '2.jpg',
                    rating: '5.0',
                    cost: 'medium',
                    stock: true,
                },
                {
                    name: 'Zotman pizza',
                    image: '3.jpg',
                    rating: '3.7',
                    cost: 'hight',
                    stock: false,
                },
                {
                    name: 'Zotman pizza',
                    image: '1.jpg',
                    rating: '4.7',
                    cost: 'low',
                    stock: true,
                },
                {
                    name: 'Zotman pizza',
                    image: '2.jpg',
                    rating: '5.0',
                    cost: 'medium',
                    stock: false,
                },
                {
                    name: 'Zotman pizza',
                    image: '3.jpg',
                    rating: '3.7',
                    cost: 'hight',
                    stock: false,
                },
                {
                    name: 'Zotman pizza',
                    image: '1.jpg',
                    rating: '4.7',
                    cost: 'low',
                    stock: false,
                },
                {
                    name: 'Zotman pizza',
                    image: '2.jpg',
                    rating: '5.0',
                    cost: 'medium',
                    stock: true,
                },
                {
                    name: 'Zotman pizza',
                    image: '3.jpg',
                    rating: '3.7',
                    cost: 'hight',
                    stock: false,
                },
                {
                    name: 'Zotman pizza',
                    image: '1.jpg',
                    rating: '4.7',
                    cost: 'low',
                    stock: false,
                },
                {
                    name: 'Zotman pizza',
                    image: '2.jpg',
                    rating: '5.0',
                    cost: 'medium',
                    stock: true,
                },
                {
                    name: 'Zotman pizza',
                    image: '3.jpg',
                    rating: '3.7',
                    cost: 'hight',
                    stock: true,
                },
            ]
        }
    }
}
</script>

<style lang="stylus">
.main-content
    border 1px solid var(--app-border)
    border-top none
.search 
    padding 20px 80px
    &__input
        height 46px
        width 100%
        padding 0 35px
        border 1px solid var(--app-border)
        border-radius 3px
.stock-wrapper
    padding 20px 80px 35px
.catalog
    padding 20px 80px
    &__title
        font-size 28px
        font-weight 700
    &__list
        display flex
        flex-flow row wrap
    &__list-item
        flex 1 1 30%
        max-width 33.3%
        margin-right 40px
        margin-bottom 24px
        &:nth-child(3n)
            margin-right 0
.show-more
    height 41px
    background var(--app-yellow)
    border-radius 4px
    font-weight 700
    &:hover
        background var(--app-dark-yellow)
</style>