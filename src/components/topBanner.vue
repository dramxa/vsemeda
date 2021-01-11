<template>
    <div class="c-top-banner">
        <div class="c-top-banner__breadcrumbs">
            <v-breadcrumbs class="px-0" :items="breadcrumbsItems" divider="·"></v-breadcrumbs>
        </div>
        <div class="c-top-banner__title">
            Быстрая доставка еды <br/>
            в Москве
        </div>
        <div class="c-top-banner__address d-flex mt-1">
            <input type="text" class="c-top-banner__address-input flex-grow-1 px-9" placeholder="Укажите адрес доставки">
            <div class="c-top-banner__address-button flex-grow-0 d-flex align-center justify-space-around">Показать</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            breadcrumbsItems:[
                {
                text: 'Арканит.Еда',
                disabled: false,
                href: '#',
                },
                {
                text: 'Москва',
                disabled: false,
                href: '#',
                },
            ],
        }
    }
}
</script>

<style lang="stylus">
.c-top-banner
    position relative
    padding 51px 80px 56px
    background url('/img/main-banner.jpg') center center no-repeat
    background-size cover
    &__title
        font-size 50px
        color var(--app-white)
    &__breadcrumbs .v-breadcrumbs__item, &__breadcrumbs .v-breadcrumbs__divider
        color var(--app-white) !important
        font-size 16px
    &__address-input
        border-top-left-radius 5px
        border-bottom-left-radius 5px
        font-size 16px
        height 56px
        max-width 650px
        background var(--app-white)
    &__address-button
        font-size 16px
        font-weight 700
        border-top-right-radius 5px
        border-bottom-right-radius 5px
        cursor pointer
        height 56px
        width 220px
        background var(--app-yellow)
        &:hover
            background var(--app-dark-yellow)
</style>