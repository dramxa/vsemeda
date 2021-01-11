<template>
    <div class="c-menu d-flex align-center">
        <v-btn text rounded v-for="item in menuItems" :key="item.code" class="c-menu__item mr-1" :class="{'c-menu__item--active' : item.code == 'all'}">
            {{item.text}}
        </v-btn>
    </div>
</template>

<script>
export default {
    data(){
        return{
            menuItems:[
                {
                    code: 'all',
                    text: 'Все'
                },
                {
                    code: 'burgers',
                    text: 'Бургеры'
                },
                {
                    code: 'sushi',
                    text: 'Суши'
                },
                {
                    code: 'pizza',
                    text: 'Пицца'
                },
                {
                    code: 'deserts',
                    text: 'Десерты'
                },
                {
                    code: 'georgian',
                    text: 'Грузинская'
                },
                {
                    code: 'kebab',
                    text: 'Шашлык'
                },
                {
                    code: 'health',
                    text: 'Здоровая еда'
                },
                {
                    code: 'wok',
                    text: 'Лапша вок'
                },
                {
                    code: 'breakfast',
                    text: 'Завтраки'
                },
                {
                    code: 'dinner',
                    text: 'Обед'
                }
            ]
        }
    }
}
</script>

<style lang="stylus">
.c-menu
    height 89px
    padding-left 80px
    border-bottom 1px solid var(--app-border)
    &__item
        font-size 14px !important
        color var(--app-black) !important
        height 48px !important
        padding 0 18px !important
        font-weight 400 !important
        &--active
            background var(--app-yellow)
</style>