import Vue from 'vue';

import topBanner from '@/components/topBanner'
import menu      from '@/components/menu'
import divider   from '@/components/divider'
import product   from '@/components/product'

export default function () {
    Vue.component('c-top-banner' , topBanner )
    Vue.component('c-menu'       , menu      )
    Vue.component('c-divider'    , divider   )
    Vue.component('c-product'    , product   )
}