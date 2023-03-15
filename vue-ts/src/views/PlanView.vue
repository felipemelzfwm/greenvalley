<template>
  <div class="home">
    <div class="container">
        <Planning></Planning>
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
export default class PlanView extends Vue {
  data () {
    return {
    }
  }
}
</script>
