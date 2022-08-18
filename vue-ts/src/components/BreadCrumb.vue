<template>
  <section>
        <!-- Arrow -->
        <b-breadcrumb
            separator="has-arrow-separator"
            size="is-small"
        >
            <b-breadcrumb-item href="/">Home</b-breadcrumb-item>
            <b-breadcrumb-item href="/documentation">Docs</b-breadcrumb-item>
            <b-breadcrumb-item href="/documentation/breadcrumb" active>Breadcrumb</b-breadcrumb-item>
        </b-breadcrumb>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class BreadCrumb extends Vue {
  data () {
    return {
    }
  }
}
</script>
