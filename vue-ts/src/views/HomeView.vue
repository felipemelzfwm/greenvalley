<template>
  <div class="home">
    <div class="container">
      <h1> Welcome to your next product tool. </h1>
        <!--img alt="Vue logo" src="../assets/logo.png"~-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Planning from '@/components/Planning.vue' // @ is an alias to /src
import MenuBar from '@/components/MenuBar.vue'

@Component({
  components: {
    Planning,
    MenuBar
  }
})
export default class HomeView extends Vue {
  data () {
    return {
    }
  }
}
</script>
