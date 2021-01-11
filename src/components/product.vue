<template>
    <div class="c-product">
        <div v-if="stock" class="c-product__stock d-flex align-center justify-space-around"><i class="icon-gift"></i></div>
        <div class="c-product__image" :style="`background-image: url('img/products/${image}');`">
        </div>
        <div class="c-product__description d-flex align-center">
            <div class="flex-grow-1">
                <div class="c-product__name mb-1">{{name}}</div>
                <div class="d-flex">
                    <div class="c-product__deliviry d-flex align-center px-2 mr-2"></div>
                    <div class="c-product__rating d-flex align-center mr-2"><i class="icon-star mr-1"></i>{{rating}}</div>
                    <div class="c-product__cost d-flex align-center px-2">
                        <i class="c-product__cost--accent icon-cost mr-1"></i>
                        <span v-if="cost=='low'"><span class="c-product__cost--accent">₽</span><span>₽₽</span></span>
                        <span v-if="cost=='medium'"><span class="c-product__cost--accent">₽₽</span><span>₽</span></span>
                        <span v-if="cost=='hight'"><span class="c-product__cost--accent">₽₽₽</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'name', 'rating', 'deliveryCost', 'deliveryTime', 'cost', 'stock']
}
</script>

<style lang="stylus">
.c-product
    border-radius 7px
    overflow hidden
    box-shadow 0px 4px 40px rgb(230, 230, 230)
    cursor pointer
    transition transform 0.1s linear
    position relative
    &:hover
        transform scale(1.03)
    &__stock
        position absolute 
        top 0
        left 0
        background var(--app-gift)
        border-radius 7px 0 8px 0
        width 58px
        height 38px
        font-size 19px
    &__description
        height 80px
        background #fff
        padding 20px 25px
    &__image
        height 216px
        background-position center center
        background-size cover
    &__name
        font-size 20px
    &__name
        font-weight 700
    &__cost
        color #B0B0B0
        font-size 14px
        &--accent
            color var(--app-black)
    &__deliviry
        width 32px
        height 22px
        display inline-block
        background-size 100%
        background-image url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDMyIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGQ0UwMDAiIGQ9Ik00IDBoMTkuM2E0IDQgMCAwIDEgMy40NTcgMS45ODhsNC4wNzMgN2E0IDQgMCAwIDEgMCA0LjAyNGwtNC4wNzMgN0E0IDQgMCAwIDEgMjMuMyAyMkg0YTQgNCAwIDAgMS00LTRWNGE0IDQgMCAwIDEgNC00eiIvPjxnIHN0cm9rZT0iIzAwMCI+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEyLjg1NyAxMC4xNDNjMCAuNzYtMS4xNDMgMS40NTUtMS4xNDMgMi41NDcgMCAuNjIuNDk5LjgxIDEuMTQzLjgxSDE0YzEuMTI2IDAgNi4wOC00LjU0MiA1LjE0Mi02Ljk5Ii8+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjAuMTg5IDE0LjQxYTEuNzE0IDEuNzE0IDAgMSAxLTMuMTg5Ljg3NWMwLS4xODIuMTMyLS42MTcuMzMzLS43OTgiLz48cGF0aCBkPSJNMTcuMDE1IDUuMDA1YzIuNzc0LjAzNSA0LjgyNSA3LjQ4OSA0LjgyNSA5LjA4MSAwIC4yOTYtLjE4OC41NzQtLjU2My44MzUtLjY3Mi0uNjE0LS44NzMtLjUwOS0xLjE2Mi0uNTA5bS0zLjEuNjk0Yy0uMjgyLjQ2Mi0yLjgyNS4zOTMtMy4yNTIuMzk0bS0xLjA3Ny00Ljg5NWwtNC4yMzUtLjExOGEuNzM2LjczNiAwIDAgMS0uNzM3LS43MzZ2LS4xOTRjMC0uNDI1LjM5LTEuMTA2LjgxNC0xLjA4bDMuOTY5LjU1MWMuMzg4LjAyNS40NzcuMzguNDc3Ljc3IDAgLjQwNy4xMTkuODA3LS4yODguODA3eiIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTcuNTI1IDEzLjcyOWMtLjA5MS4wNS0uMjEyLjE0NC0uMzYuMjgyLS4xNi4xNjItLjI0OC4yNTQtLjI2My4yNzZhMS42OCAxLjY4IDAgMCAwLS4zMy45OTkgMS43MTQgMS43MTQgMCAxIDAgMy40MjggMCIvPjxwYXRoIGQ9Ik04LjI4NiAxMC4xNDNDOC4yODYgMTEuMjg2IDYgMTEuNzkgNiAxMy43OThjMCAwIC40MjguMjkyLjk0Ni41Mm0zLjA2Ni45NzdjLjUzOC4xMjUgMS4wNjcuMjA1IDEuNTQyLjIwNWgzLjIwNU0xNy4wNDMgNUgxNSIvPjwvZz48L2c+PC9zdmc+Cg==')
        background-position center
    &__rating
        height 22px
        padding 2px 10px 2px 4px
        background rgb(252, 224, 0)
        margin-right 10px
        border-radius 100px
        font-size 14px
        color var(--app-black)
        & i
            color var(--app-white)
</style>