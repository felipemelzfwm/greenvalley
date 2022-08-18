<template>
  <div class="home">
    <div class="container">
        <!--img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/"!-->
        <p> olá meu mundo </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import MenuBar from '@/components/MenuBar.vue'

@Component({
  components: {
    HelloWorld,
    MenuBar
  }
})
export default class HomeView extends Vue {
  data () {
    return {
      open: true,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false
    }
  }
}
</script>
