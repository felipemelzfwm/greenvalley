<template>
  <div class="home">
    <div class="container">
      <ClientCard v-for="client in clients" :key="client" style="margin-bottom: 10px"></ClientCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ClientCard } from '@/components'

@Component({
  components: {
    ClientCard
  }
})
export default class ClientsView extends Vue {
  data () {
    return {
      clients: [1, 2, 3, 4]
    }
  }
}
</script>
