<template>
  <section>
        <!-- Arrow -->
        <b-breadcrumb
          separator="has-arrow-separator"
          size="is-small">
            <b-breadcrumb-item v-for="item in breadCrumbs" :key="item.text" :href="item.to">{{item.text}}
            </b-breadcrumb-item>
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

  get breadCrumbs () {
    if (typeof this.$route.meta.breadCrumb === 'function') {
      return this.$route.meta.breadCrumb.call(this, this.$route)
    }
    return this.$route.meta.breadCrumb
  }
}
</script>
