<template>
  <v-app>
    <v-main>
      <top/>
      <main-content/>
    </v-main>
  </v-app>
</template>

<script>
import top from '@/views/top'
import mainContent from '@/views/mainContent'
export default {
  name: 'App',
  
  components:{
    top,
    mainContent,
  },

  data(){
    return {
      
    }
  },
};
</script>
