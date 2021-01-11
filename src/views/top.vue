<template>
<div class="desktop-header">
    <v-container class="d-flex align-center">
        <div class="desktop-header__logo flex-grow-0">
            <img :src="require('../../public/img/logo.svg')" alt="">
        </div>
        <div class="flex-grow-1 text-center">
            <a class="desktop-header__link" href="https://yandex.ru/promo/eda/partners/web_express?utm_medium=site&utm_source=site-eda-d&utm_campaign=top-rest&lp_source=site-eda" target="_blank">
                Ресторанам
            </a>
            <a class="desktop-header__link" href="https://eda.yandex/partner/rabota/?utm_source=site-eda-d&utm_campaign=top-courier" target="_blank">
                Курьерам
            </a>
            <a class="desktop-header__link" href="https://eda.yandex/business/?utm_medium=site&utm_source=site-eda-d&utm_campaign=top-b2b&lp_source=site-eda" target="_blank">
                Компаниям
            </a>
        </div>
        <div class="flex-grow-0">
           
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                     <v-btn v-on="on" text rounded outlined class="desktop-header__button mr-5">Москва</v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="n in 5" :key="n">
                        Москва
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text rounded outlined class="desktop-header__button">Войти</v-btn>
        </div>
    </v-container>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="stylus">
.desktop-header .container
    height 80px
.desktop-header
    height 80px
    border-bottom 1px solid var(--app-border)
    &__logo
        height 44px
    &__logo img
        height 100%
    &__link
        padding 0 20px
        color var(--app-black) !important
        text-decoration none
        cursor pointer
        &:hover
            color var(--app-gray-1) !important
    &__button
        color var(--app-text-black) !important
        border 1px solid var(--app-gray-disable) !important
        height 32px !important
</style>
