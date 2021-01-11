<template>
  <div class="stock">
      <div class="stock__title mb-6">Акции</div>
      <div class="d-flex">
          <c-product v-for="(item, index) in items" v-bind="item" :key="index" :class="{'mr-10' : index!=items.length-1}" class="flex-grow-1" />
      </div>
      <!-- <div>
         <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in items" :key="index">
                <c-product v-bind="item" />
            </swiper-slide>
        </swiper>
      </div> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
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
                    stock: true,
                },
                {
                    name: 'Zotman pizza',
                    image: '3.jpg',
                    rating: '3.7',
                    cost: 'hight',
                    stock: true,
                },
                // {
                //     name: 'Zotman pizza',
                //     image: '1.jpg',
                //     rating: '4.2',
                //     deliveryCost: '0 ₽',
                //     deliveryTime: '20-30 мин',
                //     cost: 'low',
                // },
                // {
                //     name: 'Zotman pizza',
                //     image: '2.jpg',
                //     rating: '4.1',
                //     deliveryCost: '0 ₽',
                //     deliveryTime: '20-30 мин',
                //     cost: 'medium',
                // },
                // {
                //     name: 'Zotman pizza',
                //     image: '3.jpg',
                //     rating: '4.7',
                //     deliveryCost: '0 ₽',
                //     deliveryTime: '20-30 мин',
                //     cost: 'hight',
                // },
            ],
            swiperOptions:{
                breakpoints: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    1264: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    770: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                }
            }
        }
    }
}
</script>
<style lang="stylus">
.stock
    &__title
        font-size 28px
        font-weight 700
</style>