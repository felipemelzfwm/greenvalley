<template>
  <div>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="/home">
                Home
            </b-navbar-item>
            <b-navbar-item href="/home/profile">
                Profile
            </b-navbar-item>
            <b-navbar-item href="/home/client">
                Clients
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button
                      v-show="!isLoggedIn"
                      label="Login"
                      type="is-primary"
                      size="is-default"
                      @click="closeLoginModal = true" />
                    <b-button
                      v-show="isLoggedIn"
                      label="Logout"
                      type="is-primary"
                      size="is-default"
                      @click="logout" />
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <!--MenuBar /!-->
    <LoginModal
        email=test@test.com
        password=123456
        :canCancel="false"
        :close="closeLoginModal"
        @close="closeLoginModal = false"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { MenuBar } from './index.ts'
import LoginModal from './LoginModal.vue'

@Component({
  components: {
    // MenuBar,
    LoginModal
  }
})
export default class NavBar extends Vue {
  data () {
    return {
      closeLoginModal: false
    }
  }

  get isLoggedIn () {
    return this.$store.state.loggedIn
  }

  logout () {
    this.$store.commit('loggedIn', false)
    this.closeLoginModal = false
  }
}
</script>
